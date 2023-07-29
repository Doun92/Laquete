let test = document.getElementById("test")
test.addEventListener('click', function () {
    for (const [key, value] of Object.entries(personnage)) {
        console.log(`${key}: ${value}`);
    }
})