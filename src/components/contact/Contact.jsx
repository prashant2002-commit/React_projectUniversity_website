import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = ({apiKey}) => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending to Prashant...");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact form or find our contact information 
                below. Your feedback, questions, and suggestions are important to us, as we
                strive to provide exceptional services to our university community.
            </p>
            <ul>
                <li> <img src={mail_icon} alt=''/>prashantrmr07@gmail.com</li>
                <li> <img src={phone_icon} alt=''/>+91 7668787530</li>
                <li> <img src={location_icon} alt=''/>23 Streets, Arizona Dholakpur<br/> India </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name='message' rows='6' placeholder='Enter Your Message' required/>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div> 
    </div>
  )
}

export default Contact