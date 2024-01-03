let pre_btn = document.getElementById('pre_btn');
let next_btn = document.getElementById('next_btn');
let sliders = document.getElementsByClassName('slider');
// // console.log(sliders);
let slider_no = 1;
function next(){
	document.getElementById('slider' + slider_no).classList.remove('active');
	slider_no ++;
	if (slider_no > sliders.length) {
		slider_no = 1;
	}
	document.getElementById('slider' + slider_no).classList.add('active');
	document.getElementById('slider').style.display='none';
}

function pre(){
	document.getElementById('slider' + slider_no).classList.remove('active');
	slider_no --;
	if(slider_no <1){
		slider_no = sliders.length
	}
	document.getElementById('slider' + slider_no).classList.add('active');
}
next_btn.onclick = next;
pre_btn.onclick = pre;


let change_btn = document.getElementsByClassName('change_btn');
// console.log(change_btn);

for(let i=0;i<change_btn.length;i++){
	change_btn[i].addEventListener('click',function(){
		change_btn[i].classList.add('active');

		let nextsibling = change_btn[i].nextElementSibling;
		while(nextsibling){
			if(nextsibling.classList.contains('active')){
				nextsibling.classList.remove('active');
			}
			nextsibling = nextsibling.nextElementSibling;
		}

		let previoussibling = change_btn[i].previousElementSibling;
		while(previoussibling){
			if(previoussibling.classList.contains('active')){
				previoussibling.classList.remove('active');
			}
			previoussibling = previoussibling.previousElementSibling;
		}

		let imgarr =['assets/images/smart-watch.jpg',
							'assets/images/smart-watch3.jpg',
							'assets/images/smart-watch.jpg',
							'assets/images/smart-watch2.jpg'];
		document.getElementById('slider').src = imgarr[i];
	});
}

let menu = document.getElementById('menu');
let menu_items = document.getElementById('menu-items');
menu.onclick = function(){
	// alert('aa');
	// console.log(menu_items);
	menu_items.classList.toggle('active');

}

