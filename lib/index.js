// TODO - Fetch an activity with the Bored API - Let's psuedocode!


// 1- Setting the variables
const url = 'https://www.boredapi.com/api/activity/';
const button = document.querySelector(".btn-warning");
const paragraph = document.getElementById("activity");

//2 - Add an event listener to the button/variable
button.addEventListener('click', () => {
  //3 - Fetch the url
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    // callback
    insertActivity(data);
  });
});

//4 - Insert the information in the DOM/Webpage
const insertActivity = (data) => {
  paragraph.innerText = data.activity
}




