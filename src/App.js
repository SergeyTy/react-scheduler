import "./App.css";
import SmthTable from "./Component/Table";
import moment from "moment";
import "moment/locale/ru";
import { useMemo, useRef, useState, useEffect  } from "react";
import ItemData from "./data/ItemData";
import { ri01, ri02 } from "./data/ri-0";
import ErrorBoundary from "./Component/ErrorBoundary";
import MyCombox from "./Component/MyCombox";
import { Today } from "./Component/Today";
import { Plock } from "react-plock";

import Weather from './Component/Weather/Weather';
import MySwipe from "./Component/MySwipe";

import { Search } from "./Search";

moment.locale("ru");
//require(`dotenv`).config();
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

    const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [data, setData] = useState([]);
    
	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function(position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			}); 
            //      NSK
            // lat = 55.0415 
            // long = 82.9346 
											//	http://api.openweathermap.org/data/2.5/find?q=Petersburg&type=like&APPID=6d8e495ca73d5bbc1d6bf8ebd52c4
											//	${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}
											//	https://api.openweathermap.org/data/2.5/weather/?lat=55.05&lon=44.05&units=metric&APPID=59aa82de2145172e26222d8b6415223c
											//http://api.openweathermap.org/data/2.5/find?lat=55.05&lon=44.05&APPID=59aa82de2145172e26222d8b6415223c
											//http://api.openweathermap.org/data/2.5/weather?lat=55.0415&lon=82.9346&APPID=59aa82de2145172e26222d8b6415223c
			console.log("lat = ", lat, " long = ", long)
            console.log("url = ",process.env.REACT_APP_API_URL)
            
            console.log("key = ",process.env.REACT_APP_API_KEY)
			await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=59aa82de2145172e26222d8b6415223c`)
			.then(res => res.json())
			.then(result => {
				setData(result)
				console.log(result);
			});
			}
			fetchData();
		}, [lat,long])
		
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

                <div> {
                    (typeof data.main != 'undefined') ? (
                    <Weather weatherData={data}/>): (
                    <div></div>)
                }</div>

               

                {/*<div>Weather by Pasha</div>*/}

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
