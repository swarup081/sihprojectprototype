
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
          .then(response => response.json())
          .then(data => {
            const address = data.display_name;
            output.innerHTML = `📍 Your Location:<br><strong>${address}</strong><br><br>Please register below to continue.`;
            cards.style.display = "flex";
          })
          .catch(() => {
            output.textContent = "Could not fetch address.";
          });
      }

      function error() {
        output.textContent = "Permission denied or unable to retrieve location.";
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
  