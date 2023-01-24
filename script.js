document.body.innerHTML=`
<div id="nav-container">
<div id="logo-container">
<span>C</span>at Lovers</div></div>
<div>
 <button id="click">Click to see Random Cats🐈 gif...</button>
 </div>
 <div id="resultss">
</div>
</div>`

var result=document.getElementById('click')
result.addEventListener('click',async()=>{        
    try{
 let response=await fetch("https://cataas.com/cat/gif")            
   .then(data=>showResult(data))
   } catch(err){                     
 resultss.innerText="Its Not a Correct Url"}

})
async function showResult(data){  
    try{ 
         let image=document.createElement("div") 
          image.innerHTML=`<img class="image" src=${data.url} alt="cats"/>`
    
     resultss.append(image)}
    catch(Error){
    
   p.innerHTML="ERROR Data Not Found Please Refresh The Page";
    }
 } 