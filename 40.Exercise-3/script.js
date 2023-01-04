
let jokesList=[`1. Why did an old man fall in a well?
Because he couldn’t see that well!`,

`2. Why did the actor fall through the floorboards?
They were going through a stage!`,

`3. Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,

`4. Why are peppers the best at archery?
Because they habanero!`,

`5. What did the duck say after she bought chapstick?
Put it on my bill!`,

`6. What do you call a fake noodle?
An impasta!`]

let randomJokes=Math.floor(Math.random()*(jokesList.length))
console.log(randomJokes+1)
let dis=jokesList[randomJokes]
console.log(dis)
document.getElementById('jok').innerHTML=dis




