
      const calculateBtn = document.getElementById("calculateBtn");

      function calculateFinalDiscount(total, discountPercentage) {
        const savedAmount = (total * discountPercentage) / 100;
        const finalPrice = total - savedAmount;
        return {
          savedAmount: savedAmount.toFixed(2),
          finalPrice: finalPrice.toFixed(2),
        };
      }
      function processDiscount() {
        const totalInputAmount = document.getElementById("inputAmount");
        const totaldiscountAmount = document.getElementById("inputDiscount");
        const resultElement = document.getElementById("result");

        const total = Number(totalInputAmount.value);
        const discountPercentage = Number(totaldiscountAmount.value);

        const requiredDiscount = calculateFinalDiscount(
          total,
          discountPercentage
        );

        resultElement.innerText =
          "You saved " +
          "\u20B9" +
          requiredDiscount.savedAmount +
          "." +
          " Final price is " +
          "\u20B9" +
          requiredDiscount.finalPrice +
          ".";
      }

      calculateBtn.addEventListener("click", processDiscount);
    
