document.getElementById('block_link').onclick = function(){
    var where = this.href.substring(this.href.indexOf("#")+1);
    console.log(where);
    document.getElementById(where).scrollIntoView({behavior: "smooth"});
    return false;
};

document.getElementById('site_link').onclick = function(){
    return false;
}