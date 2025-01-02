document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (currentPage === href) {
            link.classList.add('active');
        }
    });
});