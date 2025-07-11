document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mobileMenuBtn.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Tool data
    const tools = [
        {
            title: 'Image to PDF',
            icon: 'fa-file-pdf',
            description: 'Convert multiple images to high quality PDF documents',
            link: 'image-to-pdf.html'
        },
        // ... (rest of your tool data remains the same)
    ];
    
    // Render tools with staggered animation
    const toolsContainer = document.getElementById('toolsContainer');
    
    function renderTools(toolsToRender) {
        toolsContainer.innerHTML = '';
        
        toolsToRender.forEach((tool, index) => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.style.animationDelay = `${index * 0.1}s`;
            toolCard.innerHTML = `
                <div class="tool-icon">
                    <i class="fas ${tool.icon}"></i>
                </div>
                <h3 class="tool-title">${tool.title}</h3>
                <p class="tool-desc">${tool.description}</p>
                <a href="${tool.link}" class="use-tool-btn">Use Tool</a>
            `;
            toolsContainer.appendChild(toolCard);
        });
    }
    
    // Initial render
    renderTools(tools);
    
    // Fixed Search functionality
    const toolSearch = document.getElementById('toolSearch');
    
    toolSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const title = card.querySelector('.tool-title').textContent.toLowerCase();
            if (searchTerm === '') {
                card.classList.remove('highlight');
                card.style.display = 'block';
            } else if (title.includes(searchTerm)) {
                card.classList.add('highlight');
                card.style.display = 'block';
            } else {
                card.classList.remove('highlight');
                card.style.display = 'none';
            }
        });
    });
    
    // Header shadow on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.animated-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });
});
