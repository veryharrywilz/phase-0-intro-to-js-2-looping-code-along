function writeCards(name, event) {
    const array = []
    for (let i = 0; i < name.length; i++){
        const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
        array.push(message);
    }
    return array;
}

function countDown(n){
    let num = n
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }
}