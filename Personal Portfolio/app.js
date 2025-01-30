var typed = new Typed(".text", {
    strings: [
      "Java Full Stack Developer",
      "Web Developer",
      "Front End Developer",
      "Software Developer",
      "Back End Developer",
      "Web Designer",
      "SQL Developer",
      "Content Creator",
      "Blogger"
    ],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
  });

/* function designed for hamburger menu */

document.getElementById('menu-icon').onclick = function() {
  document.querySelector('.navbar').classList.toggle('active');
}

// Show or hide the back-to-top button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('.top').style.display = "block";
  } else {
    document.querySelector('.top').style.display = "none";
  }
}