# Prodesk IT - Sprint 7: Multi-Step Onboarding Wizard

A modern, responsive Multi-Step Onboarding Wizard built with React for the Sprint 3 engineering requirements. This project demonstrates advanced state management, conditional rendering, and seamless navigation across multiple form steps while ensuring user data persists throughout the onboarding process.

## Important Links

**Live Website:** https://your-live-demo-link.netlify.app/

**Demo Video:** https://your-demo-video-link.com/

## Screenshot

*(Add your project screenshot here)*

---

# Project Overview

## Tech Stack

* React.js
* JavaScript (ES6+)
* JSX
* CSS3

---

# Features Completed (Phase 1: Base MVP)

The following mandatory Phase 1 requirements have been successfully completed:

### UI Segmentation

Designed a three-step onboarding wizard using conditional rendering:

* Personal Information
* Account Details
* Review & Submit

### Navigation Logic

Implemented **Next** and **Back** navigation, allowing users to move smoothly between form steps.

### State Lifting

Managed the complete form state in the parent component using React's **useState**. User-entered data remains intact even when navigating back to previous steps.

### Controlled Components

All input fields are implemented as controlled components, ensuring real-time synchronization between the UI and application state.

### Review & Submit

Before submission, users can review all entered information on the final step and return to previous steps if any edits are required.

### Submission Payload

On clicking the **Submit** button, the complete user data object is logged to the browser console, and a **Registration Successful** confirmation screen is displayed.

### React Architecture

The application follows a component-based architecture by separating the onboarding process into reusable React components:

* PersonalInfo
* AccountDetails
* ReviewSubmit

No external state management libraries or frontend frameworks were used. The entire project is built using React functional components and the **useState** Hook.
