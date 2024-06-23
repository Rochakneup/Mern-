let titleelement = document.getElementById("title")
console.log(titleelement)
console.log(titleelement.textContent)   


let element = document.getElementsByClassName("content")
console.log(element)
console.log(element.textContent)  

const listelement = document.getElementsByTagName("li");
console.log(listelement.length);
let content = titleelement.textContent
content = "Hello OpenAi"
console.log(content) 

const paragraphelement  = document .querySelectorAll ('.content ');
for (let i = 0; i < paragraphelement.length; i++) {
    paragraphelement[i ].innerHTML = "This is a test ";
    
  }
var inputElement = document.getElementById("myinput");
console.log(inputElement.type);
console.log(inputElement.value);    
inputElement.value = " New value "
console.log(inputElement.value);  

console.log(inputElement.getAttribute("value"));
inputElement.setAttribute("value","New value ");
console.log(inputElement.getAttribute("value"));

var notnull = document.getElementById("myinput");
if (notnull.hasAttribute("type")){
    console.log("Attribute exists")
}else{
    console.log("Attribute does not exists")
}

// creatig and appending element  





