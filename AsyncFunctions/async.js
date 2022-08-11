const getTodos = async()=> {
    let result= await  fetch('todos/priorityHigh.json');
    let data= await(result.json());
    return data
}

getTodos().then(data=>console.log(data));