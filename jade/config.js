const files = [
    {"jade":"src/index.jade","out":"index.html"}
]
const outDir = "../docs/";
const menuSettings = [
    {"title":"秋之盒",
        "childs":[
                {"title":"主页","href":"/"},
                {"title":"立刻下载","href":"/download"}
        ]
    },
    {"title":"拓展模块",
        "childs":[
            {"title":"浏览拓展模块","href":"/extension/"},
            {"title":"如何安装拓展模块?","href":"/help/?md=ext.md"},
            {"title":"开发拓展模块","href":"/go/open/"}
        ]
    },
    {"title":"开源/捐赠",
        "childs":[
            {"title":"捐赠与支持","href":"/donate/"},
            {"title":"开源与鸣谢?","href":"/opensource/"}
        ]
    },
    {"title":"帮助",
        "childs":[
            {"title":"说明书","href":"/help/"},
            {"title":"留言","href":"/comments/"}
        ]
    },
    {"title":"关于",
        "childs":[
            {"title":"联系","href":"/about/"},
            {"title":"故事","href":"/story/"},
            {"title":"商务合作","href":"/bd/"},
            {"title":"开发者博客","href":"https://zsh2401.top"}
        ]
    },
]
const data = {
    "title":"秋之盒官网",
    "desc":"秋之盒是开源,简约,免费的图形化ADB工具箱.欢迎你在这里安全地下载秋之盒以及寻求帮助,共同促进秋之盒的发展",
    "menu":menuSettings
}
module.exports = {
    data,
    menuSettings,
    files,
    outDir
}