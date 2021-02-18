const inputEl = document.getElementById('word');
const addBtn = document.getElementById('addBtn');
const output = document.getElementById('output');
const wordList = document.getElementById('word-list');
const words = [];

addBtn.addEventListener('click', (e) => {
    const word = document.createElement('div');
    word.classList.add('word');
    addBoxes(word);
    words.push(inputEl.value);
    clearWords();
    addWords(words);
    inputEl.value = '';
});

const clearWords = () => {
    wordList.innerHTML = '';
};
const drawBox = () => {
    const box = document.createElement('span');
    box.classList.add('letter');
    return box;
};

const isHanging = (letter) => {
    return ['q', 'y', 'p', 'g', 'j'].includes(letter);
};

const isTall = (letter) => {
    return ['t', 'd', 'h', 'l', 'b'].includes(letter);
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

const addBoxes = (word) => {
    inputEl.value.split('').forEach((letter) => {
        const box = drawBox();
        if (isHanging(letter)) {
            box.classList.add('letter-hanging');
        }
        if (isTall(letter)) {
            box.classList.add('letter-tall');
        }
        word.appendChild(box);
    });
    output.appendChild(word);
};
