let input=document.getElementById("output");

function display(num){
    output.value += num;
}
function Calculate(){
    try{
        output.value=eva1();
    }
    catch(error){
        alert("invalid");
    }
}

function del(){
    output.value=output.value.slice(0,-1);
}


