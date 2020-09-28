//strings
/**
 * let is keyword
 * firstName is variable
 * 'subramanian' is literal - string literal
 * string literals are declareding using '' "" ``(back tick)
 */
let firstName='Subramanian'
console.log("First name" + firstName)
console.log('First name' + firstName)
//${} string interpolation
console.log(`First name ${firstName}`)
let title ='IBM'
//multi line strings 
let document=`
        <html>
            <head>
                <title>
                      ${title}
                </title>
            </head>
            <body>
            </body>
        </html>
`
console.log(document);