// Užduotis 2 - Klaviatūros įvykio apdorojimas
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("input");
    const paragraph = document.getElementById("paragraph");

    input.addEventListener("keydown", (event) => {
        console.log(`Paspaustas klavišas: ${event.key}`);
        paragraph.innerText = `Jūs paspaudėte klavišą: ${event.key}`;
        if (event.key === "Enter") {
            input.value = "";
            paragraph.innerText = "Enter klavišas buvo paspaustas, įvestis išvalyta.";
        }
    })
});