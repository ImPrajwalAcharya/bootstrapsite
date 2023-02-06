

// firebase.initalizeApp(firebaseConfig);
// var contactFormDB = firebase.database().ref('contactForm');
// document.getElementById('contactform').addEventListener('submit', submitForm);
// function submitForm() {

//     var name = getElementval('name');
//     var email = getElementval('email');
//     var phone = getElementval('phone');
//     var message = getElementval('message');
//     console.log(name, email, phone, message);
// }
// const getElementval = (id) => { return document.getElementById(id).value; }
// Get form elements

// const displayArea = document.querySelector("#display-area");

// Add submit event listener to form

// Create an array of your work, each item should have a topic, description, language used, and photo url
// const work = [
//     {
//         topic: "Project 1",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         language: "JavaScript",
//         photoUrl: "https://via.placeholder.com/150"
//     },
//     {
//         topic: "Project 2",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         language: "JavaScript",
//         photoUrl: "https://via.placeholder.com/150"
//     },
//     {
//         topic: "Project 3",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         language: "JavaScript",
//         photoUrl: "https://via.placeholder.com/150"
//     },
//     ...
//     {
//         topic: "Project 20",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         language: "JavaScript",
//         photoUrl: "https://via.placeholder.com/150"
//     }
// ];
// Select the work-list div and the previous and next buttons

const work = [

    {
        topic: "Pistagram",
        language: "Dart/Flutter",
        url: "https://github.com/ImPrajwalAcharya/Pistagram",
        photoUrl: "https://s3.amazonaws.com/ionic-marketplace/instaclone-ionic-instagram-theme/icon.png",
        description: "Pistagram is an Instagram clone built with Flutter. It allows users to share photos, videos, and stories with followers and explore content from other users."
    },
    {
        topic: "POS-for-Restaurant",
        language: "Dart/Flutter",
        url: "https://github.com/Club-420/POS-for-Restaurant",
        photoUrl: "https://d2efe6y0rplrqn.cloudfront.net/assets/homeslider/terminal-minio-en-f6efb01d48c1fce391daa688c4441914.png",
        description: "POS-for-Restaurant is a point of sale system built with Flutter that helps restaurants manage orders, inventory, and sales."
    },
    {
        topic: "FarmSell",
        language: "Dart/Flutter",
        url: "https://github.com/ImPrajwalAcharya/farmsell",
        photoUrl: "https://www.linkpicture.com/q/imgonline-com-ua-twotoone-lQ7UlMrZX8D9.jpg",
        description: "FarmSell is a platform built with Flutter that connects farmers with consumers, allowing them to buy and sell produce directly."
    },
    {
        topic: "The Mole Game with Flutter",
        language: "Dart/Flutter",
        url: "https://github.com/ImPrajwalAcharya/themolegamewithflutter",
        photoUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/TheMole.jpg",
        description: "The Mole Game with Flutter is a multiplayer game where the player has to whack a mole. Built with Flutter, it's fun and easy to play"
    },
    {
        topic: "Python Project",
        language: "Python",
        url: "https://github.com/ImPrajwalAcharya/PYthon_Project",
        photoUrl: "https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png",
        description: "Python Project is a collection of different Python projects done during the beginner stage. They serve as a good starting point for anyone interested in learning Python."
    },
    {
        topic: "Bingo Game",
        language: "HTML, CSS, JavaScript",
        url: "https://github.com/ImPrajwalAcharya/Bingo",
        photoUrl: "https://www.linkpicture.com/q/Screenshot-2023-02-01-124851.png",
        description: "Bingo Game is a simple bingo game built with HTML, CSS, and JavaScript. It can be played by anyone."
    },
    {
        topic: "WebSocket",
        language: "JavaScript",
        url: "https://github.com/ImPrajwalAcharya/webSocket",
        photoUrl: "https://miro.medium.com/max/1400/1*RlJhuEQEujAfBKSGE4pb6g.png",
        description: "WebSocket is an implementation of the WebSocket protocol for real-time communication. it allows for fast and efficient communication between the client and server."
    },
    {
        topic: "Node Server",
        language: "JavaScript",
        url: "https://github.com/ImPrajwalAcharya/Nodeserver",
        photoUrl: "https://raw.githubusercontent.com/altairstudios/nodeserver/master/nodeserver-logo.png",
        description: "Node Server  is a server built with Node.js, a JavaScript runtime that allows for server-side scripting."
    },
    {
        topic: "C++ Basics",
        language: "C++",
        url: "https://github.com/ImPrajwalAcharya/CPP-basics",
        photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
        description: "C++ Basics is a collection of basic programs and exercises in C++. It is suitable for beginners learning C++ and those who want to brush up on their C++ skills."
    },
    {
        topic: "Guess What You Think",
        language: "C++",
        url: "https://github.com/ImPrajwalAcharya/Guess_What_You_Think",
        photoUrl: "https://i.ytimg.com/vi/-zi3xvEpP0c/maxresdefault.jpg",
        description: "Guess What You Think is a simple game built in C++ that tries to guess the number you are thinking by asking a limited number of questions."
    }
];

let currentPage = 1;
const workPerPage = 3;

function displayWork() {
    const startIndex = (currentPage - 1) * workPerPage;
    const endIndex = startIndex + workPerPage;
    const currentWork = work.slice(startIndex, endIndex);
    const workContainer = document.querySelector("#work-list");

    workContainer.innerHTML = "";

    for (let i = 0; i < currentWork.length; i++) {
        const topic = currentWork[i].topic;
        const description = currentWork[i].description;
        const language = currentWork[i].language;
        const photoURL = currentWork[i].photoUrl;
        const url = currentWork[i].url;

        workContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <img src="${photoURL}" class="card-img-top rounded img-fluid img-thumbnail" style="height:300px;" alt="...">
            <div class="card-body text-md-start text-center">
              <h5 class="card-title font-weight-bold">${topic}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text ">${language}</p>
            </div>
            <div class="card-footer">
            <button  type="button" onclick=window.location.href="${url}" class="main-btn">View on GitHub</button>
            </div>
          </div>
        </div>
      `;
    }
}

displayWork();

const previousPage = document.querySelector("#previousPage");
previousPage.addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        displayWork();


    }
});

const nextPage = document.querySelector("#nextPage");
nextPage.addEventListener("click", function () {
    if (currentPage < Math.ceil(work.length / workPerPage)) {
        currentPage++;
        displayWork();
    }
});


// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})
