import React from 'react';
import './App.css';

let choices = [
    "Today you will find a penny and lose a dollar.",
    "A cat will cross your path and demand a belly rub.",
    "You will meet someone who shares your love for pineapple on pizza.",
    "Beware of falling pianos.",
    "A mysterious stranger will give you a high-five.",
    "Your lucky number is 42, but only on Tuesdays.",
    "A cat will judge you silently from afar.",
    "You will discover a new favorite song and forget its name immediately.",
    "Today is a good day to avoid making decisions.",
    "A cat will steal your sandwich.",
    "You will find a parking spot right in front of your destination.",
    "Someone will compliment your shoes.",
    "A cat will knock over your favorite mug.",
    "You will accidentally become a meme.",
    "Your favorite TV show will have a surprise twist.",
    "A cat will sit on your keyboard while you work.",
    "You will receive a compliment from an unexpected source.",
    "Your phone will autocorrect 'love' to 'lava'.",
    "A cat will bring you a 'gift' you didn't ask for.",
    "You will find a forgotten $5 bill in your pocket.",
    "Someone will mistake you for a celebrity.",
    "A cat will photobomb your selfie.",
    "You will have a sudden craving for pickles.",
    "Your favorite song will play on the radio at the perfect moment.",
    "A cat will stare at you until you feel uncomfortable.",
    "You will accidentally send a text to the wrong person.",
    "A cat will purr loudly in your ear.",
    "You will discover a hidden talent for juggling.",
    "Your favorite snack will be on sale.",
    "A cat will nap on your freshly laundered clothes.",
    "You will have a dream about flying.",
    "Someone will surprise you with a random act of kindness.",
    "A cat will meow incessantly for no apparent reason.",
    "You will find a new hobby that you love.",
    "Your internet will go out at the most inconvenient time.",
    "A cat will demand attention while you're on a video call.",
    "You will receive a letter from an old friend.",
    "Your favorite movie will be on TV tonight.",
    "A cat will knock something off the table just to watch it fall.",
    "You will have an unexpectedly deep conversation with a stranger.",
    "Your coffee will taste exceptionally good today.",
    "A cat will curl up in your lap and refuse to move.",
    "You will get caught in the rain without an umbrella.",
    "A cat will give you a look of utter disdain.",
    "You will find a new favorite book.",
    "Your alarm clock will fail to go off.",
    "A cat will follow you around the house for no reason.",
    "You will have a sudden burst of creativity.",
    "Your favorite restaurant will have a new menu item you'll love.",
    "You will receive a compliment on your cooking.",
    "A cat will try to trip you while you walk.",
    "You will find a new favorite podcast.",
    "Your favorite sports team will win their next game.",
    "A cat will bring you a toy to play with.",
    "You will have a productive day at work.",
    "Someone will surprise you with your favorite treat.",
    "A cat will curl up next to you while you read.",
    "You will discover a new favorite restaurant.",
    "Your plants will thrive and grow beautifully.",
    "A cat will watch you intently while you eat.",
    "You will have a relaxing day off.",
    "Someone will share a funny joke with you.",
    "A cat will greet you at the door when you come home.",
    "You will find a new favorite TV show.",
    "Your morning coffee will be perfect.",
    "A cat will follow you around the house.",
    "You will receive a thoughtful gift from a friend.",
    "Your favorite band will release a new song.",
    "A cat will nap in your favorite chair."
];

let bingoCard = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];

const ROWS = 10;

const compileBingoCard = () => {
    bingoCard.forEach(arr => {
        for (let i = 0; i < 7; i++) {
            arr.push(getRandomBingoChoice());
        }
    });
    return bingoCard;
};

function getRandomBingoChoice() {
    const choicesCopy = [...choices];
    let key = Math.floor(Math.random() * choices.length);

    choices = choices.filter(choice => choice !== choices[key]);
    return choicesCopy[key];
}

function App() {
    const bingoCardArr = compileBingoCard();
    const nameStyles = {
        fontSize: 20,
        textAlign: 'right',
        height: 'unset',
        border: 'none',
        padding: 20,
    };
    return (
        <div className="App">
            <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous" />
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="8">
                                <img src="jackson.png" alt="Jackson" style={{ width: 100 }} />
                                <span id="title">JACKSON'S FORTUNES</span>
                                <img src="jackson.png" alt="Jackson" style={{ width: 100 }} />
                            </th>
                        </tr>
                        <tr>
                            <th># Kisses</th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                            <td><b>SHELTER IN PLACE</b><br/>⚠️</td>
                        </tr>
                        {bingoCardArr.map(
                            (row, rowIndex) => <tr key={`row-${rowIndex}`}>
                                {rowIndex === (ROWS-1) ? <td>{ROWS}+</td> : <td>{rowIndex+1}</td>}
                    
                                {row.map(
                                    (col, colIndex) => 
                                        <td key={`col-${colIndex}`}>
                                            <span dangerouslySetInnerHTML={{ __html: (rowIndex === (ROWS-1) ? "TREAT YOURSELF<br/>🎉" : col) }}></span>
                                        </td>
                                )
                            }</tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default App;
