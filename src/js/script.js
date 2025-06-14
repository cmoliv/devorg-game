// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .benefit-item, .step, .stat-item, .section-header'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Counter animation for statistics
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        if (element.textContent.includes('%')) {
            element.textContent = current + '%';
        } else if (element.textContent.includes('+')) {
            element.textContent = current + '+';
        } else if (element.textContent.includes('/')) {
            element.textContent = (current / 10).toFixed(1) + '/5';
        } else {
            element.textContent = current + '+';
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Trigger counter animations when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('%')) {
                    animateCounter(stat, 0, 95, 2000);
                } else if (text.includes('+')) {
                    if (text.includes('30')) {
                        animateCounter(stat, 0, 30, 2000);
                    } else if (text.includes('500')) {
                        animateCounter(stat, 0, 500, 2000);
                    }
                } else if (text.includes('/')) {
                    animateCounter(stat, 0, 48, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        statsObserver.observe(aboutStats);
    }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
});

// Button interactions
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    const demoButtons = document.querySelectorAll('.btn-secondary');
    
    ctaButtons.forEach(button => {
        if (button.textContent.includes('Começar')) {
            button.addEventListener('click', function() {
                showNotification('Em breve! A plataforma estará disponível para cadastro.', 'info');
            });
        }
    });
    
    demoButtons.forEach(button => {
        if (button.textContent.includes('Demonstração') || button.textContent.includes('Demo')) {
            button.addEventListener('click', function() {
                // Scroll to demo section
                const demoSection = document.querySelector('#demo');
                if (demoSection) {
                    const headerOffset = 80;
                    const elementPosition = demoSection.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

// Game Demo Functionality
document.addEventListener('DOMContentLoaded', function() {
    const optionButtons = document.querySelectorAll('.option-btn');
    const nextButton = document.querySelector('.demo-next');
    const resetButton = document.querySelector('.demo-reset');
    const feedbackSection = document.getElementById('demo-feedback');
    
    let selectedOption = null;
    
    // Feedback data for each option
    const feedbackData = {
        A: {
            type: 'good',
            icon: '✅',
            title: 'Boa Escolha!',
            text: 'Entrevistar líderes é uma excelente forma de entender a dinâmica atual da organização e identificar pontos de melhoria.',
            concept: 'Diagnóstico Organizacional - A coleta de informações qualitativas através de entrevistas é fundamental para compreender a cultura e os processos organizacionais.',
            points: 25
        },
        B: {
            type: 'excellent',
            icon: '🎯',
            title: 'Excelente Escolha!',
            text: 'Analisar a estrutura atual é o primeiro passo essencial para qualquer processo de reestruturação organizacional.',
            concept: 'Análise Estrutural - Compreender o organograma e fluxos de trabalho permite identificar gargalos, redundâncias e oportunidades de otimização.',
            points: 30
        },
        C: {
            type: 'poor',
            icon: '⚠️',
            title: 'Cuidado!',
            text: 'Propor mudanças sem análise prévia pode gerar resistência e não resolver os problemas reais da organização.',
            concept: 'Gestão da Mudança - Mudanças organizacionais devem ser precedidas de diagnóstico detalhado e planejamento estratégico.',
            points: 5
        },
        D: {
            type: 'good',
            icon: '📊',
            title: 'Boa Abordagem!',
            text: 'Pesquisas de clima são importantes, mas geralmente são mais eficazes após uma análise estrutural inicial.',
            concept: 'Clima Organizacional - A percepção dos funcionários é crucial, mas deve ser contextualizada com dados estruturais.',
            points: 20
        }
    };
    
    // Handle option selection
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove previous selection
            optionButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Add selection to clicked button
            this.classList.add('selected');
            selectedOption = this.dataset.option;
            
            // Enable next button
            nextButton.disabled = false;
        });
    });
    
    // Handle next button click
    nextButton.addEventListener('click', function() {
        if (selectedOption) {
            showFeedback(selectedOption);
        }
    });
    
    // Handle reset button click
    resetButton.addEventListener('click', function() {
        resetDemo();
    });
    
    function showFeedback(option) {
        const feedback = feedbackData[option];
        
        // Update feedback content
        const feedbackIcon = feedbackSection.querySelector('.feedback-icon');
        const feedbackTitle = feedbackSection.querySelector('.feedback-header h4');
        const feedbackText = feedbackSection.querySelector('.feedback-text');
        const conceptText = feedbackSection.querySelector('.concept-text');
        const pointsEarned = feedbackSection.querySelector('.points-earned');
        
        feedbackIcon.textContent = feedback.icon;
        feedbackTitle.textContent = feedback.title;
        feedbackText.textContent = feedback.text;
        conceptText.textContent = feedback.concept;
        pointsEarned.textContent = `+${feedback.points} XP`;
        
        // Update feedback section styling based on feedback type
        feedbackSection.className = 'demo-feedback';
        if (feedback.type === 'excellent') {
            feedbackSection.style.background = 'var(--success-50)';
            feedbackSection.style.borderColor = 'var(--success-200)';
        } else if (feedback.type === 'good') {
            feedbackSection.style.background = 'var(--primary-50)';
            feedbackSection.style.borderColor = 'var(--primary-200)';
        } else if (feedback.type === 'poor') {
            feedbackSection.style.background = 'var(--warning-50)';
            feedbackSection.style.borderColor = 'var(--warning-200)';
        }
        
        // Show feedback section
        feedbackSection.style.display = 'block';
        
        // Animate progress bar (simulate XP gain)
        const progressFill = document.querySelector('.progress-fill');
        const currentWidth = parseInt(progressFill.style.width) || 65;
        const newWidth = Math.min(currentWidth + (feedback.points / 10), 100);
        progressFill.style.width = newWidth + '%';
        
        // Update XP text
        const xpText = document.querySelector('.progress-item span:last-child');
        const currentXP = parseInt(xpText.textContent.split(' / ')[0]) || 1250;
        const newXP = currentXP + feedback.points;
        xpText.textContent = `${newXP} / 2,000`;
        
        // Disable options and next button
        optionButtons.forEach(btn => btn.disabled = true);
        nextButton.disabled = true;
        nextButton.textContent = 'Cenário Concluído ✓';
    }
    
    function resetDemo() {
        // Reset option selection
        optionButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.disabled = false;
        });
        
        // Reset buttons
        nextButton.disabled = true;
        nextButton.textContent = 'Próximo Passo →';
        
        // Hide feedback
        feedbackSection.style.display = 'none';
        
        // Reset progress
        const progressFill = document.querySelector('.progress-fill');
        progressFill.style.width = '65%';
        
        const xpText = document.querySelector('.progress-item span:last-child');
        xpText.textContent = '1,250 / 2,000';
        
        selectedOption = null;
        
        showNotification('Demo reiniciada! Tente uma abordagem diferente.', 'info');
    }
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        border-left: 4px solid ${getNotificationColor(type)};
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✓';
        case 'warning': return '⚠';
        case 'error': return '✗';
        default: return 'ℹ';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#22c55e';
        case 'warning': return '#f59e0b';
        case 'error': return '#ef4444';
        default: return '#3b82f6';
    }
}

// Add CSS for notifications
const notificationCSS = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-weight: bold;
        font-size: 16px;
    }
    
    .notification-message {
        flex: 1;
        font-size: 14px;
        color: #374151;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: #374151;
    }
`;

// Add notification styles to document
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = notificationCSS;
    document.head.appendChild(style);
});

// Parallax effect for floating cards
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .benefit-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
    }
});

// Performance optimization: Lazy load animations
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.floating-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        lazyObserver.observe(el);
    });
});