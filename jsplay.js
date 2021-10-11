function makeCounter(s) {
    privateCounter = typeof s !== 'undefined' ? s : 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
        return privateCounter
      },
  
      decrement: function() {
        changeBy(-1);
        return privateCounter
      },
  
      value: function() {
        return privateCounter;
      }
    };
  };
// var counter = makeCounter(4)
// console.log(counter)
// // console.log(counter.value())
// // console.log(counter.value('4'));  // 0.

// console.log(counter.increment());
// // counter.increment();
// // console.log(counter.value());  // 2.

// // counter.decrement();
// // console.log(counter.value());  // 1.
var counter = makeCounter();
console.log(counter.value());
// 0

var counter2 = makeCounter(4);

console.log(counter2.value());
// 4

console.log(counter2.increment());
// 5
console.log(counter2.value());
// 5

counter2.decrement();
counter2.decrement();
console.log(counter2.decrement());
// 2
