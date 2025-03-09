/* function createTimer(duration) {
  let timeLeft = duration;
  return function () {
    if (timeLeft > 0) {
      let i;
      
        for (i = timeLeft; i >= 0; i--) {
            setTimeout((i) => {
          console.log(`Time left: ${i}s`);
        }
        , 3000);}
    } else {
      console.log("Time's up!");
    }
  };
} */

// const timer = createTimer(10);
 // Output: Time left: 5s // Output: Time left: 4s
/* function createTimer(duration) {
    let timeLeft = duration;
    return function () {
      if (timeLeft > 0) {
        for (let i = timeLeft; i >= 0; i--) {
          setTimeout(() => {
            if (i > 0) {
              console.log(`Time left: ${i}s`);
            } else {
              console.log("Time's up!");
            }
          }, 1000); // Adjust delay for each second
        }
      }
    };
  }
  
  const timer = createTimer(1000);
  timer(); */
  function createTimer(duration) {
    let timeLeft = duration; // Duration in seconds
    return function () {
      if (timeLeft > 0) {
        for (let i = timeLeft; i >= 0; i--) {
          setTimeout(() => {
            const minutes = Math.floor(i / 60); // Convert seconds to minutes
            const seconds = i % 60; // Remaining seconds
            if (i > 0) {
              console.log(`Time left: ${minutes}m ${seconds}s`);
            } else {
              console.log("Time's up!");
            }
          }, (timeLeft - i) * 1000); // Delay in milliseconds for each second
        }
      }
    };
  }
  
  const timer = createTimer(125); // 125 seconds (2 minutes 5 seconds)
  timer()