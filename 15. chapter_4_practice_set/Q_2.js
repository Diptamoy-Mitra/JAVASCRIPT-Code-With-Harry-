//explore the includes,startswith, endswith functions of a string

const sen='The quick brown fox jumps over the lazy dog'
const word='fox'
console.log(`The word "${word}" ${sen.includes(word)? 'is':'is not'} in  the sentence `)
console.log(`The word  endswith dog   ${sen.endsWith("dog")? 'is':'is not'}  `)
console.log(`The word  startswith dog   ${sen.startsWith("The")? 'is':'is not'}  `)
