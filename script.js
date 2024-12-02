function addNewWEField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");




let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}



function addNewAQField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-1");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");




let aqOb=document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function generateCV(){
   // console.log("generating CV")
let nameField=document.getElementById("nameField").value;
let nameT1=document.getElementById("nameT1");
nameT1.innerHTML = nameField;
//direct
document.getElementById("nameT2").innerHTML= nameField;


//contact
 let contactField = document.getElementById("contactField").value;
 let contactT = document.getElementById("contactT");
 contactT.innerHTML= contactField;

//address

let addressField = document.getElementById("addressField").value;
let addressT = document.getElementById("addressT");
addressT.innerHTML= addressField;
//links insta
let instaField = document.getElementById("instaField").value;
 let instaT = document.getElementById("instaT");
 instaT.innerHTML= instaField;

//linkedin 
let linkedField = document.getElementById("linkedField").value;
 let linkedT = document.getElementById("linkedT");
 linkedT.innerHTML= linkedField;
 //objective
 let objectiveField = document.getElementById("objectiveField").value;
 let objectiveT = document.getElementById("objectiveT");
 objectiveT.innerHTML= objectiveField;
// work experience

let wes =document.getElementsByClassName("weField");
let str= "";
for(let e of wes){
    str=str+`<li>${e.value}</li>`;

}
document.getElementById("weT").innerHTML=str;

//academic qualification
let aqs =document.getElementsByClassName("aqField");
let str1= "";
for(let e of aqs){
    str1 +=`<li>${e.value}</li>`;

}
document.getElementById("aqT").innerHTML=str1;

}
//print cv
function printCV(){
    window.print();
}