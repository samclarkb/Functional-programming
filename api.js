const dataOphalen = () => {
	fetch(
		'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=05064fdc55f8c3320ca9ed2c12ae1fa4&artist?&format=json'
	) // Dit is de link van de externe API
		.then(response => response.json())
		.then(data => {
			// Hier roep ik al mijn functions aan
			gemiddeldeBerekenen(data)
			sorterenVanHoogNaarLaag(data)
			dataPrintenNaarDeConsole(data)
		})
		.catch(err => {
			console.error(err) // Als er iets mis gaat geeft deze catch een error weer in de console
		})
}

const gemiddeldeBerekenen = data => {
	data.artists.artist.forEach(data => {
		// Ik maak hier een nieuwe property genaamd average aan
		// Ik deel hier het totale aantal streams door het totaal aantal verschillende listeners, zodat ik het gemiddelde aantal nummers per luisteraar krijg
		data.average = data.playcount / data.listeners
		// Hier rond ik het gemiddelde af naar een rond getal
		data.average = Math.round(data.average)
	})
}

const sorterenVanHoogNaarLaag = data => {
	// Dit is een functie om de gemiddeldes op chronologische volgorde te zetten.
	data.artists.artist.sort((a, b) => b.average - a.average) // ik zet b voor a, omdat ik het hoogste cijfer bovenaan de lijst wil hebben.
}

const dataPrintenNaarDeConsole = data => {
	data.artists.artist.forEach(data => {
		// De backticks maken het mogelijk om extra tekst aan de string toe te voegen
		console.log(
			`De gemiddelde ${data.name} luisteraar heeft naar ${data.average} nummers geluisterd van ${data.name}`
		)
	})
}

dataOphalen() // Hier roep ik de functie aan, die ervoor zorgt dat alle andere functies in actie worden gezet
