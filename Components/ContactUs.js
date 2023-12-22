import React, {useState} from "react";
import '../style/covercontentInformation.css';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormControl from "@mui/material/FormControl";
import contactData from '../data/contactData';
import Header from "./Header";
import Footer from "./Footer";
export default function CoverContentInformation() {
  const [userName, setUsername] = useState("");
      const [email, setEmail] =useState("");
      const [subject, setSubject] =useState("");
      const [message, setMessage] =useState("");
      
      const collectData = async (event) => {
          event.preventDefault();
      const formData = {
          userName,
          email,
          subject,
          message,
      };
  
    console.log('FormData:', formData);
          try {
            const response = await fetch('http://localhost:4002/ContactUs', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log('Data received:');
            console.log(data);
          } catch (error) {
            console.error('Error:', error.message);
          }
  
          setUsername('');
          setEmail('');
          setSubject('');
          setMessage('');
      }

    const data = contactData.map((contact)=> {

        return(
            <div className="div-30">
            <div className="img-icon"><img src={require('../images/' + contact.icon_src + '.svg')} alt=""/></div>
            <div className="div-text">
            <span className="name-style">{contact.name}</span><br></br>
            <span className="content-style">{contact.info}</span>
            </div>
            </div>
        )
    })

  return (
    <div className="background-styling-contact">
    <Header />
      <div className="responsive">
        <h1 className="cover-header">
        Contact Us
        </h1>
        <p className="cover-para">
        Kindly reach us to get the fastest response and treatment
        </p>
        <div className="info-styling-div">
        <h1 style={{color:"rgb(7, 57, 70)"}}>Feel Free To Contact Us </h1>
          <form onSubmit={collectData}>
            <FormControl sx={{ m: 1, width: "39ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-username">
                Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                type="text"
                label="Name"
                name="userName"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "39ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "80ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-subject">
                Subject
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-subject"
                type="text"
                label="Subject"
                name="subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "80ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-message">
                Message
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-message"
                type="text"
                label="Message"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                sx={{ height: "30ch" }}
              />
            </FormControl><br></br>
            <button type="submit" class="btn btn-primary submit-btn-style">
              Submit <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
        <h1 className="cover-header">
        Find Us Here </h1>
        <div className="div-100">
        {data}
        </div>
      </div>
      <Footer />
    </div>
  );
}
