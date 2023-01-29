
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            // if (e.target.innerHTML == '=') {
            //     string = '';
            //     document.querySelector('input').value = string.innerHTML = "Enter min two values";

            // }
            // else {
            //     // string = eval(string); 
            //     // document.querySelector('input').value = string;

            //     string = string + e.target.innerHTML;
            //     document.querySelector('input').value = string;
            // }
        }

        else if (e.target.innerHTML == 'sin') {
            string = Math.sin(string);
            document.querySelector('input').value = string;
        }


        else if (e.target.innerHTML == 'cos') {
            string = Math.cos(string);
            document.querySelector('input').value = string;
        }


        else if (e.target.innerHTML == 'tan') {
            string = Math.tan(string);
            document.querySelector('input').value = string;
        }



        else if (e.target.innerHTML == 'log') {
            string = Math.log(string);
            document.querySelector('input').value = string;
        }

        
        else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'CE') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }



        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})


function oposite(){

    string = -string;
    document.querySelector('input').value = string;
}


// This is for the sqroot of a value 
function sqrt() {
    string = Math.sqrt(string);
    document.querySelector('input').value = string;

}

// This is for the square of a value 

function rootnum() {
    string = Math.pow(string, 2);
    document.querySelector('input').value = string;

}

// This is for the PI of a value 

function pivalue() {
    string = Math.PI;
    document.querySelector('input').value = string;
}
