// Navbar Transparency on Scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle Contact Button Text

// Toggle Contact Button Text

document.getElementById("connectBtn").addEventListener("click", function () {
    document.getElementById("toggleIndicator").style.transform = "translateX(100%)";
    setTimeout(() => { window.location.href = ""; }, 300);
});

document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("toggleIndicator").style.transform = "translateX(0%)";
});

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Project Data
const projects = {
    digital: [
      { title: "E-Commerce UI", img: "images/hero.png", desc: "A clean and modern UI for an online store.", link: "#" },
      { title: "Finance Dashboard", img: "images/finance.jpg", desc: "An intuitive dashboard for tracking finances.", link: "#" },
      { title: "SaaS Landing Page", img: "images/saas.jpg", desc: "A minimal yet engaging SaaS landing page.", link: "#" },
      { title: "Mobile App Design", img: "images/mobile.jpg", desc: "A sleek mobile app UI for productivity.", link: "#" }
    ],
    illustration: [
      { title: "Character Design", img: "images/character.jpg", desc: "Creative character illustrations.", link: "#" },
      { title: "Book Cover Art", img: "images/book.jpg", desc: "Illustrative book cover designs.", link: "#" },
      { title: "Mascot Logos", img: "images/mascot.jpg", desc: "Playful and dynamic mascot logos.", link: "#" },
      { title: "Vector Illustrations", img: "images/vector.jpg", desc: "High-quality vector-based designs.", link: "#" }
    ],
    graphic: [
      { title: "Brand Identity", img: "images/brand.jpg", desc: "Unique and engaging brand identities.", link: "#" },
      { title: "Poster Design", img: "images/poster.jpg", desc: "Eye-catching poster designs.", link: "#" },
      { title: "Magazine Layout", img: "images/magazine.jpg", desc: "Aesthetic and readable magazine layouts.", link: "#" },
      { title: "Social Media Posts", img: "images/social.jpg", desc: "Attractive social media graphics.", link: "#" }
    ],
    animation: [
      { title: "Explainer Video", img: "images/explainer.jpg", desc: "Short animated explainer videos.", link: "#" },
      { title: "GIF Animations", img: "images/gif.jpg", desc: "Smooth and fun GIF animations.", link: "#" },
      { title: "3D Motion Graphics", img: "images/3d.jpg", desc: "Advanced 3D animated content.", link: "#" },
      { title: "YouTube Intro", img: "images/youtube.jpg", desc: "Dynamic YouTube intros & animations.", link: "#" }
    ]
  };
  
  // Function to Display Projects
  function displayProjects(category) {
    const container = document.querySelector(".projects-container");
    container.innerHTML = ""; // Clear previous projects
  
    projects[category].forEach((project) => {
      const projectHTML = `
        <div class="project-card">
          <img src="${project.img}" alt="${project.title}">
          <h3 class="text-xl font-bold mt-2">${project.title}</h3>
          <p class="text-gray-600 mt-1">${project.desc}</p>
          <a href="${project.link}" class="text-black-600 font-semibold mt-2 block text-left">See the project →</a>
        </div>
      `;
      container.innerHTML += projectHTML;
    });
  }
  
  // Category Button Click Event
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".category-btn").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      displayProjects(this.getAttribute("data-category"));
    });
  });
  
  // Load Default Category
  displayProjects("digital");
  
