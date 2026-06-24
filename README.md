Spotter 🏋️‍♂️
Spotter is an AI-powered fitness companion web application designed to help users achieve their fitness goals through workout tracking, scheduling, progress monitoring, and personalized AI-generated fitness guidance.

Overview
Many gym-goers, especially beginners, struggle with maintaining workout consistency, creating effective fitness plans, and finding reliable fitness information. Spotter aims to solve these challenges by providing a centralized platform where users can manage their fitness journey and receive assistance from an AI Fitness Coach.

Features
User Authentication
User registration and login
Secure account management
Session-based authentication
Workout Tracking
Log exercises, sets, reps, and weights
View workout history
Edit and manage workout records
Workout Scheduling
Create and manage workout schedules
Calendar-based workout planning
Upcoming workout reminders
Progress Analytics
Track fitness progress over time
Monitor workout frequency
View personal fitness statistics
AI Fitness Coach
Answer fitness-related questions
Provide workout and recovery advice
Offer personalized fitness recommendations
AI Workout Generator
Generate customized workout routines
Adapt recommendations based on fitness goals
Consider experience level and available equipment
Technology Stack
Frontend
React
Vite
CSS / Tailwind CSS (if applicable)
Backend
Supabase Authentication
Supabase Database
Database & Authentication
Supabase
Artificial Intelligence
Google Gemini API
Version Control
Git
GitHub
Design Patterns Used
Façade Pattern
Spotter uses service modules such as:

authService
workoutService
scheduleService
aiService
These services provide simplified interfaces between the frontend and external services such as Supabase and Google Gemini.

Strategy Pattern
The AI Workout Generator uses different workout-generation strategies based on user goals:

Muscle Gain
Weight Loss
Endurance
General Fitness
Each strategy generates different prompts before sending requests to the Gemini API, allowing personalized recommendations.

Project Structure
src/
├── components/
├── pages/
├── services/
├── layouts/
├── hooks/
├── assets/
└── routes/
Installation
Clone the Repository
git clone https://github.com/your-organization/spotter.git
Navigate to the Project Folder
cd spotter
Install Dependencies
npm install
Run the Development Server
npm run dev
The application will be available at:

http://localhost:5173
Future Enhancements
Mobile application support
Wearable device integration
Nutrition tracking
Social workout sharing
Exercise video demonstrations
Advanced AI-powered fitness analytics
Disclaimer
Spotter is intended for educational and fitness assistance purposes only. AI-generated recommendations should not be considered professional medical, nutritional, or fitness advice. Users should consult qualified professionals for health-related concerns.

GUIDE
# Spotter

Spotter is an AI-powered fitness tracking web application developed by **CuttingEdge**. The system allows users to track workouts, schedule fitness routines, monitor progress, and receive personalized workout recommendations through the Google Gemini AI API.

---

# Tech Stack

## Frontend
- React
- Vite
- React Router

## Backend
- Supabase Authentication
- Supabase PostgreSQL Database
- Supabase Edge Functions

## AI
- Google Gemini API

---

# Team Members

- Vicente Inaki B. Villa
- Jedidiah O'Brent A. Chua
- Rean G. Coyacot
- Xavier S. Ledesma

---

# Prerequisites

Before starting, make sure you have the following installed:

- Node.js (v20 or later recommended)
- npm
- Git
- VS Code

---

# Project Setup

## 1. Clone the Repository

```bash
git clone <repository-url>
cd Spotter
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a file named

```
.env
```

inside the project root.

Add the following:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

These values can be found in:

```
Supabase Dashboard
→ Project Settings
→ API Keys
```

Use:

- Project URL
- Publishable Key (formerly Anon Key)

❌ Never use the Secret Key.

---

## 4. Run the Development Server

```bash
npm run dev
```

Open the local development URL shown in the terminal.

Example:

```
http://localhost:5173
```

---

# Folder Structure

```
Spotter
│
├── public
│
├── src
│   │
│   ├── assets
│   │   ├── images
│   │   ├── icons
│   │   └── logo
│   │
│   ├── components
│   │   ├── common
│   │   ├── charts
│   │   └── ai
│   │
│   ├── context
│   │
│   ├── hooks
│   │
│   ├── lib
│   │   └── supabase.js
│   │
│   ├── pages
│   │   ├── auth
│   │   ├── dashboard
│   │   ├── profile
│   │   ├── workout
│   │   ├── schedule
│   │   ├── progress
│   │   ├── ai
│   │   └── admin
│   │
│   ├── router
│   │   └── AppRouter.jsx
│   │
│   ├── services
│   │
│   ├── styles
│   │
│   ├── utils
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── supabase
│   ├── functions
│   └── migrations
│
├── .env
├── package.json
└── README.md
```

---

# Current Routes

| Route | Page |
|--------|------|
| / | Login |
| /register | Register |
| /dashboard | Dashboard |
| /profile | User Profile |
| /workouts | Workout Tracker |
| /history | Workout History |
| /schedule | Workout Schedule |
| /progress | Progress Analytics |
| /ai-coach | AI Fitness Coach |
| /admin | Admin Dashboard |

---

# Development Workflow

Before starting development:

```bash
git pull origin main
```

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Always pull the latest version before beginning work to avoid merge conflicts.

---

# Initial Project Structure

The project currently includes:

- Project folder structure
- React Router configuration
- Supabase client initialization
- Placeholder pages
- Service layer (Façade Pattern)
- Supabase backend structure

---

# Design Patterns

### Structural Pattern

- Façade Pattern

Used through the service layer:

```
authService.js
profileService.js
workoutService.js
scheduleService.js
progressService.js
aiService.js
```

This provides a simplified interface between the frontend and Supabase/Gemini services.

---

### Behavioral Pattern

- Strategy Pattern

Used in the AI Workout Generator to dynamically generate different workout recommendations based on:

- Fitness Goal
- Experience Level
- Workout History

---

# Database

Supabase PostgreSQL

Current Tables

- profiles
- exercises
- workouts
- workout_exercises
- workout_schedules
- progress_records
- ai_logs

---

# AI Integration

Google Gemini API

All AI requests will pass through:

```
React

↓

Supabase Edge Function

↓

Google Gemini API
```

The Gemini API key is stored securely in Supabase Edge Functions and is never exposed to the frontend.

---

# Notes

- Do not delete the existing folder structure.
- Do not commit the Supabase Secret Key.
- Keep services independent and reusable.
- Follow the SRS and SDD when implementing new features.