document.addEventListener("DOMContentLoaded",
function (event){
    document.querySelector("button")
    .addEventListener("click",function(){
        var self = this;
        var name = "";
        $ajaxutils
        .sendGetRequest("/data/name.txt", 
        function (request){
            self.name =request.responseText;
        });
        document.querySelector("#content")
                .innerHTML = "<h2> Hello" + self.name +"!";
    })
}
);