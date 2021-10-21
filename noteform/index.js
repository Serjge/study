const nameInput = document.querySelector('#nameInput')
const nameButton = document.querySelector('#nameButton')
const list = document.querySelector('#list')

nameButton.addEventListener('click', function () {
	const newItem = document.createElement('li')
	newItem.classList.add('item')
	newItem.textContent = nameInput.value;

	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'удалить / del';
	if ((nameInput.value) !== '') {
		list.appendChild(newItem)
	}
	deleteButton.addEventListener('click', function () {
		list.removeChild(newItem)
	})
	newItem.appendChild(deleteButton)
	// list.appendChild(newItem)

	nameInput.value = ''
})

if (nameInput === '') {

}