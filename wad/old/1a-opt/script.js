// Toggle Sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main-content').classList.toggle('expanded');
});

// Dark Mode Toggle (placeholder - would need more implementation for full dark mode)
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    this.querySelector('i').classList.toggle('fa-moon');
    this.querySelector('i').classList.toggle('fa-sun');
    // Add actual dark mode implementation here
});

// Responsive behavior for sidebar on small screens
function handleResponsive() {
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.add('collapsed');
        document.getElementById('main-content').classList.remove('expanded');
    } else {
        document.getElementById('sidebar').classList.remove('collapsed');
        document.getElementById('main-content').classList.remove('expanded');
    }
}

// Initial call and event listener for resize
handleResponsive();
window.addEventListener('resize', handleResponsive);