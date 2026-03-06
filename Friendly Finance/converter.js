
      function convertUsdToInr(usd) {
        const conversionRate = 82.5;
        const inr = usd * conversionRate;
        return inr.toFixed(2);
      }
      function calculateConversion() {
        const usdInputElement = document.getElementById("usdAmount");
        const resultElement = document.getElementById("result");
        const usdValue = usdInputElement.value;
        const inrValue = convertUsdToInr(usdValue);

        resultElement.innerText = usdValue + " USD Equals INR " + inrValue;
      }

      const convertBtn = document.getElementById("convertBtn");
      convertBtn.addEventListener("click", calculateConversion);
 
