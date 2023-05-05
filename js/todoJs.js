"USE State"
const input=document.getElementById('input-box'),
        save=document.getElementById('save'),
        list=document.getElementById('list');




      
function add(){
    if(input.value===""){
        alert('empty');
    }
    else{
        
        let span=document.createElement('span');
        let li=document.createElement('li');
        li.innerHTML=input.value;
        span.setAttribute('class','del');
        li.append(span);
        list.appendChild(li);
        savedata();

    }

   
}


save.addEventListener('click',add);

list.addEventListener('click',function(e){
    let li=e.target;
    if(e.target.tagName==="LI"){
        if(li.classList.contains('checked')){
            li.removeAttribute('class','checked');
            }
            else{
                li.setAttribute('class','checked')
                savedata();
            }
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false)


function savedata(){
    localStorage.setItem("data",list.innerHTML);
}

function getdata(){
   list.innerHTML= localStorage.getItem("data");
}

getdata();




// const remove=()=>{
//     localStorage.removeItem('data');
// }