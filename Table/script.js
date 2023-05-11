document.addEventListener("DOMContentLoaded", function()
{
    var tableBody=document.querySelector("#numberTable tbody");

    for(var i=1;i<=100;i++)
    {
        var numberWord=numberToWord(i);
        var tableRow=document.createElement("tr");
        var numberCell=document.createElement("td");
        var wordCell=document.createElement("td");


        numberCell.textContent=i;
        wordCell.textContent=numberWord;

        tableRow.appendChild(numberCell);
        tableRow.appendChild(wordCell);
        tableBody.appendChild(tableRow);
    }
});

function numberToWord(number)
{
    var ones=[
     "","one","two","three","four","five","six","seven","eight","nine",
    "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];

    var tens=[
        "","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninty"
    ];

    if(number===0)
    {
        return "zero";
    }

    if(number<20)
    {
        return ones[number];
    }

    if(number>=20 && number<100)
    {
        var tensDigit=Math.floor(number/10);
        var onesDigit=number %10;
        return tens[tensDigit]+" "+ones[onesDigit];
    }

    if(number>=100)
    {
        var hundredsDigit=Math.floor(number/100);
        var tensAndOnesDigits=number%100;

        return ones[hundredsDigit]+" hundred";
    }
}