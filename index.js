// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// Utility function to create elements
function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)

  for (const key in attributes) {
    element.setAttribute(key, attributes[key])
  }

  if (text) {
    element.textContent = text
  }

  return element
}

// Add an element to the DOM
function addElementToDOM(containerId, content) {
  const container = document.getElementById(containerId)
  if (!container) return

  const newElement = createElement('p', {}, content)
  container.appendChild(newElement)
}

// Remove an element from the DOM
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element && element.parentNode) {
    element.parentNode.removeChild(element)
  }
}

// Simulate a button click and update the DOM
function simulateClick(containerId, message) {
  addElementToDOM(containerId, message)
}

// Handle form submission and update the DOM
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId)
  const input = document.getElementById('user-input')
  const errorMessage = document.getElementById('error-message')

  if (!input || !errorMessage) return

  const value = input.value.trim()

  if (value === '') {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')

  addElementToDOM(containerId, value)
  input.value = ''
}

// Export functions for Jest testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
