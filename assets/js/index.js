
let screen= document.querySelector("[data-screen]");
let count= +screen.textContent;
console.log(count);
document.addEventListener("click", function(event){

  if(!event.target.dataset.button) return;
  else if (event.target.dataset.button=="plus") addOneToScreen();
  else decreaseOneFromScreen();

  changeCount();
})


function addOneToScreen(){
  count++;
}


function decreaseOneFromScreen(){
  if(count>0) count--;
}

function changeCount(){
  screen.textContent= count;
}
