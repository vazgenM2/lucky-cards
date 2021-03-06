// ================ REQUEST WITH FETCH
// fetch('http://aio.baroneracing.ie:82/lotto/results?fbclid=IwAR27YNClMuocFtqeinLs5wQDiM041Kujki3wJc2qaTkAFo5wgTqoxdkzxz0')
fetch('./results.json')
	.then(data => data.json())
	.then(res => setNumbers(res))
	.catch(e => console.log(e))

setTimeout(() => {
	fetch('./results-2.json')
		.then(data => data.json())
		.then(res => setNumbers(res))
}, 60000)

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
		if (res.irish_lucky[0].numbers.main) {
			document.querySelector('.irish-part-1 .irish-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[0].numbers.main[i]}.png" />`
			// res.irish_lucky[0].numbers.plus_1[i]
		}
		if (res.irish_lucky[0].numbers.plus_1) {
			document.querySelector('.irish-part-1 .irish-plus-1 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[0].numbers.plus_1[i]}.png" />`
		}
		if (res.irish_lucky[0].numbers.plus_2) {
			document.querySelector('.irish-part-1 .irish-plus-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[0].numbers.plus_2[i]}.png" />`
		}
		if (res.irish_lucky[1].numbers.main) {
			document.querySelector('.irish-part-2 .irish-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[1].numbers.main[i]}.png" />`
		}
		if (res.irish_lucky[1].numbers.plus_1) {
			document.querySelector('.irish-part-2 .irish-plus-1 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[1].numbers.plus_1[i]}.png" />`
		}
		if (res.irish_lucky[1].numbers.plus_2) {
			document.querySelector('.irish-part-2 .irish-plus-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[1].numbers.plus_2[i]}.png" />`
		}
		if (res.irish_lucky[2].numbers.main) {
			document.querySelector('.irish-part-3 .irish-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[2].numbers.main[i]}.png" />`
		}
		if (res.irish_lucky[2].numbers.plus_1) {
			document.querySelector('.irish-part-3 .irish-plus-1 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[2].numbers.plus_1[i]}.png" />`
		}
		if (res.irish_lucky[2].numbers.plus_2) {
			document.querySelector('.irish-part-3 .irish-plus-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[2].numbers.plus_2[i]}.png" />`
		}

	}
	// ==== IRISH BOUNUS BALLS
	if (res.irish_lucky[0].numbers.bonusball_main) {
		document.querySelector('.irish-part-1 .irish-main .bonus-part  span').innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[0].numbers.bonusball_main}.png" />`
	}
	if (res.irish_lucky[0].numbers.bonusball_plus_1) {
		document.querySelector('.irish-part-1 .irish-plus-1 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[0].numbers.bonusball_plus_1}.png" />`
	}
	if (res.irish_lucky[0].numbers.bonusball_plus_2) {
		document.querySelector('.irish-part-1 .irish-plus-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[0].numbers.bonusball_plus_2}.png" />`
	}
	if (res.irish_lucky[1].numbers.bonusball_main) {
		document.querySelector('.irish-part-2 .irish-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[1].numbers.bonusball_main}.png" />`
	}
	if (res.irish_lucky[1].numbers.bonusball_plus_1) {
		document.querySelector('.irish-part-2 .irish-plus-1 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[1].numbers.bonusball_plus_1}.png" />`
	}
	if (res.irish_lucky[1].numbers.bonusball_plus_2) {
		document.querySelector('.irish-part-2 .irish-plus-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[1].numbers.bonusball_plus_2}.png" />`
	}
	if (res.irish_lucky[2].numbers.bonusball_main) {
		document.querySelector('.irish-part-3 .irish-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Main/${res.irish_lucky[2].numbers.bonusball_main}.png" />`
	}
	if (res.irish_lucky[2].numbers.bonusball_plus_1) {
		document.querySelector('.irish-part-3 .irish-plus-1 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus1/${res.irish_lucky[2].numbers.bonusball_plus_1}.png" />`
	}
	if (res.irish_lucky[2].numbers.bonusball_plus_2) {
		document.querySelector('.irish-part-3 .irish-plus-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/Irish/Plus2/${res.irish_lucky[2].numbers.bonusball_plus_2}.png" />`
	}

	// ================================ EURO LUCKY
	for (let i = 0; i < document.querySelector('.euro-part-1 .euro-main .general-part').childElementCount; i++) {
		if (res.euro_lucky[0].numbers.main) {
			document.querySelector('.euro-part-1 .euro-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[0].numbers.main[i]}.png" />`
		}
		if (res.euro_lucky[0].numbers.plus) {
			document.querySelector('.euro-part-1 .euro-plus .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[0].numbers.plus[i]}.png" />`
		}
		if (res.euro_lucky[1].numbers.main) {
			document.querySelector('.euro-part-2 .euro-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[1].numbers.main[i]}.png" />`
		}
		if (res.euro_lucky[1].numbers.plus) {
			document.querySelector('.euro-part-2 .euro-plus .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[1].numbers.plus[i]}.png" />`
		}
		if (res.euro_lucky[2].numbers.main) {
			document.querySelector('.euro-part-3 .euro-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[2].numbers.main[i]}.png" />`
		}
		if (res.euro_lucky[2].numbers.plus) {
			document.querySelector('.euro-part-3 .euro-plus .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[2].numbers.plus[i]}.png" />`
		}
		if (res.euro_lucky[3].numbers.main) {
			document.querySelector('.euro-part-4 .euro-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[3].numbers.main[i]}.png" />`
		}
		if (res.euro_lucky[3].numbers.plus) {
			document.querySelector('.euro-part-4 .euro-plus .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/Euro/Main/${res.euro_lucky[3].numbers.plus[i]}.png" />`
		}
	}

	// ==== EURO BOUNUS BALLS
	if (res.euro_lucky[0].numbers.stars) {
		document.querySelectorAll('.euro-part-1 .euro-main .bonus-part  span')[0].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[0].numbers.stars[0]}.png" />`
	}
	if (res.euro_lucky[0].numbers.stars) {
		document.querySelectorAll('.euro-part-1 .euro-main .bonus-part  span')[1].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[0].numbers.stars[1]}.png" />`
	}
	if (res.euro_lucky[1].numbers.stars) {
		document.querySelectorAll('.euro-part-2 .euro-main .bonus-part span')[0].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[1].numbers.stars[0]}.png" />`
	}
	if (res.euro_lucky[1].numbers.stars) {
		document.querySelectorAll('.euro-part-2 .euro-main .bonus-part span')[1].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[1].numbers.stars[1]}.png" />`
	}
	if (res.euro_lucky[2].numbers.stars) {
		document.querySelectorAll('.euro-part-3 .euro-main .bonus-part span')[0].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[2].numbers.stars[0]}.png" />`
	}
	if (res.euro_lucky[2].numbers.stars) {
		document.querySelectorAll('.euro-part-3 .euro-main .bonus-part span')[1].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[2].numbers.stars[1]}.png" />`
	}
	if (res.euro_lucky[3].numbers.stars) {
		document.querySelectorAll('.euro-part-4 .euro-main .bonus-part span')[0].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[3].numbers.stars[0]}.png" />`
	}
	if (res.euro_lucky[3].numbers.stars) {
		document.querySelectorAll('.euro-part-4 .euro-main .bonus-part span')[1].innerHTML = `<img class="img-num" src="./imges/Euro/LuckyStars/${res.euro_lucky[3].numbers.stars[1]}.png" />`
	}


	// ================================ 49's LUCKY
	for (let i = 0; i < document.querySelector('.s49-part-1 .s49-lunchtime .general-part').childElementCount; i++) {
		if (res.forty_nine[0].numbers.lunchtime) {
			document.querySelector('.s49-part-1 .s49-lunchtime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[0].numbers.lunchtime[i]}.png" />`
		}
		if (res.forty_nine[0].numbers.teatime) {
			document.querySelector('.s49-part-1 .s49-teatime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[0].numbers.teatime[i]}.png" />`
		}
		if (res.forty_nine[1].numbers.lunchtime) {
			document.querySelector('.s49-part-2 .s49-lunchtime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[1].numbers.lunchtime[i]}.png" />`
		}
		if (res.forty_nine[1].numbers.teatime) {
			document.querySelector('.s49-part-2 .s49-teatime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[1].numbers.teatime[i]}.png" />`
		}
		if (res.forty_nine[2].numbers.lunchtime) {
			document.querySelector('.s49-part-3 .s49-lunchtime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[2].numbers.lunchtime[i]}.png" />`
		}
		if (res.forty_nine[2].numbers.teatime) {
			document.querySelector('.s49-part-3 .s49-teatime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[2].numbers.teatime[i]}.png" />`
		}
		if (res.forty_nine[3].numbers.lunchtime) {
			document.querySelector('.s49-part-4 .s49-lunchtime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[3].numbers.lunchtime[i]}.png" />`
		}
		if (res.forty_nine[3].numbers.teatime) {
			document.querySelector('.s49-part-4 .s49-teatime .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[3].numbers.teatime[i]}.png" />`
		}
	}
	// ========== 49's BOUNUS BALLS
	if (res.forty_nine[0].numbers.buster_lunchtime) {
		document.querySelector('.s49-part-1 .s49-lunchtime .bonus-part  span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[0].numbers.buster_lunchtime}.png" />`
		if (res.forty_nine[0].numbers.buster_teatime) {
			document.querySelector('.s49-part-1 .s49-teatime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[0].numbers.buster_teatime}.png" />`
		}
		if (res.forty_nine[1].numbers.buster_lunchtime) {
			document.querySelector('.s49-part-2 .s49-lunchtime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[1].numbers.buster_lunchtime}.png" />`
		}
		if (res.forty_nine[1].numbers.buster_teatime) {
			document.querySelector('.s49-part-2 .s49-teatime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[1].numbers.buster_teatime}.png" />`
		}
		if (res.forty_nine[2].numbers.buster_lunchtime) {
			document.querySelector('.s49-part-3 .s49-lunchtime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[2].numbers.buster_lunchtime}.png" />`
		}
		if (res.forty_nine[2].numbers.buster_teatime) {
			document.querySelector('.s49-part-3 .s49-teatime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[2].numbers.buster_teatime}.png" />`
		}
		if (res.forty_nine[3].numbers.buster_lunchtime) {
			document.querySelector('.s49-part-4 .s49-lunchtime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[3].numbers.buster_lunchtime}.png" />`
		}
		if (res.forty_nine[3].numbers.buster_teatime) {
			document.querySelector('.s49-part-4 .s49-teatime .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.forty_nine[3].numbers.buster_teatime}.png" />`
		}


		// ================================== DAILY LUCKY
		for (let i = 0; i < document.querySelector('.daily-part-1 .daily-main-2 .general-part').childElementCount; i++) {
			document.querySelector('.daily-part-1 .daily-main-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.main_2_pm[i]}.png" />`
			document.querySelector('.daily-part-1 .daily-plus-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.plus_2_pm[i]}.png" />`
			if (res.daily_lucky[0].numbers.main_9_pm) {
				document.querySelector('.daily-part-1 .daily-main-9 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.main_9_pm[i]}.png" />`
			}
			if (res.daily_lucky[0].numbers.plus_9_pm) {
				document.querySelector('.daily-part-1 .daily-plus-9 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.plus_9_pm[i]}.png" />`
			}
			if (res.daily_lucky[1].numbers.main_2_pm) {
				document.querySelector('.daily-part-2 .daily-main-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.main_2_pm[i]}.png" />`
			}
			if (res.daily_lucky[1].numbers.plus_2_pm) {
				document.querySelector('.daily-part-2 .daily-plus-2 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.plus_2_pm[i]}.png" />`
			}
			if (res.daily_lucky[1].numbers.main_9_pm) {
				document.querySelector('.daily-part-2 .daily-main-9 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.main_9_pm[i]}.png" />`
			}
			if (res.daily_lucky[1].numbers.plus_9_pm) {
				document.querySelector('.daily-part-2 .daily-plus-9 .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.plus_9_pm[i]}.png" />`
			}
		}
		// ==== DAILY BOUNUS BALLS
		if (res.daily_lucky[0].numbers.bonusball_main_2_pm) {
			document.querySelector('.daily-part-1 .daily-main-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.bonusball_main_2_pm}.png" />`
		}
		if (res.daily_lucky[0].numbers.bonusball_plus_2_pm) {
			document.querySelector('.daily-part-1 .daily-plus-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.bonusball_plus_2_pm}.png" />`
		}
		if (res.daily_lucky[0].numbers.bonusball_main_9_pm) {
			document.querySelector('.daily-part-1 .daily-main-9 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.bonusball_main_9_pm}.png" />`
		}
		if (res.daily_lucky[0].numbers.bonusball_plus_9_pm) {
			document.querySelector('.daily-part-1 .daily-plus-9 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[0].numbers.bonusball_plus_9_pm}.png" />`
		}
		if (res.daily_lucky[1].numbers.bonusball_main_2_pm) {
			document.querySelector('.daily-part-2 .daily-main-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.bonusball_main_2_pm}.png" />`
		}
		if (res.daily_lucky[1].numbers.bonusball_plus_2_pm) {
			document.querySelector('.daily-part-2 .daily-plus-2 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.bonusball_plus_2_pm}.png" />`
		}
		if (res.daily_lucky[1].numbers.bonusball_main_9_pm) {
			document.querySelector('.daily-part-2 .daily-main-9 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.bonusball_main_9_pm}.png" />`
		}
		if (res.daily_lucky[1].numbers.bonusball_plus_9_pm) {
			document.querySelector('.daily-part-2 .daily-plus-9 .bonus-part span').innerHTML = `<img class="img-num" src="./imges/49s/${res.daily_lucky[1].numbers.bonusball_plus_9_pm}.png" />`
		}

		// ================================== UK LUCKY
		for (let i = 0; i < document.querySelector('.uk-part-1 .uk-main .general-part').childElementCount; i++) {
			if (res.uk_lucky[0].numbers.main) {
				document.querySelector('.uk-part-1 .uk-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[0].numbers.main[i]}.png" />`
			}
			if (res.uk_lucky[1].numbers.main) {
				document.querySelector('.uk-part-2 .uk-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[1].numbers.main[i]}.png" />`
			}
			if (res.uk_lucky[2].numbers.main) {
				document.querySelector('.uk-part-3 .uk-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[2].numbers.main[i]}.png" />`
			}
			if (res.uk_lucky[3].numbers.main) {
				document.querySelector('.uk-part-4 .uk-main .general-part').children[i].innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[3].numbers.main[i]}.png" />`
			}
		}
		// ==== UK BOUNUS BALLS
		if (res.uk_lucky[0].numbers.bonusball_main) {
			document.querySelector('.uk-part-1 .uk-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[0].numbers.bonusball_main}.png" />`
		}
		if (res.uk_lucky[1].numbers.bonusball_main) {
			document.querySelector('.uk-part-2 .uk-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[1].numbers.bonusball_main}.png" />`
		}
		if (res.uk_lucky[2].numbers.bonusball_main) {
			document.querySelector('.uk-part-3 .uk-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[2].numbers.bonusball_main}.png" />`
		}
		if (res.uk_lucky[3].numbers.bonusball_main) {
			document.querySelector('.uk-part-4 .uk-main .bonus-part span').innerHTML = `<img class="img-num" src="./imges/UK/${res.uk_lucky[3].numbers.bonusball_main}.png" />`
		}
	}
}