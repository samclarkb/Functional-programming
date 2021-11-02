const dataOphalen = () => {
	fetch(
		'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=05064fdc55f8c3320ca9ed2c12ae1fa4&artist?&format=json'
	) // Dit is de link van de API
		.then(response => response.json())
		.then(data => {
			console.log(data)
			aantalKeerBeluisterd(data)
			aantaLuisteraars(data)
			gemiddelde(data)
		})
		.catch(err => {
			console.error(err) // mocht er iets niet kloppen catched de function een error
		})
}

const aantalKeerBeluisterd = data => {
	data.artists.artist.forEach(data => {
		console.log(`${data.name}, aantal keer beluisterd: ${data.playcount}`)
	})
}

const aantaLuisteraars = data => {
	data.artists.artist.forEach(data => {
		console.log(`${data.name}, aantal luisteraars: ${data.listeners}`)
	})
}

const gemiddelde = data => {
	data.artists.artist.forEach(data => {
		console.log(`${data.name}, Gemiddelde: ${data.playcount / data.listeners}`)
	})
}

dataOphalen() // aanroepen van de functie
