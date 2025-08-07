
    async function getWeather() {
      const city = document.getElementById("city").value;
    //   const apiKey = "YOUR_API_KEY"; // replace with your actual API key
    const apiKey="87dee7a3ccc3ad1e7324060a99b44a49";
    
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === 200) {
          const html = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
          `;
          document.getElementById("weather-result").innerHTML = html;
        } else {
          document.getElementById("weather-result").innerHTML = `<p>City not found.</p>`;
        }
      } catch (err) {
        console.log(err);
        document.getElementById("weather-result").innerHTML = `<p>Error fetching weather data.</p>`;
      }
    }