let btn = document.querySelectorAll('.btn')
let op = 0
let obj = {
    top: ['?', '?', '?'],
    mid: ['?', '?', '?'],
    bot: ['?', '?', '?'],
}

btn.forEach((x) => {
    x.addEventListener('click', () => {
        if (op == 0) {
            x.innerHTML = 'X'
            op = 1
            x.role[0] == 't' ? obj.top[x.role[1] - 1] = 1 : false ;
            x.role[0] == 'm' ? obj.mid[x.role[1] - 1] = 1 : false ;
            x.role[0] == 'b' ? obj.bot[x.role[1] - 1] = 1 : false ;
            logic()
        }
        else if (op == 1) {
            x.innerHTML = 'O'
            op = 0
            x.role[0] == 't' ? obj.top[x.role[1] - 1] = 0 : false ;
            x.role[0] == 'm' ? obj.mid[x.role[1] - 1] = 0 : false ;
            x.role[0] == 'b' ? obj.bot[x.role[1] - 1] = 0 : false ;
            logic()
        }
    }, {once : true})
})

function logic () {
    let w = '?'
    // Horizontal
    obj.top.every(x => x === 1) ? w = 1 : false ;
    obj.top.every(x => x === 0) ? w = 0 : false ;
    obj.mid.every(x => x === 1) ? w = 1 : false ;
    obj.mid.every(x => x === 0) ? w = 0 : false ;
    obj.bot.every(x => x === 1) ? w = 1 : false ;
    obj.bot.every(x => x === 0) ? w = 0 : false ;
    // Vertical
    let rowOne = [obj.top[0], obj.mid[0], obj.bot[0]]
    let rowTwo = [obj.top[1], obj.mid[1], obj.bot[1]]
    let rowThree = [obj.top[2], obj.mid[2], obj.bot[2]] 
    rowOne.every(x => x === 1) ? w = 1 : false ;
    rowOne.every(x => x === 0) ? w = 0 : false ;
    rowTwo.every(x => x === 1) ? w = 1 : false ;
    rowTwo.every(x => x === 0) ? w = 0 : false ;
    rowThree.every(x => x === 1) ? w = 1 : false ;
    rowThree.every(x => x === 0) ? w = 0 : false ;
    // Axis
    let axisOne = [obj.top[0], obj.mid[1], obj.bot[2]]
    let axisTwo = [obj.top[2], obj.mid[1], obj.bot[0]]
    axisOne.every(x => x === 1) ? w = 1 : false ;
    axisOne.every(x => x === 0) ? w = 0 : false ;
    axisTwo.every(x => x === 1) ? w = 1 : false ;
    axisTwo.every(x => x === 0) ? w = 0 : false ;
    // Winner Boolian
    w == 1 ? console.log('X won') : false ;
    w == 0 ? console.log('O won') : false ;
}

