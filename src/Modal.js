const Modal = function (title="title", content="content") {
  const modal_html = `
  <div class="modal fixed h-screen w-screen left-0 top-0 z-99 flex justify-center items-center">
    <div class="modal-overlay fixed w-screen h-screen bg-black border-red-500 opacity-50"></div>
    <div class="modal-content bg-white relative z-999 w-[490px] rounded-[4px] p-5">
      <h3 class="text-xl font-bold mb-2">${title}</h3>
      <p class="mb-4">${content}</p>
      <footer class="flex justify-end">
          <button id="modal-close" class="modal-close btn">close</button>  
      </footer>
    </div>
  </div>
`
  // return modal_html
  // document.body.innerHTML += modal_html

  // 모달창이 열려 있는지 확인
  document.body.insertAdjacentHTML('beforeend', modal_html)
  
  // 모달창 닫기
  const modalCloseBtn = document.querySelector('#modal-close');
  modalCloseBtn.addEventListener('click', function() {
    document.querySelector('.modal').remove()
  })
  
}

export default Modal;
