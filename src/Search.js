import MyInput from "./Component/UI/MyInput";

export function Search(props) {
    return (
        <div className="Search">
            <MyInput
                ref={props.bodyInputRef}
                value={props.SearchQuery}
                type="text"
                placeholder="Группа или преподаватель"
                onChange={(e) => props.setSearchQuery(e.target.value)} />
            {props.SearchQuery !== "" ? (
                props.SearchedScheduler.map((item) => (
                    <li key={item.id}> {item.item} </li>
                ))
            ) : (
                <hr></hr>
            )}
        </div>
    );
}
