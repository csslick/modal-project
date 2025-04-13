import './style.css'
import Modal from './Modal'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="open-modal" class="btn">Open Modal</button>
  </div>
`
 
// 모달 열기 버튼
const openModalBtn = document.querySelector('#open-modal');

// 모달 열기 이벤트 추가  
const modal_content = '모달창은 화면 위에 뜨는 작은 창으로, 사용자 행동에 대한 추가 정보나 선택지를 제공해 주의를 집중시키는 용도로 사용됩니다.'
openModalBtn.addEventListener('click', function() {
  Modal("Welcome to the Modal", modal_content)
})