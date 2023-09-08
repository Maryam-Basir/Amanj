function addTbl(arr){
    debugger
let name=document.getElementById("name").value;
let lastName=document.getElementById("lastName").value;
let email=document.getElementById("email").value;
let tel=document.getElementById("tel").value;
let html="";
html+=`<tr">
<td id="tel_tbl">${name}</td>
<td id="email_tbl">${lastName}</td>
<td id="lastName_tbl">${email}</td>
<td id="name_tbl">${tel}</td>
</tr>`
let table=document.getElementById("tr");

table.append(html);
close();

}

function close(){
    $("#modalBody").modal('hide')
}
function openModal(){
   $('#modalBody').modal('show')
}