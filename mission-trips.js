/**
 * Mission Trips Accordion Functionality
 * York Alliance Family of Churches
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize accordion
    initAccordion();
    
    // Add smooth scroll behavior
    addSmoothScroll();
    
    // Add keyboard navigation
    addKeyboardNavigation();
});

/**
 * Initialize accordion functionality
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            closeAllAccordions();
            
            // Toggle current accordion
            if (!isActive) {
                openAccordion(accordionItem);
            }
        });
    });
}

/**
 * Open a specific accordion item
 * @param {HTMLElement} accordionItem - The accordion item to open
 */
function openAccordion(accordionItem) {
    accordionItem.classList.add('active');
    const header = accordionItem.querySelector('.accordion-header');
    header.setAttribute('aria-expanded', 'true');
    
    // Smooth scroll to the opened accordion
    setTimeout(() => {
        const headerTop = accordionItem.getBoundingClientRect().top + window.pageYOffset;
        const offset = 20; // Offset from top
        window.scrollTo({
            top: headerTop - offset,
            behavior: 'smooth'
        });
    }, 100);
}

/**
 * Close a specific accordion item
 * @param {HTMLElement} accordionItem - The accordion item to close
 */
function closeAccordion(accordionItem) {
    accordionItem.classList.remove('active');
    const header = accordionItem.querySelector('.accordion-header');
    header.setAttribute('aria-expanded', 'false');
}

/**
 * Close all accordion items
 */
function closeAllAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        closeAccordion(item);
    });
}

/**
 * Add smooth scroll behavior for anchor links
 */
function addSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Add keyboard navigation for accordion
 */
function addKeyboardNavigation() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach((header, index) => {
        // Set ARIA attributes
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `accordion-content-${index}`);
        
        const content = header.nextElementSibling;
        content.setAttribute('id', `accordion-content-${index}`);
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', `accordion-header-${index}`);
        
        header.setAttribute('id', `accordion-header-${index}`);
        
        // Add keyboard event listeners
        header.addEventListener('keydown', function(e) {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            switch(e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    this.click();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    focusNextAccordion(index);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    focusPreviousAccordion(index);
                    break;
                case 'Home':
                    e.preventDefault();
                    accordionHeaders[0].focus();
                    break;
                case 'End':
                    e.preventDefault();
                    accordionHeaders[accordionHeaders.length - 1].focus();
                    break;
            }
        });
    });
}

/**
 * Focus on the next accordion header
 * @param {number} currentIndex - Current accordion index
 */
function focusNextAccordion(currentIndex) {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const nextIndex = (currentIndex + 1) % accordionHeaders.length;
    accordionHeaders[nextIndex].focus();
}

/**
 * Focus on the previous accordion header
 * @param {number} currentIndex - Current accordion index
 */
function focusPreviousAccordion(currentIndex) {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const previousIndex = currentIndex === 0 ? accordionHeaders.length - 1 : currentIndex - 1;
    accordionHeaders[previousIndex].focus();
}

/**
 * Optional: Add URL hash support for direct linking to trips
 */
function addHashSupport() {
    // Open accordion if hash matches
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        const targetAccordion = document.getElementById(hashId);
        if (targetAccordion && targetAccordion.classList.contains('accordion-item')) {
            openAccordion(targetAccordion);
        }
    }
    
    // Update hash when accordion opens
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            if (accordionItem.id) {
                history.pushState(null, null, `#${accordionItem.id}`);
            }
        });
    });
}

// Optional: Uncomment to enable hash support
// addHashSupport();
