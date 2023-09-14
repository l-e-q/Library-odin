const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.removeFromLibrary = function() {
        myLibrary.splice(myLibrary.indexOf(this), 1);
        console.log(myLibrary);
    };
    this.isReadToggle = function () {
        isRead = !isRead;
    }
}

const showFormButton = document.querySelector('#add-book-button');
const bookForm = document.querySelector('#book-form-container');
const addBookButton = document.querySelector('#book-form-sumbit-btn');
const bookContainer = document.querySelector('#books-container');

function displayBooks() {
    bookContainer.innerHTML = '';
    myLibrary.forEach((book) => {
        bookContainer.innerHTML += `
            <div class="card">
                <div class="card-book-title">${book.name}</div>
                <div class="card-book-author">${book.author}</div>
                <div class="card-book-pages">${book.pages}</div>
                <button class="card-read-button ${book.isRead ? 'read' : ''}">Read</button>
                <button class="card-remove-button">Remove</button>
            </div>
        `;
    })
}

showFormButton.addEventListener('click', () => {
    bookForm.classList.toggle('displayed-no');
});

addBookButton.addEventListener('click', () => {
    const name = document.querySelector('#book-name-input').value;
    const author = document.querySelector('#book-author-input').value;
    const pages = document.querySelector('#book-pages-input').value;
    const isRead = document.querySelector('#book-read-input').checked;
    myLibrary.push(new Book(name, author, pages, isRead));
    bookForm.classList.toggle('displayed-no');
    displayBooks();
});
