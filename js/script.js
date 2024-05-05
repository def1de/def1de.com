const about = document.querySelector('#about');
const aboutContent = document.querySelector('#about-me');

const projects = document.querySelector('#projects');
const projectsContent = document.querySelector('#my-projects');

const progressBar = document.getElementsByClassName('progress-bar');
const slider = document.querySelector('#slider');

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

    aboutContent.classList.add('active');
    projectsContent.classList.remove('active');

    slider.style.height = aboutContent.clientHeight + 'px';
    setTimeout(() => {
        loadProgressBar();
    }, 100);
});

projects.addEventListener('click', (e) => {
    e.preventDefault();
    projects.classList.add('active');
    about.classList.remove('active');

    projectsContent.classList.add('active');
    aboutContent.classList.remove('active');
    setTimeout(() => {
        unloadProgressBar();
    }, 500);
});