const myLibrary = [];
const addBookBtn = document.querySelector('#add-book-btn');
const bookFormContainer = document.querySelector('#book-form-container');
const bookFormSumbitBtn = document.querySelector('#book-form-sumbit-btn');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#book-name-input').value;
    let author = document.querySelector('#book-author-input').value;
    let pages = document.querySelector('#book-pages-input').value;
    let read = document.querySelector('#book-read-input').checked;
    document.querySelector('#book-name-input').value = '';
    document.querySelector('#book-author-input').value = '';
    document.querySelector('#book-pages-input').value = '';
    document.querySelector('#book-read-input').checked = false;
    myLibrary.push(new Book(title, author, pages, read));
    bookFormContainer.classList.add('displayed-no');
    console.log(myLibrary);
}

bookFormSumbitBtn.addEventListener('click', addBookToLibrary);

addBookBtn.addEventListener('click', () => {
    bookFormContainer.classList.toggle('displayed-no');
})
