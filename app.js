function getComputerChoice()
{
    let random = Math.round(Math.random() * 3 + 1);

    if (random == 1)
        return "Rock";
    else if (random == 2)
        return "Paper";
    else
        return "Scissors";
}

let wins = 0;
let games = 1;

let compChoice = getComputerChoice();
console.log(compChoice);



function submit() {
    let btn = document.getElementById('submitButton');
    
    let ele = document.getElementsByName('userChoice');
    let res = "";
    
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            res = ele[i].value;
    }

    if (res == "")
        return;    

    if (res == compChoice)
    {
        document.getElementById("results").innerHTML = "Tie!";
    }

    if (res == "Rock")
    {
        if (compChoice == "Scissors")
        {
            document.getElementById("results").innerHTML = "You win! Rock beats Scissors";
            wins++;
        }
        else if (compChoice == "Paper")
            document.getElementById("results").innerHTML = "You Lose! Paper beats Rock";            
    }

    if (res == "Paper")
    {
        if (compChoice == "Rock")
        {
            document.getElementById("results").innerHTML = "You win! Paper beats Rock";
            wins++;
        }
        else if (compChoice == "Scissors")
            document.getElementById("results").innerHTML = "You Lose! Scissors beats Paper";
    }

    if (res == "Scissors")
    {
        if (compChoice == "Paper")
        {
            document.getElementById("results").innerHTML = "You win! Scissors beats Paper";
            wins++;
        }
        else if (compChoice == "Rock")
            document.getElementById("results").innerHTML = "You Lose! Rock beats Scissors";
    }

    document.getElementById("bestOf").innerHTML = wins + " of " + games;
    games++;    

    if (games > 5)
        btn.setAttribute("hidden", "true");        

    compChoice = getComputerChoice();
    console.log(compChoice);

    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;

    document.getElementById('submitButton').innerHTML == "Submit";
}