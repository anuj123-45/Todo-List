add=document.getElementById('add');

function update(){
    console.log("updating list");

    tit=document.getElementById('title').value;
desc=document.getElementById('description').value


if(localStorage.getItem('itemsJSON')==null){
    itemJsonArray=[];
    itemJsonArray.push([tit,desc]);
    localStorage.setItem('itemsJSON',JSON.stringify(itemJsonArray));
}
else {
    itemJsonArraystr=localStorage.getItem('itemsJSON');
     itemJsonArray=JSON.parse(itemJsonArraystr);
      itemJsonArray.push([tit,desc]);
      localStorage.setItem('itemsJSON',JSON.stringify(itemJsonArray));
      
      
}
// populate the table

tablebody=document.getElementById('tablebody');
let str="";
itemJsonArray.forEach((element ,index) => {
    str+=`<tr >
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onClick="del(${index})">Delete</button></td>

</tr>`;
});

tablebody.innerHTML=str;
}


add.addEventListener('click',update);




function del(i){
document.getElementById('tablebody').deleteRow(i);

}

clr=document.getElementById('clr')
clr.addEventListener('click',()=>{
    if(confirm("Would you like to clear all ?"))
    localStorage.clear();
    document.getElementById('tablebody').style.display="none";

 
})

function load(){
   location.reload();
}


