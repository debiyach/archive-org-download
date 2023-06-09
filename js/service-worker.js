const getOption = () => {
    return {
        removeRuleIds: [1],
        addRules: [
            {
                id: 1,
                priority: 1,
                condition: {
                    urlFilter: '*',
                    initiatorDomains: ['archive.org']
                },
                action: {
                    type: 'modifyHeaders',
                    responseHeaders: [{
                        header: 'Access-Control-Allow-Origin',
                        operation: 'set',
                        value: 'https://archive.org'
                    }, {
                        header: 'Access-Control-Allow-Credentials',
                        operation: 'set',
                        value: 'true'
                    }]
                }
            }
        ]
    };
}

chrome.tabs.onUpdated.addListener((tabId) => {
    chrome.action.disable(tabId)
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo?.status == 'complete') {
        if (tab?.url.indexOf('archive.org/details') > 0) {
            
            chrome.action.setBadgeText(
                {
                    tabId: tabId,
                    text: "ON"
                },
            )
            chrome.action.enable(tabId);

            chrome.declarativeNetRequest.updateSessionRules(getOption());

            chrome.scripting.executeScript({
                files: ['js/content.js'],
                target: { tabId: tab.id }
            });
        } else {
            console.log("Vaşarısız")
            chrome.action.disable(tabId)
            chrome.action.setBadgeText(
                {
                    tabId: tabId,
                    text: "OFF"
                },
            )
            chrome.action.setBadgeBackgroundColor(
                {
                    tabId: tabId,
                    color: "#000"
                },
            )
        }
    }
})
