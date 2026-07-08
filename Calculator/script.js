let expression = "";

const result = document.getElementById("result");
const history = document.getElementById("history");

function append(value){

    expression += value;

    history.innerText = expression;
}

function clearDisplay(){

    expression="";
    history.innerText="";
    result.innerText="0";
}

function backspace(){

    expression=expression.slice(0,-1);
    history.innerText=expression;
}

function percent(){

    if(expression==="") return;

    expression=(eval(expression)/100).toString();

    history.innerText=expression;
    result.innerText=expression;
}

function calculate(){

    try{

        let answer=eval(expression);

        result.innerText=answer;
        history.innerText=expression;

        expression=answer.toString();

    }

    catch{

        result.innerText="Error";
    }
}