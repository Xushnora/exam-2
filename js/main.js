let elSearchBtn = document.getElementById('modal-menu');
let elModal= document.getElementById('menuModal');
let elClose= document.getElementById('modalClose');

elSearchBtn.addEventListener('click', function(){
  elModal.classList.add('show');
})
elClose.addEventListener('click', function(){
  elModal.classList.remove('show');
})