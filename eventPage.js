chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){

        //highlight the icon on tab where extension is loaded
        chrome.pageAction.show(tabs[0].id);
    
    });


})

var xhr  = new XMLHttpRequest();
chrome.storage.sync.get(['title'],function(object){
    var title = object.title;
    xhr.open("GET","https://ingratiating-cosal.000webhostapp.com/get.php?title="+title);
    xhr.send();
    var response = xhr.responseText;

    chrome.storage.sync.set({'response':response},function(){});
    
});

