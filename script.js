function generateName() {
    const city = document.getElementById("city").value.trim();
    const pet = document.getElementById("pet").value.trim();

    if (city && pet) {
        document.getElementById("result").textContent =
            `Your band name could be: ${city} ${pet}s!`;
    } else {
        document.getElementById("result").textContent =
            "Please fill in both fields!";
    }
}

