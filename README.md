# GenSecure - Strong Password Generator 🔐

**GenSecure** is a full-stack application that generates strong and secure passwords for users. The application consists of two main parts:
1. **React Frontend**: The user interface (UI) is built using React, where users can click a button to generate a strong password. The UI displays the generated password and also allows the user to easily copy it to the clipboard for use.
2. **Spring Boot Backend**: The backend is powered by Spring Boot, which generates the strong password when requested via an API. The backend ensures the password is randomly generated with secure characters and length.

## Key Features
- **Secure Password Generation**: The app generates strong passwords with a mix of letters, numbers, and symbols, ensuring they are safe for use in various applications.
- **Interactive UI**: The frontend has a simple, clean, and user-friendly design that allows users to generate a new password with a single click.
- **Password Copying**: Users can easily copy the generated password to the clipboard with a button click, making it convenient for use in their accounts.
- **Responsive Design**: The UI is designed to be mobile-friendly and works seamlessly across devices, ensuring that users can access it anywhere, anytime.

## Tech Stack
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot (Java)
- **Build Tool**: Maven (for Spring Boot)
- **Database**: Not required (password generation is done dynamically)

## Getting Started

To run the GenSecure project locally, follow these steps:

### Prerequisites

1. **Java 11 or higher** - For Spring Boot backend.
2. **Node.js & npm** - For the React frontend.

### Backend (Spring Boot)

1. Clone the repository or navigate to the `spring-boot-backend` folder.
2. Open a terminal and run the following commands to start the backend:
    ```bash
    mvn spring-boot:run
    ```
3. The backend will run on `http://localhost:8080`.

### Frontend (React)

1. Clone the repository or navigate to the `react-frontend` folder.
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```
4. The frontend will run on `http://localhost:3000`.

### Running Both Locally

- The React app will communicate with the Spring Boot API running on `http://localhost:8080`.
- When you click the "Generate Strong Password" button, the React frontend will call the `/generate-password` API on the backend to fetch a new password.


## Use Cases
- **Individuals** looking for a secure way to generate passwords for their online accounts.
- **Developers** in need of a password generator for testing or project requirements.
- **Security Enthusiasts** who prioritize strong, unique passwords for every online service.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements
- **React** - For the frontend framework.
- **Spring Boot** - For the backend framework that powers the REST API.
- **Maven** - For building the backend application.

