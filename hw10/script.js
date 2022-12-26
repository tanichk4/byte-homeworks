const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
    { id: 1, author: "Фицджеральд", name: "Великий Гетсби", isReading: false },
    { id: 2, author: "Толстой", name: "Анна Каренина", isReading: false },
    { id: 3, author: "Оруел", name: "1984", isReading: false },
    { id: 4, author: "Сервантес", name: "Дон Кихот", isReading: false },
    {
      id: 5,
      author: "Достоевские",
      name: "Преступление и наказание",
      isReading: false,
    },
];
  

function library() {
    let action = prompt('Action?');

    if(action === null) {
        alert('Bye!');

        return;
    }

    action = action.toLowerCase().trim()

    switch (action) {
        case 'add':
            addBook();
            break;
        case 'return':
            returnBook();
            break;
        case 'take':
            takeBook();
            break;
        default: 
        alert('No action!');
    }
};

const takeBook = () => {
    console.log("take");

    const availableBooksNames = books 
        .filter((book) => !book.isReading)
        .map((book) => `- ${book.name}`)
        .join('\n')

    let desiredBookName = prompt(`Enter book name:\n${availableBooksNames}`);

    if (!desiredBookName) {
        alert('No book name!');

        return;
    }

    desiredBookName = desiredBookName.trim().toLowerCase()

    const desiredBook = books.find((book) => {
        console.log('desiredBookName', desiredBookName);
        return book.name.toLowerCase() === desiredBookName;
    });

    if (!desiredBook) {
        alert('No book with this name');

        return;
    }

    if (desiredBook.isReading) {
        alert('Sorry, this book is being read by someone else');

        return;
    }

    desiredBook.isReading = true;

    alert(`Thank you! Your book ID is: ${desiredBook.id}`)

    console.log(`books`, books)
};

const returnBook = () => {
    console.log("return");
    const returningBookId = Number(prompt('Enter book ID:'));

    if(!returningBookId) {
        alert('No book ID!');

        return;
    }

    const currentBook = books.find((book) => book.id === returningBookId);

    if(!currentBook) {
        alert('Invalid book ID!');

        return;
    }

    if(!currentBook.isReading){
        alert('This book is not being read now!')

        return;
    }

    currentBook.isReading = false;
    alert(`Thanks, come back again! Did you like "${currentBook.name}"?`)
};

const addBook = () => {
    console.log("add");
}

const generateBookId = () => {};