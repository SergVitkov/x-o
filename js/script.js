let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let newgameBtn = document.getElementById('new-game');
let restartBnt = document.getElementById('restart');
let msgRef = document.getElementById('messege');
//Winning Pattern Array
let winningPattern = [
    [0,1,2], 
    [0,3,6], 
    [2,5,8], 
    [6,7,8], 
    [3,4,5], 
    [1,4,7], 
    [0,4,8], 
    [2,4,6],
];
//Player 'X' plays first
let xTurn = true;
let count = 0;

//Disable All Buttons
const disableButtons = () => {
    btnRef.forEach((element) => (element.disable = true));
    //enable popup
    popupRef.classList.remove('hide');
}

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = '';
        element.disabled = false;
    });
    //disable popup
    popupRef.classList.add('hide');
};

//This function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
    if(ietter == 'X') {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
    }
};

//Function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game 
newgameBtn.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

restartBnt.addEventListener('click', () => {
    count = 0;
    enableButtons();
});

//This function is executed when a player wins
const winsFunction = (letter) => {
    disableButtons();
};

//Win Logic
const winChecker = () => {
    //Loop through all win pattens
    for(let i of winningPattern){
        let [element1, element2, element3] = [
            btnRef[i[O]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        //Check if elements are filled
        //3 empty elements are same and would give win as would
        if (element1 != '' && (element2 != '') & (element3 != '')) {
            if(element1 == element2 && element2 == element3) {
                //If all 3 buttons have same values then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
};

//Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn){
            xTurn = false;
            //Display X
            element.innerText = 'X';
            element.disabled = true;
        } else {
            xTurn = true;
            //Display Y
            element.innerText = 'O';
            element.disabled = true;
        }
        //Increment count on each click
            count += 1;
            if (count === 9){
            //It's a draw since there are a total of 9 boxed

            }
            //Check for win on over click
            winChecker = ('');
    });
});

