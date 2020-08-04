const indexToValue = (_,i)=>i
const months = new Array(12).fill(0).map(indexToValue)


months.forEach( (month)=> {
const date = new Date(2009, month, 10); 
const monthString = date.toLocaleString('default', { month: 'long' });
console.log(monthString);
}
)