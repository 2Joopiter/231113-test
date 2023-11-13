const btns = document.querySelectorAll('li');
const box = document.querySelector('.box');
const colors = ['hotpink', 'royalblue', 'orange'];

btns.forEach((bt, idx) => {
	bt.addEventListener('click', (evt) => {
		if (evt.currentTarget.classList.contains('on')) return;
		btns.forEach((bt) => bt.classList.remove('on'));
		btns[idx].classList.add('on');
		box.style.backgroundColor = colors[idx];
	});
});
