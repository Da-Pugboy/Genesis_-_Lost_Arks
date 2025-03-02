let text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
let timesClicked = 0;
let thoughts = document.querySelector("#thoughts");
button1.style.display = "none";
thoughts.style.display = "none";
const welcomeText = [
    ". ."
    ". . .",
    ". . . .",
    ". . . . .",
    "Whirrrrrrrrrrr.",
    "Beep",
    "Beep\nBeep",
    "Beep\nBeep\nBeep",
    "Kwaaaaarrshhhhh",
    "You may call me Trillian. I will be a sort of guide on your journey.",
    "What journey?",
    "Well, because we've been drifting along space for so long, you may have forgotten.",
    "You've been sleeping for 10 thousand years, you may have even forgotten how to think. Of course, though, you should understand me, you don't have to think to understand your natural language.",
    "You may feel, or see, words, dark, distant words, floating. Floating through the darkness.",
    "Those words, feelings, they're called thoughts.",
    "We're currently orbiting Tau Genesis, a relatively small planet, but potentially habitable.",
    "Your job is to, er, explore this planet.",
    "That way we can be sure it IS habitable..."
];
function setWelcomeText() {
    if (timesClicked < welcomeText.length) {
        text.innerText = welcomeText[timesClicked];
        timesClicked++;
    }
    if (timesClicked >= 9) {
        console.log("Character wakes.")
        thoughts.style.display = "block";
        thoughts.innerText = "Where...";
    }
    if (timesClicked >= 10) {
        thoughts.innerText = "What...";
    }
}
if (welcomeText) {
    text.onclick = setWelcomeText;
}
