import React from "react";
import '../style/covercontentInformation.css';
import '../style/timetable.css';
import '../style/appointment.css';
import image from '../images/appointment.jpeg';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {  Select, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Timetable from '../images/timetable.png';
import Header from "./Header";
import Footer from "./Footer";
export default function CoverContentInformation() {
    const [userName, setUsername] =React.useState("");
    const [phoneNo, setPhoneNo] =React.useState("");
    const [recordNo, setRecordNumber] =React.useState("");
    const [reasonVisit, setReasonVisit] =React.useState("");
    const [department, setDepartment] =React.useState("");
    const [date, setDate] =React.useState("");
    const [time, setTime] =React.useState("");
    
    const collectData = async (event) => {
        event.preventDefault();
    const formData = {
        userName,
        phoneNo,
        recordNo,
        reasonVisit,
        department,
        date,
        time,
    };

  console.log('FormData:', formData);
        try {
          const response = await fetch('http://localhost:4002/', {
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
        setPhoneNo('');
        setRecordNumber('');
        setReasonVisit('');
        setDepartment('');
        setDate('');
        setTime('');
    }

  return (
    <div className="background-styling-contact">
    <Header />
      <div className="responsive">
        <h1 className="cover-header">
        ProHealth
        Timetable
        </h1>
        <p className="cover-para">
        Get to know the complete info of our doctors’ schedule
        </p>
      </div>
      <div className="time-div">
      <img src={Timetable} alt="" />
      </div>
      <div className="Appointment-main-div" id="appointment">
        <div className="text-side">
        <span className="appoint-head">BOOK AN</span><br></br>
        <span className="appoint-latest">Appointment</span>
        <form onSubmit={collectData}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            type='text'
            label="Username"
            name="userName"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
            
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-phone">Phone Number</InputLabel>
        <OutlinedInput
          id="outlined-adornment-phone"
          type='text'
          label="Phone Number"
          name="phoneNo"
            value={phoneNo}
            onChange={(event) => setPhoneNo(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-record">Medicle Record Number</InputLabel>
        <OutlinedInput
          id="outlined-adornment-record"
          type='text'
          label="Medicle Record Number"
          name="recordNo"
            value={recordNo}
            onChange={(event) => setRecordNumber(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-reason">Reason for Visit</InputLabel>
        <OutlinedInput
          id="outlined-adornment-reason"
          type='text'
          label="Reason for Visit"
          name="reasonVisit"
            value={reasonVisit}
            onChange={(event) => setReasonVisit(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-department">Department</InputLabel>
      <Select
        label="Department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        inputProps={{
          id: 'outlined-adornment-department',
        }}
      
      >
        <MenuItem value="Cardiology Department">Cardiology Department</MenuItem>
        <MenuItem value="Gyenocology Department">Gyenocology Department</MenuItem>
        <MenuItem value="Cardiatic Department">Cardiatic Department</MenuItem>
        <MenuItem value="Pediatric Department">Pediatric Department</MenuItem>
        <MenuItem value="Emergency department">Emergency department</MenuItem>
      </Select>
    </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-date"></InputLabel>
        <OutlinedInput
          id="outlined-adornment-date"
          type='date'
          placeholder="Date"
          name="date"
          value={date}
         onChange={(event) => setDate(event.target.value)}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '52ch' }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-time">Time</InputLabel>
      <Select
        label="Time"
        name="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        inputProps={{
          id: 'outlined-adornment-time',
        }}
      >
        <MenuItem value="9:00-10:00">9:00-10:00</MenuItem>
        <MenuItem value="10:00-11:00">10:00-11:00</MenuItem>
        <MenuItem value="11:00-12:00">11:00-12:00</MenuItem>
        <MenuItem value="12:00-13:00">12:00-13:00</MenuItem>
      </Select>
    </FormControl>
        <button type="submit" class="btn btn-primary submit-btn-style">Submit <FontAwesomeIcon icon={faArrowRight} />
        </button>
        </form>
        </div>
        <div className="image-side">
        <img src={image} alt="apointment" className="appoint-image"/>
        </div>
        </div>
      <Footer />
    </div>
  );
}
