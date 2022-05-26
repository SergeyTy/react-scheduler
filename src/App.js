import "./App.css";
import SmthTable from "./Component/Table";
import moment from "moment";
import "moment/locale/ru";
import { useMemo, useRef, useState } from "react";
import ItemData from "./data/ItemData";
import { ri01, ri02 } from "./data/ri-0";
import ErrorBoundary from "./Component/ErrorBoundary";
import MyCombox from "./Component/MyCombox";
import { Today } from "./Component/Today";
import { Plock } from "react-plock";

import MySwipe from "./Component/MySwipe";

import { Search } from "./Search";

moment.locale("ru");

function App() {
    const bodyInputRef = useRef();

    const [CurrentWeek, setCurrentWeek] = useState(
        moment().week() - moment("02-01-2022", "MM-DD-YYYY").week()+1
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

    const breakpoints = [
        { size: 640, columns: 1 },
        { size: 768, columns: 2 },
        { size: 1024, columns: 2 },
        { size: 1280, columns: 2 },
    ];

    return (
        <div className="App">
            <Plock
                nColumns={breakpoints}

                className="App-body"
            >
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
                    <Today CurrentWeek={CurrentWeek} />
                </div>
                <div></div>
                <div>Anim by Gleb</div>
                <div style={{"display":"flex", "flexDirection": "row", "justifyContent": "space-around"}}>
                    <label>Неделя </label>
                    <button>1</button>
                    <button>2</button>
                </div>
                <div>Weather by Pasha</div>
                <MySwipe data={ri02.data[CurrentWeek % 2]} style={{width: "100% !imortant"}}/>
            </Plock>
            {/* <div className="Header-content">
                    <Search
                        bodyInputRef={bodyInputRef}
                        SearchQuery={SearchQuery}
                        setSearchQuery={setSearchQuery}
                        SearchedScheduler={
                            SearchedScheduler
                        }
                    ></Search>
                </div> */}
            {/* <body className="App-body">
                {SearchedScheduler.length > 0 ? (
                    <SmthTable data={ri02} />
                ) : (
                    <hr></hr>
                )}
            </body> */}
            <footer className="App-footer">
                <div className="footer-content">
                    <p>Сделано {" "} 
                    <a
                        className="App-Link"
                        href="https://github.com/SergeyTy/react-scheduler"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        The Real Puffs
                    </a></p>
                    <p> Чьи-то права точно защищены</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
