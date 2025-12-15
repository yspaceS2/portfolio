/* 1. 탭 메뉴 스크립트 */
$(".tab_btn li").on("click",function(e){
    // 각각의 탭에 index값 리턴 메서드 = index()
    // 각각의 탭 인덱스번호 콘솔 출력
    let idx = $(this).index();
    console.log(idx);
    // 탭메뉴 on클래스 적용
    // 1. li에 있는 on이라는 클래스를 전부 지움
    $(".tab_btn li").removeClass('on');
    // 2. 클릭되어 이벤트가 실행된 DOM객체에 on클래스 주입
    $(this).addClass('on');
    // 해당 탭내용 연결
    // 1. 전체 탭내용 지움
    $(".tab_contents .list").stop().hide();
    // 2. 현재 인덱스와 매핑되는 .list를 보여줌
    $(".tab_contents .list").eq(idx).stop().show();
})

/* 2. 해당 질문 답 보이기 + 화살표 방향 스크립트 */
$('.question').on('click', function(){
    // 클래스명 active가 있으면 실행
    // 기본적으로 false
    if($(this).hasClass('active')){
        // 1. .active클래스를 지우고
        $(this).removeClass('active');
        // 화살표 방향 바꾸기
        // 2. up클래스를 제거하고 down클래스 주입
        $(this).children('dd').removeClass('up');
        $(this).children('dd').addClass('down');
        // 해당 내용 가리기
        // 3. 현재 DOM객체의 형제요소인 .answer의 내용을 가림
        $(this).siblings('.answer').stop().slideUp(500);
    // active라는 클래스가 존재하지 않으면
    }else{
        // 1. active 클래스를 주입
        $(this).addClass('active');
        // 화살표 방향 바꾸기
        // 2. down클래스 제거 / up클래스 주입
        $(this).children('dd').removeClass('down');
        $(this).children('dd').addClass('up');
        // 해당 내용 보여주기
        // 3. 선택된 DOM객체의 형제인 클래스answer의 내용을 보여줌
        $(this).siblings('.answer').stop().slideDown(500);
    }
})