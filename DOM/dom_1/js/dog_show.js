// 创建图片展示区
function show_section(){
    // 用于在某个元素前面插入一个新的元素
    // 此处举例当html页面没有显示图片的div部分
    var div_test = document.getElementById("use_for_test");
    var show_section1 = document.createElement("div");
    show_section1.setAttribute("id", "show_section");
    div_test.parentNode.insertBefore(show_section1, div_test);
    
    // 此处用来动态的创建img元素
    var show_section=document.getElementById("show_section");
    var img_section=document.createElement("img");
    img_section.setAttribute("src","img/dog1.jpg");
    img_section.setAttribute("id","show_dog");
    img_section.setAttribute("alt","dog1");
    show_section.appendChild(img_section);
}

// 隐藏图片
function hidden_show(){
    var show_section = document.getElementById("show_section");
    var img_section = document.getElementById("show_dog");
    if(img_section != null){
        show_section.removeChild(img_section);
    }
}
// 展示图片
function show_img(each_link){
    show_section();
    var img_path=document.getElementById("show_dog");
    var img_des=document.getElementsByTagName("p")[0];
    
    var each_href=each_link.getAttribute("href");
    // var each_alt=each_link.getAttribute("title");
    img_path.setAttribute("src",each_href);
    // img_des.innerHTML=each_alt;
    
    // 添加子节点内容
    // var img_span = document.createElement("span");
    // var span_text = document.createTextNode("  good boy");
    // img_des.appendChild(img_span);
    // img_span.appendChild(span_text);
    
}

//给鼠标绑定鼠标点击事件
function bind_event(arr){
    for(var i=0;i<arr.length;i++){
        // 鼠标经过，展示图片
        arr[i].getElementsByTagName("a")[0].onmouseover=function(){
            show_img(this);
            return false;
        };
        // 鼠标离开，隐藏图片
        arr[i].getElementsByTagName("a")[0].onmouseout=function(){
            hidden_show();
        };
        // 鼠标点击，展示图片
        // arr[i].getElementsByTagName("a")[0].onclick = function () {
        //     show_img(this);
        //     return false;
        // };
    }
}

// 获取元素
var div_con=document.getElementById("container");
var li_list=div_con.getElementsByTagName("li");
bind_event(li_list)

//学习dom，为div模块添加元素
//<p>This is <em>my</em> content</p>
// var div_test=document.getElementById("use_for_test");
// var p_test=document.createElement("p");
// var p_front_text=document.createTextNode("This is ");
// var p_last_text=document.createTextNode(" content.")
// div_test.appendChild(p_test);
// p_test.appendChild(p_front_text);
// var em_test=document.createElement("em");
// var em_text=document.createTextNode("my");
// p_test.appendChild(em_test);
// em_test.appendChild(em_text);
// p_test.appendChild(p_last_text);








