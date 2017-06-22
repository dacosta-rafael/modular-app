
//model - could leverage asuync call to data source based on dom attribute above
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

    