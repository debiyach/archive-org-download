export default
`<div>
    <div v-if="maybeBorrow">
        <div class="d-flex j-content-center fd-column">
            <span>This book is not borrowed. <br />
                It will be automatically borrowed in <span class="ia-border d-inline-block px-3"> {{ seconds }} </span>
                seconds.</span>
            <button @click="dontBorrow" class="as-flex-end bg-transparent ia-border"> Cancel </button>
        </div>
    </div>
    <div v-else>
        You did not allow to borrow the book.
    </div>
</div>`