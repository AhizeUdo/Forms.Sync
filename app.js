function Book(title, author, isbn) {
    this.title= title;
    this.author = author;
    this.isbn = isbn;
}

// this displays the information (UI display)

function UI() {}

//add event listeners to get information from html.


UI.prototype.addBook - function(book){
    const listItems = document.getElementById('book-list');
    const row = document.createElement('tr')
    row.innerHTML - `<td>${book.title}</td>`
                    `<td>${book.title}</td>`
                    `<td>${book.author}</td>`
                    `<td>${book.isbn}</td>`
                    `<td><a href"#">X<a/></td>`
        listItems.appendChild(row)
}


UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.alertMessage = function(message, className) {
    const container = document.querySelector('.container');
    const form = document.querySelector('form');
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(message));
    div.className = `alert${className}`;
    container.insertBefore(div, form)

    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 2000);
}


document.getElementById('book-form').addEventListener('submit', (e) => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    console.log(title, author, isbn)

    const book = new Book(title, author , isbn)

    const ui = new UI();

    if(title === '' || author === ''|| isbn == ''){
        ui.alertMessage('Please fill all fields', 'Error')
    }else{
        ui.addBook(book)
        ui.clearField()
        ui.alertMessage('Your Book has been successfully added', 'success')
    }

    e.preventDefault();
});


