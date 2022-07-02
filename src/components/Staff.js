import '../staff.css'

const staff = {
    'Lucy': '/staff11.jpg', 
    'Lebo': '/staff33.jpg', 
    'Lerato': '/staff22.jpg'
};

const images = Object.keys(staff).map((item, i) => {
    return (<div className="staff--container">
                <img className='staff--img'
                    src={staff[item]}
                    key={i} 
                    width="350px"
                    height="auto"
                />
                <h2>{item}</h2>
            </div>
    )
})

export default function Staff() {
    return (
        <div id="our_staff" className='staff'>
            <h2>Meet Our Staff</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='allStaff'>
                {images}
            </div>
        </div>

    )
}