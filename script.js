
// function handleSubmit(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();
  
    // Your form submission handling logic here
    // For example, you can submit the form data via AJAX
    // console.log('Form submitted!');
  
  
  // Get the form element
  const form = document.getElementById('myForm');
  
  // Add submit event listener to the form
  form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    let title=document.getElementById('title')
let author=document.getElementById('author')
let isbn=document.getElementById('isbn')
let table=document.getElementById('book-list')
let submitbtn=document.getElementById('submit')
    event.preventDefault()
title=title.value
author=author.value
isbn=isbn.value
let tr=document.createElement('tr')
let authorTd=document.createElement('td')
authorTd.textContent=author
let titleTd=document.createElement('td')
titleTd.textContent=title
let isbnTd=document.createElement('td')
isbnTd.textContent=isbn
let clearbtn=document.createElement('button')
clearbtn.classList.add('delete')
clearbtn.addEventListener("click",(event)=>{
    const cell = event.target;
  
    // Get the parent row of the clicked cell
    const row = cell.parentElement;
    row.remove()
})
clearbtn.textContent='Delete'
tr.appendChild(authorTd)
tr.appendChild(titleTd)
tr.appendChild(isbnTd)
tr.appendChild(clearbtn)
table.appendChild(tr)
form.reset()
}