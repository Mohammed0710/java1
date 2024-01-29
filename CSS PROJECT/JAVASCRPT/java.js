let ass=null;
console.log(ass);

let objc={
    p_id:'12',
    pName:"soap",
    price:"30rs",
    pImg:"image/LOGO.jpg"
}

document.write("<br>productId=",objc.p_id,"<br>productName=",objc.pName)
document.write(
    "<br>IMAGE=",objc.pImg
)



function priceofer(e)
{
    e.preventDefault();
    let amount=document.getElementById("fname").value;
   console.log(amount);

    if(amount>2000)
    {
        console.log(amount)
        document.getElementById("offer").innerHTML="offer available"
    }
    else
    {
         document.getElementById("offer").innerHTML="offer not available"
    }
}


function XP (){

let experience=document.getElementById("one").value


if(experience<=2){
    console.log(experience)
    document.getElementById("two").innerHTML="5000 Increament"
}

else if(experience<=5){
    document.getElementById("two").innerHTML="10000 increment"
}
else{
    document.getElementById("two").innerHTML="no increment"
}





}



