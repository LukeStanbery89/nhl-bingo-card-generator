import React from 'react';
import './App.css';
import choices from './config/choices.json';

const EVENT = 'superbowl';

// eslint-disable-next-line
let choicesFiltered = choices[EVENT];
let bingoCard = [
    [],
    [],
    [],
    [],
    [],
];

const compileBingoCard = () => {
    bingoCard.forEach(arr => {
        for (let i = 0; i < 5; i++) {
            arr.push(getRandomBingoChoice());
        }
    });
    bingoCard[2][2] = "FREE SPACE";
    return bingoCard;
};

function getRandomBingoChoice() {
    const choicesCopy = [...choices[EVENT]];
    let key = Math.floor(Math.random() * choicesCopy.length);

    choicesFiltered = choicesCopy.filter(choice => choice !== choicesCopy[key]);
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
                            <th colSpan="5" align="right" style={nameStyles}>Name: ______________________________</th>
                        </tr>
                        <tr>
                            <th colSpan="5">SUPER BOWL COMMERCIAL BINGO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bingoCardArr.map(
                            (row, rowIndex) => <tr key={`row-${rowIndex}`}>{row.map(
                                (col, colIndex) => <td key={`col-${colIndex}`}><span dangerouslySetInnerHTML={{ __html: col }}></span></td>)
                            }</tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default App;
