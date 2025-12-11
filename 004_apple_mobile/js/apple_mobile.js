/* Footer Menu Script */
// click 이벤트 실행 선택자 할당

var plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
console.log('plutBtn : ', plusBtn);
// plusBtn Item들 추출 후 각각 할당
// = for문 이용, 표준이벤트, 클릭 시 toggle

for(let i = 0 ; i < plusBtn.length ; i++ ){
    plusBtn[i].addEventListener('click',toggleFooterMenu)
};
// CSS 연동 클래스 할당
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';
// 이벤트 리스너
function toggleFooterMenu() {
    // alert('aa');
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}
