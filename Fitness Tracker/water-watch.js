
      function calculateFinalIntake(weight) {
        if (weight < 50) {
          return 1.5;
        } else if (weight <= 70) {
          return 2.0;
        } else {
          return 2.5;
        }
      }

      function calculateSeasonIntake(baseLitres, season) {
        if (season === "summer") {
          return baseLitres + 0.5;
        } else if (season === "winter") {
          return baseLitres + 0.3;
        } else {
          return baseLitres;
        }
      }

      function calculateIntake() {
        const weightElement = document.getElementById("weight");
        const seasonElement = document.getElementById("season");
        const resultElement = document.getElementById("result");

        const weight = parseFloat(weightElement.value);
        const season = seasonElement.value;

        if (weight <= 0) {
          resultElement.innerText = "Enter a valid weight.";
          return;
        }
        const baseLitres = calculateFinalIntake(weight);
        const finalBaseLitres = calculateSeasonIntake(baseLitres, season);

        resultElement.innerText =
          "Drink at least " + finalBaseLitres + " L of water daily.";
      }

      const calculateBtn = document.getElementById("calculateBtn");
      calculateBtn.addEventListener("click", calculateIntake);
  
