
//DOM elements creation
let counterBody= document.createElement("div");
counterBody.className="counter-body";
document.body.append(counterBody);

let increase= document.createElement("button");
increase.className= "plus";
increase.textContent="+";
counterBody.append(increase);

let decrease= document.createElement("button");
decrease.className="minus";
decrease.textContent= "-";
counterBody.append(decrease);

let screen= document.createElement("div");
screen.className="screen";
counterBody.append(screen);


//Counter implementation
let count= 0;
screen.textContent= count;

increase.dataset.button="plus";
decrease.dataset.button="minus";

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
