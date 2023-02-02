let weather = {
    key: "b3c52de4db26b8e7a9cab830ff3938b6",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.key
      ).then((response) => {
        console.log("weather app res", response)
        if (!response.ok) {
          alert("No data found.");
          throw new Error("No datafound.");
        }
        return response.json();
      }).then((data) => 
      this.displayWeather(data)
      
      );
    },
    displayWeather: function (data) {
      const { name } = data;
      console.log("here is isna",data)
      const { description } = data.weather[0];
  
      // const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const pressure = data.main.pressure;
      const tempMax = data.main.temp_max;
      const tempMin = data.main.temp_min;
      
  
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
  
      // document.querySelector(".pressure").innerHTML = "Pressure:" + pressure;
      document.querySelector(".t-max").innerHTML = "Max. Temperature:" + tempMax + "°C";
  
      document.querySelector(".t-min").innerHTML = "Min. Temperature:" + tempMin + "°C";
  
      document.querySelector(".w-speed").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      
    },
    search: function () {
      this.fetchWeather(document.querySelector(".s-bar").value);
    },
  };
  document.querySelector("#btn").addEventListener('click', function () {
    weather.search();
  });
  document.querySelector(".s-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("srinagar");
  
  
  
  
  