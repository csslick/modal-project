import './style.css'
import Modal from './Modal'

document.querySelector('#app').innerHTML = `
  <div>
    ${Modal('Welcome to the Modal', '모달창은 화면 위에 뜨는 작은 창으로, 사용자 행동에 대한 추가 정보나 선택지를 제공해 주의를 집중시키는 용도로 사용됩니다.')}
  </div>
`

