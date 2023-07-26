# Criminal Profiling Tool - Backend (Incomplete)

This repository contains the backend code for the Criminal Profiling Tool, which was developed as a part of the SSIP Azadi ka Amrut Mahotsav Hackathon in 2022.

---

## Project Overview

The Criminal Profiling Tool aims to provide a platform to assist law enforcement agencies in profiling criminals and solving cases. It is designed to work in conjunction with the frontend, which is built using ReactJS and Tailwind CSS and hosted on Netlify.

The backend of the application is developed using NodeJS and ExpressJS. It utilizes MongoDB Atlas as the online database to store and manage the relevant data.

**Frontend Repository:** [https://github.com/Darshit4511/Client.git](https://github.com/Darshit4511/Client.git)

**Netlify Frontend Link:** [https://criminal-profiling-tool.netlify.app/](https://criminal-profiling-tool.netlify.app/)

---

## Setup and Installation

To set up the backend locally, follow these steps:

1. Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Darshit4511/Backend.git
```

2. Navigate to the project directory:

```bash
cd Backend
```

3. Install the required dependencies using npm:

```bash
npm install
```

4. Before running the backend server, make sure you have MongoDB Atlas credentials and a running MongoDB instance. You can set up a free account on [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

5. Create a `.env` file in the root of the project and add the following environment variables with your MongoDB Atlas connection string:

```plaintext
MONGODB_URI=your_mongodb_atlas_connection_string
```

6. Start the backend server:

```bash
npm start
```

The backend will now be accessible at `http://localhost:3000`.

---

## Deployment

The backend is hosted on Heroku. Any changes pushed to the main branch of this repository are automatically deployed to the Heroku server. However, please note that this repository contains an incomplete version of the backend, and it may not function as a fully working application without additional development.

---

Thank you for taking an interest in the Criminal Profiling Tool project. If you have any questions or need further assistance, feel free to contact the project maintainers. Happy profiling!
