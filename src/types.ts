// literal Types

type Quantity = 50 | 100;

let quantity: Quantity = 100;

// Nullable Types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!')
}

greet(null)