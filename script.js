let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

let newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

let popUpForm = document.getElementById('popUp');
let closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

function Book(title, author, pages, read) {
    this.title = form.title.value; 
    this.author = form.author.value; 
    this.pages = form.pages.value + 'pg'; 
    this.read = form.read.checked; 
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages,read); 
    myLibrary.push(newBook); 
    setData();  
    render(); 
    form.reset();
}

function render() {
    let display = document.getElementById('Library-container');
    let books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    let library = document.querySelector('#Library-container');
    let bookDiv = document.createElement('div');
    let titleDiv = document.createElement('div');
    let authDiv = document.createElement('div');
    let pageDiv = document.createElement('div');
    let removeBtn = document.createElement('button');
    let readBtn = document.createElement('button');
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authDiv.textContent = item.author;
    authDiv.classList.add('author');
    bookDiv.appendChild(authDiv);

    pageDiv.textContent = item.pages;
    pageDiv.classList.add('pages');
    bookDiv.appendChild(pageDiv);

    readBtn.classList.add('readBtn')
    
    bookDiv.appendChild(readBtn);
    if(item.read===false) {
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = '#e04f63';
    }else {
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = '#63da63'
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.setAttribute('id', 'removeBtn');
    bookDiv.appendChild(removeBtn);
    
    library.appendChild(bookDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData()
        render();
    });

    readBtn.addEventListener('click', () => { 
        item.read = !item.read; 
        setData(); 
        render();
    }); 
};

function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

restore();
