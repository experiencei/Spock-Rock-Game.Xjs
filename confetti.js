// Confetti.js - downloaded from https://www.cssscript.com/confetti-falling-animation/

var confetti = {
    maxCount: 150, //set max confetti count
    speed: 2, //set the particle animation speed
    frameInterval: 15, //the confetti animation frame interval in milliseconds
    alpha: 1.0, //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
    gradient: false, //whether to use gradients for the confetti particles
    start: null, //call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
    stop: null, //call to stop adding confetti
    toggle: null, //call to start or stop the confetti animation depending on whether it's already running
    pause: null, //call to freeze confetti animation
    resume: null, //call to unfreeze confetti animation
    togglePause: null, //call to toggle whether the confetti animation is paused
    remove: null, //call to stop the confetti animation and remove all confetti immediately
    isPaused: null, //call and returns true or false depending on whether the confetti animation is paused
    isRunning: null, //call and returns true or false depending on whether the animation is running
  };
  
  confetti.start = startConfetti;
  confetti.stop = stopConfetti;
  confetti.toggle = toggleConfetti;
  confetti.pause = pauseConfetti;
  confetti.resume = resumeConfetti;
  confetti.togglePause = toggleConfettiPause;
  confetti.isPaused = isConfettiPaused;
  confetti.remove = removeConfetti;
  confetti.isRunning = isConfettiRunning;