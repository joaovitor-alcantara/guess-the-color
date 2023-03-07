

function getnewColors() {

    let score = document.getElementById('score')
    score.innerHTML = ''

    let blockoneColor = []
    let blocktwoColor = []
    let blockthreeColor = []

    /* gera numeros rgb aleatorios e os coloca dentro de um array */
    while (blockoneColor.length < 3) {
        let randomblockOne = Math.floor(Math.random() * 256) * 1
        blockoneColor.push(randomblockOne)

        let randomblockTwo = Math.floor(Math.random() * 256) * 1
        blocktwoColor.push(randomblockTwo)

        let randomblockThree = Math.floor(Math.random() * 256) * 1
        blockthreeColor.push(randomblockThree)


    }

    let chosenBlock = Math.floor(Math.random() * 3) * 1

    console.log(chosenBlock)

    var correctBlock;

    switch (chosenBlock) {
        case 0:
            correctBlock = blockoneColor
            break
        case 1:
            correctBlock = blocktwoColor
            break
        case 2:
            correctBlock = blockthreeColor
            break
    }


    /* nesta parte do codigo é atribuido as cores rgb geradas acima nos blocos */
    let block1 = document.getElementById('bloco1')
    block1.style.backgroundColor = `rgb(${blockoneColor[0]}, ${blockoneColor[1]}, ${blockoneColor[2]})`

    let block2 = document.getElementById('bloco2')
    block2.style.backgroundColor = `rgb(${blocktwoColor[0]}, ${blocktwoColor[1]}, ${blocktwoColor[2]})`

    let block3 = document.getElementById('bloco3')
    block3.style.backgroundColor = `rgb(${blockthreeColor[0]}, ${blockthreeColor[1]}, ${blockthreeColor[2]})`


    let rgbColor = document.getElementById('rgbColor')
    rgbColor.innerHTML = 'RGB'
    rgbColor.innerHTML += `(${correctBlock[0]}, ${correctBlock[1]}, ${correctBlock[2]})`



}


function optionOne() {
    let textInside = document.getElementsByTagName('h1')[0].innerHTML;
    let lowerText = textInside.toLowerCase()
    let rightOption = document.getElementById('bloco1').style.backgroundColor
    let score = document.getElementById('score')
    if (rightOption === lowerText) {
        score.innerHTML = 'VOCÊ ACERTOU!!!!'
    }
    else {
        score.innerHTML = 'VOCÊ ERROU!!!!'

    }
}

function optionTwo() {
    let textInside = document.getElementsByTagName('h1')[0].innerHTML;
    let lowerText = textInside.toLowerCase()
    let rightOption = document.getElementById('bloco2').style.backgroundColor
    let score = document.getElementById('score')
    if (rightOption === lowerText) {
        score.innerHTML = 'VOCÊ ACERTOU!!!!'
    }
    else {
        score.innerHTML = 'VOCÊ ERROU!!!!'

    }
}

function optionThree() {
    let textInside = document.getElementsByTagName('h1')[0].innerHTML;
    let lowerText = textInside.toLowerCase()
    let rightOption = document.getElementById('bloco3').style.backgroundColor
    let score = document.getElementById('score')
    if (rightOption === lowerText) {
        score.innerHTML = 'VOCÊ ACERTOU!!!!'
    }
    else {
        score.innerHTML = 'VOCÊ ERROU!!!!'

    }
}

function buttonEnter() {
    let buttonColor = document.getElementById('newcolorsButton')
    buttonColor.style.backgroundColor = 'rgb(19, 17, 17)'
    buttonColor.style.color = 'white'
}

function buttonOut() {
    let buttonColor = document.getElementById('newcolorsButton')
    buttonColor.style.backgroundColor = 'white'
    buttonColor.style.color = 'black'
}





