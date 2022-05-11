import logo from "./logo.svg";
import "./App.css";
import SmthTable from "./Table";
import moment from "moment";
import "moment/locale/ru";
moment.locale("ru");

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>СибГУТИ расписание</p>
                <div className="App-today">
                <p>
                    Сегодня {moment().format("ll")},{" "}
                    {moment().format("dddd")}
                </p>
                <p className="Week_2"> 10 учебная неделя</p>

                </div>
            </header>
            <body className="App-body">
                <SmthTable />
            </body>
            <footer className="App-footer">
                <p>
                    {" "}
                    Сделано{" "}
                    <a
                        className="App-Link"
                        href="https://ya.ru"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        The Real Puffs
                    </a>
                </p>
                <p> Чьи-то права точно защищены</p>
            </footer>
        </div>
    );
}

export default App;
