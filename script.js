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
        {
            title: 'PDF to Word',
            icon: 'fa-file-word',
            description: 'Convert PDF files to editable Word documents',
            link: 'pdf-to-word.html'
        },
        {
            title: 'Age Calculator',
            icon: 'fa-calculator',
            description: 'Calculate exact age from birth date',
            link: 'age-calculator.html'
        },
        {
            title: 'Word Counter',
            icon: 'fa-font',
            description: 'Count words, characters, and sentences in text',
            link: 'word-counter.html'
        },
        {
            title: 'Text to Speech',
            icon: 'fa-volume-up',
            description: 'Convert text to natural sounding speech',
            link: 'text-to-speech.html'
        },
        {
            title: 'QR Code Generator',
            icon: 'fa-qrcode',
            description: 'Create QR codes for URLs, text, and more',
            link: 'qr-generator.html'
        },
        {
            title: 'Image Compressor',
            icon: 'fa-file-image',
            description: 'Reduce image size without losing quality',
            link: 'image-compressor.html'
        },
        {
            title: 'YouTube Thumbnail Downloader',
            icon: 'fa-youtube',
            description: 'Download thumbnails from YouTube videos',
            link: 'yt-thumbnail.html'
        },
        {
            title: 'YouTube Video Downloader',
            icon: 'fa-video',
            description: 'Download videos from YouTube in HD quality',
            link: 'yt-downloader.html'
        },
        {
            title: 'Base64 Encoder/Decoder',
            icon: 'fa-code',
            description: 'Encode and decode Base64 strings and files',
            link: 'base64-converter.html'
        },
        {
            title: 'RGB to HEX Converter',
            icon: 'fa-palette',
            description: 'Convert between RGB and HEX color codes',
            link: 'rgb-hex.html'
        },
        {
            title: 'JSON Formatter',
            icon: 'fa-file-code',
            description: 'Format and validate JSON data',
            link: 'json-formatter.html'
        },
        {
            title: 'Online Notepad',
            icon: 'fa-edit',
            description: 'Simple text editor with save functionality',
            link: 'notepad.html'
        },
        {
            title: 'Case Converter',
            icon: 'fa-text-height',
            description: 'Convert text between different case styles',
            link: 'case-converter.html'
        },
        {
            title: 'URL Encoder/Decoder',
            icon: 'fa-link',
            description: 'Encode and decode URL components',
            link: 'url-converter.html'
        }
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
    
    // Search functionality
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
            if (tool.title.toLowerCase().includes(searchTerm)) {
                toolCards[index].classList.add('highlight');
            } else {
                toolCards[index].classList.remove('highlight');
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
