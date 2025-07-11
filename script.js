document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.mobile-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
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
            }
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Tool data
    const tools = [
        {
            title: 'Image to PDF',
            icon: 'fa-file-pdf',
            description: 'Convert your images to PDF documents easily',
            link: '#'
        },
        {
            title: 'PDF to Word',
            icon: 'fa-file-word',
            description: 'Convert PDF files to editable Word documents',
            link: '#'
        },
        {
            title: 'Age Calculator',
            icon: 'fa-calculator',
            description: 'Calculate your exact age in years, months and days',
            link: '#'
        },
        {
            title: 'Word Counter',
            icon: 'fa-font',
            description: 'Count words, characters and sentences in your text',
            link: '#'
        },
        {
            title: 'Text to Speech',
            icon: 'fa-volume-up',
            description: 'Convert written text into natural sounding speech',
            link: '#'
        },
        {
            title: 'QR Code Generator',
            icon: 'fa-qrcode',
            description: 'Create QR codes for URLs, text, contacts and more',
            link: '#'
        },
        {
            title: 'Image Compressor',
            icon: 'fa-file-image',
            description: 'Reduce image file size without losing quality',
            link: '#'
        },
        {
            title: 'YouTube Thumbnail Downloader',
            icon: 'fa-youtube',
            description: 'Download thumbnails from YouTube videos',
            link: '#'
        },
        {
            title: 'YouTube Video Downloader',
            icon: 'fa-video',
            description: 'Download videos from YouTube in various formats',
            link: '#'
        },
        {
            title: 'Base64 Encoder/Decoder',
            icon: 'fa-code',
            description: 'Encode and decode Base64 strings and files',
            link: '#'
        },
        {
            title: 'RGB to HEX Converter',
            icon: 'fa-palette',
            description: 'Convert RGB color values to HEX and vice versa',
            link: '#'
        },
        {
            title: 'JSON Formatter',
            icon: 'fa-file-code',
            description: 'Format and validate JSON data with syntax highlighting',
            link: '#'
        },
        {
            title: 'Online Notepad',
            icon: 'fa-edit',
            description: 'A simple online text editor with save functionality',
            link: '#'
        },
        {
            title: 'Case Converter',
            icon: 'fa-text-height',
            description: 'Convert text between different case styles',
            link: '#'
        },
        {
            title: 'URL Encoder/Decoder',
            icon: 'fa-link',
            description: 'Encode and decode URLs and URI components',
            link: '#'
        }
    ];
    
    // Render tools
    const toolsContainer = document.getElementById('toolsContainer');
    
    function renderTools(toolsToRender) {
        toolsContainer.innerHTML = '';
        
        toolsToRender.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
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
    
    renderTools(tools);
    
    // Tool search functionality
    const toolSearch = document.getElementById('toolSearch');
    
    toolSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        if (searchTerm === '') {
            toolCards.forEach(card => {
                card.classList.remove('highlight');
            });
            return;
        }
        
        tools.forEach((tool, index) => {
            if (tool.title.toLowerCase().includes(searchTerm) {
                toolCards[index].classList.add('highlight');
            } else {
                toolCards[index].classList.remove('highlight');
            }
        });
    });
    
    // Ripple effect for buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('submit-btn')) {
            const btn = e.target;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
});
