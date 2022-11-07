var home = 0;
var guest = 0;
var homeScore = document.getElementById("home-score");
var guestScore = document.getElementById("guest-score");
function addHome1() {
    home += 1;
    homeScore.textContent = home;
}
function addHome2() {
    home += 2;   
    homeScore.textContent = home;
}
function addHome3() {
    home += 3;  
    homeScore.textContent = home; 
}
function addGuest1() {
    guest += 1;   
    guestScore.textContent = guest;
}
function addGuest2() {
    guest += 2;   
    guestScore.textContent = guest;
}
function addGuest3() {
    guest += 3;   
    guestScore.textContent = guest;
}

function reset() {
    home = 0;
    guest = 0;
    homeScore.textContent = home; 
    guestScore.textContent = guest;
}