/* Accessibility Widget JavaScript - Updated */
(function(){
  // Toggle vertical panel visibility
  window.togglePanel = function(){
    const panel = document.getElementById('accPanel');
    if(panel) panel.classList.toggle('active');
  };

  // Toggle font size popover (inside font button)
  window.toggleFontPopover = function(e){
    e.stopPropagation();
    const pop = document.getElementById('fontPopover');
    if(pop) pop.classList.toggle('active');
  };

  // Click anywhere else closes the popover
  document.addEventListener('click', function(){
    const pop = document.getElementById('fontPopover');
    if(pop) pop.classList.remove('active');
  });

  // Open modal (font or contrast)
  window.openModal = function(id){
    const modal = document.getElementById(id);
    if(modal) modal.classList.add('active');
    // Ensure popover is hidden when modal opens
    const pop = document.getElementById('fontPopover');
    if(pop) pop.classList.remove('active');
  };

  // Close modal – either by clicking overlay or calling close
  window.closeModal = function(e, id){
    const modal = document.getElementById(id);
    if(!modal) return;
    if(!e || (e.target && e.target.classList.contains('modal-overlay'))){
      modal.classList.remove('active');
    }
  };
})();