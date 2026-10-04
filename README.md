# 🧠 Empath AI

> **We Listen. You Heal.**

Empath AI is a mental health support application prototype designed to make emotional support more accessible, private, and stigma-free.

The platform combines **AI-assisted emotional support, mental health screening, self-care tools, anonymous community interaction, and access to professional psychologists** into a single user experience.

The project focuses on creating a calm, approachable, and modern mental health platform designed around a simple idea:

> **Technology can provide immediate support, while human professionals provide deeper care.**

---

## 🌱 About the Project

Mental health support can often be difficult to access because of cost, stigma, availability, or simply not knowing where to begin.

**Empath AI** was designed as a solution to bridge the gap between immediate emotional support and professional mental healthcare.

Instead of positioning AI as a replacement for psychologists, Empath follows a **hybrid care model**:

```text
                    EMPATH AI
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
   AI SUPPORT                    HUMAN CARE
        │                             │
        ├── Emotional Chat            ├── Psychologists
        ├── Self-care                 ├── Text Sessions
        ├── Mood Tracking             ├── Audio Sessions
        └── Exercises                 └── Video Sessions
```

The prototype demonstrates how these different forms of support can exist within one cohesive application.

---

# ✨ Key Features

## 💬 AI Emotional Support

Empath provides an AI-support interface where users can interact with an empathetic digital companion.

The chat experience is designed to provide:

* Immediate conversational support
* A judgment-free environment
* Easy access from the home screen
* A private space for users to express themselves
* A first step before seeking professional support

The current implementation focuses on the **user experience and application flow** rather than connecting the interface to a production AI backend.

---

## 🧠 Mental Health Screening

New users can optionally go through a mental health screening flow before entering the main application.

The project includes a dedicated:

```text
MentalHealthScreening
```

component that sits between authentication and the main home experience.

The original product concept includes recognized screening instruments such as:

* **PHQ-9**
* **GAD-7**

These assessments are intended to help users better understand their current mental health state and provide a starting point for further support.

> **Important:** Screening tools are not intended to replace professional diagnosis.

---

# 🏠 Home Dashboard

After onboarding and screening, users reach the central Empath dashboard.

The home experience acts as the main hub for accessing:

* AI support
* Community
* Therapy
* Care plans
* Mood tracking
* Exercises
* Profile
* Subscription features

The application maintains the user's selected plan throughout the interface so relevant functionality can be displayed accordingly.

---

# 👥 Anonymous Community

Empath includes a community experience designed to allow users to interact without exposing unnecessary personal information.

The goal is to create a space where users can:

* Share experiences
* Find people with similar struggles
* Read supportive content
* Feel less isolated
* Participate without the pressure of revealing their identity

The community experience is represented by a dedicated `CommunityScreen` component in the application.

---

# 👩‍⚕️ Professional Psychologist Access

One of Empath's core ideas is connecting users with real mental health professionals.

Users can move through a structured therapy booking flow:

```text
Choose Session
      ↓
Select Session Type
      ↓
Browse Psychologists
      ↓
Choose Date & Time
      ↓
Review Booking
      ↓
Confirm
      ↓
Booking Success
```

The application includes dedicated screens for:

* Session type selection
* Psychologist directory
* Booking confirmation
* Booking success

This flow is explicitly represented in the application's component architecture.

---

# 📞 Multiple Therapy Formats

Empath is designed around flexible professional support.

The product concept supports:

### 💬 Text Therapy

For users who prefer written communication.

### 🎙️ Audio Therapy

For users who prefer talking without video.

### 🎥 Video Therapy

For a more traditional remote therapy experience.

The session type is passed through the application state and used during the psychologist selection and booking process.

---

# 📅 Therapy Booking

The booking system demonstrates a complete appointment flow.

The application tracks:

```text
Session Type
Psychologist
Date & Time
Subscription Plan
Remaining Sessions
```

Once a booking is completed, the relevant temporary booking state is cleared and the user is taken to the booking success screen.

This architecture provides a foundation for eventually connecting the frontend to a real scheduling and payment backend.

---

# 💳 Subscription Plans

Empath uses a subscription-based model combined with access to professional sessions.

The current frontend maintains several plan states:

```text
Free
Support
Comfort
Empath+
```

The application tracks the selected plan and, for Empath+ users, maintains the number of remaining sessions.

This supports a potential business model combining:

* Free access
* Premium AI/self-care features
* Professional therapy sessions
* Subscription-based care packages
* Pay-per-session access

The product concept specifically includes **subscription and pay-per-session pricing**.

---

# 🩺 Care Plan Dashboard

Empath includes a dedicated care-plan experience for users who are actively working on their mental wellbeing.

The `CarePlanDashboard` provides a central location for ongoing care information and tracks remaining professional sessions where applicable.

A future production implementation could expand this into:

* Personalized treatment goals
* Therapist recommendations
* Weekly progress
* Recommended exercises
* Mood trends
* Session history
* Upcoming appointments

---

# 😊 Mood Tracking

The application includes a dedicated mood tracking screen.

Mood tracking can help users identify patterns in their emotional wellbeing over time.

A production implementation could use this information to generate:

```text
Daily Mood
     ↓
Weekly Trends
     ↓
Pattern Detection
     ↓
Personalized Recommendations
```

The current repository contains the dedicated `MoodTrackerScreen` as part of the application's navigation architecture.

---

# 🧘 Self-Care Exercises

Empath al
