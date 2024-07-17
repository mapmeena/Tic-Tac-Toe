document.addEventListener("DOMContentLoaded", function() {
let boxes = document.querySelectorAll(".box");
let turn = "X";
let gameOver = false;
boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click",()=>{
        if(!gameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            $(e).prop("disabled",true);
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
});
function changeTurn(){
   if(turn === "X"){
    turn = "O";
    $("#X").css("background-color","#172A3A");
    $("#O").css("background-color","#09BC8A");
   }
   else if(turn === "O"){
    turn = "X";
    $("#O").css("background-color","#172A3A");
    $("#X").css("background-color","#09BC8A");
   }
}
function checkWin(){
    let winConditions = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(i=0;i<winConditions.length;i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0!=="" && v0===v1 && v0===v2){
            // alert(turn);
            // $(".main-grid").css("display","none");
            gameOver=true;
            // $("#results").html("Congratulation , "+turn+" Wins");
            // $("#play-again").css("display","inline");
            // $("#reset").css("display","none");
            for(j=0;j<3;j++){
                $(boxes[winConditions[i][j]]).css("background-color","#75DDDD");
            }
        }
    }
}
function checkDraw(){
    if(!gameOver){
        let draw = true;
        boxes.forEach(e => {
            if(e.innerHTML === "")
                draw = false;
        })
        if(draw){
            gameOver=true;
            $("#results").html("Its a DRAW");
            $(".main-grid").css("display","none");
            $("#play-again").css("display","inline");
            $("#reset").css("display","none");
        }
    }
}
$("#play-again").click(function(){
    $("#X").css("background-color","#09BC8A");
    $("#O").css("background-color","#172A3A");
    $(".main-grid").css("display","");
    gameOver=false;
    turn="X";
    $("#results").html("");
    $(this).css("display","none");
    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeProperty("background-color");
        $(e).prop("disabled",false);
        $("#reset").css("display","inline");
    })
});
$("#reset").click(function(){
    $("#X").css("background-color","#09BC8A");
    $("#O").css("background-color","#172A3A");
    gameOver=false;
    turn="X";
    $("#results").html("");
    $(this).css("display","none");
    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeProperty("background-color");
        $(e).prop("disabled",false);
        $("#reset").css("display","inline");
    })
});
});