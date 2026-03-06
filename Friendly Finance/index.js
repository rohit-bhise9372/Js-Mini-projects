
      const calculateBtn = document.getElementById("calculateBtn");

      function calculateRequiredSavings(total, months, current) {
        const remaining = total - current;
        const requiredSavingsPerMonth = remaining / months;
        return requiredSavingsPerMonth.toFixed(2);
      }

      function handleButtonClick() {
        const totalInputElement = document.getElementById("total");
        const monthInputElement = document.getElementById("months");
        const currentInputElement = document.getElementById("current");
        const resultElement = document.getElementById("result");

        const total = totalInputElement.value;
        const months = monthInputElement.value;
        const current = currentInputElement.value;
        const requiredSavings = calculateRequiredSavings(
          total,
          months,
          current
        );

        resultElement.innerText =
          "You need to save Rs: " + requiredSavings + " per month";
      }

      calculateBtn.addEventListener("click", handleButtonClick);
   
