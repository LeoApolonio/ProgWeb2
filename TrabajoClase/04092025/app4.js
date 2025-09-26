function sumar(n1,n2)
{
    return parseInt(n1) + parseInt(n2);
}

function restar(n1,n2)
{
    return parseInt(n1) - parseInt(n2);
}

function mult(n1,n2)
{
    return parseInt(n1) * parseInt(n2);
}

function div(n1,n2)
{
    if(n2 == 0)
        {
            return "No es posible dividir entre 0";
        }else
            {
                return parseInt(n1) / parseInt(n2);
            }
}

let sum1 = sumar(10,20);
let sum2 = sumar(40,50);
let sum3 = sumar(70,80);

let res1 = restar(80,70);
let res2 = restar(50,40);
let res3 = restar(10,20);

let mult1 = mult(10,20);
let mult2 = mult(40,20);
let mult3 = mult(50,20);

let div1 = div(50,15);
let div2 = div(100,20);
let div3 = div(10,0);