// Jest
// expect(concatStrings('abc','def')).toBe('abcdef')

// end to end testing --> Interacting with Web Application -> slow and more time
// Integrating Testing --> Separates parts working to-gether
// Unit testing --->Testing Some Functions



const {default:TestRunner} = require('jest-runner')
const addFive = require('./10.Jest.js')


test('return the number plus 5',()=>{
  expect(addFive(4)).toBe(9);
})
