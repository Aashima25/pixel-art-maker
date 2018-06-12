let color = 'green';

for (var y = 0; y < 50; y++) {
    var row = document.createElement('div');
    row.className = 'row';
    for (var x = 0; x < 50; x++) {
        const col = document.createElement('div');
        col.className = 'column';
        col.addEventListener('click', function () {
            //col.style.backgroundColor = 'green';
            col.style.backgroundColor = color;


        });
        row.appendChild(col);
    }
    document.body.appendChild(row);
}


var parentdiv1 = document.createElement('div')
parentdiv1.className = 'parentdiv';
document.body.appendChild(parentdiv1);


var div1 = document.createElement('div')
div1.innerHTML = '';
div1.className = "palette";

div1.addEventListener('click', function () {


    //div1.style.backgroundColor="f55477";
    color = "f55477"

});

parentdiv1.appendChild(div1);


var div2 = document.createElement('div')
div2.innerHTML = '';
div2.className = "palette1";

div2.addEventListener('click', function () {


    div2.style.backgroundColor = "darkslategra";
    color=darkslategra"";

});

parentdiv1.appendChild(div2);


var div3 = document.createElement('div')
div3.innerHTML = '';
div3.className = "palette2";

div3.addEventListener('click', function () {


    div3.style.backgroundColor = "pink";

});

parentdiv1.appendChild(div3)


var div4 = document.createElement('div')
div4.innerHTML = '';
div4.className = "palette3";

div4.addEventListener('click', function () {


    div4.style.backgroundColor = "darkgray";

});

parentdiv1.appendChild(div4);

var div5 = document.createElement('div')
div5.innerHTML = '';
div5.className = "palette4";

div5.addEventListener('click', function () {


    div5.style.backgroundColor = "purple";

});

parentdiv1.appendChild(div5);


/*

div1.addEventListener('click' , function(){


    div1.style.backgroundColor="white";

});






var div2 = document.createElement('div');
document.body.appendChild(div2);
div2.className="palette1";

div2.addEventListener('click',function()
{
 div2.style.backgroundColor="black";
});




*/

