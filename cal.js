const one = document.querySelector('.one')


if(one){
    one.addEventListener('click', (e) => {
        return parseInt(one.value)
    })
}

const two = document.querySelector('.two')

two.addEventListener('click', (e) => {
    console.log(two.value)
    return parseInt(two.value)
})

const add = (n1, n2) => {
    return n1 + n2
}

    
