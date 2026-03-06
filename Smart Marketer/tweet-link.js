
      function generateTweetLink() {
        const twitterInputElement = document.getElementById("twitterInput");
        const resultElement = document.getElementById("result");

        const twitterInput = twitterInputElement.value;
        const result = resultElement.value;

        const encodedTweet = encodeURIComponent(twitterInput);

        const link = "https://twitter.com/intent/tweet?text=" + encodedTweet;

        resultElement.innerText = link;
      }

      const buttonElement = document.getElementById("generateBtn");
      buttonElement.addEventListener("click", generateTweetLink);
 
