function calculator(){
    console.log("Calculating ... ");
    let num1 = Number(prompt("Enter the number"));//parse into a number
    
    document.getElementById("calculationZone").innerHTML=`<p>${num1} * 10 = ${num1*10}</p>`;
}