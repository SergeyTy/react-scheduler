import moment from "moment";

export function Today(props) {
    return (
        <div className="App-today">
            <p>
                Сегодня {moment().format("ll")},{" "}
                {moment().format("dddd")}
            </p>
            {props.CurrentWeek % 2 !== 0 ? (
                <p className="Week_1">
                    {props.CurrentWeek} учебная неделя
                </p>
            ) : (
                <p className="Week_2">
                    {props.CurrentWeek} учебная неделя
                </p>
            )}
        </div>
    );
}
