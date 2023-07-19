let saveBtn=document.getElementById('save');
 let inputtext=document.getElementById('title');
 let desc=document.getElementById('description');
 let res=document.getElementById("result");
 let myform=document.getElementById('form')
 saveBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    title=inputtext.value;
    description=desc.value;
    let topic=document.createElement('p');
    let btn=document.createElement('button');
    btn.innerHTML="delete";
    topic.innerHTML=title;
    res.appendChild(topic);
    res.appendChild(btn);
 });
 
 res.addEventListener('click',(e) =>{
     e.preventDefault();
     let descriptions=document.getElementById('description').value;
     displayPop(descriptions);
 });

function displayPop(content){
    let popUp=window.open("","backgroundColor=yellow")
    popUp.document.write("<p>" + content + "</p><button id='edit'>edit</button><button id='cancel'>Cancel</button>");
}


//  myform.addEventListener('input',()=>{
//     if(inputtext.value===''&& desc.value===''){
//         saveBtn.disabled=true;
//     }
//     else{
//         saveBtn.disabled=false;
//     }
// })

// let editBtn=document.getElementById(edit);
// editValue=editBtn.value;
// editBtn.addEventListener('click',(){
//     editValue=decriptions.innerText;
// })
// editBtn.addEventListener('click',(){
    // let myform=document.getElementById('form')
    // display(myform);  
//     let popUp=window.close("")
//     popUp.document.write("<p>" + content + "</p><button id='edit'>edit</button><button id='cancel'>Cancel</button>");
// });
// function display(content){
//     let popUp=window.open("")
//     popUp.document.write("<p>" + content + "</p><button id='edit'>edit</button><button id='cancel'>Cancel</button>");
// }
