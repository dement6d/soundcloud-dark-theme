chrome.runtime.onInstalled.addListener(async () => {
    let url = "https://soundcloud.com/fuckcuff/tracks"
    await chrome.tabs.create({ url });
})