import '../header.css'

export default function Navbar() {
    return(
        <>
            <ul className='nav' >
                <li className='nav--item'><a href="#hero">Home</a></li>
                <li className='nav--item'><a href="#treatmemts">Treatments</a></li>
                <li className='nav--item'><a href="#our_staff">Our Staff</a></li>
                <li className='nav--item'><a href="#about_us">About Us</a></li>
                <li className='nav--item'><a href="#contact_us">Contact Us</a></li>
            </ul>
        </>
    )
}