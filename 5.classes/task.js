class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix () {
        this.state = this._state * 1.5;
    }

    set state (newstate) {
        if (newstate < 0 ) {
            this._state = 0;
        } else if (newstate > 100) {
            this._state = 100;
        } else {
            this._state = newstate;
        }
        
    }

    get state () {
        return this._state
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        if (this.books.findIndex(book => book[type] === value) < 0) {
            return null;
        }
        return this.books.find(book => book[type] === value);
    }

    giveBookByName(bookName) {
        if (this.books.findIndex(book => book.name === bookName) < 0) {
            return null;
        }
        return this.books.splice(this.books.findIndex(book => book.name === bookName),1)[0];
    }
}


