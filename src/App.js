import "./App.css";
import SmthTable from "./Component/Table";
import moment from "moment";
import "moment/locale/ru";
import MyInput from "./Component/UI/MyInput";
import { useMemo, useRef, useState } from "react";
import ItemData from "./data/ItemData";
import {ri01, ri02} from "./data/ri-0";
import ErrorBoundary from "./Component/ErrorBoundary";
import MyCombox from "./Component/MyCombox";

moment.locale("ru");

function App() {
    const bodyInputRef = useRef();

    const [CurrentWeek, setCurrentWeek] = useState(
        moment().week()
    );

    const [CurrentSch, setCurrentSch] = useState();

    const [SearchQuery, setSearchQuery] = useState();

    const [FilteredItem, setFilterdItem] = useState([]);

    const SearchedScheduler = useMemo(() => {
        if (SearchQuery !== null) {
            return ItemData.filter((item) =>
                item.item
                    .toLowerCase()
                    .includes(SearchQuery)
            );
        } else return null;
    }, [SearchQuery, ItemData]);

    const listItems = ItemData.map((i) => (
        <p key={i.key}> {i.item} </p>
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
                                href="https://sibsutis.ru"
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
                            value={SearchQuery}
                            type="text"
                            placeholder="Группа или преподаватель"
                            onChange={(e) =>
                                setSearchQuery(
                                    e.target.value
                                )
                            }
                        />
                        {SearchQuery !== "" ? (
                            SearchedScheduler.map(
                                (item) => (
                                    <li key={item.id}>
                                        {" "}
                                        {item.item}{" "}
                                    </li>
                                )
                            )
                        ) : (
                            <hr></hr>
                        )}
                    </div>
                </div>
            </header>
            <body className="App-body">
                {SearchedScheduler.length> 0 ? (
                    <SmthTable data={ri02}/>
                ) : (
                    <hr></hr>
                )}
            </body>
            <footer className="App-footer">
                <p>
                    {" "}
                    Сделано{" "}
                    <a
                        className="App-Link"
                        href="https://github.com/SergeyTy/react-scheduler"
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
