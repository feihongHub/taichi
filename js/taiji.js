
var links = document.querySelectorAll("li.sub-li.time4")
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click",()=>{
        //先移除所有的current
        links.forEach((item)=>{
            item.className = "sub-li time4";
        })
        links[i].className = "sub-li time4 current";
    })
}

// 获取所有.item元素
let items=document.querySelectorAll('.album-item');
var count = 0;
// 设置选中态样式
function setActive(){
    // 遍历所有.item元素，移出active样式
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
    count = this.getAttribute("index")
    modifyContent(count % 5);
    
}
// 遍历所有.item元素，分别为其设置点击事件
items.forEach((item)=>{
    item.addEventListener('click',setActive);
})
// 修改太极相册内容
function modifyContent(index){
    var obj = document.querySelector('.featurette-heading');
    var lead = document.querySelector('.lead')
    obj.innerHTML = '太极拳'+index;
    lead.innerHTML = '自定义描述'+index;
}

setInterval(function(){
    items.forEach((item)=>{
        item.classList.remove('active');
    })
    modifyContent(count % 5);
    items[count++ % 5].classList.add('active');
},5000);