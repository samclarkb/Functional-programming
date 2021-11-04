function dataFetch() {
	fetch('./dataset.json')
		.then(response => response.json())
		.then(data => {
			removeCapitals(data), changeQuestionToWord(data)

			return data
		})
		.then(cleanedData => {
			console.table(cleanedData)
		})
}

function removeCapitals(data) {
	for (let i = 0; i < data.length; i++) {
		data[i]['Wat is je favoriete windrichting?'] =
			data[i]['Wat is je favoriete windrichting?'].toLowerCase()
		// console.log(data[i]['Wat is je favoriete windrichting?'])
	}
}

function changeQuestionToWord(data) {
	for (let i = 0; i < data.length; i++) {
		data[i]['Wat is je favoriete soort huisdier?'] =
			data[i]['Wat is je favoriete soort huisdier?'].toLowerCase()
		// console.log(data[i]['Wat is je favoriete soort huisdier?'])
	}
}

dataFetch()

/* Utility functie om hoofdletters te verwijderen */
// function removeCapitals(string) {
// 	/* Ik wil hem alleen op strings uitvoeren, dus kijk ik of de parameter ook echt een string is */
// 	if (typeof string === 'string') {
// 		return string.toLowerCase()
// 	} else {
// 		return string
// 	}
// }

// console.table.removeCapitals(array)
// function hallo() {
// 	const str = 'Hello World!'
// 	str.toLowerCase()
// 	console.log(str)
// }

// function splitString(arr, key) {
// 	const kledingKleurKey =
// 		'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)'
// 	var result = arr.map(item => item[key].toString().toLowerCase())
// 	result.sort()
// 	return result
// 	// const split = kledingKleurKey.split()

// 	// console.log(split)
// }

// const split = 'Hello World. How are you doing?'
// const splittest = split.split(' ', 3)

// console.log(splittest)

// const dataset = './dataset.json'
// const key =
// 	'Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)'

// fetchData(dataset).then(data => {
// 	console.log('data fetched')
// 	const windrichtingen = parseWindrichting(data, key)
// 	console.log(windrichtingen)
// })

// async function fetchData(url) {
// 	try {
// 		const response = await fetch(url)
// 		const data = await response.json()
// 		return data
// 	} catch {
// 		console.log("Can't fetch data")
// 	}
// }

// function split(Arr, Key) {
// 	const myString = key
// 	const splits = myString.split(/(\d)/)

// 	console.log(splits)
// }

// function parseWindrichting(Arr, key) {
// 	const final = Arr.map(item => item[key].toString().toLowerCase().split())
// 	final.sort()
// 	return final
// 	// return Arr;
// }

// function ifEmptyChangeToZero(string) {
// 	if (typeof string === 'string' && string.length < 1) {
// 		return 'Geen antwoord'
// 	} else {
// 		return string
// 	}
// }
