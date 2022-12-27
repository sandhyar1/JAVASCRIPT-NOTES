console.log("generators in javascript");

//generators  it will return object
//1 -1b
function* numberGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        //76 sec
        yield i++;
       // yield (i++).toString();
    }
}

const gen = numberGen();
console.log(gen.next().value);
console.log(gen.next().value);

