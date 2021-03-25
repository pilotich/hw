const name = prompt('Enter your name?');
alert(name);

let i = 0;

while (i === 0){
    let number = prompt('write your number...');
    let result = Math.pow(+number, 2);
    let square = prompt('square this numbers');
    if (+square === +result){
        alert('you are absolutely right');
        i++;
    }
    else{
        alert('oh no, you miss it. Try again ');
    }
}