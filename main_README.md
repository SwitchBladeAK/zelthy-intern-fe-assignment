# React Appointment Booking Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A modern, responsive, and user-friendly appointment booking application built with **React**, **Tailwind CSS**, and **React Router**. The app allows users to manage appointments, search for specific entries, and toggle between light and dark modes.

---

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Appointment Management**: Add, view, and delete appointments.
- **Search Functionality**: Search appointments by pet name, owner name, or notes.
- **Sorting Options**: Sort appointments by pet name, owner name, or date in ascending or descending order.
- **Dark Mode**: Toggle between light and dark themes with state persistence using `localStorage`.
- **Responsive Design**: Fully responsive design optimized for all screen sizes.
- **Toast Notifications**: User-friendly feedback using `react-toastify`.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern web browser (e.g., Chrome, Firefox, Edge)

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/SwitchBladeAK/zelthy-intern-fe-assignment.git
cd zelthy-intern-fe-assignment
```

### 2. Install Dependencies

Using `npm`:
```bash
npm install
```

Or using `yarn`:
```bash
yarn install
```

### 3. Start the Development Server

Run the following command to start the app in development mode:

```bash
npm start
```

Or with `yarn`:
```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

### Adding an Appointment

1. Navigate to the "Add Appointment" section.
2. Fill in the required fields (Pet Name, Owner Name, Date, Time, and Notes).
3. Click the "Submit" button to add the appointment.

### Searching for Appointments

1. Use the search bar at the top of the page.
2. Enter keywords related to the pet name, owner name, or notes.
3. Results will dynamically update as you type.

### Sorting Appointments

1. Click the "Sort By" dropdown.
2. Select the field to sort by (Pet Name, Owner Name, or Date).
3. Choose the order (Ascending or Descending).

### Toggling Dark Mode

1. Use the "Light Mode" / "Dark Mode" toggle in the header.
2. Your preference will be saved and persist across sessions.

---

## Folder Structure

The project follows a clean and modular folder structure:

```
react-Appointment-master/
├── public/
│   ├── data.json           # Sample appointment data
│   ├── favicon.ico         # App icon
│   ├── index.html          # Main HTML file
├── src/
│   ├── App.js              # Main application component
│   ├── index.css           # Global styles
│   ├── index.js            # Entry point for the app
│   ├── components/         # Reusable components
│   │   ├── AddAppointment.js
│   │   ├── AppointmentInfo.js
│   │   ├── Search.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Calendar.js
│   ├── assets/             # Static assets like images
│   ├── styles/             # Component-specific styles
│   │   ├── global.css
├── .gitignore              # Files ignored by Git
├── README.md               # This file
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
```
---

## Acknowledgments

- Built with [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [React Router](https://reactrouter.com/).
- Inspired by modern appointment management systems.
- Special thanks to the open-source community for their contributions and tools.

---

Feel free to reach out if you have any questions or suggestions! 🚀
