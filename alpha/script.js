const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const inputEl = document.getElementById('word');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');
const wordList = document.getElementById('word-list');
const words = [];

open.addEventListener('click', () => container.classList.add('show-section'));

close.addEventListener('click', () =>
    container.classList.remove('show-section')
);

addBtn.addEventListener('click', (e) => {
    const word = document.createElement('div');
    word.classList.add('word');
    inputEl.value.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.classList.add('letter-underline');
        word.appendChild(letterEl);
    });

    output.appendChild(word);

    words.push(inputEl.value);
    clearWords();
    addWords(words);
    inputEl.value = '';
});

const clearWords = () => {
    wordList.innerHTML = '';
};
const addWords = (words) => {
    shuffle(words);
    words.forEach((word) => {
        addWord(word);
    });
};

const addWord = (word) => {
    const wordEl = document.createElement('p');
    wordEl.innerHTML = word;
    wordList.appendChild(wordEl);
};

const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};
