function zero(e)
{
    let total=document.getElementById("zero");
    switch(e.target.getAttribute("id"))
    {
        case "one":
            document.getElementById("six").innerHTML="This is sales"
        break;
        case "two":
            document.getElementById("six").innerHTML="this is service"
        break;
        case "three":
            document.getElementById("six").innerHTML="ERROR"
        break;
        case "four":
            document.getElementById("six").innerHTML="Executive role"
        break;
        default:
            document.getElementById("six").innerHTML="click on option"
        break;
    }
}
function addoper()
{

let addoper=(a,b)=>{
    su=a+b;
    document.write(su);

}
addoper(10,30)
}


function suboper()
{
    let suboper=(a,b)=>{
        sv=a*b;
        document.write(sv)
        
    }
suboper(10,5)
}
