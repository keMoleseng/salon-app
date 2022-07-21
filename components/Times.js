import styles from '../styles/times.module.css'

const times = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];


export default function Times(props) {

    const handleTime = (e) => {
        props.handleTimeClick(e.target.innerHTML)
    }

    const availableTimes = times.map((availTime, i) => {
        return (<div key={i}
            onClick={(e) => handleTime(e)}
            className = {styles.time}
        >
            {availTime}
        </div>)
    })
    return (
        <div className={styles.times_container}>
            <h3 className={styles.times_heading}>Available Slot </h3>
            <div className={styles.times}> {availableTimes} </div>
        </div>
    )
}