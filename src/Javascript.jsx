import React from 'react';

function Javascript(){
    

let currtime = +prompt('Enter Time in your area right now in numbers',10); 
let greeting = "";
let currDate = new Date(2020, 6, 6, currtime);
currDate = currDate.getHours();
const cssStyle = { };


if (currDate >= 4 && currDate < 10 ){
  greeting = " Good Morning";
  cssStyle.color = 'white';
}
else if (currDate >= 10 && currDate < 16 ){
  greeting = " Good Afternoon";
  cssStyle.color = 'yellow';
}
else if (currDate >= 16 && currDate < 20 ){
  greeting = " Good Evening";
  cssStyle.color = 'red';
}
else {
  greeting = " Good Night";
  cssStyle.color = 'black';
}
return(
    <>
    <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
    </>

)

    
};

export default Javascript