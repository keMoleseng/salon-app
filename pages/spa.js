import Image from 'next/image';
import Navbar from '../components/Navbar';
import { Form, useForm } from '../components/useForm';
import Controls from '../components/control/Controls';
import styled from 'styled-components';
import * as salonServices from '../components/services/salonServices';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import styles from '../styles/staff.module.css';
import Popup from '../components/Popup';


const initialValues = {
    date: new Date(),
    time: '',
    name: '',
    email: '',
    beautician: '',
    treatment: 'spa'
}

const staff = {
    'Lucy': '/staff11.jpg', 
    'Lebo': '/staff33.jpg', 
    'Lerato': '/staff22.jpg'
};

const times = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];


const Container = styled.span`
    width: 50%
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px
`
const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 95%;
    margin-top: 20px
    
`

const TimesSpan = styled.span`
    margin-top: 10px;
    margin-left: 5px;
    height: fit-content;
    width: 85px;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 1.5px 5px;
    cursor: pointer;

    font-family: 'Oswald', sans-serif;
    font-weight: 600;

    &:hover {
        color: white;
        background-color: #cf9a78;
    }
    &:active {
        color: white;
        background-color: black;
    }
    &:visited{
        color: white;
        background-color: black;
    }
`

const TimesContainer = styled.span`
    display: flex;
    flex-direction: row;
    justify-self: center;
    width: 100%;
    font-family: 'Oswald', sans-serif;
`
const FormContainer = styled.div`
    width: 100%
`

export default function Spa() {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [popupValues, setPopupValues] = useState(null)

    const {
        handleChange,
        values,
        setValues,
        resetForm
    } = useForm(initialValues)
    console.log(values)

    const convertToDefaultPara = (name, value) => ({
        target: {   
            name, 
            value
        }
    })

    const stylistSelect = Object.keys(staff).map((x, i) => (
        <div className={styles.staff_container} name='beautician' value={values.beautician} onClick={e => handleChange(convertToDefaultPara('beautician', e.target.id))}>
           <Image
           className={styles.staff_img} 
               src={staff[x]}
               key={x} 
               id={x}
               width={150}
               height={150}
           />
           <p>{x}</p>
       </div>
))
    const togglePopup = () => {
        setIsOpen(!isOpen)
        setPopupValues({
            beautician: values.beautician,
            date: values.date,
            time: values.time
        })
    }
    console.log(isOpen)
    const handleSubmit = e => {
        e.preventDefault();
        
        salonServices.saveAppointment(values);
        togglePopup();
        resetForm()
    }
    return (
        <Container>
            <Navbar />
            <Div>
                <h1 className={styles.subHeading}>The Spa</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut placerat est. Mauris gravida erat massa, et feugiat augue tempor eget.</p>
                <Image 
                    src="/spaimage.jpg"
                    alt=""
                    width={950}
                    height={450}
                />
                <h2>Book an Appointment</h2>
            
            <Form onSubmit={handleSubmit}>
                <FormContainer>
                <label>Pick a date</label>
                <DatePicker selected={startDate} onChange={(date) => {setStartDate(date); setValues({...values, date: date})}}  placeholder='Select date' value={values.date}/>
               
                <h4>AVAILABLE SLOT</h4>
                <TimesContainer>
                        {times.filter(x => salonServices.checkAvailTime(startDate, x, values.treatment)).map(time => (
                            <TimesSpan name='time' value={values.time} onClick={e => handleChange(convertToDefaultPara('time', e.target.innerHTML))}>
                                {time}
                            </TimesSpan>
                        ))}
                </TimesContainer>
                <RowDiv>
                    <Controls.Input 
                        text='Name'
                        name='name'
                        placeholder='Enter your name...'
                        value={values.name}
                        onChange={handleChange}
                    />
                    <Controls.Input 
                        text='Email'
                        name='email'
                        placeholder='Enter your email...'
                        value={values.email}
                        onChange={handleChange}
                    />
                </RowDiv>
                <h4>Select Beautician</h4>
                <RowDiv>{stylistSelect}</RowDiv>
                <Controls.FormButton type='submit' text='Confirm Booking' primary/>
                <Controls.FormButton type='reset' text='Reset Form'  />
                {isOpen && 
                <Popup 
                    content={<>
                        <p>Your appointment with {popupValues.beautician} is confirmed for {popupValues.date.toDateString()} at {popupValues.time}!</p>
                    </>}
                    onClick={togglePopup}
                />
                }
                </FormContainer>
                </Form>
            </Div>
        </Container>
    )
}