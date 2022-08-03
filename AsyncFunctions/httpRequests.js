const getTodos=(resource,callback)=>{
    const request=new XMLHttpRequest();
    const result=document.getElementById('result');
    console.log(result.innerText);

    request.addEventListener('readystatechange',()=>{
        if(request.readyState===4 && request.status===200){
            callback(undefined,'Whoa! Success')
            console.log(JSON.parse(request.responseText));
            result.innerText=request.response;
        }
        else if(request.readyState===4){
            callback('OOPS :( No result',undefined);
        }
    });

    request.open("GET",resource);
    request.send();
};

getTodos('todos/priorityHigh.json',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        getTodos('todos/priorityModerate.json',(err,data)=>{
            if(data){
                console.log(data)
                getTodos('todos/priorityLow.json',(err,data)=>{
                    if(data){
                        console.log(data);
                    }
                })
            }
        })
    }
});