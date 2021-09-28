chrome.webRequest.onBeforeSendHeaders.addListener(
  function (req) {
    for (let i = 0; i < req.requestHeaders.length; i++)
      if (req.requestHeaders[i].name === "User-Agent") {
        req.requestHeaders[i].value =
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36";
        break;
      }
    return { requestHeaders: req.requestHeaders };
  },
  { urls: ["*://adfs.leeds.ac.uk/*", "*://api-894eebdb.duosecurity.com/*"] },
  ["blocking", "requestHeaders"]
);

console.log("init!");
