import logo from './logo.svg';
import './App.css';
import SmthTable from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className='App-body'>
        <SmthTable/>
      </body>
      <footer className="App-footer">
        <p> Сделано <a className='App-Link' href="https://ya.ru" target="_blank" rel="noreferrer noopener">The Real Puffs</a></p>
        <p> Чьи-то права точно защищены</p>
      </footer>
    </div>
  );
}

export default App;
