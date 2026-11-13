/* ============================================================
   Personal Portfolio — script.js
   ------------------------------------------------------------
   Two small, commented patterns. Read them, change the values,
   and make sure you can explain every line — you may be asked
   about them in the practical demonstration.
   ============================================================ */


/* ---------- 1. Typing effect --------------------------------
   Cycles through an array of phrases: type -> pause -> delete.
   HTML hook: <span id="typing"></span>
   ------------------------------------------------------------ */
const typingTarget = document.getElementById("typing");

const phrases = [
  "Computer Science Student",
  "Web Developer",
  "Future Software Engineer",
  "Technology Enthusiast"
];

if (typingTarget) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    // Accessibility: show one phrase and skip the motion.
    typingTarget.textContent = phrases[0];
  } else {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = phrases[phraseIndex];

      // Show the first `charIndex` characters of the current phrase.
      typingTarget.textContent = current.slice(0, charIndex);

      if (!deleting && charIndex < current.length) {
        charIndex += 1;                 // typing
        setTimeout(tick, 70);
      } else if (!deleting) {
        deleting = true;                // finished typing -> pause
        setTimeout(tick, 1600);
      } else if (charIndex > 0) {
        charIndex -= 1;                 // deleting
        setTimeout(tick, 35);
      } else {
        deleting = false;               // move to the next phrase
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, 400);
      }
    };

    tick();
  }
}


/* ---------- 2. Scroll reveal --------------------------------
   Any element with class="reveal" fades in when it enters the
   viewport. style.css supplies the starting state.
   ------------------------------------------------------------ */
const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
  } else {
    // Very old browser: just show everything.
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
}
