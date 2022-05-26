import moment from "moment";

export function Today(props) {
    return (
        <div className="App-today">
            <h3>
                Сегодня {moment().format("ll")},{" "}
                {moment().format("dddd")}
            </h3>
            {props.CurrentWeek % 2 !== 0 ? (
                <h3 className="Week_1">
                    {props.CurrentWeek} учебная неделя
                </h3>
            ) : (
                <h3 className="Week_2">
                    {props.CurrentWeek} учебная неделя
                </h3>
            )}
        </div>
    );
}
