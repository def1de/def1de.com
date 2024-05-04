const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-me');

const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#my-projects');

about.addEventListener('click', () => {
    about.classList.add('active');
    projects.classList.remove('active');
    aboutContent.style.transform = 'translateX(-50%)';
    projectsContent.style.transform = 'translateX(100%)';
});

projects.addEventListener('click', () => {
    projects.classList.add('active');
    about.classList.remove('active');
    projectsContent.style.transform = 'translateX(-50%)';
    aboutContent.style.transform = 'translateX(100%)';
});