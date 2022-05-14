import "./App.css";
import SmthTable from "./Component/Table";
import moment from "moment";
import "moment/locale/ru";
import MyInput from "./Component/UI/MyInput";
import { useMemo, useRef, useState } from "react";
import ItemData from "./data/ItemData";
import ErrorBoundary from "./Component/ErrorBoundary";

moment.locale("ru");

function App() {
    const bodyInputRef = useRef();

    const [CurrentWeek, setCurrentWeek] = useState(
        moment().week()
    );

    const [SearchQuery, setSearchQuery] = useState();

    const SearchedScheduler = useMemo(()=>{
        return ItemData.filter(item => item.item.toLowerCase().includes(SearchQuery))
    },[SearchQuery, ItemData])

    const listItems = ItemData.map(i => (
        <p key={i.id}> {i.item} </p>
    ));

    const [Title, setTitle] = useState("0");

    const show = (e) => {
        setTitle(bodyInputRef.current.value);

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
                            {CurrentWeek % 2 !== 0 ? (
                                <p className="Week_1">
                                    {CurrentWeek} учебная
                                    неделя
                                </p>
                            ) : (
                                <p className="Week_2">
                                    {CurrentWeek} учебная
                                    неделя
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="Search">
                        <MyInput
                            ref={bodyInputRef}
                            value= {SearchQuery}
                            type="text"
                            placeholder="Группа или преподаватель"
                            onChange={e=> setSearchQuery(e.target.value)}
                            />
                            {SearchedScheduler.map(item => (
                            <p key={item.id}> {item.item} </p>))}
                    </div>
                </div>
            </header>
            <body className="App-body">
                <p>{Title}</p>
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
