class CounterPlag {
  counterValue = 0;
  counterStep = 1;

  constructor({ value, step } = {}) {
    this._counterValue = value;
    this._counterStep = step;
    this._refs = this._getRefs;
  }

  _getRefs() {
    const refs = {};
    refs.decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
    refs.ncrementBtn = document.querySelector('#counter button[data-action="increment"]');
    refs.valueBtn = document.querySelector('#value"]');
    return refs;
  }

  performActions() {
    decrementBtn.addEventListener('click', () => {
      this.decrement();
      console.log('decrement');
    });

    incrementBtn.addEventListener('click', () => {
      this.increment();
      console.log('increment');
    });
  }
  increment(step) {
    this.counterStep += step;
  }
  decrement(step) {
    this.counterValue -= step;
  }
}
const counter = new CounterPlag({ counterStep: 1 });
