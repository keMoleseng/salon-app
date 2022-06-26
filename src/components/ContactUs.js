import '../contact.css'

export default function ContactUs(){
    return(
        <div className="contact--container">
            <h1 className="contact--heading">Contact Us</h1>
            <span>
                <span className="address"></span>
                <span className="form--container">
                    <form name="subscription">
                        <input id="name" 
                                type="text" 
                                name="name"
                                placeholder='Name'
                                />
                        <input id='email'
                                type="email"
                                placeholder="Email"
                        
                        />

                    </form>
                </span>
            </span>
        </div>
    )
}