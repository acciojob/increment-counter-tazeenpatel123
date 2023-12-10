//your JS code here. If required.
const counter=document.getElementById("counter");
const incrementBtn=document.getElementById("incrementBtn");
let cnt=0;
incrementBtn.addeventListener("click",() =>{
	alert(`current counter value:${cnt}`);
	cnt++;
	counter.textContent=cnt;
});
