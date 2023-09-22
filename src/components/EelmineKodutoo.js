
import './Kodutoo.css';
import React, { useState } from 'react';

function Kodutoo() {

const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [schoolName, setschoolName]= useState('');
const [displayData, setDisplayData] = useState('');


const saveLocal = () => {
  localStorage.setItem('eesnimi', firstName);
  localStorage.setItem('perenimi', lastName);
  localStorage.setItem('koolinimi', schoolName);
  console.log('Andmed salvestati');

  sessionStorage.setItem('eesnimi', firstName);
  sessionStorage.setItem('perenimi', lastName);
  sessionStorage.setItem('koolinimi', schoolName);
  
  let data = {
      firstName: firstName,
      lastName: lastName,
      schoolName: schoolName
  }

  localStorage.setItem('personData', JSON.stringify(data));

  document.cookie = "schoolName="+schoolName;

  setDisplayData(`Eesnimi: ${firstName}, Perenimi: ${lastName}, Kooli nimi: ${schoolName}`);
};
  
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Anu Sarapuu</h1>

        <a className="allajoonitud">
          MINU HOBID
        </a>
        
        <table cellspacing="10" cellpadding = "10">
          <tr>
          <td style={{ textAlign: 'left' }}>► Muusika kuulamine <br /> ► Heegeldamine <br /> ► Taimede kasvatamine <br /> ► Looduses jalutamine <br />► Lugemine <br />► Joonistamine</td>
          <td style={{ textAlign: 'left' }}>► Puslede kokkupanemine <br />► Koeraga mängimine <br /> ► Ristsõnade lahendamine <br />► Netflixi vaatamine <br />► Kingituste tegemine <br />► Küpsetamine</td>
          </tr>
        </table>
        <br />

        <label htmlFor="firstName" style={{ fontSize: '20px'}}>Sisesta oma eesnimi:</label>
        <input type="text" name="firstName" id="firstName" onChange={(e) => setfirstName(e.target.value)}/>
        <label for="lastName" style={{ fontSize: '20px'}}>Sisesta oma perenimi:</label>
        <input type="text" name="lastName" id="lastName" onChange={(e) => setlastName(e.target.value)}/>
        <label for="schoolName" style={{ fontSize: '20px'}}>Sisesta oma kooli nimi:</label>
        <input type="text" name="schoolName" id="schoolName" onChange={(e) => setschoolName(e.target.value)}/>
        <button id="save" onClick={saveLocal}>Kuva andmed</button>
        <br />
        {displayData && <div style={{ fontSize: '20px'}}>{displayData}</div>}

      </header>
    </div>
  );
}

export default Kodutoo;
