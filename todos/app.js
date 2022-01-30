const addTodo=document.querySelector('.add');
const list=document.querySelector('.todos');
const searchElement=document.querySelector('.search input');


const generateTemplate=(todo)=>{
    let html=` 
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    list.innerHTML +=html;

}

addTodo.addEventListener('submit',e=>{

    e.preventDefault();
     const todo=addTodo.add.value.trim();
     //console.log(todo);
     if(todo.length){
     generateTemplate(todo);
     }
     addTodo.reset();

});

//delete part
list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos=(term)=>{

    Array.from(list.children)
    .filter((search)=>!search.textContent.toLowerCase().includes(term))
    .forEach((elementFiletered)=>elementFiletered.classList.add(filtered))

    Array.from(list.children)
    .filter((search)=>(search.textContent.toLowerCase().includes(term)))
    .forEach((elementFiletered)=>elementFiletered.classList.remove(filtered))


}


//search part
searchElement.addEventListener('keyup',e=>{
    const term=searchElement.value.trim().toLowerCase();
    filterTodos(term);
});

