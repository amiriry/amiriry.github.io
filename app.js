const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
	for(let i = 0; i < sectBtn.length; i++){
		sectBtn[i].addEventListener('click', function(){
			currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', ''); // Last button that was active, becomes not active.
			this.className += ' active-btn'; //The button that called this method will become active
		})
	}

	allSections.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		console.log(e.target.dataset.id);
		if (id){
			//remove selected button
			sectBtns.forEach((btn) =>{
				btn.classList.remove('active')
			})
			e.target.classList.add('active')
			
			//hide other sections
			sections.forEach((section) =>{
				section.classList.remove('active')
			})

			const element = document.getElementById(id);
			element.classList.add('active')
		}
	})

}

PageTransitions()
