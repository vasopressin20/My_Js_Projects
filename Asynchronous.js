/* //setTimeout,setInterval,clearInterval(clears setInterval)

[[
    let intervalId = setInterval(() => {
    console.log("This will run only once if cleared");
  }, 2000);
  
 // Clear the interval after 2.5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 2500);
]] 
  */

const { Console } = require("console");
const { request } = require("http");
const { resolve } = require("path");

//callBackHell

const ice_cream_stocks = {
  fruits: ["strawberry", "banana", "apple", "mango"],
  liquid: ["water", "ice"],
  toppings: ["choclate", "nuts"],
  holder: ["cone", "cup", "stick"],
};
// callback hell
/* function order(call_production) {
  console.log("Ordering...");
  setTimeout(() => {
    console.log("order placed");
  }, 5000);

  call_production();
}

function production() {
  console.log("Production started");
  setTimeout(() => {
    console.log(`${ice_cream_stocks.fruits[0]} was selected `);
    setTimeout(() => {
      console.log(`${ice_cream_stocks.fruits[0]} was chopped into peices
        `);
      setTimeout(() => {
        console.log(
          `${ice_cream_stocks.liquid[0]}and ${ice_cream_stocks.liquid[1]} was mixed`        );
        setTimeout(() => {
          console.log(`${ice_cream_stocks.holder[2]} was taken`);
          setTimeout(() => {
            console.log(`${ice_cream_stocks.toppings[1]} were added `);
            setTimeout(() => {
              console.log("icecream was served");
              setTimeout(() => {
                console.log("production finished");
                setTimeout(() => {
                  console.log("order finished");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 1000);
  }, 2000);
}
 */
//order(production);

//see there are so many call backs please check in order to resolve this one promises are intoduced

let is_shop_open = false;

/* let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => resolve(work()), time);
    } else {
     reject("shop is closed");
      
    }
  });
};

order(1000, () => console.log("Order received"))
  .then(() => {
    return order(2000, () => console.log("Production started"));
  })
  .then(() => {
    return order(2000, () => console.log("Strawberry was selected"));
  })
  .then(() => {
    return order(2000, () => console.log("Strawberry was chopped into pieces"));
  })
  .then(() => {
    return order(2000, () => console.log("Milk and cream were mixed"));
  })
  .then(() => {
    return order(2000, () => console.log("Bowl was taken"));
  })
  .then(() => {
    return order(2000, () => console.log("Cherries were added"));
  })
  .then(() => {
    return order(2000, () => console.log("Ice cream was served"));
  })
  .then(() => {
    return order(2000, () => console.log("Production finished"));
  })
  .then(() => {
    return order(1000, () => console.log("Order finished"));
  })
  .catch((e)=>{
    console.log(e);
    console.log("Order failed due to customer left");
  })
  .finally(() => console.log("Shop closed due to day end"));
 */

// async annd await
/* let onSucess = false;
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onSucess === true) {
        resolve("you are sucess");
      } else {
        reject("hey u didnt succes");
      }
    }, 200);
  });
}

async function result() {
  try {
    let response = await getData();
    // here await is used to get resopnse let the user to resolve it sucessfully or reject it
    console.log("sucess :" + response);
  } catch (e) {
    console.log(e);
  }
}

async function result2() {
  getData().then((resolve) => {
    console.log(resolve);
  });
}

result();

 */


// fetch javascript

// fetch is async function that resolve promise,  when we fetch itjs will create new requet and get the url
/* const request = new request(url,{
    method: 'GET',
}) */


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
      