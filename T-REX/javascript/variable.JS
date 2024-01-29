let a=10;
let b=20;
let cal=()=>{

    return a+b

}

document.write(`addition: ${cal()}<br>`)

let c=50;
let d=5;
let div=()=>{

    return c/d

}

document.write(`division: ${div()}<br>`)

//type of operator

document.write(`type operator ${typeof(a)}<br>`)

let firstname="kaif";

document.write(`type operator:${typeof(firstname)}<br>`)

//document.write(`To String:${a.toString}`)

let con=a.toString()
document.write(`covertion:${typeof(con)}`)

let j=6;

let ron=j.toString()

document.write(`conversion:${typeof(ron)}`)

/*LOOP

looping refers to the process of repeatedly excecuting a set of statement.

WHILE LOOP OR ENTRY LOOP

syntax:

    while(condition){
        set of statements
    }

*/

//while loop

let i=10;

while(i>0){
    document.write(`${i} while <br>`)
    i--;
    
}

//for loop

for(k=0;k<10;k++)
{
document.write(`k=${k}<br>`)
}

//nested for loop

for(x=0;x<10;x++)
{
    document.write('<br>')
    for(y=0;y<x;y++)
    {
        document.write('*')
    }
}
let n=[10,5,6,9,0,1]
document.write(n[5])

for(let k=0;k<n.length;k++){
    document.write(` <br> ${k}=${n[k]}`)
}

for (x of n )
{
    document.write(`<br>${x}`)
}