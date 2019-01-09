// 通过使用ajax获取新的内容
function new_content() {
    var request = new XMLHttpRequest();
    console.log("one");
    request.open("POST","content.txt",true);
    console.log(request.readyState);
    request.onreadystatechange=function(){
        console.log("hahah");
        if(request.readyState == 4){
            alert("ok");
            // var start_content=document.getElementById("start_content");
            // var para=document.createElement("p");
            // var add_content=document.createTextNode(request.responseText);
            // para.appendChild(add_content);
            // var parent_target=start_content.parentNode;
            // if(parent_target == start_content){
            //     parent_target.appendChild(para);
            // }else{
            //     parent_target.insertBefore(para,parent_target.nextSibling);
            // }
        }else{
            alert("oh my god");
        }
        request.send(null);
    }    
}

new_content();