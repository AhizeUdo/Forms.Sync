// function Book(title, author, isbn) {
//     this.title= title;
//     this.author = author;
//     this.isbn = isbn;
// }

// // this displays the information (UI display)

// function UI() {}

// //add event listeners to get information from html.


// UI.prototype.addBook - function(book){
//     const listItems = document.getElementById('book-list');
//     const row = document.createElement('tr')
//     row.innerHTML - `<td>${book.title}</td>`
//                     `<td>${book.title}</td>`
//                     `<td>${book.author}</td>`
//                     `<td>${book.isbn}</td>`
//                     `<td><a href"#" class="delete">X<a/></td>`
//         listItems.appendChild(row)
// }


// UI.prototype.clearField = function(){
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
// }

// UI.prototype.alertMessage = function(message, className) {
//     const container = document.querySelector('.container');
//     const form = document.querySelector('form');
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(message));
//     div.className = `alert ${className}`;
//     container.insertBefore(div, form)

//     setTimeout(() => {
//         document.querySelector('.alert').remove()
//     }, 2000);
// }


// document.getElementById('book-form').addEventListener('submit', (e) => {
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const isbn = document.getElementById('isbn').value;
//     console.log(title, author, isbn)

//     const book = new Book(title, author , isbn)

//     const ui = new UI();

//     if(title === '' || author === ''|| isbn == ''){
//         ui.alertMessage('Please fill all fields', 'Error')
//     }else{
//         ui.addBook(book)
//         ui.clearField()
//         ui.alertMessage('Your Book has been successfully added', 'success')
//     }

//     e.preventDefault();
// });


// Book Constructor


function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add Book To List
UI.prototype.addBookList = function (book) {
    const list = document.getElementById('book-list');

    // create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
}
// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// show alert
UI.prototype.showAlert = function (message, className) {
    // Create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    // get form
    const form = document.querySelector('#book-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn)

    // Instance of Book
    const book = new Book(title, author, isbn);
    // console.log(book);

    // Instance of UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        console.log(ui);

        // Add book to list
        ui.addBookList(book);

        // Show success
        ui.showAlert('Book Added!', 'success')
        // clear fields
        ui.clearFields();
    }
    e.preventDefault();
})

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {

    // Instantiate UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    //  show success
    ui.showAlert('Book Removed!', 'success');

    e.preventDefault();
});