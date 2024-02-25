const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        // const indicator = document.querySelector(".indicator");
        // indicator.style.left = `${index * 94 + 95 + 794}px`;
    })
})

//========== Script for nav links activation on scroll
// JavaScript
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= top - 150 && window.scrollY < top + height - 150) {
            linkItems.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});




// Script for Hover on nav-item
linkItems.forEach((linkItem) => {
    linkItem.addEventListener("mouseover", () => {
        const linkIcon = linkItem.querySelector('.link-icon')
        const linkText = linkItem.querySelector('.link-text')

        linkIcon.style.color = "var(--bg-color2)"
        linkText.style.opacity = "1"

        linkIcon.style.transition = "color 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
        linkText.style.transition = "opacity 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)"
    })

    linkItem.addEventListener("mouseout", () => {
        const linkIcon = linkItem.querySelector('.link-icon')
        const linkText = linkItem.querySelector('.link-text')

        linkIcon.style.color = ""
        linkText.style.opacity = ""

        linkIcon.style.transition = ""
        linkText.style.transition = ""
    })
})

// Navbar toggler
let menuIcon = document.getElementById("menu-icon");
let navItems = document.querySelector(".nav-items");

menuIcon.addEventListener("click", () => {
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-x");
    } else {
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.add("fa-bars");
    }
    navItems.classList.toggle("display-none");
});

window.onscroll = () => {
    // Remove navitem and x nam attribute onscroll
    navItems.classList.add("display-none")
    menuIcon.classList.add("fa-bars")
    menuIcon.classList.remove("fa-x")
}

// Navbar dark or light theme
let darkLight = document.getElementById("dark-light");
let navbar = document.querySelector("nav")

darkLight.addEventListener("click", () => {
    if (darkLight.classList.contains("fa-sun")) {
        darkLight.classList.add("fa-moon");
        darkLight.classList.remove("fa-sun");

        document.documentElement.style.setProperty('--bg-color', '#FFFFFF');

        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'
    } else {
        darkLight.classList.add("fa-sun");
        darkLight.classList.remove("fa-moon");

        document.documentElement.style.setProperty('--bg-color', 'black');

        navbar.style.boxShadow = '0 5px 15px rgba(240, 240, 255, 0.1)'
    }
});

//**************** projects ********************//
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

/*=============== Email js external ============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-sent-message")

const sendEmail = (e) => {
    e.preventDefault()

    // service id - template id - #form - publickey
    emailjs.sendForm('service_jjx2isg', 'template_123no5b', '#contact-form', 'ySODpMhfENB-89VNI')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✔'

            // Remove message after seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input field
            contactForm.reset()

        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener("submit", sendEmail)

// stopping scroll animation for home buttons
document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.querySelector('.btn-home');
    var homeSci = document.querySelector('.home-sci');

    // Check if the element exists and has not been triggered
    if (!homeButton.classList.contains('aos-animate') && !homeSci.classList.contains('aos-animate')) {
      // Manually trigger AOS animation
      AOS.refreshHard();
      
      // Add a class to mark the element as triggered
      homeButton.classList.add('aos-animate');
      homeSci.classList.add('aos-animate');
    }
  });