let userscoree = 0;
let compscoree = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");
let btn = document.querySelector("button");
let audio = document.querySelector("audio");

let resetgame = () => {
    userscoree = 0;
    userscore.innerText = userscoree;
    compscoree = 0;
    compscore.innerText = compscoree;
    msg.innerText = "Play your Game";
    audio.play();
    msg.style.backgroundColor = "#081b31";
}

let drawgame = () => {
    msg.innerText = "It's a draw. Play again!";
    msg.style.backgroundColor = "#081b31";
}

let showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscoree++;
        userscore.innerText = userscoree;
    } else {
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscoree++;
        compscore.innerText = compscoree;
    }
}

let gencomputerchoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];  
}

let playgame = (userchoice) => {
    console.log("userchoice is", userchoice);
    let compchoice = gencomputerchoice();
    console.log("the computerchoice is:", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (compchoice === "rock") {
            userwin = userchoice === "paper" ? true : false;
        } else if (compchoice === "paper") {
            userwin = userchoice === "rock" ? false : true;
        } else {
            userwin = userchoice === "paper" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

for (let choice of choices) {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice); 
        audio.play();
    });
}

btn.addEventListener("click", resetgame);
