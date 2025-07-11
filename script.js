// Array to store contact objects
let contacts = [
  { name: "Ada", email: "ada@example.com" },
  { name: "Favour", email: "favour@example.com" },
  { name: "Grace", email: "grace@example.com" },
];

// DOM Elements
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactsList = document.getElementById("contacts");
const errorDiv = document.getElementById("error");
const removeLastButton = document.getElementById("remove-last");

// Function to display contacts
function displayContacts() {
  // Clear existing list
  contactsList.innerHTML = "";

  if (contacts.length === 0) {
    contactsList.innerHTML = "<li>No contacts available</li>";
    return;
  }

  // Loop through contacts and add to list
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    const li = document.createElement("li");
    li.textContent = `${contact.name} - ${contact.email}`;
    contactsList.appendChild(li);
  }
}

// Function to add a new contact
function addContact(name, email) {
  // Validate inputs
  if (name.trim() === "" || email.trim() === "") {
    errorDiv.textContent = "Please enter both name and email!";
    return;
  }

  errorDiv.textContent = ""; // Clear error
  contacts.push({ name, email });
  displayContacts();
}

// Function to remove the last contact
function removeLastContact() {
  if (contacts.length > 0) {
    contacts.pop();
  }
  displayContacts();
}

// Event listener for form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addContact(nameInput.value, emailInput.value);
  nameInput.value = "";
  emailInput.value = "";
});

// Event listener for remove button
removeLastButton.addEventListener("click", removeLastContact);

// Initial display
displayContacts();
