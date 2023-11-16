let textInfo = document.querySelector('.infoText')
let turn = document.querySelector('.turn')
let btn = document.querySelectorAll('.btn')
let op = 0
let obj = {
    top: ['?', '?', '?'],
    mid: ['?', '?', '?'],
    bot: ['?', '?', '?'],
}
let indexes = {
    top: ['t1', 't2', 't3'],
    mid: ['m1', 'm2', 'm3'],
    bot: ['b1', 'b2', 'b3'],
    rowOne: ['t1', 'm1', 'b1'],
    rowTwo: ['t2', 'm2', 'b2'],
    rowThree: ['t3', 'm3', 'b3'],
    axisOne: ['t1', 'm2', 'b3'],
    axisTwo: ['b1', 'm2', 't3']
}

btn.forEach((x) => {
    x.addEventListener('click', () => {
        if (op == 0) {
            p1 == '' ? turn.innerText = `The turn is for O` : false ;
            p1 != '' ? turn.innerText = `The turn is for ${p2}` : false ;
            x.innerHTML = 'X'
            x.style.color = 'red'
            op = 1
            x.role[0] == 't' ? obj.top[x.role[1] - 1] = 1 : false ;
            x.role[0] == 'm' ? obj.mid[x.role[1] - 1] = 1 : false ;
            x.role[0] == 'b' ? obj.bot[x.role[1] - 1] = 1 : false ;
            logic()
        }
        else if (op == 1) {
            p1 == '' ? turn.innerText = `The turn is for X` : false ;
            p1 != '' ? turn.innerText = `The turn is for ${p1}` : false ;
            x.innerHTML = 'O'
            x.style.color = 'blue'
            op = 0
            x.role[0] == 't' ? obj.top[x.role[1] - 1] = 0 : false ;
            x.role[0] == 'm' ? obj.mid[x.role[1] - 1] = 0 : false ;
            x.role[0] == 'b' ? obj.bot[x.role[1] - 1] = 0 : false ;
            logic()
        }
    }, {once : true})
})

let w = 10
function logic () {
    // Horizontal
    obj.top.every(x => x === 1) ? ((w = 1) , change('top')) : false ;
    obj.top.every(x => x === 0) ? ((w = 0) , change('top')) : false ;
    obj.mid.every(x => x === 1) ? ((w = 1) , change('mid')) : false ;
    obj.mid.every(x => x === 0) ? ((w = 0) , change('mid')) : false ;
    obj.bot.every(x => x === 1) ? ((w = 1) , change('bot')) : false ;
    obj.bot.every(x => x === 0) ? ((w = 0) , change('bot')) : false ;
    // Vertical
    let rowOne = [obj.top[0], obj.mid[0], obj.bot[0]]
    let rowTwo = [obj.top[1], obj.mid[1], obj.bot[1]]
    let rowThree = [obj.top[2], obj.mid[2], obj.bot[2]] 
    rowOne.every(x => x === 1) ? ((w = 1) , change('rowOne')) : false ;
    rowOne.every(x => x === 0) ? ((w = 0) , change('rowOne')) : false ;
    rowTwo.every(x => x === 1) ? ((w = 1) , change('rowTwo')) : false ;
    rowTwo.every(x => x === 0) ? ((w = 0) , change('rowTwo')) : false ;
    rowThree.every(x => x === 1) ? ((w = 1) , change('rowThree')) : false ;
    rowThree.every(x => x === 0) ? ((w = 0) , change('rowThree')) : false ;
    // Axis
    let axisOne = [obj.top[0], obj.mid[1], obj.bot[2]]
    let axisTwo = [obj.top[2], obj.mid[1], obj.bot[0]]
    axisOne.every(x => x === 1) ? ((w = 1) , change('axisOne')) : false ;
    axisOne.every(x => x === 0) ? ((w = 0) , change('axisOne')) : false ;
    axisTwo.every(x => x === 1) ? ((w = 1) , change('axisTwo')) : false ;
    axisTwo.every(x => x === 0) ? ((w = 0) , change('axisTwo')) : false ;
}

function change (x) {
    for (let index of indexes[x]) {
        let change = document.getElementById(index)
        change.style.color = 'green'
        btn.forEach((x) => {
            x.replaceWith(x.cloneNode(true))
        })
    }
    let child = document.createElement('h3')
    let button = document.createElement('button')
    let wt = document.querySelector('.winnerText')
    wt.append(child)
    wt.append(button)
    if (w == 0) {
        p2 == '' ? child.innerText = `O wins the game` : false ;
        p2 != '' ? child.innerText = `${p2} wins the game` : false ;
    }
    else if (w == 1) {
        p1 == '' ? child.innerText = `X wins the game` : false ;
        p1 != '' ? child.innerText = `${p1} wins the game` : false ;
    }
    button.innerText = 'Restart'
    button.addEventListener('click', () => {
        location.reload()
    })
    turn.innerText = ''
}

let p1 = 'Player One'
let p2 = 'Player Two'
// Player Data
function playerInfo() {
    let p1 = document.querySelector('#PlayerOne').value
    let p2 = document.querySelector('#PlayerTwo').value
    localStorage.setItem("p1", p1)
    localStorage.setItem("p2", p2)
    window.location.replace('http://127.0.0.1:5500/Repo/TikTakToe/game')
    event.preventDefault()
}
p1 = localStorage.getItem("p1")
p2 = localStorage.getItem("p2")

textInfo.innerText = `Hello ${p1} and ${p2}`
turn.innerText = `The turn is for ${p1}`

if (p1 == '' || p2 == '') {
    textInfo.innerText = `Hello stranger`
    turn.innerText = `Hope you enjoy this game`
}
