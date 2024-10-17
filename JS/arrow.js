function hello() {
    console.log("hello");
}
hello();

const helloArrow = () => console.log("arrow function: hello1");
helloArrow();
function add(a, b) {
    return a + b;
}
const sum = add(34, 54);
console.log("sum =", sum);

const add1 = (a, b) => a + b;
const sum1 = add1(34, 54);
console.log("arrow function sum =", sum1);