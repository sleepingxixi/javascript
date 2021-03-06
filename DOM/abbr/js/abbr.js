function displayAbbreviations() {
    // 取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    // 遍历所有缩略词
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    // 创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dtitile = document.createElement("dt");
        var dtitile_text = document.createTextNode(key);
        dtitile.appendChild(dtitile_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitile);
        dlist.appendChild(ddesc);
    }

    // 创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // 将内容插入到body里面
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

window.onload = displayAbbreviations;


