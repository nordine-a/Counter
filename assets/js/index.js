
let screen= document.querySelector("[data-screen]");
let count= +screen.textContent;
document.addEventListener("click", function(event){

  if(!event.target.dataset.button) return;
  else if (event.target.dataset.button=="plus") addOne();
  else decreaseOne();

  changeCount();
})


function addOne(){
  count++;
}


function decreaseOne(){
  if(count>0) count--;
}

function changeCount(){
  screen.textContent= count;
}
