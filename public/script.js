let intervalId;
let countdownId;
const timerDisplay = document.getElementById("timer");
const progressBar = document.querySelector(".progress-bar");
// Total circumference of the circle (2 * π * radius), used for the stroke-dasharray
const circleRadius = 28;
const circumference = 2 * Math.PI * circleRadius;

progressBar.style.strokeDasharray = circumference;

const fetchCryptData = async () => {
  const loader = document.querySelector(".loader-container");
  const tableBody = document.querySelector("#cryptoTable tbody");
  const section = document.querySelector(".section");
  // Show the loader and hide the table content
  loader.classList.remove("hidden");
  section.classList.add("hidden");
  tableBody.innerHTML = "";

  try {
    const response = await fetch("http://localhost:5000/getTop10");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      data?.top10Data.forEach((element, i) => {
        const eachline = `
            <tr>
              <td>${i + 1}</td>
              <td>${element.name}</td>
              <td>${element.last}</td>
              <td>${element.buy}</td>
              <td>${element.sell}</td>
              <td>${element.volume}</td>
              <td>${element.base_unit}</td>
            </tr>`;

        tableBody.innerHTML += eachline;
      });
    } else {
      console.log("Unable to fetch", data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  } finally {
    // Hide the loader after data is loaded
    loader.classList.add("hidden");
    section.classList.remove("hidden");
    // Reset the countdown after fetching data
    resetCountdown();
  }
};

// Theme toggle functionality (unchanged)
const themeToggle = document.querySelector(".input");
themeToggle.addEventListener("change", () => {
  const body = document.querySelector("body");

  if (themeToggle.checked) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
});

// Start countdown and animate circular progress bar
const startCountdown = () => {
  timeLeft = 60;

  countdownId = setInterval(() => {
    timeLeft--;

    // Update the timer text
    timerDisplay.textContent = timeLeft;

    // Calculate progress percentage
    const progress = (timeLeft / 60) * circumference;
    progressBar.style.strokeDashoffset = circumference - progress;

    if (timeLeft <= 0) {
      clearInterval(countdownId);
    }
  }, 1000);
};

// Reset the countdown to 60 seconds and start fetching data again
const resetCountdown = () => {
  clearInterval(countdownId);
  startCountdown();
};

// Initial fetch and countdown setup
fetchCryptData();
startCountdown();
// Re-fetch data every 60 seconds
intervalId = setInterval(fetchCryptData, 60000);
