
var size=document.querySelectorAll(".card").length;
for(var i=0;i<size;i++){
    document.querySelectorAll(".card")[i].addEventListener("click",doclick);

}
var last=null;
function doclick(){
    // console.log(this.innerHTML);

    var clicked=this.innerHTML;
    var beat;
   
    if(clicked=='1'){
        beat=new Audio("./sounds/jethalal1.mp3");
        beat.play();

    }
    if(clicked=='2'){
        beat=new Audio("./sounds/sodhi.mp3");
        beat.play();

    }
    if(clicked=='3'){
        beat=new Audio("./sounds/chai.mp3");
        beat.play();

    }
    if(clicked=='4'){
        beat=new Audio("./sounds/bhide.mp3");
        beat.play();

    }
    if(clicked=='5'){
        beat=new Audio("./sounds/baka.mp3");
        beat.play();

    }
    if(clicked=='6'){
        beat=new Audio("./sounds/daya.mp3");
        beat.play();

    }
    if(clicked=='7'){
        beat=new Audio("./sounds/dayalaugh.mp3");
        beat.play();

    }
    if(clicked=='8'){
        beat=new Audio("./sounds/bapuji.mp3");
        beat.play();

    }
    if(last!=null){
        last.pause();
    }
    last=beat;




}
