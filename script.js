const btn = document.getElementById("create")
const submit = document.getElementById("submit")
const modal = document.getElementById("myModal")
const closeModal = document.getElementById("close")
const container = document.querySelector(".container")

/* Creating a modal section */

btn.addEventListener("click",()=>{
    modal.style.display = "block";
});
closeModal.addEventListener("click",()=>{
    modal.style.display = "none";
});

/* Creating the book constructor and adding it to an array */
const myLibrary = [];

class Book {
 constructor(title,author,pages){
    this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
 }
}

function addBookToLibrary(event) {
event.preventDefault();

let bookTitle = document.getElementById("title").value
let bookAuthor =  document.getElementById("author").value
let bookPages =  document.getElementById("pages").value

let book = new Book(bookTitle,bookAuthor,bookPages)
 myLibrary.push(book)
 displayBooks(book)
}

submit.addEventListener("click",addBookToLibrary);

/* Displaying the books on the page */

function displayBooks(book){
        const bookBox = document.createElement('div')
        const buttonBox = document.createElement('div')
        bookBox.className = 'bookBox'
        buttonBox.className = 'buttonBox'

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove Book"
        const togglebutton = document.createElement("button")
        togglebutton.textContent = "read"
        let titleContent = document.createTextNode("Title: " + book.title);
    let authorContent = document.createTextNode("Author: " + book.author);
    let categoryContent = document.createTextNode("Pages: " + book.pages);
    let idContent = book.id
      for (let i = 0; i < 3; i++) {
            let listItem = document.createElement('p');
            listItem.className ='listItem'
            if (i === 0){
                listItem.appendChild(titleContent)
            }else if (i === 1){
                listItem.appendChild(authorContent)
            }else{
                listItem.appendChild(categoryContent)
            }
            bookBox.appendChild(listItem)
        }
   
      removeButton.className='btnOne'
      togglebutton.className='btnTwo'
       buttonBox.appendChild(removeButton)
      buttonBox.appendChild(togglebutton)
      bookBox.appendChild(buttonBox)
      container.appendChild(bookBox)


togglebutton.addEventListener('click',()=>{
    if ( togglebutton.textContent === "read" ) {
  
    togglebutton.textContent = "Not read yet";
    
  } else if ( togglebutton.textContent === "Not read yet" ) {
  
    togglebutton.textContent = "read";
}}
)

removeButton.addEventListener('click',()=>{
 removeButton.setAttribute('data-id',idContent)
 let id = removeButton.dataset.id
 removeButton.parentElement.parentElement.remove()
     for(var i=0; i<myLibrary.length; i++){
        if(myLibrary[i].id == id){
            myLibrary.splice(i, 1);
            console.log(myLibrary)
        }
    }
})


};

console.log(myLibrary)