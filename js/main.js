// ===========================
// Mobile Navigation Toggle
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===========================
    // Publications Filter & Pagination
    // ===========================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');
    const itemsPerPage = 6;
    let currentPage = 1;
    let currentFilter = 'all';

    // Filter functionality
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                currentFilter = this.getAttribute('data-filter');
                currentPage = 1; // Reset to first page
                
                // Apply filter and pagination
                filterAndPaginate();
            });
        });
    }

    function filterAndPaginate() {
        let visibleItems = [];
        
        // Filter publications
        publicationItems.forEach(item => {
            const category = item.getAttribute('data-category');
            const status = item.getAttribute('data-status');
            
            let shouldShow = false;
            
            if (currentFilter === 'all') {
                shouldShow = true;
            } else if (currentFilter === 'published' || currentFilter === 'under-review') {
                shouldShow = status === currentFilter;
            } else {
                shouldShow = category === currentFilter;
            }
            
            if (shouldShow) {
                visibleItems.push(item);
            }
        });
        
        // Hide all items first
        publicationItems.forEach(item => item.classList.add('hidden'));
        
        // Calculate pagination
        const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        // Show items for current page
        visibleItems.slice(startIndex, endIndex).forEach(item => {
            item.classList.remove('hidden');
            item.style.animation = 'fadeIn 0.5s';
        });
        
        // Update pagination
        updatePagination(totalPages, visibleItems.length);
    }

    function updatePagination(totalPages, totalItems) {
        const pagination = document.getElementById('pagination');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const pageNumbers = document.getElementById('pageNumbers');
        
        if (!pagination) return;
        
        // Hide pagination if only one page or no items
        if (totalPages <= 1) {
            pagination.style.display = 'none';
            return;
        }
        
        pagination.style.display = 'flex';
        
        // Update prev/next buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        
        // Generate page numbers
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-number';
            pageBtn.textContent = i;
            if (i === currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                filterAndPaginate();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageBtn);
        }
        
        // Prev/Next button handlers
        prevBtn.onclick = () => {
            if (currentPage > 1) {
                currentPage--;
                filterAndPaginate();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        
        nextBtn.onclick = () => {
            if (currentPage < totalPages) {
                currentPage++;
                filterAndPaginate();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
    }
    
    // Initialize on page load
    if (publicationItems.length > 0) {
        filterAndPaginate();
    }

    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // Intersection Observer for Fade-in Animation
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items, project cards, and other elements
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .overview-card, .certification-card, .publication-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===========================
    // Copy to Clipboard for Code Snippets (if needed)
    // ===========================
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = this.parentElement.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy';
                    }, 2000);
                });
            }
        });
    });

    // ===========================
    // Active Navigation Highlight
    // ===========================
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPath = new URL(link.href).pathname;
            
            if (currentPath.endsWith(linkPath) || 
                (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
                link.classList.add('active');
            }
        });
    }

    setActiveNavLink();
});

// ===========================
// Add CSS for fade-in animation
// ===========================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .hidden {
        display: none !important;
    }
`;
document.head.appendChild(style);