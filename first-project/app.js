const correctAnswers=['B','B','A','B','A'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
console.log(result);
form.addEventListener('submit',(e)=>{
    
   e.preventDefault();
   let score=0;
   let userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value];
   userAnswers.forEach((ans,index)=>{
       if(ans===correctAnswers[index]){
           score+=25;
       }
   });
   window.scrollTo(0,0);
   result.classList.remove('d-none');
   
   let output=0;
   const timer=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`; 
    if(output===score){
        clearInterval(timer);
    }
    output++;

   },50);
})
