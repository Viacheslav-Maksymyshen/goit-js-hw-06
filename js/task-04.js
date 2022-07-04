// class CounterPlag {
//   counterValue = 0;

//   constructor({ value, step } = {}) {
//     this.counterValue = value;
//     this.counterStep = step;
//   }

//   getRefs() {
//     const refs = {};
//     refs.decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
//     refs.ncrementBtn = document.querySelector('#counter button[data-action="increment"]');
//     refs.valueBtn = document.querySelector('#value"]');
//     return refs;
//   }

//   performActions() {
//     this.refs.decrementBtn.addEventListener('click', () => {
//       this.decrement();
//       console.log('decrement');
//     });

//     incrementBtn.addEventListener('click', () => {
//       this.increment();
//       console.log('increment');
//     });
//   }
//   increment(step) {
//     this.counterStep += step;y
//   }
//   decrement(step) {
//     this.counterValue -= step;
//   }
// }
// const counter = new CounterPlag({ counterStep: 1 });

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const valueBtn = document.querySelector('#value');
let counterValue = 0;
decrementBtn.addEventListener('click', () => {
  counterValue += 1;
});

incrementBtn.addEventListener('click', () => {
  console.log('increment');
});
console.log(counterValue);
