import React from 'react';
import './App.css';

let choices = [
    // Car manufacturers
    'BMW',
    'CHEVY',
    'FORD',
    'GENERAL MOTORS',
    'HONDA',
    'HYUNDAI',
    'KIA',
    'NISSAN',
    'TOYOTA',

    // Beer
    'BUDWEISER',
    'BUSCH',
    'COORS',
    'HARD SELTZER (ANY BRAND)',
    'MILLER',
    'MICHELOB',
    'SAM ADAMS',

    // Beverages
    'PEPSI',
    'COKE',

    // Food
    'DORITOS',
    'LAYS',
    'HELLMAN\'S',

    // Other
    'AMAZON',
    'AT&T',
    'BIC',
    'BOOKING.COM',
    'CARVANA',
    'CLICKUP',
    'EXPEDIA',
    'PLANET FITNESS',
    'PLANTER\'S',
    'RAKUTEN',
    'SQUARESPACE',
    'SALESFORCE',
    'SAM\'S CLUB',
    'UBER EATS',
    'VRBO',
    'VROOM',
    'WALLBOX',
];

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
