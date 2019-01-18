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

var menuItem = {
    "id":"report_link",
    "title":"Report Link",  
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="report_link")
    {
        
            var url_d = clickData.pageUrl;
            var xhr  =new XMLHttpRequest();
            xhr.open("GET","http://localhost:8888/report?url="+url_d);
            xhr.onload = function(){
                console.log(xhr.response);
            }
            xhr.send();
        
     
        
    }
});


chrome.tabs.query({active:true,currentWindow:true},function(tabs){

    var tab = tabs[0];
    var link = tab.url;

    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:8888/valid?link="+link);
    xhr.onload = function()
    {
        
    }
    xhr.send();
   

    
});
