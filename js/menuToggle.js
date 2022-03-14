//Create a button and give it an ID of "hamburgerBtn"
//Attach an ID of "primaryNav" to the UL of the unordered list that holds your links
function toggleMenu() {
    document.getElementById("primaryNAV").classList.toggle("closed");
}
var x = document.getElementById('hamBTN');
x.onclick = toggleMenu; 