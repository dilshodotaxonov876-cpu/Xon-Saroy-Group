$port = 8080
$root = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Path }
if (-not $root) { $root = "C:\Users\delux\Documents\xon saroy group" }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "XON SAROY server running at http://localhost:$port/"
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $relPath = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($relPath)) {
                $relPath = "index.html"
            }
            # Remove query strings if any in relPath
            if ($relPath.Contains('?')) {
                $relPath = $relPath.Split('?')[0]
            }
            $filePath = Join-Path $root $relPath

            # CORS & No-Cache headers
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")

            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html; charset=utf-8" }
                    ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                    ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                    ".json" { $response.ContentType = "application/json" }
                    ".svg"  { $response.ContentType = "image/svg+xml" }
                    ".png"  { $response.ContentType = "image/png" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                $response.ContentLength64 = $bytes.Length
                if ($request.HttpMethod -ne 'HEAD') {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.ContentLength64 = $errBytes.Length
                if ($request.HttpMethod -ne 'HEAD') {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
            }
            $response.OutputStream.Close()
        } catch {
            # Client disconnected or abort, continue listening safely
        }
    }
} catch {
    Write-Error $_
} finally {
    try { $listener.Stop() } catch {}
}
