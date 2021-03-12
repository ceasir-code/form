const btn=document.querySelector('#bt');

const autoCount=()=>{
	const counters=document.querySelectorAll('.counter');
	counters.forEach((counter)=>{
	counter.innerText=0;

	const counterUp=()=>{
		const target=+counter.getAttribute('data-target');
		const startNum=Number(counter.innerText);
		const incrm=target/300;

		if(startNum<target){
			counter.innerText=`${Math.round(startNum+incrm)}`;
			setTimeout(counterUp,10);
		}
		else{
			counter.innerText=target;
		}

	};
	counterUp();
	btn.onclick=()=>{
		autoCount();
	};


});
};

autoCount();





