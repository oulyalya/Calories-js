'use strict';

(function(){
    const themeToggle = document.querySelector('#themeToggle');
    let calculator = document.querySelector('#calculator');

    const switchTheme = function () {
        if (calculator) {
            calculator.classList.toggle('light');
            calculator.classList.toggle('dark');
        }
    };
    themeToggle.addEventListener('click', switchTheme);
})();

(function(){
    const input = document.querySelector('#result');
    const clearButton = document.querySelector('#clear');
    const removeSymbolButton = document.querySelector('#remove-symbol');
    const equalsButton = document.querySelector('#equal');
    const buttons = document.querySelectorAll('.button--insert');   

    const clearFieldHandler = function () {
        input.textContent = '0';
    };

    const removeSymbolHandler = function () {
        if (input.textContent.length > 1) {
            let res = input.textContent;
            input.textContent = res.substring(0, res.length - 1);
        } else {
            input.textContent = '0';
        }
    };

    const insert = function () {
        for (let i = 0; i < buttons.length; i++) {
            let symb = buttons[i].dataset.symbol;
            buttons[i].onclick = function () {
                if (input.textContent === '0' && symb === '0') {
                    input.textContent = input.textContent;
                } else if (input.textContent === '0') {
                    input.textContent = symb;
                } else {
                    input.textContent = input.textContent + symb;
                }
            }
        };
    };

    const calculateHandler = function () {
        let res = input.textContent;
        if (res) {
            input.textContent = eval(res);   
        }
        return res;
    };

    insert();
    equalsButton.addEventListener('click', calculateHandler);
    removeSymbolButton.addEventListener('click', removeSymbolHandler);
    clearButton.addEventListener('click', clearFieldHandler);
})();

// change font size depending on the num length
// замена знака 