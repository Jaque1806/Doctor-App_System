import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Appointment = () => 
{
  const [selectedDoctor, setSelectedDoctor] = useState('');
  // const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', phone: '', dob: '', doctor: 'choose', date: '', time: ''});
  const [doctors, setDoctors] = useState([]);

  useEffect(() => 
  {
    Promise.all([
      // axios.get('http://localhost/php_doctorSystem/getBookings.php'),
      axios.get('http://localhost/php_doctorSystem/getDoctor.php')
    ])
    .then(([doctorsResponse]) => {
      // setAppointments(appointmentsResponse.data.appointments);
      setDoctors(doctorsResponse.data.doctors);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // HANDLING SUBMIT BUTTON
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const appointmentData = {
      //patient_Fname: `${formData.firstName}`,
      //patient_Lname: `${formData.lastName}`,
      patient_id: 1, // 1 is the jaqueline's id
      doctor_id: selectedDoctor,
      appointment_date: formData.date,
      appointment_time: formData.time,
      status: "booked",
    };
  
    try {
      const response = await axios.post(
        "http://localhost/php_doctorSystem/postBooking.php",
        JSON.stringify(appointmentData), // 🔥 Convert to JSON
        { headers: { "Content-Type": "application/json" } } // 🔥 Set JSON header
      );
  
      console.log("Server response:", response.data);
  
      if (response.data.success) {
        alert("Appointment booked successfully!");
        setFormData({ firstName: "", lastName: "", date: "", time: "" });
      } else {
        alert("Error: " + response.data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Check the console for details.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto p-5 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Booking Form</h2>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} 
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"required/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"required/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="phone" name="phone" id="phone" value={formData.phone} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
        </div>

        {/* SELECT A DOCTOR */}
        <div className="flex flex-col">
          <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">Doctor</label>
          <select name="doctor" id="doctor" value={selectedDoctor} onChange={handleDoctorChange}>
            <option value="">Select a Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.doctorId} value={doctor.doctorId}>
                {doctor.docFirstName} {doctor.docLastName} ({doctor.specialization})
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Appointment Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"required/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Appointment Time</label>
          <input type="time" name="time" id="time" value={formData.time} onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required/>
        </div>

        <button onClick={()=>navigate('/myappointments')} type="submit" className="mt-5 bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"> Submit </button>
      </form>

      <div>
     
      {/* <h2>Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.appointmentId}>
            {appointment.appointment_date} - {appointment.appointment_time} - {appointment.status}
          </li>
        ))}
      </ul> */}
    </div>
    </div>
  );
};

export default Appointment;
