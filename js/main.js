const btns = document.querySelectorAll('li');

btns.forEach((bt, idx) => {
	bt.addEventListener('click', () => {
		btns.forEach((bt) => bt.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});
