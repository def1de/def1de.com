const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-me');

const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#my-projects');

const progressBar = document.getElementsByClassName('progress-bar');

window.onload = () => {
    loadProgressBar();
}

loadProgressBar = () => {
    for (let i = 0; i < progressBar.length; i++) {
        progressBar[i].classList.add('active');
    }
};

unloadProgressBar = () => {
    for (let i = 0; i < progressBar.length; i++) {
        progressBar[i].classList.remove('active');
    }
};

about.addEventListener('click', (e) => {
    e.preventDefault();
    about.classList.add('active');
    projects.classList.remove('active');
    aboutContent.style.transform = 'translateX(-50%)';
    projectsContent.style.transform = 'translateX(100%)';
    setTimeout(() => {
        loadProgressBar();
    }, 100);
});

projects.addEventListener('click', (e) => {
    e.preventDefault();
    projects.classList.add('active');
    about.classList.remove('active');
    projectsContent.style.transform = 'translateX(-50%)';
    aboutContent.style.transform = 'translateX(100%)';
    setTimeout(() => {
        unloadProgressBar();
    }, 500);
});