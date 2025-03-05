let text = document.querySelector("#text");
const button1 = document.querySelector("#button1");
let timesClicked = 0;
let thoughts = document.querySelector("#thoughts");
let journal = document.querySelector("#journal");
let finishedWelcomeText = false;

// Hide button and thoughts initially
button1.style.display = "none";
thoughts.style.display = "none";

const welcomeText = [
    ". .",
    ". . .",
    ". . .",
    ". . .",
    "Whirrrrrrrrrrr.",
    "Beep",
    "Beep",
    "Beep",
    "Kwaaaaarrshhhhh",
    "You may call me Trillian. I will be a sort of guide on your journey.",
    "What journey?",
    "Well, because we've been drifting along space for so long, you may have forgotten.",
    "You've been sleeping for 10 thousand years, you may have even forgotten how to think. Of course, though, you should understand me, you don't have to think to understand your natural language.",
    "You may feel, or see, words, dark, distant words, floating. Floating through the darkness.",
    "Those words, feelings, they're called thoughts.",
    "We're currently orbiting Tau Genesis, a relatively small planet, but potentially habitable.",
    "Your job is to, er, explore this planet.",
    "That way we can be sure it IS habitable...",
    "Now, if I can just wake you up...",
    "Yes, good.",
    "Soon your eyes should open...",
    "We're entering the atmosphere now.",
    "While we wait for your pod to to regenerate you, I'll tell more about this planet.",
    "We're completely sure it's fit for life, but could humans live on it too?",
    "Maybe there's already an intelligent species living on it, maybe the creatures there can only live there because they're... different.",
    "We're entering landing mode now...",
    "You know, you might think differently, because of the effects of being in that pod for so long.",
    'You might think "You see an airplane" rather than "That is an airplane."',
    "It's so strange, the way things work."
];

console.log(welcomeText.length);

function typeWriterEffect(element, text, speed = 50) {
    element.innerHTML = ""; // Clear existing text
    let i = 0;

    function type() {
        if (i < text.length) {
            let char = text.charAt(i) === " " ? "&nbsp;" : text.charAt(i); // Preserve spaces
            element.innerHTML += char;
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}


function setWelcomeText() {
    if (timesClicked < welcomeText.length) {
        // text.innerText = welcomeText[timesClicked];
        typeWriterEffect(this, welcomeText[timesClicked], 50);
        timesClicked++;
    }

    if (timesClicked === 9) {
        console.log("Character wakes.");
        thoughts.style.display = "block";
        thoughts.style.animation = "fadeIn 5s";
        thoughts.innerText = "Whaa... ?";
    }

    else if (timesClicked === 10) {
        thoughts.style.animation = "fadeOut 5s";
        thoughts.innerText = "Wha... ?";
    }

    if (timesClicked >= 11) {
        thoughts.style.animation = "fadeOut 5s";
        setTimeout(() => {
            thoughts.style.display = "none";
        }, 5000); // Hides thoughts after fade-out
    }

    else if (timesClicked === 23) {
        thoughts.style.display = "block";
        thoughts.style.animation = "fadeIn 5s";
        thoughts.innerText = "Pod... regenerate...";
    }

    else if (timesClicked === 24) {
        thoughts.style.animation = "fadeOut 5s";
        thoughts.innerText = "Tau Genesis...";
    }

    if (timesClicked >= welcomeText.length) {
        console.log("Hiding text.");
        text.style.display = "none";
        document.addEventListener("keydown", function(event) {
            if (event.key === "j") {
                console.log("Opening journal.");   
            journal.style.display = "block";
        }
        });
    }

}

// Attach event listener to button1 (not text)
text.onclick = setWelcomeText;
