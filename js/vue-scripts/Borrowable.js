import BookReader from "../BookReader.js";
import Template from "./templates/Borrowable.js"
export default {
  template: Template,
  data() {
    return {
      reductionFactors: br.reductionFactors,
      quality: 1,
      succeed: 0,
      failed: 0,
      proceed: 0
    }
  },
  methods: {
    download() {

      this.succeed = 0;
      this.failed = 0;
      this.proceed = 0;

      const pdf = new jspdf.jsPDF();
      const bookReader = new BookReader(window.br);


      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();

      const pages = bookReader.pages.map(page => {
        // URL must be edited
        const pageUri = new URL(page.uri)
        pageUri.searchParams.set('scale', this.quality)
        pageUri.searchParams.set('rotate', 0)

        return fetch(pageUri.toString(), {
          "method": "GET",
          "credentials": "include",
          "responseType": "arraybuffer",
        }).then((response) => {
          if (response.ok) {
            this.succeed++
          }
          return response;
        }).catch(() => this.failed++);

      });


      Promise.all(pages).then(async responses => {
        for (const response of responses) {
          const buffer = await response.arrayBuffer();
          if (buffer) {
            pdf.addImage(new Uint8Array(buffer), 'JPEG', 0, 0, width, height);
            pdf.addPage();
            this.proceed++
          }
        }
      }).finally(_ => {
        // PDF should be created when all processes are finished
        if(this.proceed == this.succeed){
          pdf.save(bookReader.pdfName);
        }else{
          this.proceed = 'An error was encountered. Open an issue on Github.'
        }
      })
    }
  }
}
