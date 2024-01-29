
let product=[{
    pro_name:"TV",
    brand:"oppo",
    cost:5000,
    size:"45 inch",
    pro_image:"IMAGES/LOGO.jpg"

},{
    pro_name:"fridge",
    brand:"samsung",
    cost:6000,
    size:"55 inch",
    pro_image:"IMAGES/PIC 1.png"
},{
    pro_name:"AC",
    brand:"lenovo",
    cost:7000,
    size:"65 inch",
    pro_image:"IMAGES/PIC LOGO.png"
}
];

document.getElementById("hea").addEventListener('click',()=>

{ 

document.getElementById("p1").innerHTML=product.map((prod)=>
    {
        return (`<br> product_name:${prod.pro_name} <br> product_brand:${prod.brand} <br> product_cost:${prod.cost}`)
    
    })
 
})