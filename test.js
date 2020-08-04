const indexToValue = (_,i)=>i
const monthsNew = new Array(12).fill(0).map(indexToValue)

monthsNew.forEach( (month)=> {
const date = new Date(2009, month, 10); 
const monthString = date.toLocaleString('default', { month: 'long' });
console.log(monthString);
}
)