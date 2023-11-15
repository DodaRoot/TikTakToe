let btn = document.querySelectorAll('.btn')
let op = 0
let arr = []
let obj = {}

btn.forEach((x) => {
    x.addEventListener('click', () => {
        if (op == 0) {
            x.innerHTML = 'X'
            op = 1
            console.log(x.role)
            arr.push(`${x.role}:${x.innerHTML}`)
        }
        else if (op == 1) {
            x.innerHTML = 'O'
            op = 0
            console.log(x.role)
            arr.push(`${x.role}:${x.innerHTML}`)
        }
    }, {once : true})
})


