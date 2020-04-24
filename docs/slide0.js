let currentAction = -1

let nextAction = () => {
	if (currentAction < actions.length)
		document.querySelector('body').classList.add(actions[++currentAction])
}

let prevAction = () => {
	if (currentAction > -1)
		document.querySelector('body').classList.remove(actions[currentAction--])
}

let actions = [
	'slide1',
	'slide1action0',
	'slide2',
	'slide3',
	'slide3action0',
	'slide3action1',
	'slide4',
	'slide4action0',
	'slide5',
	'slide5action0',
	'slide6',
	'slide6action0',
	'slide6action1',
	'slide7',
	'slide7action0',
	'slide8',
	'slide8action0',
	'slide9',
	'slide9action0',
]

document.addEventListener('keydown', event => {
	if (event.isComposing || event.keyCode === 229) return
	if (event.keyCode === 33 || event.keyCode === 37) prevAction()
	if (event.keyCode === 34 || event.keyCode === 39) nextAction()
})
