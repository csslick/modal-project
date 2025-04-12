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
openModalBtn.addEventListener('click', function() {
  Modal('title', 'content')

})