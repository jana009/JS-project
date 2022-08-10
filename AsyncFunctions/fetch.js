fetch('todos/priorityHigh.json').then((res)=>{
    if(res.status===200){
        console.log(res);
        return res.json();
    }
}).then((data)=>{
    console.log(data);
}).catch((rej)=>{
    console.log(res.json);
});