/* Video Control Script */
// HTML의 동영상을 선택하여 변수video에 저장
var video = $('video');
// 동영상의 일시정지 버튼을 선택하여 변수btn에 저장
var btn = $('#car_btn')
console.log(video);
console.log(btn);
// 버튼 클릭했을 때
btn.click(function(){
    // video의 0번째가 멈춰 있다면
    if(video.get(0).paused){
        // video의 0번째를 재생시키고
        video.get(0).play();
        // btn의 html을 아래의 인자값으로 바꾼다.
        btn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>')
    }else{
        // 0번째 video를 멈추고
        video.get(0).pause();
        // btn의 html을 아래의 인자값으로 바꾼다.
        btn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>')
    }
});
/* Video Sound Control Script */
//  볼륨버튼을 선택하여 변수btn2에 저장
var btn2 = $('#car_sound');
// prop = property(속성)
// video의 속성 중 muted(=음소거)를 true값으로 => 음소거
video.prop('muted',true);
// 음소거버튼 클릭 시
btn2.click(function(){
    // muted 상태일때
    // 리턴값이 t/f 이므로 조건문으로 사용
    if(video.prop('muted')){
        video.prop('muted',false); //음재생
        // btn2의 html을 아래의 인자로 바꿈
        btn2.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
    }else{
        // mute 상태가 아닐때
        video.prop('muted', true); //음소거
        // btn2의 html을 아래의 인자로 바꿈
        btn2.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
    }
});