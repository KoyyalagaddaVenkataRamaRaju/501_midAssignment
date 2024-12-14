function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        return count;
    };
}

const counter = outerFunction();
console.log(counter()); 
console.log(counter()); 