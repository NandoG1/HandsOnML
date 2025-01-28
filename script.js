const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start");
const statsElement = document.getElementById("stats");

const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect.",
    "JavaScript is versatile and powerful.",
    "Coding is both an art and a science."
];

let startTime;
let timerInterval;

// Helper function to pick a random quote
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Start the typing test
startButton.addEventListener("click", () => {
    // Reset everything
    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();
    startButton.disabled = true;
    statsElement.textContent = "Time: 0s | Words: 0 WPM";

    // Set a random quote
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;

    // Start timer
    startTime = new Date();
    timerInterval = setInterval(updateStats, 100);
});

// Update the stats (time and WPM)
function updateStats() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);

    const wordsTyped = inputElement.value.split(" ").filter(word => word !== "").length;
    const wpm = elapsedTime > 0 ? Math.round((wordsTyped / elapsedTime) * 60) : 0;

    statsElement.textContent = `Time: ${elapsedTime}s | Words: ${wpm} WPM`;

    // Check if the input matches the quote
    if (inputElement.value.trim() === quoteElement.textContent.trim()) {
        clearInterval(timerInterval);
        inputElement.disabled = true;
        startButton.disabled = false;
        statsElement.textContent += " | Completed!";
    }
}

console.log("Hello World!")

setInterval(() => {
   console.log("Spamming ke dalam ") 
}, );

function take3(){
    console.log("Hello World!");

}

function hello(){
    console.log(hello.xyz)
}
