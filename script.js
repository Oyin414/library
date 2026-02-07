/*Library app
. All book objects are going to be stored into array so when new book object is created it needs to be pushed into the array 
. The book constructor is there to create the separate book items
1. when the new button form is pressed a 

*/

const btn = document.getElementById("create")
const submit = document.getElementById("submit")
const modal = document.getElementById("myModal")
const closeModal = document.getElementById("close")

submit.addEventListener("click",function(event){
event.preventDefault()
});

btn.addEventListener("click",()=>{
    modal.style.display = "block";
})

closeModal.addEventListener("click",()=>{
    modal.style.display = "none";
})


const myLibrary = [];

function Book(title,author,pages) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title,author,pages,id) {
  
}
