
//model - could leverage asuync call to data source based on dom attribute above
///////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/****
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}



function Cake(flavor, quantity) {
 
    console.log(this);
    this.flavor = flavor;
    this.quantity = quantity;
    console.log('This function is invoked.');
    
}

var rafael = new Cake('Chocolate', '1');
console.log(john);

var mike = new Cake('Vanbilla', '3');
console.log(jane);

Cake.prototype.getOrder = function() {
    return this.quantity + ', ' + this.flavor;   
}

console.log(rafael.getOrder());
console.log(mike.getOrder());

***///



//////////////////>>>>>>>

var blocks = [
{name:'balance', copy:'copy for balance'},
{name:'status', copy:'copy for status'},
{name:'test', copy:'copy for test'},
];
var i;


/// content controller
for (i = 0; i < blocks.length; i++) { 
    iterator(blocks[i])

}




//view 
function iterator(obj){
  var rootnode = document.getElementById( blocks[i]['name']);
  var targetnode;
  targetnode = rootnode.lastElementChild;
      addform(obj, rootnode, targetnode);
}


function addform(obj, rootnode, targetnode){
    var newnode = document.createElement('div');
    newnode.setAttribute("id", "forming");
    newnode.className = 'nhide';
    newnode.innerHTML = '<form><textarea name="comment">'+ blocks[i]['copy'] +'</textarea></form>';
      targetnode.appendChild(newnode);
            rootnode.onclick=function(){
              //console.log(this.id);

              //here set all to hide, except the event here
              resetev(this.id);
              
          if( newnode.className === 'nhide'){
              newnode.className = 'nshow';
          }else{
               newnode.className = 'nhide'
          }
      }; 
}

/****
*****
reset events
*****/
function resetev(x){
  console.log('a test: ',  x);
   var rootnode = document.getElementById( 'main');
   //nsole.log( rootnode.children );
   for (i = 0; i < rootnode.children.length; i++) { 
    //console.log( rootnode.children[i].children[0].id );
    //add hide class here
    //console.log(   rootnode.children[i].children[0].id );
    //console.log( rootnode.children[i].children[0].children[0].lastElementChild );
      if( x !== rootnode.children[i].children[0].id ){
        //console.log('b test: ','yes');
        rootnode.children[i].children[0].children[0].lastElementChild.className = 'nhide'
      }

  }
}

    