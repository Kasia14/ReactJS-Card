import React from 'react';


function Great() {
const date = new Date();
const currentTime = date.getHours();

const customStyle1 = {
color: ""
}


let greeting = '';

if(currentTime < 12){
greeting = "Good Morning";
customStyle1.color = "green";
} else if (currentTime < 18){
  greeting = "Good Afternoon";
customStyle1.color = "red";
}else{
  greeting = "Good Night!";
  customStyle1.color = "pink";
}
return <h1 className = "heading" style={customStyle1}>{greeting}</h1>

}

export default Great;