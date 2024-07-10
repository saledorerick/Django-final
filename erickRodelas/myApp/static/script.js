document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const resumeLink = document.getElementById("resume-link");
    const portfolioLink = document.getElementById("portfolio-link");
    const contactLink = document.getElementById("contact-link");
  
    const homeSection = document.getElementById("section-home");
    const aboutSection = document.getElementById("section-about");
    const resumeSection = document.getElementById("section-resume");
    const portfolioSection = document.getElementById("section-portfolio");
    const contactSection = document.getElementById("section-contact");
  
    homeLink.addEventListener("click", function() {
      homeSection.scrollIntoView({ behavior: "smooth" });
    });
  
    aboutLink.addEventListener("click", function() {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  
    resumeLink.addEventListener("click", function() {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    });
  
    portfolioLink.addEventListener("click", function() {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    });
  
    contactLink.addEventListener("click", function() {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });


  });
  
  function scrollToContact() {
    var contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}
