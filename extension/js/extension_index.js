var __INDEX_DATA_URL = "/_data_/extensions/index.html";
var vm = null;
function initVue(){
    vm = new Vue({
    el:"#extensions",
    data:{
        extensions:null
    }, 
    methods:{
        onClickExt:function(e){
            window.location ="extension.html?j=" + e.srcElement.getAttribute("info");
        }
    }});
}
function fetchData(){
    fetch(__INDEX_DATA_URL)
        .then(response=>response.text())
        .then(data=>{
            var jObj = eval("(" +data +")");
            console.log(jObj);
            vm.$data.extensions = jObj.exts;
        }).catch(err=>{
            console.log(err);
        })
    }
$(document).ready(()=>{
    initVue();
    fetchData();
});