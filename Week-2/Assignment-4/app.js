//Week2 - Assignment4
const headline = document.querySelector('.headline');
const sectionBtn = document.querySelector('.show_more_btn');
const hiddenRow = document.querySelector('.hidden_row');


headline.addEventListener('click',() =>{
	// origin
	headline.textContent = 'Have a Good Time!';
	
	// try
	// textArr = ['Have a Good Time!','Keep up the Momentum!','Let\'s Coding!'];
	// let currText = headline.textContent;
	// let textIndex = textArr.indexOf(currText);
	// headline.textContent = textArr[(textIndex + 1) % 3];
})


sectionBtn.addEventListener('click', () =>{
	// origin
	hiddenRow.setAttribute('style','display:flex');

	// try
	// if(sectionBtn.textContent === 'Show More'){
	// 	hiddenRow.setAttribute('style','display:flex');
	// 	sectionBtn.textContent = 'Show Less';		
	// }
	// else{
	// 	hiddenRow.setAttribute('style','display:none');
	// 	sectionBtn.textContent = 'Show More';
	// }
})

