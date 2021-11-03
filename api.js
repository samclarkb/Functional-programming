const dataOphalen = () => {
	fetch(
		'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=05064fdc55f8c3320ca9ed2c12ae1fa4&artist?&format=json'
	) // Dit is de link van de API
		.then(response => response.json())
		.then(data => {
			gemiddelde(data)
			sorteren(data)
			printen(data)
		})
		.catch(err => {
			console.error(err) // mocht er iets niet kloppen catched de function een error
		})
}

const gemiddelde = data => {
	data.artists.artist.forEach(data => {
		data.average = data.playcount / data.listeners
		// Ik deel hier het totale aantal streams door het totaal aantal verschillende listeners, zodat ik het gemiddelde aantal nummers per luisteraar krijg
	})
}

const sorteren = data => {
	// functie voor het
	data.artists.artist.sort((a, b) => b.average - a.average) // ik doe zet b voor a, omdat ik het hoogste cijfer bovenaan de lijst wil hebben.
}

const printen = data => {
	data.artists.artist.forEach(data => {
		console.log(
			`De gemiddelde ${data.name} luisteraar heeft naar ${Math.round(
				data.average
			)} nummers geluisterd van ${data.name}`
		)
	})
}

dataOphalen() // aanroepen van de functie
