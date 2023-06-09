import Template from './templates/Loader.js'

export default {
    template: Template,
    props: ['step', 'total'],
    computed: {
        completedStepPercentage() {
            return (100 / this.total) * this.step;
        }
    },
}