const dropdown1= document.getElementById("id1");
const dropdown2= document.getElementById("id2");
const dropdown3= document.getElementById("id3");
const words=document.getElementById("words");
const words2= document.getElementById("words2");
const photo1=document.getElementById("image-one");
const photo2= document.getElementById("image-two");
const photo3= document.getElementById("image-three");

dropdown1.addEventListener("click", ()=>{
    words.style.display="none";
    photo1.style.display="block";
    photo2.style.display="none";
    photo3.style.display="none";
    words2.style.display="none";
});

dropdown2.addEventListener("click", ()=>{
    words.style.display="none";
    photo1.style.display="none";
    photo2.style.display="block";
    photo3.style.display="none";
    words2.style.display="none";
});

dropdown3.addEventListener("click", ()=>{
    words.style.display="none";
    photo1.style.display="none";
    photo2.style.display="none";
    photo3.style.display="block";
    words2.innerHTML="Isn't she perfect!?";
    words2.style.display="block";
});



