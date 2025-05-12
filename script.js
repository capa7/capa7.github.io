AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
});

// Configura partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 40 },
    size: { value: 3 },
    color: { value: "#b47b84" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#b47b84",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  setTimeout(() => {
    audio.play().catch(() => {
      console.log("Autoplay bloqueado, el usuario debe interactuar primero.");
    });
  }, 1000);
});

