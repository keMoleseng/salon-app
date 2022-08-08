  import Calendar from 'react-calendar';
  import Navbar from '../components/Navbar';
  import Card from '../components/Card';
  import styles from '../styles/booking.module.css';
  import Controls from '../components/control/Controls';
  import * as salonServices from '../components/services/salonServices';
  import { useForm, Form } from '../components/useForm';

  const initialValues = {
    firstName: "",
    email: "",
    time: "",
    beautician: "",
    treatment: "",
    date: new Date()
  }

  const times = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];


  export default function Booking() {

    const {
      handleChange,
      values,
      setValues,
      resetForm
    } = useForm(initialValues)

      const convertToDefaultPara = (name, value) => ({
        target: {
          name,
          value
        }
      })

      const handleSubmit = e => {
        e.preventDefault();
        
        salonServices.saveAppointment(values);
        resetForm()
      }
      console.log(values)
      return (
        
      <>
        <Navbar />
        <h1 className={styles.heading}>Book Appointment</h1>
        <div className={styles.booking_container}>
          
          <Calendar onChange={e => setValues({...values, date:e})} value={values.date} />
          
          <Form id="appointments" 
                className={styles.times_container}
                onSubmit={handleSubmit}
          > 
            <h3 className={styles.times_heading}>Available Slot </h3>
            <div className={styles.times}>
              { times.map((time) => ( 
                <button
                  type="button"
                  name="time"
                  value={values.time}
                  key={time}
                  className={styles.time}
                  onClick={(e) => handleChange(convertToDefaultPara("time", e.target.innerHTML))}  
                >
                  {time}
                </button>
                ))
              }
            </div>
            
            <Controls.Select 
              text="Select a Beautician"
              name="beautician"
              options={salonServices.getBeauticians()}
              onChange={handleChange}
              value={values.beautician}
            />
            <Controls.Select 
              text="Select a Treatment"
              name="treatment"
              options={salonServices.getTreatments()}
              onChange={handleChange}
              value={values.treatment}
            />
            <Controls.Input
              text="Name"
              type="text"
              name="firstName"
              value={values.firstName}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <Controls.Input
              text="Email"
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter your email adress"
              onChange={handleChange}
            />
            <button className={styles.booking_button} type='submit'>Confirm booking</button>  
           
          </Form>

        </div>
        {/* <h4>{confirm ? `Your appointment has been confirmed for ${event} ${date.toString().slice(0, 16)} with ${stylist}!` : null}</h4> */}
        <Card />
      </>
      )
  }