const modalOverlay = document.querySelector('.modal-overlay');
const modalOpenBtn = document.querySelector('.modal-btn');
const modalCloseBtn = document.querySelector('.close-btn');

modalOpenBtn.addEventListener('click', function(){
    //* I did the toggle instead of the add.. may lead to a bug down the road?
    modalOverlay.classList.toggle('open-modal');
});

modalCloseBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal');
});