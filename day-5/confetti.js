const confetti = document.querySelector("#confetti");

confetti.addEventListener("click", () => {
  const duration = 2000;
  let iteration = 0;
  
  const confettiInterval = setInterval(() => {
    if (iteration === 30) {
      clearInterval(confettiInterval);
      return;
    }

    const confettiElement = document.createElement("span");
    confettiElement.innerHTML = "🎉";
    confettiElement.style.position = "fixed";
    confettiElement.style.zIndex = "1000";
    confettiElement.style.fontSize = Math.random() * 100 + "px";
    confettiElement.style.left = confetti.offsetLeft + confetti.offsetWidth / -10 + "px";
    confettiElement.style.top = confetti.offsetTop + confetti.offsetHeight / -20 + "px";
    confettiElement.style.opacity = 1;
    confettiElement.style.transition = `all ${duration / 1000}s ease`;

    document.body.appendChild(confettiElement);

    setTimeout(() => {
      confettiElement.style.top = confettiElement.offsetTop - window.innerHeight + "px";
      confettiElement.style.left = confettiElement.offsetLeft + (Math.random() * window.innerWidth - confetti.offsetLeft - confetti.offsetWidth / 2) + "px";
      confettiElement.style.opacity = 0;
    }, 50);

    iteration++;
  }, 50);
});