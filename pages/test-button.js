import React, { useState } from "react";

 function sayHello() {
    alert('You clicked me!');
  }
  export default function testButton() {
    return(
        <div>
    <button onClick={sayHello}> Click for Ether </button>
    </div>
    )
  }