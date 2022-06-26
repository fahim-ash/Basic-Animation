var images= []  
images[0]="./img/define.jpg";
images[1]="./img/plan.jpg";
images[2]="./img/design.jpg" ;
images[3]="./img/implement.jpg";
images[4]="./img/test.jpg";
images[5]="./img/maintain.jpg";
var index=0;

function change() {
    document.getElementById("mainPhoto").src = images[index];
    if (index == 5) {
      index = 0;
    } else {
      index++;
    }
  
    setTimeout(change, 3900);
}
const myTimeout = setTimeout(change, 5000);
  
window.onload = myTimeout();







