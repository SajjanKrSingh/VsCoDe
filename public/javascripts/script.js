function off(){
    document.querySelectorAll(".form").forEach(function(elem){
        elem.style.display="none";
    })
};

var openstatefileform=0;
var openstatefolderform=0;
document.querySelector("#fileicon").addEventListener("click",function(){
    off();
    if(openstatefileform===0){
        document.querySelector('.fileform').style.display='initial';
        openstatefileform=1;
    }else{
        document.querySelector('.fileform').style.display='none';
        openstatefileform=0;
    }
});

document.querySelector("#foldericon").addEventListener("click",function(){
    off();
    if(openstatefolderform===0){
        document.querySelector('.folderform').style.display='initial';
        openstatefolderform=1;
    }else{
        document.querySelector('.folderform').style.display='none';
        openstatefolderform=0;
    }
});


document.querySelector('#create-files').addEventListener('click',function(dets){
    if(dets.target.id==="edit"){
        document.querySelector('#small').style.display='none';
        document.querySelector('#overlay').style.display='initial';
        document.querySelector('#renameinput').value=dets.target.dataset.val;
        document.querySelector('#changeform').setAttribute("action",`/rename/${dets.target.dataset.val}`);
    }
})