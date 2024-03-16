function checkPalindrome() {
   let userInput = document.getElementById("valueTOcheck").value;
   if(userInput === ''){
      alert('define the input please');
      return;
   }
   let value = userInput;
   let results = document.getElementById("after_check");
   const checkDataType = typeof(userInput);
   let reverseArray;
   let array;
   let reverse;

   if (checkDataType === "string") {
       userInput = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
       userInput = userInput.split(/\s+/).join("");
       array = userInput.split("");
       reverseArray = array.slice().reverse();
       reverse = reverseArray.join("");
       if (userInput === reverse) {
           results.innerText = value + " is a palindrome";
       } else {
           results.innerText = value + " is not a palindrome";
       }
   } else {
       results.innerText = "Input is not a string";
   }
}

checkPalindrome();