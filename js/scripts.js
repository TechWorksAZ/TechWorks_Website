(function ($) {
  $(document).ready(function () {
    "use strict";
  
  // PRELOADER
  $(window).on('load', function() {
    // Add page-loaded class to body
    $("body").addClass("page-loaded");
  
    // Optional: Fade out and remove preloader
    $(".preloader").fadeOut(1000, function() {
      $(this).remove();
    });
  
    // Trigger hero text animation
    setTimeout(function() {
      $('.int-hero .inner h2').css({
        'opacity': '1',
        'transform': 'translateY(0)'
      });
    }, 600);
  });

    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };

    // INT HERO FADE
    var divs = $('.int-hero .inner');
    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      divs.css({
        'opacity': (1 - st / 300)
      });
    });

    // FOOTER HEIGHT CALCULATION	
    $('.footer-spacing').css({
      'height': $('.footer').innerHeight()
    });

    // DATA BACKGROUND IMAGE
    var pageSection = $(".bg-image");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });

    // DATA BACKGROUND COLOR
    $(".bg-color").each(function () {
      const backgroundColor = $(this).data("background"); // Fetch the `data-background` attribute
      if (backgroundColor) {
        $(this).css("background-color", backgroundColor); // Set the background color dynamically
      }
    });
    

    // PAGE TRANSITION
    $('.hamburger-navigation li a').on('click', function (e) {
      e.preventDefault();
      goTo = this.getAttribute("href");

      if (goTo && goTo !== '#') {
        $('.transition-overlay').toggleClass("show-me");
          
        setTimeout(function () {
          window.location = goTo;
        }, 1000);
      }
    });

    // REMOVE PERSPECTIVE EFFECT ON MOBILE
    if ($(window).width() < 991) {
      $('.works figure').removeClass('perspective-box');
    }

    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        $('.works figure').addClass('perspective-box');
      } else {
        $('.works figure').removeClass('perspective-box');
      }
    }
  });
  // END DOCUMENT READY

  // SLIDER
  swiper = new Swiper('.swiper-container', {
    speed: 600,
    parallax: true,
    loop: false,
    autoplay: false,
    pagination: false,
    navigation: false,
  });

  // WOW ANIMATION 
  wow = new WOW({
    animateClass: 'animated',
    offset: 50
  });
  wow.init();

  // MASONRY
  $(window).on('load', function () {
    $('.works').isotope({
      itemSelector: '.grid-item, .grid-item-double',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  });

  // ISOTOPE FILTER
  $container = $('.works');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.isotope-filter li a').click(function () {
    $('.isotope-filter li a.current').removeClass('current');
    $(this).addClass('current');

    selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  // COUNTER 
  if (document.getElementById("counter")) {
    lastWasLower = false;
    $(document).scroll(function () {
      p = $("#counter");
      position = p.position();
      if (position) {
        position2 = position.top;
        if ($(document).scrollTop() > position2 - 300) {
          if (!lastWasLower) {
            $('#1').html("21");
            $('#2').html("37");
            $('#3').html("78");
            lastWasLower = true;
          }
        } else {
          lastWasLower = false;
        }
      }
    });
  }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                                                 ADDED JAVASCRIPT                                                  //
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  //~~~~~~  LOAD AFTER HTML FULLY PARSED ~~~~~~//
  document.addEventListener('DOMContentLoaded', () => {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                             NAVIGATION                              //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //     HAMBURGER NAVIGATION     //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
        
    //~~~ DEFINE HAMURGER NAV
      const hamburger = document.querySelector('.header .hamburger');
      const navMenu = document.querySelector('.hamburger-navigation');

    //~~~ TOGGLE HAMBURGER MENU
      hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('open');
      });

    //~~~ CLOSE MENU ON LINK CLICK
      const navLinks = document.querySelectorAll('.hamburger-navigation a');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navMenu.classList.remove('open');
        });
      });

    //~~~ MANAGE VISIBLITY BASED ON SCREEN SIZE
      function checkWidth() {
        if (window.innerWidth > 1024) {
          navMenu.classList.remove('open'); // Hide hamburger menu
        }
    };

    //~~~ CHECK SIZE
      window.addEventListener('resize', checkWidth);
      checkWidth(); // Initial check on load

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //      NAV-MENU EFFECTS        //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~ DEFINE MENU
      const menuItems = document.querySelectorAll('.reg-menu-list a');
          
    //~~~ ADD MENU EFFECTS
      menuItems.forEach(item => {
        const letters = item.textContent.split('');
        item.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
    });

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                         END NAVIGATION                              //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                         ANIMATIONS & EFFECTS                        //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //      LETTER EFFECTS          //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//    

    //*~~~ HOVER-LETTER EFFECTS
    document.querySelectorAll('.hover-letters').forEach(link => {
            
      // HOVER ON MOUSEENTER
      link.addEventListener('mouseenter', () => {
        link.querySelectorAll('span').forEach((letter, index) => {
          setTimeout(() => {
            letter.style.color = '#00dd00'; // Target color on hover
          }, index * 100); // Increase delay for each letter
        });
      });

      // REMOVE HOVER ON MOUSELEAVE
      link.addEventListener('mouseleave', () => {
        link.querySelectorAll('span').forEach((letter, index) => {
          setTimeout(() => {
            letter.style.color = ''; // Revert to original color
          }, index * 100);
        });
      });
    });

    //*~~~ ADD GREEN TO LETTERS
      function setupLetterEffects(container) {

      // ADD GREEN ON MOUSEENTER
        container.querySelectorAll('span').forEach(span => {
          span.addEventListener('mouseenter', () => {
            span.classList.add('green');
          });
        });

      // REMOVE GREEN ON MOUSELEAVE
        container.addEventListener('mouseleave', () => {
          container.querySelectorAll('span').forEach(span => {
            span.classList.remove('green');
          });
        });
    };

    //*~~~ LETTER EFFECTS FOR ALL LINK CLASS BUTTONS
      function initializeLetterEffects() {
        const buttons = document.querySelectorAll('.content-inner .link, .about-right .link, .modal_buttons .link, .contact-section .link');
        buttons.forEach(setupLetterEffects);
    };

    //*~~~ INITIALIZE EFFECTS
      initializeLetterEffects();

    //*~~~ OBSERVE FOR DYNAMICALLY ADDED BUTTONS
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          if (mutation.addedNodes.length) {
            // Re-initialize for all buttons when DOM changes
            initializeLetterEffects();
          }
        });
      });

    //*~~~ OBSERVE WHOLE DOC FOR DYNAMIC CONTENT BUTTONS
      observer.observe(document.body, {
        childList: true,
        subtree: true
    });

      //*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*//
     //*   PARALLAX & SCROLL EFFECTS  *//
    //*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*//        
          
    //*~~~ ORIGINAL PARALLAX: Conditional Stellar.js Initializationa
    function initializeStellar() {
      if (window.innerWidth > 1199) {
        $.stellar({
          horizontalScrolling: false,
          verticalScrolling: true,
          verticalOffset: 0,
          responsive: true,
          hideDistantElements: false,
          parallaxBackgrounds: true,
        });
      } else {
        // DESTROY STELLAR.JS ON SMALLER SCREENS
        if ($.stellar) {
          $.stellar('destroy');
        }
      }
    };

    //*~~~ RUN STELLAR.JS ON LOAD & RESIZE
    initializeStellar();
    window.addEventListener('resize', initializeStellar);

    //*~~~ SCROLL/PARALLAX EFFECTS FOR HERO SECTIONS (CONTACT, SERVICES)
    window.addEventListener('scroll', () => {
      const innerText = document.querySelector('.int-hero .inner h2');
      const topSection = document.querySelector('.int-hero');
      const scrollPosition = window.scrollY;

      if (innerText) {
        innerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        innerText.style.transition = 'transform 0.2s ease-out';
      }

      if (topSection) {
        const darkeningFactor = Math.min(scrollPosition / 500, 0.7);

        if (innerText) {
          innerText.style.filter = `brightness(${1 - darkeningFactor})`;
        }

        topSection.style.filter = `brightness(${1 - darkeningFactor})`;
      }
    });

    //*~~~~~~ INDEX.HTML ~~~~~~
    //*~~~ SCROLL/PARALLAX EFFECTS FOR INDEX PAGE HERO SECTION
    window.addEventListener('scroll', () => {
      const innerText = document.querySelector('.content-inner');
      const topSection = document.querySelector('.hero');
      const scrollPosition = window.scrollY;

      if (innerText) {
        innerText.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        innerText.style.transition = 'transform 0.2s ease-out';
      }

      if (topSection) {
        const darkeningFactor = Math.min(scrollPosition / 500, 0.7);

        if (innerText) {
          innerText.style.filter = `brightness(${1 - darkeningFactor})`;
        }

        topSection.style.filter = `brightness(${1 - darkeningFactor})`;
      }
    });

    //*~~~ SCROLL/PARALLAX EFFECTS FOR SERVICE SECTION
    window.addEventListener('scroll', () => {
      const serviceSection = document.querySelector('.service-section');

      if (serviceSection) {
        const scrollPosition = window.scrollY;
        const sectionOffset = serviceSection.offsetTop;
        const sectionHeight = serviceSection.offsetHeight;

        if (scrollPosition >= sectionOffset && scrollPosition <= sectionOffset + sectionHeight) {
          const distance = scrollPosition - sectionOffset;
          const darkeningFactor = Math.min(distance / sectionHeight, 0.9);
          serviceSection.style.filter = `brightness(${1 - darkeningFactor})`;
        } else {
          serviceSection.style.filter = 'brightness(1)';
        }
      }
    });

    //*~~~ SCROLL/PARALLAX EFFECTS FOR ABOUT SECTION 
    window.addEventListener('scroll', () => {
      const aboutSection = document.querySelector('.about-section');
      const aboutLeft = document.querySelector('.about-left');
      const aboutRight = document.querySelector('.about-right');
      const marquee = document.querySelector('.marquee');
      const aboutTextTop = document.querySelectorAll('.about-left .title_area');

      const aboutTextBottom = document.querySelectorAll(
        '.about-right .title_area, ' +
        '.about-right p, ' +
        '.about-right .about-list li'
      );

      // SETUP ABOUT SECTION 
      if (aboutSection) {
        const scrollPosition = window.scrollY;
        const sectionOffset = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollTrigger = sectionOffset - viewportHeight / 1.2; // Adjusted trigger point
        const startOffset = 300; // Increased starting position

        // CALCULATE DARKENING START/END POINTS
        const darkenStart = sectionOffset - viewportHeight / 3.5;
        const darkenEnd = sectionOffset + sectionHeight - viewportHeight / 3.5;

        // APPLY DARKENING EFFECT
        if (scrollPosition >= darkenStart && scrollPosition <= darkenEnd) {
          const distance = scrollPosition - darkenStart;
          const totalRange = darkenEnd - darkenStart;
          const darkeningFactor = Math.min(distance / totalRange, 0.7);
          aboutSection.style.filter = `brightness(${1 - darkeningFactor})`;
          if (marquee) marquee.style.filter = `brightness(${1 - darkeningFactor})`;
        } else if (scrollPosition > darkenEnd) {
          aboutSection.style.filter = 'brightness(0.3)';
          if (marquee) marquee.style.filter = 'brightness(0.3)';
        } else {
          aboutSection.style.filter = 'brightness(1)';
          if (marquee) marquee.style.filter = 'brightness(1)';
        }
        
        // HANDLE PARALLAX EFFECTS ON LARGE SCREENS
        if (window.innerWidth > 1199) {
          aboutTextTop.forEach(element => {
            if (scrollPosition < scrollTrigger) {
              // Before trigger point - elements start below
              element.style.transform = `translateY(${startOffset}px)`;
            } else {
              // After trigger point - scroll into position faster
              const progress = Math.min(1, (scrollPosition - scrollTrigger) / (viewportHeight * 0.5)); // Increased speed
              const targetPosition = startOffset - (progress * startOffset); // Scroll from +300 to 0
              element.style.transform = `translateY(${targetPosition}px)`;
            }
            element.style.transition = 'transform 0.2s ease-out';
          });

          aboutTextBottom.forEach(element => {
            if (scrollPosition < scrollTrigger) {
              element.style.transform = `translateY(${startOffset}px)`;
            } else {
              const progress = Math.min(1, (scrollPosition - scrollTrigger) / (viewportHeight * 0.5));
              const targetPosition = startOffset - (progress * startOffset);
              element.style.transform = `translateY(${targetPosition}px)`;
            }
            element.style.transition = 'transform 0.2s ease-out';
          });
        } else {
      
          // HANDLE SMALLER SCREENS
          const elements = [aboutLeft, aboutRight, ...aboutTextTop, ...aboutTextBottom];
          elements.forEach(element => {
            if (element) {
              if (scrollPosition < scrollTrigger) {
                element.style.transform = `translateY(${startOffset}px)`;
              } else {
                const progress = Math.min(1, (scrollPosition - scrollTrigger) / (viewportHeight * 0.5));
                const targetPosition = startOffset - (progress * startOffset);
                element.style.transform = `translateY(${targetPosition}px)`;
              }
              element.style.transition = 'transform 0.2s ease-out';
            }
          });
        }
      }
    });


    //*~~~~~~ CONTACT.HTML ~~~~~~*/
    //*~~~ SCROLL/PARALLAX EFFECTS FOR CONTACT SECTION  
    window.addEventListener('scroll', () => {
      const contactText = document.querySelector('.contact-section .container');
      const contactSection = document.querySelector('.contact-section');
    
      if (contactSection && contactText) {
        const scrollPosition = window.scrollY;
        const sectionOffset = contactSection.offsetTop;
        const sectionHeight = contactSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollTrigger = sectionOffset - viewportHeight / 1.2;
        const startOffset = 500;

        // CALCULATE DARKENING START/END POINTS
        const darkenStart = sectionOffset + 500;
        const darkenEnd = sectionOffset + sectionHeight;
        
        // APPLY DARKENING EFFECT
        if (scrollPosition >= darkenStart && scrollPosition <= darkenEnd) {
          const distance = scrollPosition - darkenStart;
          const totalRange = darkenEnd - darkenStart;
          const darkeningFactor = Math.min(distance / totalRange, 0.7);
          contactSection.style.filter = `brightness(${1 - darkeningFactor})`;
        } else if (scrollPosition > darkenEnd) {
          contactSection.style.filter = 'brightness(0.3)';
        } else {
          contactSection.style.filter = 'brightness(1)';
        }
        
        // APPLY TEXT SCROLL EFFECT
        if (scrollPosition >= scrollTrigger && scrollPosition <= sectionOffset + sectionHeight) {
          const progress = Math.min(1, (scrollPosition - scrollTrigger) / (viewportHeight / 2));
          const targetPosition = startOffset - (progress * startOffset);
          contactText.style.transform = `translateY(${targetPosition}px)`;
          contactText.style.opacity = '1';
        } else {
          contactText.style.transform = `translateY(${startOffset}px)`;
          contactText.style.opacity = '0';
        }
        contactText.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
      }
    });

    //*~~~~~~ SERVICES.HTML ~~~~~~*/
    //*~~~ SCROLL/PARALLAX EFFECTS FOR SERVICE PAGE TILES
    window.addEventListener('scroll', () => {
      const titleText = document.querySelector('.service-page-section .title_area');
      const serviceSection = document.querySelector('.service-page-section');
    
      if (serviceSection && titleText) {
        const scrollPosition = window.scrollY; // Current scroll position
        const sectionOffset = serviceSection.offsetTop; // Distance from top of the page
        const sectionHeight = serviceSection.offsetHeight; // Height of the section
        const viewportHeight = window.innerHeight; // Viewport height
        const startOffset = 500; // Initial translateY position
    
        // Define scroll trigger and animation end points
        const scrollTrigger = sectionOffset - viewportHeight; // Animation starts immediately on scroll
        const animationEnd = sectionOffset - viewportHeight / 3; // Animation ends when 3/4 of the title is in view
    
        // APPLY DARKENING EFFECT
        const darkenStart = sectionOffset + 500;
        const darkenEnd = sectionOffset + sectionHeight;
    
        if (scrollPosition >= darkenStart && scrollPosition <= darkenEnd) {
          const distance = scrollPosition - darkenStart;
          const totalRange = darkenEnd - darkenStart;
          const darkeningFactor = Math.min(distance / totalRange, 0.7);
          serviceSection.style.filter = `brightness(${1 - darkeningFactor})`;
        } else if (scrollPosition > darkenEnd) {
          serviceSection.style.filter = 'brightness(0.3)';
        } else {
          serviceSection.style.filter = 'brightness(1)';
        }
    
        // APPLY SCROLL EFFECT TO THE TITLE AREA
        if (scrollPosition >= scrollTrigger && scrollPosition <= animationEnd) {
          const progress = Math.min(1, (scrollPosition - scrollTrigger) / (animationEnd - scrollTrigger));
          const targetPosition = startOffset - (progress * startOffset);
          titleText.style.transform = `translateY(${targetPosition}px)`;
          titleText.style.opacity = progress;
        } else if (scrollPosition > animationEnd) {
          // Final state when the animation completes
          titleText.style.transform = `translateY(0)`;
          titleText.style.opacity = '1';
        } else {
          // Initial state before the animation starts
          titleText.style.transform = `translateY(${startOffset}px)`;
          titleText.style.opacity = '0';
        }
    
        titleText.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
      }
    });
    
    
    
    
    
    
    
    
    

    
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //     MOUSE HOVER ANIMATION    //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
      
    //*~~~ ADD HOVER EFFECT (MOUSEENTER)
    $(".vs-hover-btn").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;
         
      // POSITION CIRCLE DOT ON MOUSEENTER 
      $(this).find(".vs-btn-circle-dot").css({
        top: y,
        left: x,
      });
    });

    //*~~~ REMOVE HOVER EFFECT (MOUSEOUT)
    $(".vs-hover-btn").on("mouseout", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      // POSITION CIRCLE DOT ON MOUSEOUT
      $(this).find(".vs-btn-circle-dot").css({
        top: y,
        left: x,
      });
    });

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //     SOCIAL-BAR ANIMATION     //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~~ SOCIAL-BAR ICON SHAKE
    const socialIcons = document.querySelectorAll('.social-bar li a i, .social-media li a i');
    socialIcons.forEach(icon => {

      // SHAKE ON MOUSEENTER
      icon.addEventListener('mouseenter', () => {
        icon.classList.add('fa-shake');
      });

      // REMOVE SHAKE ON MOUSELEAVE
      icon.addEventListener('mouseleave', () => {
        icon.classList.remove('fa-shake');
      });
    });   

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                        END ANIMATIONS & EFFECTS                     //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                             SERVICES SECTION                        //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //      SERVICE TILES TITLE     //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    
    //~~~ MAKE SERVICES TITLE VISIBLE
      const servicesTitle = document.getElementById('services-title');

    //~~~ LISTEN FOR SCROLL
      window.addEventListener('scroll', () => {
        const triggerPoint = document.querySelector('.works').offsetTop - window.innerHeight / 2;

      // MAKE VISIBLE ON SCROLL
        if (window.scrollY > triggerPoint) {
          servicesTitle.classList.add('visible');
        } else {
          servicesTitle.classList.remove('visible');
        }
      });

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //      SERVICES MODAL          //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~ START MODAL
    const modal = document.getElementById("serviceModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");
    const closeButton = document.querySelector('.close-button');
    let scrollPosition;

    //~~~OPEN MODAL
    function openModal() {
      scrollPosition = window.pageYOffset;
      modal.style.display = "block";
      modalOverlay.style.display = "block";    
    
      // ADD MODAL CLASS
      document.body.classList.add('modal_open');
            
      // PREVENT BACKGROUND SCROLLING
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    };  

    //~~~ CLOSE MODAL
    function closeModal() {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
       
      // REMOVE MODAL CLASS
      document.body.classList.remove('modal_open');
        
      // RESTORE SCROLLING
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    };

    //~~~ CLOSE MODAL WITH BUTTON
    if (closeButton) {
      closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling to overlay
        closeModal();
      });
    }    

    //~~~ CLOSE MODAL BY CLICKING OUTSIDE
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }  

    //~~~ PREVENT CLOSING ON CONTENT CLICK
    if (modalBody) {
      modalBody.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    //~~~ CLOSE MODAL USING "ESC" KEY
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });        

    //~~~ ADD EVENT LISTENERS TO SERVICE TILES
    document.querySelectorAll('.service-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const id = tile.getAttribute('data-id');
        const content = serviceContent[id];

        // CREATE MODAL
        if (content) {
          modalBody.innerHTML = `
            <img src="${content.image}" alt="${content.title}" class="modal_image">
            <div class="modal_body">
              <div class="modal_header">
                <h2>${content.title}</h2>
              </div>
              <div class="modal_description">
                ${content.description}
              </div>
              <div class="modal_buttons">
                ${content.buttons}
              </div>
            </div>
          `;
          openModal();
        }
      });
    });

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
     //       MODAL CONTENT          //
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //~~~ START CONTENT
    const serviceContent = {
   
      // AI SOLUTIONS
      "ai-solutions": {
        image: "images/tiles/modal_AI.png",
        title: "AI Solutions",
        description: `
          <p><span class="modal_bold">💡 Unlock the Future of Your Business</span><br><br>Imagine a world where your business runs smarter, faster, and with precision. Our AI solutions are here to make that happen! Dive into actionable insights and let your business soar with AI.</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">Custom Machine Learning Models –</span> Tailored AI models for your unique business needs.</li>
            <li><span class="modal_bold">AI-Driven Business Automation –</span> Automate repetitive tasks and save valuable time.</li>
            <li><span class="modal_bold">Advanced Analytics & Insights –</span> Make data-driven decisions with ease.</li>
          </ul>
          <p><span class="modal_bold">🎯 Transform Your Business Today!</span> Our AI solutions empower your growth, simplify operations, and keep you ahead of the competition.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      },

      // WEB DEVELOPMENT SOLUTIONS
      "web-dev": {
        image: "images/tiles/modal_webdev.png",
        title: "Web Development<br>&<br>E-Commerce Solutions",
        description: `
          <p><span class="modal_bold">🌐 Your Digital Home, Perfected</span><br><br>Your website is more than just a webpage—it's your brand's story, told beautifully. Want to grow your business? Let us build the ultimate shopping experience for your customers!</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">Modern Web Design –</span> Sleek, responsive websites that captivate your audience.</li>
            <li><span class="modal_bold">Custom E-Commerce Platforms –</span> Tailored solutions to scale your online store.</li>
            <li><span class="modal_bold">SEO-Optimized Content –</span> Make your site easy to find and hard to ignore.</li>
          </ul>
          <p><span class="modal_bold">🚀 Stand Out Online!</span> With a professional web presence, you’ll connect with customers and turn clicks into conversions.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      },
   
      // DEVICE REPAIR & SYSTEM BUILDS
      "repair": {
        image: "images/tiles/modal_repair.png",
        title: "Device Repair<br>&<br>Custom PC Builds",
        description: `
          <p><span class="modal_bold">🔧 Fix It or Build It, We’ve Got You</span><br><br>Dropped your device? Need a dream gaming rig? Say no more! Whether it's repairs or crafting a custom PC, your tech deserves the best.</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">Quick & Reliable Repairs –</span> Get your devices back in action, fast.</li>
            <li><span class="modal_bold">Custom PC Builds –</span> High-performance rigs tailored to your gaming or professional needs.</li>
            <li><span class="modal_bold">Hardware Upgrades –</span> Boost speed, storage, and functionality effortlessly.</li>
          </ul>
          <p><span class="modal_bold">⚙️ Keep Your Tech Running Smoothly!</span> We ensure your devices are in top shape so you can stay connected and productive.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      },

      // SOFTWARE DEVELOPMENT SOLUTIONS
      "software": {
        image: "images/tiles/modal_software.png",
        title: "Custom Software Solutions",
        description: `
          <p><span class="modal_bold">📈 Software as Unique as Your Vision</span><br><br>Why settle for one-size-fits-all? We develop software tailored to your goals. Your challenges become opportunities with our custom solutions.</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">Custom Applications –</span> Solve unique problems with tailored software.</li>
            <li><span class="modal_bold">Workflow Optimization –</span> Streamline processes to save time and resources.</li>
            <li><span class="modal_bold">Integrations & Upgrades –</span> Ensure all your tools work together seamlessly.</li>
          </ul>
          <p><span class="modal_bold">💻 Empower Your Operations!</span> Let us create the software you need to achieve your goals.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      },

      // TECH SUPPPORT
      "support": {
        image: "images/tiles/modal_support.png",
        title: "Tech Support<br>&<br>Troubleshooting",
        description: `
          <p><span class="modal_bold">🛠️ Fast Fixes, Zero Worries</span><br><br>When tech trouble strikes, we’re your superheroes! From in-person support to remote troubleshooting, we’ll have your systems up and running in no time.</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">24/7 Remote Support –</span> Help when you need it most.</li>
            <li><span class="modal_bold">In-Person Repairs –</span> Professional support for all your tech needs.</li>
            <li><span class="modal_bold">System Maintenance –</span> Keep everything running like new.</li>
          </ul>
          <p><span class="modal_bold">📞 Say Goodbye to Tech Troubles!</span> Reliable support is just a click or call away.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      },

      // DIGITAL MARKETING & SEO
      "marketing": {
        image: "images/tiles/modal_marketing.png",
        title: "Digital Marketing & SEO",
        description: `
          <p><span class="modal_bold">📢 Be Seen. Be Heard. Be Unstoppable.</span><br><br>Let the right customers find you! With strategic SEO and digital marketing, we help you attract, engage, and convert.</p>
          <h4>What We Offer</h4>
          <ul>
            <li><span class="modal_bold">SEO Optimization –</span> Dominate search rankings and boost traffic.</li>
            <li><span class="modal_bold">Social Media Advertising –</span> Target the right audience with effective campaigns.</li>
            <li><span class="modal_bold">Content Creation –</span> Captivate and inform with high-quality content.</li>
          </ul>
          <p><span class="modal_bold">🌟 Grow Your Brand!</span> Stand out in the crowded digital space with our marketing expertise.</p>
        `,
        buttons: `
          <a href="#SERVICES" class="link btn-style"><span>L</span><span>E</span><span>A</span><span>R</span><span>N</span><span>&nbsp;&nbsp;</span><span>M</span><span>O</span><span>R</span><span>E</span></a>
          <a href="mailto:info@TechWorksAZ.com" class="link btn-style"><span>G</span><span>E</span><span>T</span><span>&nbsp;&nbsp;</span><span>I</span><span>N</span><span>&nbsp;&nbsp;</span><span>T</span><span>O</span><span>U</span><span>C</span><span>H</span></a>
        `
      }
    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
   //                          END SERVICES SECTION                       //
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

  });

  // Check for any JavaScript that might be setting a negative right position
  document.addEventListener('DOMContentLoaded', function() {
    // Ensure no JavaScript is setting a negative right position
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.style.right = '0'; // Reset any negative right position
    }
  });

})(jQuery);

