

let score = 0
let currentTry = 0
let computerTry = 0

while (currentTry < 3) {
    let input = prompt("Enter S for Snake, W for Water, G for Gun: ")
    let options = "SWG"
    let result = ""
    result += options.charAt(Math.floor(Math.random() * options.length))
    console.log("Computer Choose: ", result)

    if (input == result) {
        alert("Draw")
        if (computerTry > 0 && currentTry > 0) {
            computerTry--;
            currentTry--;
        }
    }
    else if (input == 'S' && result == 'W') {
        alert("You Win")
        score++;
    }
    else if (input == 'W' && result == 'G') {
        alert("You Win")
        score++;
    }
    else if (input == 'G' && result == 'S') {
        alert("You Win")
        score++;
    }
    else {
        alert("You Lose")
        computerTry++;
    }
    currentTry++;
}
if (currentTry > computerTry) {
    alert("You are winner")
}
else {
    alert("You are losser")
}