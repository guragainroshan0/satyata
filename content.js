chrome.runtime.sendMessage({todo:"showPageAction"});

//a = document.getElementsByTagName('head');
//a.appendChild("<script src='jquery-3.3.1.min.js'></script>")

$(document).on('click','.this-is-my-dropdown',function(){

    var url = this.value;
    var win = window.open(url,"_blank");
    win.focus();

})


$(document).on('click','.this-is-my-image',function(){
    var div = $(this);
    console.log($(this).attr('id'));
    //var ima = $(this).find('.this-is-my-image');
    var title = $(this).attr('id');
    var xhr  = new XMLHttpRequest();
    //var titles = object.title;
    xhr.open("GET","http://localhost:8888/data?title="+title);
    xhr.onload = function(){
        var response = xhr.response;
        console.log(response);
        div.attr('src',"https://assets-cdn-npb.kantipurdaily.com/uploads/source/news/kantipur/2018/miscellaneous/supreme-court-29112018040924-1000x0.jpg");
        div.hide()
        var resp = JSON.parse(response);
        var color = resp.color;
        //alert(color);
        var link = resp.links;
        var htmlText="";
       // var htmlText = '<img src="https://www.freeiconspng.com/uploads/blue-button-icon-png-20.png" height="25px" width="25px" style="float:right;display:inline;margin-right:25px" onclick="myFunction('+title+')" class="dropbtn"><div id="'+title+'" class="dropdown-content">'
        if(link.ekantipur){
            htmlText+=getOption(link.ekantipur+"/"+title,"Ekantipur");
            //htmlText+=ddown(link.ekantipur+"/"+title,"ekantipur");
        }
        if(link.setopati){
            htmlText+=getOption(link.setopati+"/"+title,"Setopati")
            //htmlText+=ddown(link.setopati+"/"+title,"setopati");
            
        }
        if(link.nagarik_news)
        {
            htmlText+=ddown(link.nagarik_news+"/"+title,"nagarik");
        }

        //var finalHtml= htmlText+"</div>";
       //s var get ="#"+title;
        var finalHtml = "<select class='this-is-my-dropdown'>"+htmlText+"</select>"

        //$(get).after(finalHtml);
        var drop = document.createElement('div');
        drop.innerHTML = finalHtml;
        drop.className = "dropdown";
       // var drop = document.createElement('select');
        //drop.className = "drop-down-list";
        //var a = '#'+title;
        var post= document.getElementById(title);
        
        post.parentNode.appendChild(drop);
        alert(title);

    }
    xhr.send();
    //var response = xhr.responseText;
    //console.log("response="+response);
     //chrome.storage.sync.set({'title':title},function(){});
     //chrome.storage.sync.get(['response'],function(resp){
     //   console.log("response="+resp.response);
    // });
});

setInterval(function(){
var posts = document.getElementsByClassName('_4-u2 mbm _4mrt _5v3q _7cqq _4-u8');
var titles = new Array();

var shares= document.getElementsByClassName('_4-u2 mbm _4mrt _5v3q _7cqq _4-u8');
console.log(posts.length)
for(var i=0;i<posts.length;i++){

    var post = posts[i];

     
    
    var data = post.querySelector('._3n1k');
    if(data)
    {
    var title = data.querySelector('.mbs');
    var data = title.querySelector('a').innerHTML;


    createROW(post,data);

    //alert(data);
    titles.push(data);
          
}
}

},5000);



function createROW(post,title){
    
    var datas = post.getElementsByClassName('_6a uiPopover _5pbi _cmw _b1e _1wbl');
    if(datas[0].getElementsByClassName('this-is-my-class').length===0)
     {
        var item = document.createElement('div');
        item.className = 'this-is-my-class';
        //item.id = title;  
        //item.clicked = false;
        item.height=25;
        item.width=25;
       // item.src="https://assets-cdn.ekantipur.com/images/kantipur-radio/politics/download-26122018082624-600x0.jpg";
        item.innerHTML=
        '<img src="https://assets-cdn.ekantipur.com/images/kantipur-radio/politics/download-26122018082624-600x0.jpg" class="this-is-my-image" id="'+title+'" height="25px" width="25px" style="float:right;display:inline;margin-right:25px">';
        //alert(datas[0].getElementsByClassName('this-is-my-class').length);
        datas[0].appendChild(item);
        
    }     
}

function getOption(link,site)
{
    return "<option value='"+link+"'><a href="+link+">"+site+"</a></options>";
}

function ddown(link,site){
    return "<a href="+link+" target='_blank'>"+site+"</a>";
}

function myFunction(title) {
    document.getElementById(title).classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }