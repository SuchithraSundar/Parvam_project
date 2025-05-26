document.addEventListener("DOMContentLoaded", () => {
    // Tab switching functionality
    const navLinks = document.querySelectorAll(".nav-links li")
    const contentSections = document.querySelectorAll(".content-section")

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (this.classList.contains("logout")) {
                // Handle logout
                window.location.href = "login.html"
                return
            }

            const tabId = this.getAttribute("data-tab")

            // Update active tab
            navLinks.forEach((l) => l.classList.remove("active"))
            this.classList.add("active")

            // Show corresponding section
            contentSections.forEach((section) => {
                section.classList.remove("active")
                if (section.id === `${tabId}-section`) {
                    section.classList.add("active")
                }
            })
        })
    })

    // Modal functionality
    const addItemBtn = document.getElementById("add-item-btn")
    const addItemModal = document.getElementById("add-item-modal")
    const closeModal = document.querySelector(".close-modal")

    addItemBtn.addEventListener("click", () => {
        addItemModal.style.display = "block"
    })

    closeModal.addEventListener("click", () => {
        addItemModal.style.display = "none"
    })

    window.addEventListener("click", (event) => {
        if (event.target === addItemModal) {
            addItemModal.style.display = "none"
        }
    })

    // Load users data
    loadUsers()

    // Load inventory data
    loadInventory()

    // Load notes
    loadNotes()

    // Add item form submission
    const addItemForm = document.getElementById("add-item-form")
    addItemForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const newItem = {
            id: Date.now(),
            name: document.getElementById("item-name").value,
            category: document.getElementById("item-category").value,
            quantity: document.getElementById("item-quantity").value,
            price: document.getElementById("item-price").value,
        }

        // Add to inventory
        addInventoryItem(newItem)

        // Reset form and close modal
        addItemForm.reset()
        addItemModal.style.display = "none"
    })

    // Save note functionality
    const saveNoteBtn = document.getElementById("save-note")
    saveNoteBtn.addEventListener("click", () => {
        const noteText = document.getElementById("new-note").value.trim()

        if (noteText) {
            const newNote = {
                id: Date.now(),
                text: noteText,
                date: new Date().toLocaleString(),
            }

            // Add to notes
            addNote(newNote)

            // Clear textarea
            document.getElementById("new-note").value = ""
        }
    })

    // Search functionality
    document.getElementById("user-search").addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        filterUsers(searchTerm)
    })

    document.getElementById("inventory-search").addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase()
        filterInventory(searchTerm)
    })
})

// Mock data and functions - in a real app, these would be API calls
let users = [
    { id: 1, username: "john_doe", email: "john@example.com", status: "active" },
    { id: 2, username: "jane_smith", email: "jane@example.com", status: "active" },
    { id: 3, username: "bob_johnson", email: "bob@example.com", status: "blocked" },
]

let inventory = [
    { id: 1, name: "Dental Mirror", category: "tools", quantity: 50, price: 12.99 },
    { id: 2, name: "Dental Explorer", category: "tools", quantity: 30, price: 15.5 },
    { id: 3, name: "Dental Forceps", category: "equipment", quantity: 20, price: 45.0 },
    { id: 4, name: "Dental Floss", category: "supplies", quantity: 100, price: 3.99 },
]

let notes = [
    { id: 1, text: "Order more dental mirrors next week", date: "5/20/2023, 10:30 AM" },
    { id: 2, text: "Schedule maintenance for equipment", date: "5/21/2023, 2:15 PM" },
]

function loadUsers() {
    const usersList = document.getElementById("users-list")
    usersList.innerHTML = ""

    users.forEach((user) => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><span class="status-badge status-${user.status}">${user.status}</span></td>
            <td>
                <button class="btn ${user.status === "active" ? "btn-danger" : "btn-success"}" 
                        onclick="toggleUserStatus(${user.id})">
                    ${user.status === "active" ? "Block" : "Allow"}
                </button>
            </td>
        `
        usersList.appendChild(row)
    })
}

function loadInventory() {
    const inventoryList = document.getElementById("inventory-list")
    inventoryList.innerHTML = ""

    inventory.forEach((item) => {
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>
                <button class="btn" onclick="editInventoryItem(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteInventoryItem(${item.id})">Delete</button>
            </td>
        `
        inventoryList.appendChild(row)
    })
}

function loadNotes() {
    const notesList = document.getElementById("notes-list")
    notesList.innerHTML = ""

    notes.forEach((note) => {
        const noteCard = document.createElement("div")
        noteCard.className = "note-card"
        noteCard.innerHTML = `
            <span class="delete-note" onclick="deleteNote(${note.id})">&times;</span>
            <p>${note.text}</p>
            <div class="note-date">${note.date}</div>
        `
        notesList.appendChild(noteCard)
    })
}

function toggleUserStatus(userId) {
    users = users.map((user) => {
        if (user.id === userId) {
            return {
                ...user,
                status: user.status === "active" ? "blocked" : "active",
            }
        }
        return user
    })

    loadUsers()
}

function addInventoryItem(item) {
    inventory.push(item)
    loadInventory()
}

function editInventoryItem(itemId) {
    // In a real app, this would open a modal with the item details for editing
    alert("Edit functionality would be implemented here")
}

function deleteInventoryItem(itemId) {
    inventory = inventory.filter((item) => item.id !== itemId)
    loadInventory()
}

function addNote(note) {
    notes.push(note)
    loadNotes()
}

function deleteNote(noteId) {
    notes = notes.filter((note) => note.id !== noteId)
    loadNotes()
}

function filterUsers(searchTerm) {
    const usersList = document.getElementById("users-list")
    const rows = usersList.getElementsByTagName("tr")

    for (let i = 0; i < rows.length; i++) {
        const username = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase()
        const email = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase()

        if (username.includes(searchTerm) || email.includes(searchTerm)) {
            rows[i].style.display = ""
        } else {
            rows[i].style.display = "none"
        }
    }
}

function filterInventory(searchTerm) {
    const inventoryList = document.getElementById("inventory-list")
    const rows = inventoryList.getElementsByTagName("tr")

    for (let i = 0; i < rows.length; i++) {
        const name = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase()
        const category = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase()

        if (name.includes(searchTerm) || category.includes(searchTerm)) {
            rows[i].style.display = ""
        } else {
            rows[i].style.display = "none"
        }
    }
}
