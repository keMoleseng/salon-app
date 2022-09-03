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
import ValidationMsg from '../components/ValidationMsg';

const initialValues = {
    date: new Date(),
    time: '',
    name: '',
    email: '',
    beautician: '',
    treatment: 'makeup'
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
    margin-top: 20px;  
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
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
    @media screen and (max-width: 600px) {
        flex-wrap: wrap;
    }
`
const FormContainer = styled.div`
    width: 100%
`

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export default function MakeUp() {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
    const [popupValues, setPopupValues] = useState(null);
    const [error, setError] = useState("");
    const [invalid, setInvalid] = useState(false);

    const validate = () => {
        let text = {};
        let letter = '@';

        text.name = values.name.length === 0 ? "This field cannot be empty." : "";
        text.email = values.email.length === 0 ? "This field cannot be empty." : "";

        setError({
            ...text
        })
        
        return Object.values(text).every(x => x === '')
    }

    const {
        handleChange,
        values,
        setValues,
        resetForm
    } = useForm(initialValues);

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
    
    const handleSubmit = e => {
        e.preventDefault();
        
        if(validate()) {
            salonServices.saveAppointment(values);
            togglePopup();
            resetForm();
            setInvalid(false);
        }
        else {
            setInvalid(true);
        }
    }

    return(
        <Container>
            <Navbar />
            <h1 className={styles.subHeading}>Make-Up</h1>
            <p className={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut placerat est. Mauris gravida erat massa, et feugiat augue tempor eget.</p>
            <Div>
                <Image 
                    src="/makeupimage.jpg"
                    alt=""
                    width={850}
                    height={450}
                />
                <h2>Book an Appointment</h2>
            
                <Form onSubmit={handleSubmit}>
                    <FormContainer>
                    <label>Pick a date</label>
                    <DatePicker selected={startDate} onChange={(date) => {setStartDate(date); setValues({...values, date: date})}} placeholder={'Select date'} value={values.date} name={values.date}/>
                    
                    <h4>AVAILABLE SLOT</h4>
                    <TimesContainer>
                        {times.filter(x => salonServices.checkAvailTime(startDate, x, values.treatment)).map(time => (
                            <TimesSpan name='time' value={values.time} onClick={e => handleChange(convertToDefaultPara('time', e.target.innerHTML))}>
                                {time}
                            </TimesSpan>
                        ))}
                    </TimesContainer>
                    <RowDiv>
                        <ColumnDiv>
                            <Controls.Input 
                                text='Name'
                                name='name'
                                placeholder='Enter your name...'
                                value={values.name}
                                onChange={handleChange}
                            />
                            { invalid && error.name ? <ValidationMsg error={error.name} /> : "" }
                        </ColumnDiv>
                        <ColumnDiv>
                            <Controls.Input 
                                text='Email'
                                name='email'
                                placeholder='Enter your email...'
                                value={values.email}
                                onChange={handleChange}
                            />
                            { invalid && error.email ? <ValidationMsg error={error.email} /> : ""}
                        </ColumnDiv>
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