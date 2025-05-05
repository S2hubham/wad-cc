// Desktop-only sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Only enable toggle functionality on desktop
    if (window.innerWidth >= 992) {
      const toggleBtn = document.querySelector('.toggle-btn');
      const sidebar = document.getElementById('sidebar');
      
      // Initialize Bootstrap's offcanvas component
      const offcanvas = new bootstrap.Offcanvas(sidebar);
      
      toggleBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('show')) {
          offcanvas.hide();
        } else {
          offcanvas.show();
        }
      });
    }
  });
  