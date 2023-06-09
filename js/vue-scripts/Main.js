import BrCheck from './BrCheck.js'
import NotBorrowed from './NotBorrowed.js';
import Borrowable from './Borrowable.js';
import Template from './templates/Main.js';

export default {
    template: Template,
    data() {
        return {
            loader: false,
            statusKey: null,
        };
    },
    methods: {
        receiveStatus(key) {
            this.statusKey = key;
            this.loader = false;
        }
    },
    mounted() {
        this.loader = true
    },
    components: {
        BrCheck,
        NotBorrowed,
        Borrowable
    }
}