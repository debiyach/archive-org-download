class BookReader {

    constructor(br) {
        this.#br = br;
        this.#editPageList();
        this.#editMetadata(); 
    }

    // Privates
    #br;
    #pageList = [];
    #metadata = {};

    #editPageList() {
        this.#pageList = this.#br.data.flat();
    }

    #editMetadata() {
        document.getElementsByClassName('metadata-definition');
        for (var i = 0; i < this.#br.metadata.length; i++) {
            this.#metadata[this.#br.metadata[i].label] = this.#br.metadata[i].value;
        }
        this.#metadata['universalizer'] = "Debiyach";
    }

    // Getters
    get pages() {
        return [...this.#pageList];
    }

    get pagesCount() {
        return this.#pageList.length;
    }

    get bookId() {
        return this.#br.bookId;
    }

    get bookName() {
        return this.#br.bookTitle;
    }

    get pdfName(){
        return this.#br.bookTitle + '.pdf';
    }

    get bookLanguage() {
        return this.#br.options.bookLanguage;
    }

    get metadata() {
        return this.#metadata;
    }

}

export default BookReader;