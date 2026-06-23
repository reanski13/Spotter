# Spotter 🏋️‍♂️

**Spotter** is an AI-powered fitness companion web application designed to help users achieve their fitness goals through workout tracking, scheduling, progress monitoring, and personalized AI-generated fitness guidance.

## Overview

Many gym-goers, especially beginners, struggle with maintaining workout consistency, creating effective fitness plans, and finding reliable fitness information. Spotter aims to solve these challenges by providing a centralized platform where users can manage their fitness journey and receive assistance from an AI Fitness Coach.

## Features

### User Authentication

* User registration and login
* Secure account management
* Session-based authentication

### Workout Tracking

* Log exercises, sets, reps, and weights
* View workout history
* Edit and manage workout records

### Workout Scheduling

* Create and manage workout schedules
* Calendar-based workout planning
* Upcoming workout reminders

### Progress Analytics

* Track fitness progress over time
* Monitor workout frequency
* View personal fitness statistics

### AI Fitness Coach

* Answer fitness-related questions
* Provide workout and recovery advice
* Offer personalized fitness recommendations

### AI Workout Generator

* Generate customized workout routines
* Adapt recommendations based on fitness goals
* Consider experience level and available equipment

## Technology Stack

### Frontend

* React
* Vite
* CSS / Tailwind CSS (if applicable)

### Backend

* Supabase Authentication
* Supabase Database

### Database & Authentication

* Supabase

### Artificial Intelligence

* Google Gemini API

### Version Control

* Git
* GitHub

## Design Patterns Used

### Façade Pattern

Spotter uses service modules such as:

* authService
* workoutService
* scheduleService
* aiService

These services provide simplified interfaces between the frontend and external services such as Supabase and Google Gemini.

### Strategy Pattern

The AI Workout Generator uses different workout-generation strategies based on user goals:

* Muscle Gain
* Weight Loss
* Endurance
* General Fitness

Each strategy generates different prompts before sending requests to the Gemini API, allowing personalized recommendations.

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── layouts/
├── hooks/
├── assets/
└── routes/
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-organization/spotter.git
```

### Navigate to the Project Folder

```bash
cd spotter
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Future Enhancements

* Mobile application support
* Wearable device integration
* Nutrition tracking
* Social workout sharing
* Exercise video demonstrations
* Advanced AI-powered fitness analytics

## Disclaimer

Spotter is intended for educational and fitness assistance purposes only. AI-generated recommendations should not be considered professional medical, nutritional, or fitness advice. Users should consult qualified professionals for health-related concerns.

## Developers

Developed by the Spotter Development Team as part of an Application Development course project.
