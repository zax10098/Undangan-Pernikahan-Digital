window.onload = function() {
  let countdownFrom = {
      days: 29,
      hours: 20,
      minutes: 50,
      seconds: 59
  };

  function updateCountdownDisplay() {
      document.getElementById('days-value').innerText = countdownFrom.days.toString().padStart(2, '0');
      document.getElementById('hours-value').innerText = countdownFrom.hours.toString().padStart(2, '0');
      document.getElementById('minutes-value').innerText = countdownFrom.minutes.toString().padStart(2, '0');
      document.getElementById('seconds-value').innerText = countdownFrom.seconds.toString().padStart(2, '0');
  }

  function countdownTick() {
      countdownFrom.seconds--;

      // Jika detik mencapai 0, reset ke 59 dan kurangi menit
      if (countdownFrom.seconds < 0) {
          countdownFrom.seconds = 59;
          countdownFrom.minutes--;

          // Jika menit mencapai 0, reset ke 59 dan kurangi jam
          if (countdownFrom.minutes < 0) {
              countdownFrom.minutes = 59;
              countdownFrom.hours--;

              // Jika jam mencapai 0, reset ke 23 dan kurangi hari
              if (countdownFrom.hours < 0) {
                  countdownFrom.hours = 23;
                  countdownFrom.days--;

                  // Jika hari sudah habis, hentikan countdown
                  if (countdownFrom.days < 0) {
                      clearInterval(countdownInterval);
                      countdownFrom.days = 0;
                      countdownFrom.hours = 0;
                      countdownFrom.minutes = 0;
                      countdownFrom.seconds = 0;
                      console.log("Countdown selesai!");
                  }
              }
          }
      }

      // Update tampilan
      updateCountdownDisplay();
  }

  // Update tampilan awal
  updateCountdownDisplay();

  // Set interval setiap 1 detik
  let countdownInterval = setInterval(countdownTick, 1000);
};



const slideButton = document.getElementById('slide-button');
const slideContainer = document.getElementById('slide-container');

slideButton.addEventListener('click', () => {
  slideContainer.classList.toggle('slide-down');
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

  function bukaUndangan() {
    // Mengaktifkan scroll pada body
    document.body.style.overflow = "auto";

    // Menampilkan navbar
    document.getElementById("navbar").style.display = "flex";

    // Scroll otomatis ke section mempelai
    document.getElementById("mempelai").scrollIntoView({
      behavior: 'smooth'
    });
  }
