
      function calculateCalorieForMale(activityLevel) {
        if (activityLevel === "sedentry") {
          return 2000;
        } else if (activityLevel === "light") {
          return 2200;
        } else {
          return 2500;
        }
      }

      function calculateCalorieForFemale(activityLevel) {
        if (activityLevel === "sedentry") {
          return 1800;
        } else if (activityLevel === "light") {
          return 2000;
        } else {
          return 2200;
        }
      }

      // Decide based on gender
      function calculateCalorieCategory(activityLevel, gender) {
        if (gender === "male") {
          return calculateCalorieForMale(activityLevel);
        } else {
          return calculateCalorieForFemale(activityLevel);
        }
      }
      function calculateCalorie() {
        const ageElement = document.getElementById("age");
        const genderElement = document.getElementById("gender");
        const activityLevelElement = document.getElementById("activityLevel");
        const resultElement = document.getElementById("result");

        const age = parseFloat(ageElement.value);
        const gender = genderElement.value;
        const activityLevel = activityLevelElement.value;

        if (age <= 0) {
          resultElement.innerText = "Please enter a valid age.";
          return;
        }

        const calories = calculateCalorieCategory(activityLevel, gender);

        resultElement.innerText =
          "Estimated daily calorie needed: " + calories + "kcal";
      }

      const calorieBtn = document.getElementById("calorieBtn");
      calorieBtn.addEventListener("click", calculateCalorie);
