const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.removeFromLibrary = function() {
        myLibrary.splice(myLibrary.indexOf(this), 1);
        displayBooks();
    };
    this.isReadToggle = function () {
        this.isRead = !this.isRead;
        displayBooks();
    }
}

const showFormButton = document.querySelector('#add-book-button');
const bookForm = document.querySelector('#book-form-container');
const addBookButton = document.querySelector('#book-form-sumbit-btn');
const bookContainer = document.querySelector('#books-container');

function displayBooks() { 
    bookContainer.innerHTML = '';
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardBookTitle = document.createElement('div');
        cardBookTitle.classList.add('card-book-title');
        cardBookTitle.innerText = book.name;

        const cardBookAuthor = document.createElement('div');
        cardBookAuthor.classList.add('card-book-author');
        cardBookAuthor.innerText = book.author;

        const cardBookPages = document.createElement('div');
        cardBookPages.classList.add('card-book-pages');
        cardBookPages.innerText = book.pages;

        const readButton = document.createElement("button");
        readButton.classList.add('card-read-button');
        book.isRead ? readButton.classList.add('read') : null;
        readButton.innerText = book.isRead ? 'Read' : 'Not read';
        readButton.addEventListener('click', () => {
            book.isReadToggle();
        })

        const removeButton = document.createElement("button");
        removeButton.classList.add('card-remove-button');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', () => {
            book.removeFromLibrary();
        })

        card.appendChild(cardBookTitle);
        card.appendChild(cardBookAuthor);
        card.appendChild(cardBookPages);
        card.appendChild(readButton);
        card.appendChild(removeButton);
        bookContainer.appendChild(card);
    })
}

showFormButton.addEventListener('click', () => {
    bookForm.classList.toggle('displayed-no');
});

addBookButton.addEventListener('click', () => {
    const name = document.querySelector('#book-name-input').value;
    document.querySelector('#book-name-input').value = '';

    const author = document.querySelector('#book-author-input').value;
    document.querySelector('#book-author-input').value = '';

    const pages = document.querySelector('#book-pages-input').value;
    document.querySelector('#book-pages-input').value = '';

    const isRead = document.querySelector('#book-read-input').checked;
    document.querySelector('#book-read-input').checked = false;

    myLibrary.push(new Book(name, author, pages, isRead));
    bookForm.classList.toggle('displayed-no');
    displayBooks();
});
