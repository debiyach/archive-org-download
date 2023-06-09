import Template from './templates/NotBorrowed.js';

export default {
  template: Template,
  data() {
    return {
      seconds: 5,
      countdownIntervalId: null,
      maybeBorrow: true
    }
  },
  methods: {
    async doBorrow() {
      const formData = new FormData();
      formData.append('identifier', br.bookId);
      formData.append('action', 'browse_book')

      const response = await fetch('https://archive.org/services/loans/loan', {
        method: "POST",
        body: formData
      });

      const responseJson = await response.json();

      if (responseJson?.success) {
        window.location.reload();
      }

    },
    pollCountdown() {
      this.countdownIntervalId = setInterval(() => {
        if (--this.seconds <= 0) {
          clearInterval(this.countdownIntervalId);
          this.doBorrow();
        }
      }, 1000)
    },
    dontBorrow() {
      clearInterval(this.countdownIntervalId);
      this.maybeBorrow = false

    }
  },
  mounted() {
    this.pollCountdown();
  },
  beforeDestroy() {
    clearInterval(this.countdownIntervalId);
  },
}