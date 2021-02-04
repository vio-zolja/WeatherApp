// time

let now = new Date();

let day = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

let time = document.querySelector("#time");
time.innerHTML = `${day} ${month}, ${hour}:${minutes}`;

// units

function unitC(event) {
  event.preventDefault();
  let c = document.querySelector(".unit");
  c.innerHTML = `°C`;
}

let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", unitC);

function unitF(event) {
  event.preventDefault();
  let c = document.querySelector(".temperature");
  let f = document.querySelector(".unit");
  c.innerHTML = (5 / 9) * (farenheit - 32);
  f.innerHTML = `°F`;
}

let farenheit = document.querySelector(".farenheit");
farenheit.addEventListener("click", unitF);

// current

let button1 = document.querySelector("#current");
button1.addEventListener("click", currentTemp);

function currentTemp(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(current);
}

function current(position) {
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;
  let apiKey = "0068e005837877065ece61c012cdd35c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrent);
}

function displayCurrent(response) {
  console.log(response.data);

  let place = document.querySelector(".city");
  let temperature = document.querySelector(".temperature");

  place.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(response.data.main.temp);
}
// search

let form = document.querySelector("form");


function search (event) {
  event.preventDefault();
  let apiKey = "0068e005837877065ece61c012cdd35c";
 

  let input = document.querySelector("#input");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`

  

  function searchData (response){
    console.log(response.data)

  let temperature = document.querySelector(".temperature");
  let city =  document.querySelector(".city");
  
  temperature.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name
}
  
  axios.get(apiURL).then(searchData);
    
}

form.addEventListener("submit", search);


