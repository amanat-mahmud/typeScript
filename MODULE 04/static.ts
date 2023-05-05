class Counter {
    static counter: number = 0;
    // constructor(counter:number){
    //     this.counter = counter
    // }
    // increment(): number
    static increment(): number {
    //   return (this.counter = this.counter + 1);
      return (Counter.counter = Counter.counter + 1);
    }
    static decrement(): number {
      return (Counter.counter = Counter.counter - 1);
    }
  }
  
  // const instance1 = new Counter();
  // const instance2 = new Counter();
  //console.log(instance1.increment())
  console.log(Counter.increment()); // 0-1
  console.log(Counter.increment()); // 1-2