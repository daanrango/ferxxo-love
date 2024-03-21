document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("startButton");
  const backgroundMusic = document.getElementById("backgroundMusic");
  const background = document.querySelector(".background");

  let currentIndex = 0;

  playButton.addEventListener("click", function () {
    playButton.disabled = true;
    startSlideshow();
  });

  const images = [
    {
      id: 0,
      src: "./assets/banner-03.jpg",
      duration: 0.5,
      letra: "RE",
    },
    {
      id: 1,
      src: "./assets/banner-04.jpg",
      duration: 0.5,
      letra: "RE",
    },
    {
      id: 2,
      src: "./assets/banner-05.jpg",
      duration: 1,
      letra: "REINA",
    },
    {
      id: 3,
      src: "./assets/banner-06.jpg",
      duration: 3,
      letra: "mi amor, yo te extraño, bebé",
    },
    {
      id: 4,
      src: "./assets/banner-03.jpg",
      duration: 4,
      letra: "Qué hijueputa chimba sería vernos otra vez",
    },
    {
      id: 5,
      src: "./assets/banner-04.jpg",
      duration: 1,
      letra: "En serio, amor, no te vuelvas a perder",
    },
    {
      id: 6,
      src: "./assets/banner-05.jpg",
      duration: 4,
      letra: "De tocarte no dejes a nadie, bae",
    },
    // Agrega aquí más objetos de imágenes con rutas, duraciones y letras
  ];

  const fadeDuration = 250; // Duración del desvanecimiento en milisegundos

  function fadeOutBackground() {
    background.style.transition = `opacity ${fadeDuration / 1000}s ease-out`;
    background.style.opacity = 0;
  }

  const modal = document.getElementById("myModal");
  const modalText = document.getElementById("modalText");
  const closeModal = document.getElementsByClassName("close")[0];

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  function showNextImage() {
    fadeOutBackground();

    setTimeout(() => {
      const nextImage = images[currentIndex];
      background.style.backgroundImage = `url(${nextImage.src})`;
      background.style.transition = `opacity ${fadeDuration / 1000}s ease-in`;
      background.style.opacity = 1;

      playButton.innerHTML = nextImage.letra;

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;

        // Muestra el modal con el texto de la imagen actual
        modal.style.display = "block";
        modalText.textContent = nextImage.letra;

        showNextImage();
      }, nextImage.duration * 1000 - fadeDuration);
    }, fadeDuration);
  }

  function startSlideshow() {
    backgroundMusic.play();

    backgroundMusic.addEventListener("ended", function () {
      location.reload();
    });

    playButton.textContent = images[currentIndex].letra || "HOLA AMOR";

    setTimeout(() => {
      playButton.classList.add("slideshowActive");
    }, 100);

    showNextImage();
  }
});
