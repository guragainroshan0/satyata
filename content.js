chrome.runtime.sendMessage({todo:"showPageAction"});

//a = document.getElementsByTagName('head');
//a.appendChild("<script src='jquery-3.3.1.min.js'></script>")

$(document).on('click','.this-is-my-class',function(){
    alert($(this).attr('id'));
    var title = $(this).attr('id');
    chrome.storage.sync.set({'title':title},function(){});
    chrome.storage.sync.get(['response'],function(resp){
        alert(resp.response);
    });
});

setInterval(function(){
var posts = document.getElementsByClassName('_4-u2 mbm _4mrt _5v3q _7cqq _4-u8');
var titles = new Array();

var shares= document.getElementsByClassName('_4-u2 mbm _4mrt _5v3q _7cqq _4-u8');
console.log(posts.length)
for(var i=0;i<posts.length;i++){

    var post = posts[i];

     
    
    var data = post.querySelector('._3n1k');
    if(data!=null)
    {
    var title = data.querySelector('.mbs');

    var data = title.querySelector('a').innerHTML;


    createROW(post,data);

    //alert(data);
    titles.push(data);
          
}
}

},5000);
$('.this-is-my-class').click(function(){
    alert($(this).attr('id'));

});


function createROW(post,title){
    
    var datas = post.getElementsByClassName('_6a uiPopover _5pbi _cmw _b1e _1wbl');
    if(datas[0].getElementsByClassName('this-is-my-class').length===0)
     {
        var item = document.createElement('div');
        item.className = 'this-is-my-class';
        item.id = title;  
        item.innerHTML=
        '<img src="https://assets-cdn.ekantipur.com/images/kantipur-radio/politics/download-26122018082624-600x0.jpg" height="25px" width="25px" style="float:right;display:inline;margin-right:25px">';
        //alert(datas[0].getElementsByClassName('this-is-my-class').length);
        datas[0].appendChild(item);
        
    }     
}
