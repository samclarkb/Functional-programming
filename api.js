function dataOphalen() {
	fetch(
		'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=netherlands&api_key=05064fdc55f8c3320ca9ed2c12ae1fa4&artist?&format=json'
	)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.error(err)
		})
}

dataOphalen()

// 05064fdc55f8c3320ca9ed2c12ae1fa4&artist?
