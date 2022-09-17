var div = document.createElement('div');
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()"> Search</button>
<div id="active"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){

    let cc = document.getElementById("txt").value

    console.log(cc);
 
    let res = await fetch(`https://api.covid19api.com/dayone/country/${cc}`)

    let result = await res.json();

    console.log(result);

    var index= result.length-1;

    var result1 = result[index].Active;

    console.log(result1);

    document.getElementById("active").innerText=`Total Active Cases:${result1}`;
}