function toggleMenu() {
	const menu = document.querySelector('[data-open-menu]')

	if (!menu) return

	if (menu.dataset.openMenu === 'true') {
		menu.dataset.openMenu = 'false'
	} else {
		menu.dataset.openMenu = 'true'
	}

	// const nav = document.getElementById('navigation')

	// const iconClose = document.getElementById('close')
	// const iconBurger = document.getElementById('burger')

	// const className = 'd-none'

	// if (nav.classList.contains(className)) {
	// 	nav.classList.remove(className)

	// 	iconBurger.classList.add(className)
	// 	iconClose.classList.remove(className)
	// } else {
	// 	nav.classList.add(className)

	// 	iconBurger.classList.remove(className)
	// 	iconClose.classList.add(className)
	// }
}

const navButton = document.getElementById('navigation-button')

navButton.addEventListener('click', toggleMenu)