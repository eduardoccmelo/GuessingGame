setTimeout(() => {
    let maximum = parseInt(prompt("Enter a maximum number:"));

    while(!maximum){
        maximum = parseInt(prompt("Enter a valid number:"));
    }
    
    const targetNum = Math.floor(Math.random() * maximum) +1;
    console.log(targetNum);
    
    let guess = prompt("Enter your first guess");
    let attempts = 1;
    
    while(parseInt(guess) !== targetNum){
        if(guess === "quit" || attempts === 10){
            break;
        } else if (!parseInt(guess)){
            guess = prompt("Enter a valid number");
        } else if(targetNum > guess){
            attempts++;
            guess = prompt("Too LOW! Try again:");
        } else{
            attempts++;
            guess = prompt("Too HIGH! Try again:");
        } 
    } 
    
    if(guess === "quit"){
        console.log("Bye!");
        alert("You quit!");
    } else if(attempts === 10){
        console.log("You lose!");
        alert("You lose!");
    } else{
        console.log("You win!");
        alert(`Congrats! It took you ${attempts} attempts to win!`);
    }
}, 50);