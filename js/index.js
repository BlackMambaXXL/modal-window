
const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');
const overlay = document.querySelector('.pop_up_content');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
    
});

document.addEventListener('keydown', function(e) {
	if( e.key == "Escape" ){
		popUp.classList.remove('active');
	}
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        popUp.classList.remove('active');
    }
})
