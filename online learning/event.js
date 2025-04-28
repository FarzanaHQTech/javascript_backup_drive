
// bad practise html e kaj korte hoy html e function call korte hoy//

function subscribe(){
    document.getElementById('text').innerHTML='Subscribed';
    document.getElementById('btn').innerHTML='Subscribed';
    document.getElementById('btn').style.backgroundColor='#262626'
}

function liked(){
   
    document.getElementById('like').innerHTML='<i class="fa-solid fa-thumbs-up"></i> Liked';
}

function keyPress(){
    document.getElementById('text').innerHTML='Key pressed';
}
// function onLoad(){
//     alert('Testing JavaScript onload')
//     document.getElementById('text').innerHTML='Wibside loaded properly';
// }\

function windowReSize(){
    document.getElementById('textarea').style.height='100px'
    document.getElementById('form').style.fontFamily='Courier New';
    document.getElementById('form').style.color='#ff0000';
}
function onScroll(){
    document.getElementById('text').innerHTML='scrolling';
}

//best practise way te even run onclick html e kono kicu likhte hobe na//
/*document.getElementById('btn').onclick = function(){
document.getElementById('btn').innerHTML ='Subscried';
}*/

//modern practise html e function call korte hoy na//
document.getElementById('ul').addEventListener('click', function(e){
    // document.getElementById('btn').innerHTML ='Subscried now';
    console.log('UL click')
},
true//(bubling)
// or true// (event capturing)
)
document.getElementById('li').addEventListener('click', function(e){
    // document.getElementById('btn').innerHTML ='Subscried now';
    console.log('LI click')
},
true
)