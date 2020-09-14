import React from 'react';
import './App.css';

let choices = [
    'Hooking penalty',
    'Roughing penalty',
    'High sticking penalty',
    'Cross checking penalty',
    'Cross checking penalty',
    'Tripping penalty',
    'Delay of game penalty',
    'Too many men penalty',
    'Interference penalty',
    'Boarding penalty',

    '5-on-5 goal',
    'Short handed goal',
    'PPG',
    'Even numbered jersey scores goal',
    'Odd numbered jersey scores goal',
    'Defenseman scores goal',

    'Broken stick',
    'Timeout',
    'Offside',
    'OT',
    'Goal or play under reviewed',
    'Connor McDavid is mentioned',
    'Pierre McGuire appears on screen',
    'Tie game after 0-0',
    '"Get pucks deep"',
    'Car commercial',
    'Goalie drinks from water bottle',
];

let used = [];

let bingoCard = [
    [],
    [],
    [],
    [],
    [],
];

const compileBingoCardV2 = () => {
  bingoCard.forEach(arr => {
    for (let i = 0; i < 5; i ++) {
      arr.push(getRandomBingoChoice())
    }
  });
  bingoCard[2][2] = "FREE SPACE";
  return bingoCard
}

function getRandomBingoChoice() {
    const choicesCopy = [...choices];
    let key = Math.floor(Math.random() * choices.length);

    choices = choices.filter(choice => choice !== choices[key]);
    return choicesCopy[key];
}

function App() {
  const bingoCardArr = compileBingoCardV2();
  return (
      <div className="App">
          <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"/>
          <div className="container">
            <table>
              <thead>
              <tr>
                <th colSpan="5">STANLEY CUP FINAL BINGO</th>
              </tr>
              </thead>
              <tbody>
              { bingoCardArr.map(
                  (row, rowIndex) => <tr key={`row-${rowIndex}`}>{row.map(
                      (col, colIndex) => <td key={`col-${colIndex}`}>{col}</td>)
                  }</tr>)
              }
              </tbody>
            </table>
          </div>
      </div>
  );
}

export default App;
