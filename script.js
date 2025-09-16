
    function getLocation() {
      const output = document.getElementById("location-message");
      const cards = document.getElementById("cards-container");

      if (!navigator.geolocation) {
        output.textContent = "Geolocation is not supported by your browser.";
        return;
      }

      output.textContent = "Fetching your location...";

      navigator.geolocation.getCurrentPosition(success, error);

      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        fetch(url, {
          headers: {
            "User-Agent": "NirogkaayaHealthApp/1.0"
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            const address = data.display_name;
            output.innerHTML = `📍 Your Location:<br><strong>${address}</strong><br><br>Please register below to continue.`;
            cards.style.display = "flex";
            if (data.address && data.address.country_code === 'in') {
              translatePage('hi');
            }
          })
          .catch(e => {
            output.textContent = `Could not fetch address. Error: ${e.message}`;
          });
      }

      function error(err) {
        let message = '';
        switch (err.code) {
          case err.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
          case err.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
          case err.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
          case err.UNKNOWN_ERROR:
            message = "An unknown error occurred.";
            break;
        }
        output.textContent = message;
      }
      
    }
  const images = [
    "./resource/Dr1.jpg",
    "./resource/Dr2.jpg",
    "./resource/Dr4.jpg",
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("slideshow-img");

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
    }, 500); // fade-out time
  }

  setInterval(showNextImage, 3000); // Change image every 3 seconds

const videoCallModal = document.getElementById('video-call-modal');

function openDoctorConnectModal() {
  videoCallModal.style.display = 'block';
}

function closeVideoCallModal() {
  videoCallModal.style.display = 'none';
}

window.addEventListener('click', function(event) {
  if (event.target == videoCallModal) {
    closeVideoCallModal();
  }
});

const translations = {
  hi: {
    detect_location: '📍 मेरा स्थान पहचानें',
    hero_title: 'ग्रामीण भारत के लिए डॉक्टर',
    hero_subtitle: 'स्मार्ट संजीवनी - सभी के लिए कल्याण',
    feature_time: '🕒 आपका समय बचाता है',
    feature_fingertips: '💬 डॉक्टर आपकी उंगलियों पर',
    feature_prescription: '📄 अपना पर्चा ऑनलाइन प्राप्त करें',
    connect_doctor: 'डॉक्टर से जुड़ें',
    book_safar: 'सफर-ए-सेहत बुक करें',
    location_message: 'हमें आपके स्थान की जानकारी चाहिए <br> कृपया अपना स्थान साझा करें',
    register_doctor: 'डॉक्टर के रूप में पंजीकरण करें',
    find_doctor: '🙋 एक डॉक्टर खोजें',
    villages_covering: 'गांवों को कवर करना',
    consultations: 'परामर्श',
    specialist_doctors: 'विशेषज्ञ डॉक्टर टीम',
    confidential_title: '100% गोपनीय',
    confidential_text: 'सभी परामर्श निजी और सुरक्षित हैं। आप कभी भी चैट हटा सकते हैं।',
    certified_doctors_title: 'प्रमाणित डॉक्टर',
    certified_doctors_text: 'पूरे भारत में आपकी सेवा में अनुभवी और प्रमाणित पेशेवर।',
    saves_money_title: 'पैसे बचाता है और मुफ्त परामर्श',
    saves_money_text: 'कभी भी, कहीं भी परामर्श करें। कोई कतार नहीं, कोई प्रतीक्षा कक्ष नहीं, बस देखभाल।',
    ayushmaan_card_title: 'आयुष्मान कार्ड',
    ayushmaan_card_text: 'आयुष्मान कार्ड धारकों के लिए दवा और मुफ्त परामर्श।',
  }
};

function translatePage(language) {
  document.querySelectorAll('[data-translate-key]').forEach(element => {
    const key = element.getAttribute('data-translate-key');
    if (translations[language] && translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });
}