chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){

        //highlight the icon on tab where extension is loaded
        chrome.pageAction.show(tabs[0].id);
    
    });


})


chrome.storage.sync.get(['title'],function(object){
    var xhr  = new XMLHttpRequest();
    var title = object.title;
    xhr.open("GET","http://localhost:8888/data?title="+title);
    xhr.onload= function(){
        chrome.storage.sync.set({'response':xhr.responseText},function(){});
    }
    xhr.send();
    //var response = xhr.responseText;
    //console.log("response="+response);
    
    
});

