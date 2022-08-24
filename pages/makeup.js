import Image from 'next/image';
import Navbar from '../components/Navbar';
import { Form, useForm } from '../components/useForm';
import Controls from '../components/control/Controls';
import styled from 'styled-components';
import * as salonServices from '../components/services/salonServices';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import styles from '../styles/staff.module.css';

const initialValues = {
    date: new Date(),
    time: '',
    name: '',
    email: '',
    beautician: ''
}

const staff = {
    'Lucy': '/staff11.jpg', 
    'Lebo': '/staff33.jpg', 
    'Lerato': '/staff22.jpg'
};

const times = [{chooseTime: '9:00', showTime: true},{chooseTime:'10:00', showTime: true}, {chooseTime:'11:00', showTime:true}, {chooseTime:'12:00', showTime:true}, {chooseTime:'13:00', showTime:true}, {chooseTime:'14:00', showTime:true}, {chooseTime:'15:00', showTime:true}, {chooseTime:'16:00', showTime:true}, {chooseTime:'17:00', showTime:true}];


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

const stylistSelect = Object.keys(staff).map((x, i) => (
             <div className={styles.staff_container}>
                <Image
                className={styles.staff_img} 
                    src={staff[x]}
                    key={i} 
                    width={150}
                    height={150}
                />
                <p>{x}</p>
            </div>
))

export default function MakeUp() {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <Container>
            <Navbar />
            <h1 className={styles.subHeading}>Make-Up</h1>
            <p className={styles.description} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut placerat est. Mauris gravida erat massa, et feugiat augue tempor eget.</p>
            <Div>
                <Image 
                    src="/makeupimage.jpg"
                    alt=""
                    width={800}
                    height={450}
                />
                <h2>Book Appointment</h2>
                <Form>
                    <FormContainer>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholder={'Select date'}/>
                   
                    {console.log(startDate)}
                    <h4>AVAILABLE SLOT</h4>
                    <TimesContainer>
                        {times.map(time => (
                            <TimesSpan>{time.chooseTime}</TimesSpan>
                        ))}
                    </TimesContainer>
                    <RowDiv>
                        <Controls.Input 
                            text='Name'
                            name='name'
                            placeholder='Enter your name...'
                            value=''
                            onChange=''
                        />
                        <Controls.Input 
                            text='Email'
                            name='email'
                            placeholder='Enter your email...'
                            value=''
                            onChange=''
                        />
                    </RowDiv>
                    <h4>Select Beautician</h4>
                    <RowDiv>{stylistSelect}</RowDiv>
                    </FormContainer>
                </Form>

            </Div>
        </Container>
    )
}