$("#popup button").click(()=>{
    //#popup button를 클릭하면 실행하라.
    $("body").removeClass("popupshow")
    //body의 popupclass를 제거해라.
});

$("body").height(2000) // height, width 메서드
// $("body").css("color","red")

$(window).scroll(()=>{
    //브라우저 창의 스크롤하면
    if( $(window).scrollTop() > 0){
        // 스크롤바 위치가 0보다 커지면 
        $("html").addClass("scroll");
    }else{
        //0이라면
        $("html").removeClass("scroll");
    }
})

comsole.log(typeof $(window).scrollTop(), $(window).scrollTop())

// 제이쿼리 간단한 문법
// 1. $("스타일 선택자와 동일")
// -> 단 가상 선택자는 제이쿼리 선택자 불가
// 2. 제이쿼리 선택자 다음에는 메서드 removeClass 혹은 이벤트 click이 온다.
// 3. 이벤트와 메서드의 차이는 () => { } 화살표 함수 유무
// 이벤트 : click , scroll , swiper, hover , mouseenter , mouseleave