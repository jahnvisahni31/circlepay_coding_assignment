# circlepay_coding_assignment

This project is a React application that integrates a search feature with a transaction flow. It allows users to search for properties, view details, and proceed to a transaction review and confirmation page.

## Getting Started
---------------

### Prerequisites

* React
* npm (version 6 or higher)
* Tailwind CSS

### Installation

1. Clone the repository: `git clone https://github.com/jahnvisahni31/circlepay_coding_assignment.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Running the Project Locally
---------------------------

1. Open a terminal and navigate to the project directory: `cd circlepay_coding_assignment`
2. Start the development server: `npm start`
3. Open a web browser and navigate to `http://localhost:3000`

## Project Structure
-------------------

* `src`: Contains the React application code
  + `app.js`: Entry point of the application
  + `search-results.js` : Full Functionality of this with tailwind css
* `public`: Contains static assets
* `README.md`: This file

## Errors Faced and Resolutions

During the implementation of the "Pay with Circle" popup functionality, several issues arose and were addressed as follows:

### 1. State Management for Conditional Rendering
Initially, there was no state to toggle between the default popup and the "Circle Pay" screen, making it impossible to display the correct content upon clicking "Pay with Circle." This was resolved by introducing a `showCirclePay` state to manage the conditional rendering of the two different views.

### 2. Popup Closing Mechanism
The popup did not have a close functionality, causing it to stay open indefinitely. This issue was resolved by adding a close button ("X") with an `onClick` handler that sets `showPopup` to `false`, effectively closing the popup.

### 3. Proper Event Handling
The "Pay with Circle" button wasn't correctly updating the UI due to improper event handling. To fix this, I ensured that the `handlePayWithCircle` function properly updated the state to display the `CirclePay` component, thus showing the appropriate screen after the button was clicked.

By addressing these errors, the functionality now works smoothly with correct conditional rendering and popup handling.
