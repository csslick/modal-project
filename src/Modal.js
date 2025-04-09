const Modal = function (title="title", content="content") {
  const modal_html = `
  <div class="modal fixed h-screen w-screen z-99 flex justify-center items-center">
    <div class="modal-overlay fixed w-screen h-screen bg-black border-red-500 opacity-50"></div>
    <div class="modal-content bg-white relative z-999 w-[490px] rounded-[4px] p-5">
      <h3 class="text-xl font-bold mb-2">${title}</h3>
      <p class="mb-4">${content}</p>
      <footer class="flex justify-end">
          <button class="modal-close bg-blue-500 text-white px-4 py-2 rounded-[4px]">close</button>  
      </footer>
    </div>
  </div>
`
  return modal_html
}


export default Modal;