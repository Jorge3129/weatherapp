import dayjs from "dayjs";

export default function Panel({obj}) {
    return (<div className={"panel"}>
        <h2>{dayjs(obj['applicable_date']).format('ddd DD MMM')}</h2>
        <div>Max: { Math.round(parseInt(obj['max_temp'],10)) }°C</div>
        <div>Min: { Math.round(parseInt(obj['min_temp'],10))}°C</div>
    </div>);
}
