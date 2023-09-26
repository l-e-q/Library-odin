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

addBookButton.addEventListener('click', () => {
    let name;
    if (document.querySelector('#book-name-input').value.match('^.{1,200}$')) {
        document.querySelector('#book-name-input').classList.remove('input-error')
        name = document.querySelector('#book-name-input').value;
    } else {
        // Show error on form
        document.querySelector('#book-name-input').classList.add('input-error');
        return;
    }

    let author;
    if (document.querySelector('#book-author-input').value.match('^.{1,120}$')) {
        document.querySelector('#book-author-input').classList.remove('input-error')
        author = document.querySelector('#book-author-input').value;
    } else {
        // Show error on form
        document.querySelector('#book-author-input').classList.add('input-error');
        return;
    }
    
    let pages;
    if (document.querySelector('#book-pages-input').value.match('^[0-9]{1,10}$') && Number(document.querySelector('#book-pages-input').value) > 0) {
        document.querySelector('#book-pages-input').classList.remove('input-error');
        pages = document.querySelector('#book-pages-input').value;
    } else {
        // Show error on form
        document.querySelector('#book-pages-input').classList.add('input-error');
        return;
    }

    const isRead = document.querySelector('#book-read-input').checked;
    
    // form clean
    document.querySelector('#book-name-input').value = '';
    document.querySelector('#book-author-input').value = '';
    document.querySelector('#book-pages-input').value = '';
    document.querySelector('#book-read-input').checked = false;

    myLibrary.push(new Book(name, author, pages, isRead));
    bookForm.classList.toggle('displayed-no');
    displayBooks();
});

showFormButton.addEventListener('click', () => {
    bookForm.classList.toggle('displayed-no');
});

window.addEventListener('click', (e) => {
    if ((e.target != document.querySelector('#book-form') && e.target != document.querySelector('#form-text') && e.target != bookForm && e.target != document.querySelector('#book-name-input') && e.target != document.querySelector('#book-author-input') && e.target != document.querySelector('#book-pages-input') && e.target != document.querySelector('#label') && e.target != document.querySelector('#book-read-input') && document.querySelector('#book-form-sumbit-btn')) && !bookForm.classList.contains('displayed-no') && e.target != showFormButton) {
        bookForm.classList.add('displayed-no');
    }
})
