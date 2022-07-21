import Times from './Times';

export default function Time(props) {
    console.log(props.showTime)
    return (
        <div>
            {props.showTime ? <Times date={props.date}/> : null}
        </div>
    )
}