let home = 0
let homescore = document.getElementById("home-score")
let homefirst = document.getElementById("home-first")
let homesecond = document.getElementById("home-second")
let homethird = document.getElementById("home-third")

let guest = 0
let guestscore = document.getElementById("guest-score")
let guestfirst = document.getElementById("guest-first")
let guestsecond = document.getElementById("guest-second")
let guestthird = document.getElementById("guest-third")

function addScore(points, team) {
    if(team === "home") {
        home += points
        homescore.textContent = home
    }
    else {
        guest += points
        guestscore.textContent = guest
    }
}
homefirst.addEventListener("click", function(){addScore(1, "home")})
homesecond.addEventListener("click", function(){addScore(2, "home")})
homethird.addEventListener("click", function(){addScore(3, "home")})
guestfirst.addEventListener("click", function(){addScore(1, "guest")})
guestsecond.addEventListener("click", function(){addScore(2, "guest")})
guestthird.addEventListener("click", function(){addScore(3, "guest")})


