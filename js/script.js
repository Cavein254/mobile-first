const cover = document.getElementById('cover');
const fill = document.getElementById('bars');
fill.addEventListener('click', () => {
  if (fill.className === 'burger') {
    fill.className += ' burger-icon-hide filler';
    cover.style.display = 'block';
  } else {
    fill.className = 'burger';
    cover.style.display = 'none';
  }
});

const closeCover = document.getElementById('cover');
closeCover.addEventListener('click', () => {
  const fill = document.getElementById('bars');
  cover.style.display = 'none';
  fill.className = 'burger';
});
