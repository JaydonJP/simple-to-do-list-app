const input = document.getElementById('input');

function addtask(){
    const task = document.createTextNode(input.value)
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    const tick = document.createElement('input') ;
    const span = document.createElement('span');  
    

    if(input.value !== ""){
        tick.classList.add('circle');
        tick.setAttribute('onchange',"ticktask(this)")
        tick.type = "checkbox";
        li.appendChild(tick);
        span.appendChild(task)
        li.appendChild(span);
        ul.appendChild(li);
    }
    
    input.value = "";
}

input.addEventListener("keydown",function(event){
    if(event.key === "Enter" && input.value!= ""){
        addtask();
    }
})

function clearfunc(){
    const ul = document.querySelector('ul');
    ul.innerHTML = "";
}


function ticktask(checkbox){
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
    span.style.textDecoration = "line-through";
    span.style.color= "grey";
  } else {
    span.style.textDecoration = "none";
    span.style.color = "black"
  }

}


