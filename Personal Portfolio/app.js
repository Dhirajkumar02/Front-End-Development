var typed = new Typed(".text", {
    strings: [
      "Java Full Stack Developer",
      "Web Developer",
      "Front End Developer",
      "Software Developer",
      "UI/UX Designer",
      "Web Designer",
      "Oracle SQL Developer",
      "Content Creator",
      "Blogger"
    ],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
  });

/* function designed for hamburger menu */

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'

}
