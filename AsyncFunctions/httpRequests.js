const request=new XMLHttpRequest();
const result=document.getElementById('result');
console.log(result.innerText);

request.addEventListener('readystatechange',()=>{
    console.log(request,request.readyState);
    if(request.readyState==4){
        result.innerText=request.response;
    }
});

request.open("GET","https://jsonplaceholder.typicode.com/todos/1");
request.send();