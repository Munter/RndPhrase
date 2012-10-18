chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse)
    {
        switch (request.name)
        {
        case "getPreferences":
            sendResponse(
                { prefSeed : localStorage["RndPhraseExtPrefSeed"] }
            );
            break;
        }
    }
);
