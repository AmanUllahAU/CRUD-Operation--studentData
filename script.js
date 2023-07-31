
var selectedRow = null;


function onFormSubmit(){
 var formData=readFormData();
 if ( selectedRow == null)
 insertNewRecord(formData);
 else
 updateRecord(formData);

 resetForm();
}



function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["fatherName"] = document.getElementById("fatherName").value;
    formData["rollNumber"] = document.getElementById("rollNumber").value;
    formData["subject"] = document.getElementById("subject").value;
    formData["classTiming"] = document.getElementById("classTiming").value;
    return formData;

}

function insertNewRecord(data){
 var table= document.getElementById("employeeList").getElementsByTagName('tbody')[0];
 var newRow = table.insertRow(table.length);
 cell1 = newRow.insertCell(0);
 cell1.innerHTML = data.fullName;
 cell2 = newRow.insertCell(1);
 cell2.innerHTML = data.fatherName;
 cell3 = newRow.insertCell(2);
 cell3.innerHTML = data.rollNumber;
 cell4 = newRow.insertCell(3);
 cell4.innerHTML = data.subject;
 cell5 = newRow.insertCell(4);
 cell5.innerHTML = data.classTiming;
 cell6 = newRow.insertCell(5);
 cell6.innerHTML = `<a onclick = "onEdit(this)">Edit</a>
                    <a onclick = "onDelete(this)">Delete </a>`;
}


function resetForm() {
    document.getElementById("fullName").value="";
    document.getElementById("fatherName").value="";
    document.getElementById("rollNumber").value="";
    document.getElementById("subject").value="";
    document.getElementById("classTiming").value="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("fatherName").value= selectedRow.cells[1].innerHTML;
    document.getElementById("rollNumber").value= selectedRow.cells[2].innerHTML;
    document.getElementById("subject").value= selectedRow.cells[3].innerHTML;
    document.getElementById("classTiming").value= selectedRow.cells[4].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.fatherName;
    selectedRow.cells[2].innerHTML=formData.rollNumber;
    selectedRow.cells[3].innerHTML=formData.subject;
    selectedRow.cells[4].innerHTML=formData.classTiming;
}


function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}
}






