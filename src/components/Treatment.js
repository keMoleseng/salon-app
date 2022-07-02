import '../treatment.css'
const images = ['/hair_dryer (2).png', '/kiss.png', '/cloud (1).png'];
const btns = ['Hair', 'Make Up', 'Spa'];
const TREATMENTS = {
    'Hair': '/hair_dryer (2).png',
    'Make Up': '/kiss.png',
    'Spa':'/cloud (1).png'
}

const logosImg = Object.keys(TREATMENTS).map((treatment, i) => {
    return <div id="treatments" className="treatment--container">
                <span className='logo--container'>
                    <img src={TREATMENTS[treatment]} 
                    key={i}
                    />
                </span>
                <button className='treatment--btn'>{treatment}</button>
            </div>
})

export default function Treatment() {
    return (
        <div className='treatments'>
            <h2>Our Treatments</h2>
            <span className='all--treatments'>
                {logosImg}
            </span>
        </div>
    )
}