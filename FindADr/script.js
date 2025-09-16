
  window.onload = () => {
    setTimeout(() => {
      document.getElementById('formContainer').classList.add('show');
      document.getElementById('humanAnimation').classList.add('show');
    }, 2);
  };

  const quotes = [
    "“Health is the greatest gift.” – Buddha",
    "“The groundwork for all happiness is good health.” – Leigh Hunt",
    "“He who has health has hope; and he who has hope has everything.” – Arabian Proverb",
    "“An ounce of prevention is worth a pound of cure.” – Benjamin Franklin",
    "“Health is not valued till sickness comes.” – Thomas Fuller",
    "“Medicines cure diseases, but only doctors can cure patients.” – Carl Jung"
  ];

  let quoteIndex = 0;
  const quoteBox = document.getElementById('quoteBox');
  setInterval(() => {
    quoteBox.style.opacity = 0;
    setTimeout(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteBox.textContent = quotes[quoteIndex];
      quoteBox.style.opacity = 1;
    }, 500);
  }, 5000);

  document.getElementById("doctorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const doctorType = this.doctorType.value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");

    const doctorSuggestions = {
      cardiologist: ["Dr. Arjun Kapoor - 20 years experience", "Dr. Neha Sharma - Fortis Hospital"],
      dermatologist: ["Dr. Priya Mehta - SkinGlow Clinic", "Dr. Rajiv Sinha - Kaya Skin"],
      neurologist: ["Dr. Varun Patel - 15 yrs experience", "Dr. Meera Iyer - Apollo Hospitals"],
      psychiatrist: ["Dr. Alok Verma - MindCare Centre", "Dr. Sneha Rao - Calm Minds"],
      gynecologist: ["Dr. Ritu Bansal - Motherhood Hospital", "Dr. Anjali Menon - FemCare"]
    };

    const suggestions = doctorSuggestions[doctorType] || [];

    if (suggestions.length > 0) {
      resultsContainer.innerHTML = `
        <h3>Recommended Doctors:</h3>
        <ul>${suggestions.map(doc => `<li>${doc}</li>`).join('')}</ul>
      `;
      resultsContainer.style.display = 'block';
    } else {
      resultsContainer.innerHTML = '';
      resultsContainer.style.display = 'none';
    }
  });
