import "./App.css";
import SmthTable from "./Component/Table";
import moment from "moment";
import "moment/locale/ru";
import MyInput from "./Component/UI/MyInput";
import { useRef } from "react";
moment.locale("ru");

function App() {
    const bodyInputRef = useRef();

    const show = (e) => {
        console.log(bodyInputRef.current.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="Header-content">
                    <div className="Info">
                        <div className="Titel-row">
                            <a
                                className="App-Link"
                                href="sibsutis.ru"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                СибГУТИ
                            </a>
                            <p> расписание</p>
                        </div>
                        <div className="App-today">
                            <p>
                                Сегодня{" "}
                                {moment().format("ll")},{" "}
                                {moment().format("dddd")}
                            </p>
                            <p>12 неделя</p>
                        </div>
                    </div>
                    <div className="Search">
                        <MyInput
                            ref={bodyInputRef}
                            type="text"
                            placeholder="Группа или преподаватель"
                            onChange={show}
                        />
                    </div>
                </div>
            </header>
            <body>
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
