function add_item_list() {
    debugger
    let input_list = document.getElementById("list_input").value;
    let item = document.createElement("li");
    item.textContent=input_list
    let list=document.getElementById("list_item");
    list.appendChild(item);
}
function remove(){
    let value=document.getElementById("list_input").value;
    // console.log(value)
    let item=document.getElementById("list_item");
    for(let li of item.children){
        if(li.textContent===value){
            item.removeChild(li)
        }
    }
}