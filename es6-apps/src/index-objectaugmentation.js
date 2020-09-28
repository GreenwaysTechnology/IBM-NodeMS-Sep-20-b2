//object augmentation;
//empty object
let cust = {};
console.log(cust)

//augmenting ; add,update,delete,iterate.

//add
cust.id = 1;
cust.name = 'foo'
cust.city ='coimbatore'
console.log(cust)

//update ; how update works; js looks whehter property exist, if then update,else 
// update
cust.name = 'bar'
console.log(cust)

//iterate
for (const key in cust) {
  console.log(key,cust[key])
}

//delete 
delete cust.city
console.log(cust)