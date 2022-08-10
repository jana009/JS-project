const getTodos=(resource)=>{
    return new Promise((res,rej)=>{
        const request=new XMLHttpRequest();
        const result=document.getElementById('result');
        console.log(result.innerText);
    
        request.addEventListener('readystatechange',()=>{
            if(request.readyState===4 && request.status===200){
                res(JSON.parse(request.responseText))
               // console.log(JSON.parse(request.responseText));
                result.innerText=request.response;
            }
            else if(request.readyState===4){
                rej('OOPS :( No result');
            }
        });
    
        request.open("GET",resource);
        request.send();

    });
};
getTodos('todos/priorityHigh.json')
    .then((data)=>{
        console.log(data);
        return getTodos('todos/priorityModerate.json');
    }).then((data)=>{
        console.log(data);
        return getTodos('todos/priorityLow.json');
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>console.log(err));
// getTodos('todos/priorityHigh.json',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//         getTodos('todos/priorityModerate.json',(err,data)=>{
//             if(data){
//                 console.log(data)
//                 getTodos('todos/priorityLow.json',(err,data)=>{
//                     if(data){
//                         console.log(data);
//                     }
//                 })
//             }
//         })
//     }
// });


function doSomething(){
    return new Promise((res,rej)=>{
        //res("do something which gonna be success");
        rej("do nothing");
    })
}

doSomething().then(data=>{
    console.log(data);
},err=>{
    console.log(err);
});