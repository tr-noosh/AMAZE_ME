
function slide(id, max, file, slideN) {
    this.name = id;
    this.max = max;
    this.file = file;
    this. slideN = slideN;
}


var slide1 = new slide('1currentslide',9,'keyframes',1)
var slide2 = new slide('2currentslide',21,'colouredframes',1)
/*function objectalert(id){
    alert(id.name);
}    *///works


    var slideN=1;
    function switchImg(id,N, direct){
     if(id.slideN>=id.max&&direct==1){
       id.slideN=1;
     }
      else{
        if(id.slideN<=1&&direct==0){
          id.slideN=id.max;
        }
        else{
        id.slideN=id.slideN+N;
        }
      }
           
      let next= "/images/slides/"+id.file+"/frame"+id.slideN+".png";
      //document.getElementById(Nid+'source').innerHTML= next;
      document.getElementById(id.name).src= next;
    }

function setPlaySpeed() { 
        let vid = document.getElementById("vidID");
        vid.playbackRate = 2;
    } 
var oclass="stone";
function setAnimation(n) {
  var block = document.getElementById("animex");
  block.classList.remove(oclass);
  var cls="stone";
  switch (n){
    case 1:
      cls= "stone";
      break;
    case 2:
      cls= "wood";
      break;
    case 3:
      cls= "plastic";
      break;
    case 4:
      cls= "rubber";
      break;
  }
  block.classList.add(cls);
  reset_animation();
  oclass=cls;
}
function reset_animation() {
  var block = document.getElementById('animex');
  block.style.animation = 'none';
  block.offsetHeight; /* trigger reflow */
  block.style.animation = null; 
}
