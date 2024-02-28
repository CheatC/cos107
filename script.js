// Define the target date
const currentDate = new Date();
let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);
let diff = (Date.parse(targetDate) - Date.parse(currentDate)) / 1000;
console.log(diff)

// Update the countdown timer every second
setInterval(() => {
  diff--;




  // Check if the target date has passed
  if (diff <= 0) {
    // If the target date has passed, clear the interval and update the countdown timer element
    clearInterval(this);
    document.getElementById("divCount").innerHTML = 'Countdown complete!';
    return;
  }

  // Convert the difference to days, hours, minutes, and seconds
  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) /  (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = Math.floor(diff % 60);
  console.log(days, hours, minutes, seconds)
  // Update the countdown timer element with the remaining time
  document.getElementById("days").innerHTML = zero(days);
  document.getElementById("hours").innerHTML = zero(hours);
  document.getElementById("minutes").innerHTML = zero(minutes);
  document.getElementById("seconds").innerHTML = zero(seconds) ;
}, 1000);

function zero(value){
  value = value.toString()
  if(value.length < 2){
    return`0${value}`
  }else{
    return `${value}`
  }

}

