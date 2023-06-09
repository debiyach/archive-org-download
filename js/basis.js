(() => {
    const situationDiv = document.createElement('div')
    situationDiv.setAttribute('id', 'ia-downloader-ext-container')
    situationDiv.setAttribute('class', 'ia-border bg-transparent')

    const infoTop = document.querySelector('.action-buttons-section')
    infoTop.prepend(situationDiv)
})();
