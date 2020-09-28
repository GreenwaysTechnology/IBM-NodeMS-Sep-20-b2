/**
 * Truthy values:
 *  In javascript everything is true execpt the following values
 * 
 * fasly values
 *  1.boolean false
 *  2.Empty string "" ,''
 *  3.0
 *  4.undefined
 *  5.NaN
 *  6.null

 **/
let isActive = true;
if (isActive) {
    console.log('active')
} else {
    console.log('in active')
}
let start = 0;
if (start) {
    console.log('start')
} else {
    console.log('not start')
}