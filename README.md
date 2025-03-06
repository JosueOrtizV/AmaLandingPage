# Ama Earth Group Landing Page

## Overview
Ama Earth Group's Landing Page is a full-stack web application that empowers environmental professionals by offering AI-generated answers to nature-related questions. The application integrates an LLM (Large Language Model) API to provide insights into topics like ecosystems, wildlife, and environmental regeneration, aligning with Ama Earth Group's mission to protect and preserve our planet.

The project includes:
- A **frontend** hosted on GitHub Pages, delivering a clean, user-friendly interface.
- A **backend** deployed on Render, handling API calls and processing requests with the LLM API.

---

## Features
- Users can ask nature-related questions through an intuitive and visually appealing interface.
- AI-generated responses provide concise, accurate, and relevant answers.
- Responsive design ensures compatibility across all devices (desktop, tablet, mobile).
- Backend includes rate limiting and error handling for a seamless experience.

---

## Technologies Used

### Frontend
- Framework: Angular
- Styling: CSS with responsive design principles
- Hosted on: GitHub Pages

### Backend
- Runtime: Node.js
- Framework: Express
- Rate Limiting: `express-rate-limit`
- Deployed on: Render

### AI Integration
- API: Generative Language Model (LLM)
- Model: Google Generative AI (gemini-1.5-flash)

---

## Live Demo

### Frontend  
[View the Landing Page](https://josueortizv.github.io/AmaLandingPage/)

### Backend  
Base URL: [Render API](https://amabackend-1wsk.onrender.com/)  
Example endpoint: `POST https://amabackend-1wsk.onrender.com/api/questions`

---

# Setup Instructions

## Frontend

### 1. Clone the repository:
```bash
git clone https://github.com/JosueOrtizV/AmaLandingPage.git
cd AmaLandingPage
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run locally:
```bash
ng serve
```

### 4. Open your browser and navigate to:
[http://localhost:4200](http://localhost:4200)

---

## Backend

### 1. Clone the repository:
```bash
git clone https://github.com/JosueOrtizV/Amabackend.git
cd your-backend-repo
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Create a `.env` file and add your environment variables:
```ini
GOOGLE_API_KEY=your-google-api-key
```

### 4. Run locally:
```bash
npm start
```

### 5. The server will run at:
[http://localhost:5000](http://localhost:5000)

---

## Usage

1. Open the landing page at the provided frontend URL.
2. Ask a nature-related question (e.g., "How do coral reefs grow?").
3. The backend processes the question via the LLM API and returns an answer.
4. The answer is displayed directly on the page.

---

## Deployment Details

### Frontend Deployment (GitHub Pages):

#### 1. Build the Angular app for production:
```bash
ng build --configuration production --base-href /AmaLandingPage/
```

#### 2. Deploy using `angular-cli-ghpages`:
```bash
npx angular-cli-ghpages --dir=dist/ama-landing-page/browser
```

### Backend Deployment (Render):

1. Push the backend code to a GitHub repository.
2. Create a new Web Service on Render and link it to your repository.
3. Set the start command as:
   ```bash
   node index.js
   ```
4. Add your environment variables in the Render dashboard.

---

## Testing

Test the backend endpoints using tools like Postman:

### Endpoint: `POST https://amabackend-1wsk.onrender.com/api/questions`

#### Request Body:
```json
{
  "question": "How do coral reefs grow?"
}
```

#### Expected Response:
```json
{
  "status": "success",
  "answer": "Coral reefs grow by..."
}
```

---

## Future Improvements

- Implement authentication to restrict access to the backend.
- Add caching mechanisms to reduce API calls for frequently asked questions.
- Expand the AI's knowledge base to include more in-depth insights into environmental topics.

---

## Author
**Josué Ortiz**  
GitHub: [https://github.com/JosueOrtizV](https://github.com/JosueOrtizV)