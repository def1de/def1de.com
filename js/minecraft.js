const version = document.getElementById("mc-ver")
const mcstatus = document.getElementById("mc-status")
const players = document.getElementById("mc-players")
const updated = document.getElementById("mc-updated")

const playerList = document.getElementById("player-list")

const joinBtn = document.getElementById('join-btn')

const mcip = "mc.def1de.com"

const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselImgs = carouselSlide.getElementsByTagName('img').length - 1

let counter = 0;

function initServerData(serverIp, serverPort) {
    fetch('https://mcapi.us/server/status?ip=' + serverIp + '&port=' + serverPort)
        .then(response => response.json())
        .then(data => handleServerStatus(data));
    function handleServerStatus(data) {
        if (data.status == 'error') {
            return false;
        }
        version.innerHTML = data.server.name;
        if (data.online) { mcstatus.innerText = "Online" }
        players.innerHTML = data.players.now + "/" + data.players.max
        updated.innerHTML = Math.round((Date.now() - data.last_updated * 1000) / 60000) + " min ago"

        for (const player in data.players.sample) {
            generatePlayerCard(data.players.sample[player].name)
        }
    }
}

function generatePlayerCard(username) {
    let playerCard = document.createElement("div");
    playerCard.setAttribute("class", "player-card");

    let imgSrc = "https://mc-heads.net/avatar/" + username + "/45";
    let playerIcon = document.createElement("img");
    playerIcon.setAttribute("src", imgSrc);

    let playerName = document.createElement("h3");
    playerName.innerText = username;

    playerCard.appendChild(playerIcon);
    playerCard.appendChild(playerName);

    // Assuming you have an element with id 'playerList' to append the playerCard to
    playerList.appendChild(playerCard);
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}



function slideCarousel() {
    carouselSlide.style.transform = `translateX(-${counter * 100}%)`;
}

prevButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = 2
    }
    slideCarousel();
});

nextButton.addEventListener('click', () => {
    if (counter < carouselImgs) { // Change this value to the number of images minus one
        counter++;
    } else {
        counter = 0;
    }
    slideCarousel();
});

setInterval(() => {
    if (counter < carouselImgs) {
        counter++;
    } else {
        counter = 0;
    }
    slideCarousel();
}, 5000)

window.onload = () => initServerData(mcip, "25565");

joinBtn.addEventListener('click', function () {
    copyToClipboard(mcip);
});