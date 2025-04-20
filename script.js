function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function unlockProfile() {
    var pin = document.getElementById("pin-input").value;
    if (pin === "13016") {
        document.getElementById("lock-screen").style.display = "none";}}
