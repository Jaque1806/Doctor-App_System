# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Steps to open a React project on Visual Studio Code:

## XAMPP (DATABASE)

1. Install XAMPP (if not installed already) To manage your local database.

2. Start Apache and MySQL Servers in XAMPP.

3. Create a Database in XAMPP (via phpMyAdmin)
Open your browser and navigate to http://localhost/phpmyadmin/.

Add the necessary tables and data that your React application will interact with:

    **Create the database**
    
    CREATE DATABASE bookform;
    
    **Create the tables**
    
    CREATE TABLE appointments (
    appointmentId INT(11) AUTO_INCREMENT PRIMARY KEY,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status ENUM('booked', 'completed', 'cancelled') DEFAULT 'booked',
    FOREIGN KEY (doctorId) REFERENCES doctors(doctorId),
    FOREIGN KEY (patientId) REFERENCES patients(patientId));
    
    CREATE TABLE doctors (
    doctorId INT(11) AUTO_INCREMENT PRIMARY KEY,
    docFirstName VARCHAR(25) NOT NULL,
    docLastName VARCHAR(25) NOT NULL,
    specialization VARCHAR(100) NOT NULL,);
    
    INSERT INTO doctors (docFirstName, docLastName, specialization) 
    VALUES
    ('Dr. Ryano', 'Jovt', 'General Practitioner'),
    ('Dr. Amelia', 'Larison', 'Gynecologist'),
    ('Dr. Samuel', 'Patele', 'Dermatologist'),
    ('Dr. David', 'Letton', 'Pediatrician'),
    ('Dr. Jamile', 'Goes', 'Gastroenterologist'),
    ('Dr. Armany', 'Wilson', 'Neurologist'),
    ('John', 'Dove', 'General Practitioner'),
    ('Dr. Tim', 'Bale', 'Gynecologist');
    
    CREATE TABLE patients (
    patientId INT(11) AUTO_INCREMENT PRIMARY KEY,
    patFirstName VARCHAR(25) NOT NULL,
    patLastName VARCHAR(25) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    dob DATE NOT NULL;
    
    INSERT INTO patients (patFirstName, patLastName, email, phone, dob) 
    VALUES
    ('Jaqueline', 'Fernandes', 'jaquelinefernandes1806@gmail.com', '0830075863', 1991-06-18);
  

## VISUAL STUDIO CODE

1. Open the existing React project folder in VS Code.

2. Ensure Node.js and npm(Node Package Manager) are installed.

3. Install the required dependencies by running npm install.

4. Add any additional modules (if necessary) using npm install <module-name>.

5. Start the project with npm start or npm run dev.
