/* slide라는 녀석이 4개 있는데
첫번째 .slide는 이미 보여지고 있는 상황이고
나머지 .slide들은 숨겨진 상황이다.
다음 그림을 봐야 한다.

다시 말해 보여지고 있던 //모든// .slide는 서서히 사라지고
//두번째// .slide가 서서히 나타나야 한다.

그 다음에는 보여지고 있던 //모든// .slide는 서서히 사라지고
//세번째// .slide가 서서히 나타나야 한다.

그 다음에는 보여지고 있던 //모든// .slide는 서서히 사라지고
//네번째// .slide가 서서히 나타나야 한다.

그 다음에는 보여지고 있던 //모든// .slide는 서서히 사라지고
//첫번째// .slide가 서서히 나타나야 한다.
*/

var now = 0;
var gaesu = $(".slide").length;

function sliding(dir){
    now = now + dir;
    if(now >= gaesu){
        now = 0;
    }else if(now < 0){
        now = gaesu - 1;
    }
    $(".slide").fadeOut();
    $(".slide").eq(now).fadeIn();
}

$("#prev").click(function(){
    sliding(-1);
});
$("#next").click(function(){
    sliding(1);
});

/*
now = now + 1; //now를 1 증가시켜라.//
*/

/*
function 함수이름(재료){
    내용
}

예를 들어)
function 돈복사기(가진돈){
    var 결과 = 가진돈*2;
    return 결과;
}
*/

function nextSlide(){
    now++;
    if(now >= 4){
        now = 0;
    }
    $(".slide").fadeOut();
    $(".slide").eq(now).fadeIn();
}

function prevSlide(){
    now--;
    if(now < 0){
        now = gaesu - 1;
    }
    $(".slide").fadeOut();
    $(".slide").eq(now).fadeIn();
}

// setInterval(nextSlide, 3000);
// #next를 눌렀을 때 이런 일이 벌어질 것이다.
// 이런 일이란? nextSlide를 행하는 것.
$("#prev").click(function(){
    prevSlide(-1);
})
$("#next").click(function(){
    nextSlide(1);
});

//function nextSlide(){-s