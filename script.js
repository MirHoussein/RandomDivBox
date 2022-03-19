var buttonAdd = document.querySelector('.add-button');
buttonAdd.addEventListener('click', buttons)

function buttons() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById('div-box').innerHTML = `
    <img src= "images/box${x}.png" style="width:200px">
    `;

    // DivBox remove ucun js kodlari
    var div = document.getElementById('div-box');
    div.addEventListener('click', myFunction);

    function myFunction() {
        const divBox = document.getElementById("div-box");
        divBox.removeChild(divBox.firstChild);
    }

}

