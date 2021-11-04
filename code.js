// ================ REQUEST WITH FETCH
// fetch('http://aio.baroneracing.ie:82/lotto/results?fbclid=IwAR27YNClMuocFtqeinLs5wQDiM041Kujki3wJc2qaTkAFo5wgTqoxdkzxz0')
fetch('./results.json')
	.then(data => data.json())
	.then(res => setNumbers(res))
// .catch(e => console.log(e))

// setTimeout(() => {
// 	fetch('http://aio.baroneracing.ie:82/lotto/results?')
// 		.then(data => data.json())
// 		.then(res => setNumbers(res))
// }, 60001)

// ================ AJAX REQUEST 
// const requestURL = 'http://aio.baroneracing.ie:82/lotto/results?fbclid=IwAR3me9uLLADQS_J3rmPsM7QGaBMQ5cwpRDm79Do2op51P_2gP9sqedpZ5eI'

// function sendRequest(method, url, body = null) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()

// 		xhr.open(method, url)

// 		xhr.responseType = 'json'
// 		xhr.setRequestHeader('Content-Type', 'application/json')

// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject(xhr.response)
// 			} else {
// 				resolve(xhr.response)
// 			}
// 		}

// 		xhr.onerror = () => {
// 			reject(xhr.response)
// 		}

// 		xhr.send(JSON.stringify(body))
// 	})
// }

// sendRequest('GET', requestURL)
// 	.then(data => setNumbers(data))
// 	.catch(err => console.log(err))
// ===============================================================

function setNumbers(res) {
	// ================================ UPDATE DATES
	for (let i = 0; i < 4; i++) {
		if (res.irish_lucky[i]) document.querySelectorAll('.date.irish-item')[i].innerHTML = res.irish_lucky[i].date
		if (res.euro_lucky[i]) document.querySelectorAll('.date.euro-item')[i].innerHTML = res.euro_lucky[i].date
		if (res.forty_nine[i]) document.querySelectorAll('.date.s49-item')[i].innerHTML = res.forty_nine[i].date
		if (res.daily_lucky[i]) document.querySelectorAll('.date.daily-item')[i].innerHTML = res.daily_lucky[i].date
		if (res.uk_lucky[i]) document.querySelectorAll('.date.uk-item')[i].innerHTML = res.uk_lucky[i].date
	}

	// ================================ IRISH LUCKY
	for (let i = 0; i < document.querySelector('.irish-part-1 .irish-main .general-part').childElementCount; i++) {
		document.querySelector('.irish-part-1 .irish-main .general-part').children[i].innerHTML = res.irish_lucky[0].numbers[0].main[i]
		document.querySelector('.irish-part-1 .irish-plus-1 .general-part').children[i].innerHTML = res.irish_lucky[0].numbers[1].plus_1[i]
		document.querySelector('.irish-part-1 .irish-plus-2 .general-part').children[i].innerHTML = res.irish_lucky[0].numbers[2].plus_2[i]

		document.querySelector('.irish-part-2 .irish-main .general-part').children[i].innerHTML = res.irish_lucky[1].numbers[0].main[i]
		document.querySelector('.irish-part-2 .irish-plus-1 .general-part').children[i].innerHTML = res.irish_lucky[1].numbers[1].plus_1[i]
		document.querySelector('.irish-part-2 .irish-plus-2 .general-part').children[i].innerHTML = res.irish_lucky[1].numbers[2].plus_2[i]

		document.querySelector('.irish-part-3 .irish-main .general-part').children[i].innerHTML = res.irish_lucky[2].numbers[0].main[i]
		document.querySelector('.irish-part-3 .irish-plus-1 .general-part').children[i].innerHTML = res.irish_lucky[2].numbers[1].plus_1[i]
		document.querySelector('.irish-part-3 .irish-plus-2 .general-part').children[i].innerHTML = res.irish_lucky[2].numbers[2].plus_2[i]

	}
	// ==== IRISH BOUNUS BALLS 
	document.querySelector('.irish-part-1 .irish-main .bonus-part  span').innerHTML = res.irish_lucky[0].numbers[0].bonusball
	document.querySelector('.irish-part-1 .irish-plus-1 .bonus-part span').innerHTML = res.irish_lucky[0].numbers[1].bonusball
	document.querySelector('.irish-part-1 .irish-plus-2 .bonus-part span').innerHTML = res.irish_lucky[0].numbers[2].bonusball

	document.querySelector('.irish-part-2 .irish-main .bonus-part span').innerHTML = res.irish_lucky[1].numbers[0].bonusball
	document.querySelector('.irish-part-2 .irish-plus-1 .bonus-part span').innerHTML = res.irish_lucky[1].numbers[1].bonusball
	document.querySelector('.irish-part-2 .irish-plus-2 .bonus-part span').innerHTML = res.irish_lucky[1].numbers[2].bonusball

	document.querySelector('.irish-part-3 .irish-main .bonus-part span').innerHTML = res.irish_lucky[2].numbers[0].bonusball
	document.querySelector('.irish-part-3 .irish-plus-1 .bonus-part span').innerHTML = res.irish_lucky[2].numbers[1].bonusball
	document.querySelector('.irish-part-3 .irish-plus-2 .bonus-part span').innerHTML = res.irish_lucky[2].numbers[2].bonusball

	// ================================ EURO LUCKY
	for (let i = 0; i < document.querySelector('.euro-part-1 .euro-main .general-part').childElementCount; i++) {
		document.querySelector('.euro-part-1 .euro-main .general-part').children[i].innerHTML = res.euro_lucky[0].numbers[0].main[i]
		document.querySelector('.euro-part-1 .euro-plus .general-part').children[i].innerHTML = res.euro_lucky[0].numbers[1].plus[i]

		document.querySelector('.euro-part-2 .euro-main .general-part').children[i].innerHTML = res.euro_lucky[1].numbers[0].main[i]
		document.querySelector('.euro-part-2 .euro-plus .general-part').children[i].innerHTML = res.euro_lucky[1].numbers[1].plus[i]

		document.querySelector('.euro-part-3 .euro-main .general-part').children[i].innerHTML = res.euro_lucky[2].numbers[0].main[i]
		document.querySelector('.euro-part-3 .euro-plus .general-part').children[i].innerHTML = res.euro_lucky[2].numbers[1].plus[i]

		document.querySelector('.euro-part-4 .euro-main .general-part').children[i].innerHTML = res.euro_lucky[3].numbers[0].main[i]
		document.querySelector('.euro-part-4 .euro-plus .general-part').children[i].innerHTML = res.euro_lucky[3].numbers[1].plus[i]
	}

	// ==== EURO BOUNUS BALLS
	document.querySelectorAll('.euro-part-1 .euro-main .bonus-part  span')[0].innerHTML = res.euro_lucky[0].numbers[2].lucky_stars[0]
	document.querySelectorAll('.euro-part-1 .euro-main .bonus-part  span')[1].innerHTML = res.euro_lucky[0].numbers[2].lucky_stars[1]
	document.querySelectorAll('.euro-part-2 .euro-main .bonus-part span')[0].innerHTML = res.euro_lucky[1].numbers[2].lucky_stars[0]
	document.querySelectorAll('.euro-part-2 .euro-main .bonus-part span')[1].innerHTML = res.euro_lucky[1].numbers[2].lucky_stars[1]
	document.querySelectorAll('.euro-part-3 .euro-main .bonus-part span')[0].innerHTML = res.euro_lucky[2].numbers[2].lucky_stars[0]
	document.querySelectorAll('.euro-part-3 .euro-main .bonus-part span')[1].innerHTML = res.euro_lucky[2].numbers[2].lucky_stars[1]
	document.querySelectorAll('.euro-part-4 .euro-main .bonus-part span')[0].innerHTML = res.euro_lucky[3].numbers[2].lucky_stars[0]
	document.querySelectorAll('.euro-part-4 .euro-main .bonus-part span')[1].innerHTML = res.euro_lucky[3].numbers[2].lucky_stars[1]


	// ================================ 49's LUCKY
	for (let i = 0; i < document.querySelector('.s49-part-1 .s49-lunchtime .general-part').childElementCount; i++) {
		document.querySelector('.s49-part-1 .s49-lunchtime .general-part').children[i].innerHTML = res.forty_nine[0].numbers[0].lunchtime[i]
		document.querySelector('.s49-part-1 .s49-teatime .general-part').children[i].innerHTML = res.forty_nine[0].numbers[1].teatime[i]

		document.querySelector('.s49-part-2 .s49-lunchtime .general-part').children[i].innerHTML = res.forty_nine[1].numbers[0].lunchtime[i]
		document.querySelector('.s49-part-2 .s49-teatime .general-part').children[i].innerHTML = res.forty_nine[1].numbers[1].teatime[i]

		document.querySelector('.s49-part-3 .s49-lunchtime .general-part').children[i].innerHTML = res.forty_nine[2].numbers[0].lunchtime[i]
		document.querySelector('.s49-part-3 .s49-teatime .general-part').children[i].innerHTML = res.forty_nine[2].numbers[1].teatime[i]

		document.querySelector('.s49-part-4 .s49-lunchtime .general-part').children[i].innerHTML = res.forty_nine[3].numbers[0].lunchtime[i]
		document.querySelector('.s49-part-4 .s49-teatime .general-part').children[i].innerHTML = res.forty_nine[3].numbers[1].teatime[i]
	}
	// ========== 49's BOUNUS BALLS
	document.querySelector('.s49-part-1 .s49-lunchtime .bonus-part  span').innerHTML = res.forty_nine[0].numbers[0].buster
	document.querySelector('.s49-part-1 .s49-teatime .bonus-part span').innerHTML = res.forty_nine[0].numbers[1].buster

	document.querySelector('.s49-part-2 .s49-lunchtime .bonus-part span').innerHTML = res.forty_nine[1].numbers[0].buster
	document.querySelector('.s49-part-2 .s49-teatime .bonus-part span').innerHTML = res.forty_nine[1].numbers[1].buster

	document.querySelector('.s49-part-3 .s49-lunchtime .bonus-part span').innerHTML = res.forty_nine[2].numbers[0].buster
	document.querySelector('.s49-part-3 .s49-teatime .bonus-part span').innerHTML = res.forty_nine[2].numbers[1].buster

	document.querySelector('.s49-part-4 .s49-lunchtime .bonus-part span').innerHTML = res.forty_nine[3].numbers[0].buster
	document.querySelector('.s49-part-4 .s49-teatime .bonus-part span').innerHTML = res.forty_nine[3].numbers[1].buster


	// ================================== DAILY LUCKY
	for (let i = 0; i < document.querySelector('.daily-part-1 .daily-main-2 .general-part').childElementCount; i++) {
		document.querySelector('.daily-part-1 .daily-main-2 .general-part').children[i].innerHTML = res.daily_lucky[0].numbers[0].main_2_pm[i]
		document.querySelector('.daily-part-1 .daily-plus-2 .general-part').children[i].innerHTML = res.daily_lucky[0].numbers[1].plus_2_pm[i]
		document.querySelector('.daily-part-1 .daily-main-9 .general-part').children[i].innerHTML = res.daily_lucky[0].numbers[2].main_9_pm[i]
		document.querySelector('.daily-part-1 .daily-plus-9 .general-part').children[i].innerHTML = res.daily_lucky[0].numbers[3].plus_9_pm[i]

		document.querySelector('.daily-part-2 .daily-main-2 .general-part').children[i].innerHTML = res.daily_lucky[1].numbers[0].main_2_pm[i]
		document.querySelector('.daily-part-2 .daily-plus-2 .general-part').children[i].innerHTML = res.daily_lucky[1].numbers[1].plus_2_pm[i]
		document.querySelector('.daily-part-2 .daily-main-9 .general-part').children[i].innerHTML = res.daily_lucky[1].numbers[2].main_9_pm[i]
		document.querySelector('.daily-part-2 .daily-plus-9 .general-part').children[i].innerHTML = res.daily_lucky[1].numbers[3].plus_9_pm[i]
	}
	// ==== DAILY BOUNUS BALLS 
	document.querySelector('.daily-part-1 .daily-main-2 .bonus-part span').innerHTML = res.daily_lucky[0].numbers[0].bonusball
	document.querySelector('.daily-part-1 .daily-plus-2 .bonus-part span').innerHTML = res.daily_lucky[0].numbers[1].bonusball
	document.querySelector('.daily-part-1 .daily-main-9 .bonus-part span').innerHTML = res.daily_lucky[0].numbers[2].bonusball
	document.querySelector('.daily-part-1 .daily-plus-9 .bonus-part span').innerHTML = res.daily_lucky[0].numbers[3].bonusball

	document.querySelector('.daily-part-2 .daily-main-2 .bonus-part span').innerHTML = res.daily_lucky[1].numbers[0].bonusball
	document.querySelector('.daily-part-2 .daily-plus-2 .bonus-part span').innerHTML = res.daily_lucky[1].numbers[1].bonusball
	document.querySelector('.daily-part-2 .daily-main-9 .bonus-part span').innerHTML = res.daily_lucky[1].numbers[2].bonusball
	document.querySelector('.daily-part-2 .daily-plus-9 .bonus-part span').innerHTML = res.daily_lucky[1].numbers[3].bonusball

	// ================================== UK LUCKY
	for (let i = 0; i < document.querySelector('.uk-part-1 .uk-main .general-part').childElementCount; i++) {
		document.querySelector('.uk-part-1 .uk-main .general-part').children[i].innerHTML = res.uk_lucky[0].numbers[0].main[i]
		document.querySelector('.uk-part-2 .uk-main .general-part').children[i].innerHTML = res.uk_lucky[1].numbers[0].main[i]
		document.querySelector('.uk-part-3 .uk-main .general-part').children[i].innerHTML = res.uk_lucky[2].numbers[0].main[i]
		document.querySelector('.uk-part-4 .uk-main .general-part').children[i].innerHTML = res.uk_lucky[3].numbers[0].main[i]
	}
	// ==== UK BOUNUS BALLS 
	document.querySelector('.uk-part-1 .uk-main .bonus-part span').innerHTML = res.uk_lucky[0].numbers[0].bonusball
	document.querySelector('.uk-part-2 .uk-main .bonus-part span').innerHTML = res.uk_lucky[1].numbers[0].bonusball
	document.querySelector('.uk-part-3 .uk-main .bonus-part span').innerHTML = res.uk_lucky[2].numbers[0].bonusball
	document.querySelector('.uk-part-4 .uk-main .bonus-part span').innerHTML = res.uk_lucky[3].numbers[0].bonusball
}