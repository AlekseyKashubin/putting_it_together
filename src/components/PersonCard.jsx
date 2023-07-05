import React, { useState } from 'react';

const Person = (props) => {
    
    const { firstName, lastName, age, hairColor } = props; 
    const [clicks, setClicks] = useState(0)
    const buttonClick = () => {
        setClicks(clicks + 1);
    }
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {age + clicks}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={buttonClick}>Birthday button for {firstName} {lastName}</button>
        </div>
    );
}
export default Person;