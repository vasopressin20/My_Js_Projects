
async function issLocation() {
    try {
      const url = "http://api.open-notify.org/iss-now.json"; // ISS API URL
      let response = await fetch(url);
      let data = await response.json(); // Parse the JSON response
      console.log(data); // Log the ISS data
  
      // Extract latitude and longitude
      const latitude = data.iss_position.latitude;
      const longitude = data.iss_position.longitude;
  
      // Call geolocation function
      geolacation(latitude, longitude);
    } catch (e) {
      console.log("ERROR: " + e);
    }
  }
  
  function geolacation(latitude, longitude) {
    async function getLocationName(lat, lng) {
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`; // OpenStreetMap API
  
      try {
        const response = await fetch(url);
        const data = await response.json();
  
        if (data.display_name) {
          console.log(`Location Name: ${data.display_name}`);
        } else {
          console.log("No results found on the map due to no tracable location of population.");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
  
    // Call getLocationName with the extracted latitude and longitude
    getLocationName(latitude, longitude);
  }
  
  // Execute the function to fetch the ISS location and convert to area name
  issLocation();
  