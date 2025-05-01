document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevNav = document.getElementById('prev-nav');
    const nextNav = document.getElementById('next-nav');
    const slideImage = document.getElementById('slide-image');
    const slideDescription = document.getElementById('slide-description');
    const currentSlideEl = document.getElementById('current-slide');
    const totalSlidesEl = document.getElementById('total-slides');
    const progressBar = document.getElementById('progress-bar');
    const slideContent = document.getElementById('slide-content');
    const presentationContainer = document.querySelector('.presentation-container');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const loader = document.querySelector('.loader');
    const imageContainer = document.querySelector('.image-container');
    const slideSelectorBtn = document.getElementById('slide-selector-btn');
    const slideSelectorDropdown = document.querySelector('.slide-selector-dropdown');
    const slideSelectorList = document.getElementById('slide-selector-list');
    const slideSearch = document.getElementById('slide-search');

    // Slide data with image paths and descriptions
    const slides = [
        {
            type: 'cover',
            title: 'GIS and Buffering',
            subtitle: 'Geographic Information Systems Analysis',
            description: ''
        },
        {
            type: 'team',
            teamName: 'GIS Research Team',
            members: [
                { name: 'Saif Ashraf' },
                { name: 'Ahmed Mohammed' },
                { name: 'Abdelrahman Shams' },
                { name: 'Ismail Tarek' },
                { name: 'Zyad Hossam' }
            ],
            description: ''
        },
        {
            image: 'New folder/Screenshot (443).png',
            description: 'Open new project in ArcGis Pro Select Map.',
            title: 'Introduction to GIS'
        },
        {
            image: 'New folder/Screenshot (444).png',
            description: 'Choose the location of the project.',
            title: 'Buffering Basics'
        },
        {
            image: 'New folder/Screenshot (445).png',
            description: 'It will open a new project with a map.',
            title: 'Environmental Applications'
        },
        {
            image: 'New folder/Screenshot (446).png',
            description: 'Add a new feature layer From add data button.',
            title: 'Buffer Types'
        },
        {
            image: 'New folder/Screenshot (447).png',
            description: 'Select the point feature class.',
            title: 'Performance Metrics'
        },
        {
            image: 'New folder/Screenshot (448).png',
            description: 'Now its added to the map.',
            title: 'Implementation Architecture'
        },
        {
            image: 'New folder/Screenshot (449) - Copy.png',
            description: 'We click on analysis tab and select tools.',
            title: 'Comparative Analysis'
        },
        {
            image: 'New folder/Screenshot (450).png',
            description: 'We search for xy to line tool.',
            title: 'Resource Planning'
        },
        {
            image: 'New folder/Screenshot (451).png',
            description: 'we will enter the data.',
            title: 'Project Timeline'
        },
        {
            image: 'New folder/Screenshot (452).png',
            description: 'Data will be added to the map.',
            title: 'Risk Assessment'
        },
        {
            image: 'New folder/Screenshot (453).png',
            description: 'Data is added to the map.',
            title: 'System Integration'
        },
        {
            image: 'New folder/Screenshot (454).png',
            description: 'Lets add world cities to the map.',
            title: 'User Feedback'
        },
        {
            image: 'New folder/Screenshot (455).png',
            description: 'We added world cities to the map by copy path.',
            title: 'Technical Specifications'
        },
        {
            image: 'New folder/Screenshot (456).png',
            description: 'lets open the attribute table.',
            title: 'Security Considerations'
        },
        
        {
            image: 'New folder/Screenshot (458).png',
            description: 'click select by attribute.',
            title: 'Scalability'
        },
        {
            image: 'New folder/Screenshot (459).png',
            description: 'It will open a new window.',
            title: 'Software Comparison'
        },
        
        {
            image: 'New folder/Screenshot (462).png',
            description: 'We select the earth quakes where its power is equal or more than 5.',
            title: 'Cost Analysis'
        },
        {
            image: 'New folder/Screenshot (463).png',
            description: 'Here is SQL for it.',
            title: 'Distribution Channels'
        },
        
        {
            image: 'New folder/Screenshot (466).png',
            description: 'Now Its added to the map.',
            title: 'ROI Analysis'
        },
        {
            image: 'New folder/Screenshot (467).png',
            description: 'Making another layer for the earth quakes.',
            title: 'Long-term Vision'
        },
        
        {
            image: 'New folder/Screenshot (469).png',
            description: 'deselect the original earth quakes.',
            title: 'Quality Assurance'
        },
       
        {
            image: 'New folder/Screenshot (471).png',
            description: 'Search for the the buffer tool.',
            title: 'Maintenance & Support'
        },
        {
            image: 'New folder/Screenshot (472).png',
            description: 'Adding the buffer distance.',
            title: 'Training Resources'
        },
        
        {
            image: 'New folder/Screenshot (474).png',
            description: 'the buffer is added to the map.',
            title: 'Performance Tracking'
        },
        
        {
            image: 'New folder/Screenshot (476).png',
            description: 'Change the name from properties to zone of influence.',
            title: 'Team Structure'
        },
        {
            image: 'New folder/Screenshot (477).png',
            description: 'The name is changed, and we will select Select by location.',
            title: 'Communication Plans'
        },
        {
            image: 'New folder/Screenshot (478).png',
            description: 'Adding data to the map.',
            title: 'Regulatory Compliance'
        },
        {
            image: 'New folder/Screenshot (479).png',
            description: 'Data is added to the map.',
            title: 'International Applications'
        },
        {
            image: 'New folder/Screenshot (481).png',
            description: 'Open the attribute table.',
            title: 'Environmental Impact'
        },
        {
            image: 'New folder/Screenshot (482).png',
            description: 'Select the the cities with more than 5 million people.',
            title: 'Social Applications'
        },
        {
            image: 'New folder/Screenshot (483).png',
            description: 'Done.',
            title: 'Future Innovations'
        },
        {
            image: 'New folder/Screenshot (484).png',
            description: 'Change the name from properties to Big cities with Big earth quakes.',
            title: 'Technology Stack'
        },
        {
            image: 'New folder/Screenshot (485).png',
            description: 'Done.',
            title: 'Research Summary'
        },
        {
            type: 'thanks',
            title: 'Thank You',
            subtitle: 'Questions & Discussion',
            description: ''
        }
    ];

    // Set total slides count
    totalSlidesEl.textContent = slides.length;

    // Current slide index
    let currentSlide = 0;
    let isAnimating = false;
    let isFullscreen = false;
    let isPresentationMode = false;
    let idleTimer;
    let isSlideSelectorOpen = false;

    // Populate slide selector
    function populateSlideSelector(filter = '') {
        slideSelectorList.innerHTML = '';
        
        slides.forEach((slide, index) => {
            // Get slide title or default based on type
            let slideTitle = '';
            let slideType = '';
            
            if (slide.type === 'cover') {
                slideTitle = slide.title;
                slideType = 'cover';
            } else if (slide.type === 'team') {
                slideTitle = slide.teamName;
                slideType = 'team';
            } else if (slide.type === 'thanks') {
                slideTitle = slide.title;
                slideType = 'thanks';
            } else if (slide.title) {
                slideTitle = slide.title;
            } else {
                slideTitle = `Slide ${index + 1}`;
            }
            
            // Filter based on search input
            if (filter && !slideTitle.toLowerCase().includes(filter.toLowerCase())) {
                return;
            }
            
            // Create slide item element
            const slideItem = document.createElement('div');
            slideItem.classList.add('slide-item');
            if (index === currentSlide) {
                slideItem.classList.add('active');
            }
            
            let typeHTML = '';
            if (slideType) {
                typeHTML = `<span class="slide-item-type ${slideType}">${slideType}</span>`;
            }
            
            slideItem.innerHTML = `
                <div class="slide-item-number">${index + 1}</div>
                <div class="slide-item-title">${typeHTML}${slideTitle}</div>
            `;
            
            slideItem.addEventListener('click', () => {
                goToSlide(index);
                toggleSlideSelector();
            });
            
            slideSelectorList.appendChild(slideItem);
        });
    }

    // Toggle slide selector dropdown
    function toggleSlideSelector() {
        if (isSlideSelectorOpen) {
            slideSelectorDropdown.classList.remove('active');
            isSlideSelectorOpen = false;
        } else {
            populateSlideSelector();
            slideSelectorDropdown.classList.add('active');
            slideSearch.focus();
            isSlideSelectorOpen = true;
        }
        resetIdleTimer();
    }

    // Go to a specific slide
    function goToSlide(index) {
        if (index >= 0 && index < slides.length && !isAnimating) {
            const direction = index > currentSlide ? 'right' : 'left';
            currentSlide = index;
            updateSlide(direction);
        }
    }

    // Preload images for smoother transitions
    function preloadImages() {
        presentationContainer.classList.add('loading');
        loader.style.display = 'block';
        
        let loadedImages = 0;
        let totalImages = 0;
        
        // Count how many slides have images
        slides.forEach(slide => {
            if (slide.image) totalImages++;
        });
        
        if (totalImages === 0) {
            // No images to preload
            setTimeout(() => {
                presentationContainer.classList.remove('loading');
                loader.style.display = 'none';
                updateProgressBar();
            }, 500);
            return;
        }
        
        // Preload actual images
        slides.forEach(slide => {
            if (slide.image) {
                const img = new Image();
                img.onload = function() {
                    loadedImages++;
                    const progress = Math.min(loadedImages / totalImages * 100, 100);
                    progressBar.style.width = `${progress}%`;
                    
                    if (loadedImages === totalImages) {
                        // All images loaded
                        setTimeout(() => {
                            presentationContainer.classList.remove('loading');
                            loader.style.display = 'none';
                            updateProgressBar(); // Reset progress bar to show current slide
                        }, 500);
                    }
                };
                img.onerror = function() {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        // All attempts done
                        setTimeout(() => {
                            presentationContainer.classList.remove('loading');
                            loader.style.display = 'none';
                            updateProgressBar(); // Reset progress bar to show current slide
                        }, 500);
                    }
                };
                img.src = slide.image;
            }
        });
        
        // Fallback in case some images fail to load
        setTimeout(() => {
            presentationContainer.classList.remove('loading');
            loader.style.display = 'none';
            updateProgressBar();
        }, 7000);
    }

    // Update progress bar
    function updateProgressBar() {
        const progress = ((currentSlide) / (slides.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Add fade effect
    function fadeEffect(action) {
        if (action === 'out') {
            slideContent.style.opacity = '0';
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 300); // Match this with the CSS transition time
            });
        } else {
            slideContent.style.opacity = '1';
            return Promise.resolve();
        }
    }

    // Create cover page content
    function createCoverPage(slide) {
        return `
            <div class="cover-page">
                <h1>${slide.title}</h1>
                <h2>${slide.subtitle}</h2>
                <div class="cover-decoration"></div>
                <div class="map-grid"></div>
                <div class="map-pin pin1"></div>
                <div class="map-pin pin2"></div>
                <div class="map-pin pin3"></div>
                <div class="map-circle circle1"></div>
                <div class="map-circle circle2"></div>
            </div>
        `;
    }

    // Create team page content
    function createTeamPage(slide) {
        const membersHTML = slide.members.map(member => 
            `<div class="team-member">
                <div class="member-info">
                    <h3>${member.name}</h3>
                </div>
            </div>`
        ).join('');

        return `
            <div class="team-page">
                <h2>${slide.teamName}</h2>
                <div class="team-members">
                    ${membersHTML}
                </div>
            </div>
        `;
    }

    // Create thanks page content
    function createThanksPage(slide) {
        return `
            <div class="thanks-page">
                <h1>${slide.title}</h1>
                <h2>${slide.subtitle}</h2>
                <div class="thanks-decoration">
                    <i class="fas fa-hands-clapping"></i>
                </div>
            </div>
        `;
    }

    // Toggle fullscreen
    function toggleFullscreen() {
        if (!isFullscreen) {
            if (presentationContainer.requestFullscreen) {
                presentationContainer.requestFullscreen();
            } else if (presentationContainer.mozRequestFullScreen) { /* Firefox */
                presentationContainer.mozRequestFullScreen();
            } else if (presentationContainer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                presentationContainer.webkitRequestFullscreen();
            } else if (presentationContainer.msRequestFullscreen) { /* IE/Edge */
                presentationContainer.msRequestFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
            isFullscreen = true;
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenBtn.setAttribute('aria-label', 'Enter fullscreen');
            isFullscreen = false;
        }
    }

    // Toggle presentation mode
    function togglePresentationMode() {
        presentationContainer.classList.toggle('presentation-mode');
        isPresentationMode = !isPresentationMode;
        resetIdleTimer();
    }

    // Update slide content
    async function updateSlide(direction = null) {
        if (isAnimating) return;
        isAnimating = true;
        resetIdleTimer();
        
        // Fade out
        await fadeEffect('out');
        
        // Update content
        const slide = slides[currentSlide];
        
        if (slide.type === 'cover') {
            // Cover page
            imageContainer.innerHTML = createCoverPage(slide);
            imageContainer.classList.add('special-slide', 'cover-slide');
            slideDescription.style.display = 'none'; // Hide description for cover page
        } else if (slide.type === 'team') {
            // Team page
            imageContainer.innerHTML = createTeamPage(slide);
            imageContainer.classList.add('special-slide', 'team-slide');
            slideDescription.style.display = 'none'; // Hide description for team page
        } else if (slide.type === 'thanks') {
            // Thanks page
            imageContainer.innerHTML = createThanksPage(slide);
            imageContainer.classList.add('special-slide', 'thanks-slide');
            slideDescription.style.display = 'none'; // Hide description for thanks page
        } else {
            // Regular image slide
            imageContainer.innerHTML = `<img id="slide-image" src="${slide.image}" alt="Slide ${currentSlide + 1}" tabindex="0">`;
            imageContainer.classList.remove('special-slide', 'cover-slide', 'team-slide', 'thanks-slide');
            slideDescription.style.display = 'block'; // Show description for regular slides
            // Reset focus for accessibility
            setTimeout(() => {
                const newSlideImage = document.getElementById('slide-image');
                if (newSlideImage) newSlideImage.focus();
            }, 100);
        }
        
        slideDescription.innerHTML = `<p>${slide.description}</p>`;
        currentSlideEl.textContent = currentSlide + 1;
        
        // Update progress bar
        updateProgressBar();
        
        // Manage navigation button states
        updateNavigationState();
        
        // Add slide direction class for animation
        if (direction) {
            slideContent.classList.add(`slide-${direction}`);
            setTimeout(() => {
                slideContent.classList.remove(`slide-${direction}`);
            }, 10);
        }
        
        // Fade in
        setTimeout(() => {
            fadeEffect('in');
            isAnimating = false;
        }, 50);
    }

    // Update navigation buttons state
    function updateNavigationState() {
        const isFirst = currentSlide === 0;
        const isLast = currentSlide === slides.length - 1;
        
        prevBtn.disabled = isFirst;
        nextBtn.disabled = isLast;
        
        prevBtn.style.opacity = isFirst ? '0.5' : '1';
        nextBtn.style.opacity = isLast ? '0.5' : '1';
        
        // Update side navigation visibility
        prevNav.style.visibility = isFirst ? 'hidden' : 'visible';
        nextNav.style.visibility = isLast ? 'hidden' : 'visible';
    }

    // Go to previous slide
    function goToPrevSlide() {
        if (currentSlide > 0 && !isAnimating) {
            currentSlide--;
            updateSlide('left');
        }
    }

    // Go to next slide
    function goToNextSlide() {
        if (currentSlide < slides.length - 1 && !isAnimating) {
            currentSlide++;
            updateSlide('right');
        }
    }

    // Reset the idle timer
    function resetIdleTimer() {
        clearTimeout(idleTimer);
        document.querySelector('.slide-controls').classList.remove('hidden');
        
        idleTimer = setTimeout(() => {
            if (!isAnimating && !isSlideSelectorOpen) {
                document.querySelector('.slide-controls').classList.add('hidden');
            }
        }, 3000);
    }

    // Event listeners
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    prevNav.addEventListener('click', goToPrevSlide);
    nextNav.addEventListener('click', goToNextSlide);
    slideSelectorBtn.addEventListener('click', toggleSlideSelector);

    // Search functionality for slide selector
    slideSearch.addEventListener('input', function() {
        populateSlideSelector(this.value);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (isSlideSelectorOpen && 
            !slideSelectorDropdown.contains(e.target) && 
            e.target !== slideSelectorBtn) {
            toggleSlideSelector();
        }
    });

    // Double click on image for fullscreen
    imageContainer.addEventListener('dblclick', toggleFullscreen);
    
    // Fullscreen button
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Handle fullscreen change events
    document.addEventListener('fullscreenchange', function() {
        isFullscreen = !!document.fullscreenElement;
        if (!isFullscreen) {
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenBtn.setAttribute('aria-label', 'Enter fullscreen');
        }
        resetIdleTimer();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
            goToNextSlide();
        } else if (e.key.toLowerCase() === 'f') {
            toggleFullscreen();
        } else if (e.key.toLowerCase() === 'p') {
            togglePresentationMode();
        } else if (e.key.toLowerCase() === 'l') {
            toggleSlideSelector();
        } else if (e.key === 'Escape' && isSlideSelectorOpen) {
            toggleSlideSelector();
        }
        resetIdleTimer();
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        resetIdleTimer();
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            // Swipe left, go to next slide
            goToNextSlide();
        } else if (touchEndX > touchStartX + threshold) {
            // Swipe right, go to previous slide
            goToPrevSlide();
        }
    }

    // Preload images
    preloadImages();
    
    // Initialize the first slide
    updateProgressBar();
    updateSlide();
    
    // Events that reset the idle timer
    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('keypress', resetIdleTimer);
    document.addEventListener('click', resetIdleTimer);
    document.addEventListener('touchstart', resetIdleTimer);
    
    // Start the idle timer
    resetIdleTimer();
}); 