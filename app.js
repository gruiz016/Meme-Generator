const form = document.querySelector('form');
const imgValue = document.querySelector('#img');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const contentColumn = document.querySelector('.all-content');
const submitBtn = document.querySelector('.submit');

const clearValues = () => {
    [imgValue.value, topText.value, bottomText.value] = ['', '', ''];
}

form.addEventListener(('click'), (event) => {
    event.preventDefault();
});

submitBtn.addEventListener('click', () => {
    const container = document.createElement('div');
    const img = document.createElement('div');
    const topH2 = document.createElement('h2');
    const bottomH2 = document.createElement('h2');
    img.classList.add('meme');
    topH2.classList.add('top');
    bottomH2.classList.add('bottom');
    const imgUrl = imgValue.value;
    topH2.innerText = topText.value;
    bottomH2.innerText = bottomText.value;
    img.style.background = `url('${imgUrl}') no-repeat center/cover`;
    img.appendChild(topH2);
    img.appendChild(bottomH2);
    container.appendChild(img);
    contentColumn.appendChild(container);
    clearValues();
});

contentColumn.addEventListener('dblclick', event => {
    if (event.target.tagName === 'DIV') {
        event.target.parentElement.remove();
    }
});




