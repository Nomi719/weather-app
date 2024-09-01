
const apiKey = 'b2f0bcffb552c482bc16950764fb96cb'
const getWeather = async(city)=>{
    try {
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
         .then((res) => res.json())
         .then((data) => {
             return data;
         })
        
    } catch (error) {
     console.log("error", error.message)   
    }
}
export default getWeather;

// const getWeather = async (city) => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b2f0bcffb552c482bc16950764fb96cb`); // Replace YOUR_API_KEY with your actual API key
  
//       if (!response.ok) {
//         throw new Error(`Error fetching weather data for ${city}: ${response.status}`);
//       }
  
//       const data = await response.json();
//       return data;
//     } catch (error) { 
//       console.error('Error:', error.message);
     
//     }
//   };
  
//   export default getWeather;