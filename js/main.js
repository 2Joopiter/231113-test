const btns = document.querySelectorAll('li');
const box = document.querySelector('.box');
const colors = ['hotpink', 'royalblue', 'orange'];

btns.forEach((bt, idx) => {
	bt.addEventListener('click', () => {
		btns.forEach((bt) => bt.classList.remove('on'));
		btns[idx].classList.add('on');
		box.style.backgroundColor = colors[idx];
	});
});
