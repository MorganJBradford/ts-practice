type Customer = {
  birthday?: Date;
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(1);

// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.('a');


// Type Assertions
let message = 'abc';
//* 1
let endsWithC = (<string>message).endsWith('c');
//* 2. First is used more often
let alternativeWay = (message as string).endsWith('c');


interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  // ...
}

drawPoint({x: 1, y: 2});