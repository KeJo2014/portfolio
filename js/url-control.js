function checkURL(){
    page = findGetParameter("page");
    if(page != null){
        loadPagePiece(page);
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function loadPagePiece(param){
        console.log(param)
        //window.location.hash = param;
        window.history.pushState("","",window.location.origin+window.location.pathname+"?page="+param);
        //location.href = window.location.origin+"/?page="+param;
        element = document.getElementById(param);
        console.log(element)
        element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

