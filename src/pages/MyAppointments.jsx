import { useEffect, useState } from "react";
import axios from "axios";

const MyAppointments = () => 
{
  const [appointments, setAppointments] = useState([]);

    useEffect(() => 
    {
    axios.get("http://localhost/php_doctorSystem/getBookings.php")
      .then(res => {
        if (res.data.success) 
        {
          setAppointments(res.data.appointments);
        }
      })
      .catch(err => console.error("Error fetching appointments:", err));
    }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Appointment List
      </h2>
      <ul className="space-y-4">
        {appointments.map((a, i) => (
          <li key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-lg font-semibold text-indigo-700">
              {a.patFirstName} {a.patLastName}
            </div>
            <div className="text-sm text-gray-600">
              Appointment on <span className="font-medium text-black">{a.appointment_date}</span> at <span className="font-medium text-black">{a.appointment_time}</span>
            </div>
            <div className="text-sm text-gray-600">
              Doctor: <span className="font-medium text-black">{a.docFirstName} {a.docLastName}</span> — {a.specialization}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
