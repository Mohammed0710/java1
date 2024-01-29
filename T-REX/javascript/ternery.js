
let cal=()=>{
let age=document.getElementById("one").value;

    if(age>15)
    {
        document.write("yes")
    }
    else
    {
        document.write("no")
    }
}
document.getElementById('two').addEventListener('click',cal)
//ternary method
let res 