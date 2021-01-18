const reg = RegExp("#result_multi");
const audio = new Audio("media/ping.mp3");
audio.volume = 0.2;

function checkRes (tabId, changeInfo, tab) {
    if(reg.test(changeInfo.url)) {
        audio.play();
        alert('Raid done!');
    }
}
var enabled = false;
chrome.browserAction.onClicked.addListener((tab) => {
    if (enabled) {
        chrome.tabs.onUpdated.removeListener(checkRes);
        chrome.browserAction.setIcon({"path" : "media/off.png"}, () => {})
    } else {
        chrome.tabs.onUpdated.addListener(checkRes);
        chrome.browserAction.setIcon({"path" : "media/on.png"}, () => {})
    }

    enabled = !enabled;
})

