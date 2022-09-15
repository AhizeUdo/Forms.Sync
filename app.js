function Book(title, author, isbn) {
    this.title= title;
    this.author = author;
    this.isbn = isbn;
}

// this displays the information (UI display)

function UI() {}

//add event listeners to get information from html.


document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value
    console.log(title, author, isbn)

    const book = new Book(title, author , isbn)

    e.preventDefault();

    UI.prototype.alertMessage = function(message, className) {
        const container = document.querySelector('.container');
        const form = document.querySelector('form');
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.className = `alert${className}`;
        container.insertBefore(div, form)
    }
});


