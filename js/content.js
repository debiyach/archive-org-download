
(() => {
    
    if(window?.archiveForExt){
        return
    }

    const loadJS = function (paths, isModule = false) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = chrome.runtime.getURL(paths);
    
        if (isModule) {
            script.type = 'module'
        }
    
        document.body.appendChild(script);
    }
    
    const loadCSS = function (paths) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = chrome.runtime.getURL(paths);
        document.head.appendChild(link);
    }

    if(document.querySelector("meta[property='mediatype']").content == 'texts'){
        loadCSS('/css/archive.css')
        loadJS("/js/basis.js");
        loadJS("/js/vue.js")
        loadJS('/js/app.js', true)
        loadJS('/js/jspdf.js', true)
        window['archiveForExt'] = true;
    }
})()