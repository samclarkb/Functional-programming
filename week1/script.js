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
