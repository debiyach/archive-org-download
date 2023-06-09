import Loader from './Loader.js';
import Template from './templates/BrCheck.js'

export default {
    template: Template,
    data() {
        return {
            step: 0,
            intervalId: null,
            stepLimit: 10
        }
    },
    methods: {
        bookStatus: function () {

            if (!window.br) {
                return true;
            }

            if (!window.br.protected) {
                this.$emit('status', 'not-protected')
                return 0
            }
            if (!window.br.options.lendingInfo.loanId) {
                this.$emit('status', 'not-borrowed')
                return 0
            }

            if (window.br) {
                this.$emit('status', 'success')
                return 0
            }
            
        },
        checkPoll: function () {
            this.intervalId = setInterval(() => {
                const bookStatus = this.bookStatus();
                if (!bookStatus || ++this.step === this.stepLimit) {
                    clearInterval(this.intervalId);
                }
            }, 1000);
        },
    },
    mounted() {
        this.checkPoll();
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    components: {
        Loader
    }
}