const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

Array.from(placeholders).map((el) => {
  el.addEventListener('dragover', dragover);
  el.addEventListener('dragenter', dragenter);
  el.addEventListener('dragleave', dragleave);
  el.addEventListener('drop', dragdrop);
});

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
  e.preventDefault();
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}

function dragenter(e) {
  e.target.classList.add('hovered');
}

function dragdrop(e) {
  e.target.append(item);
  e.target.classList.remove('hovered');
}
