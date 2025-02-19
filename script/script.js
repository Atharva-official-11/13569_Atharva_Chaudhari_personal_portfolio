document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".gradient-text");
    const words = ["web Applications", "UI/UX Designs", "MERN Projects"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
  
    function typeEffect() {
        let currentWord = words[wordIndex];
        if (isDeleting) {
            textElement.innerHTML = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            textElement.innerHTML = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }
  
        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
  
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  
    typeEffect();
  });
  
  
// dark mode
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const darkBg = document.getElementById('back-bg1')
  const body = document.body;
  const project_bar =  document.getElementById("bg-cards")
  const navBar= document.getElementById('navv')
  
  darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      project_bar.classList.toggle('project-cards');
      darkBg.classList.toggle("dark-background");
      navBar.classList.toggle('nav-bar')      
      darkModeToggle.textContent = body.classList.contains("dark-mode") ? "🌞" : "🌙";
  });
  
// hamburger
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;
  const navL = document.getElementsByClassName('nav-links')
 

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open'); // Toggle the push effect
    
  });
});

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });


//   about page 

document.querySelector(".copy-email").addEventListener("click", function() {
    navigator.clipboard.writeText("workwithatharvaa@gmail.com");
    alert("Email copied to clipboard!");
});


// work experience page 


function showJob(index) {
            let jobs = document.querySelectorAll('.job');
            let descriptions = document.querySelectorAll('.job-description');
           
            // Remove 'active' class from all jobs and descriptions
            jobs.forEach(job => job.classList.remove('active'));
            descriptions.forEach(desc => desc.classList.remove('active'));
        
            // Add 'active' class to the selected job and description
            jobs[index].classList.add('active');
            descriptions[index].classList.add('active');
        }


// contact page 

document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault(); // Prevent form submission

          let name = document.getElementById("name").value.trim();
          let email = document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();

          if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
          }

          alert(`Thank you, ${name}! Your message has been sent.`);

          // Clear form fields
          document.getElementById("contact-form").reset();
        });