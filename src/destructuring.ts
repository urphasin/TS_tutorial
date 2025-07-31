type Car = { brand: string; year: number };
const car: Car = {brand: 'mercedes', year: 2020};

const {brand, year} = car;
console.log(brand + " " + year);