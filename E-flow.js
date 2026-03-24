tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#5D5CDE',
                'primary-dark': '#4A4BC8',
                serc: {
                    50: '#f0f9ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8'
                }
            }
        }
    }
}

// Dark mode support
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    initializeForms();
    initializeDocumentIn();
});

// Sample data
let users = [
    { id: 1, name: "Sok Sopheap", email: "sopheap@serc.gov.kh", type: "SERC User", status: "Active", lastLogin: "2024-01-15 09:30" },
    { id: 2, name: "Chan Dara", email: "dara@company.com", type: "Company User", status: "Active", lastLogin: "2024-01-14 14:20" },
    { id: 3, name: "Lim Sothy", email: "sothy@gmail.com", type: "Public User", status: "Inactive", lastLogin: "2024-01-10 11:45" },
];

let cases = [
    { id: "CASE-0001", title: "License Application Review", type: "External", status: "In Progress", created: "2024-01-15", assignee: "Sopheap" },
    { id: "CASE-0002", title: "Internal Audit Case", type: "Internal", status: "Open", created: "2024-01-14", assignee: "Dara" },
    { id: "CASE-0003", title: "Certification Update", type: "External", status: "Completed", created: "2024-01-10", assignee: "Sothy" },
];

let applications = [
    { id: "APP-2024-001", type: "License", company: "ABC Company", status: "Pending", payment: "Paid", submitted: "2024-01-15" },
    { id: "APP-2024-002", type: "Certification", company: "XYZ Corp", status: "In Review", payment: "Pending", submitted: "2024-01-14" },
    { id: "APP-2024-003", type: "Update", company: "DEF Ltd", status: "Approved", payment: "Paid", submitted: "2024-01-13" },
];

let recentActivity = [
    { type: "case", title: "New case created: CASE-0004", time: "10:30 AM", date: "Today", icon: "fas fa-plus-circle", color: "blue" },
    { type: "approval", title: "Application APP-2024-005 approved", time: "09:15 AM", date: "Today", icon: "fas fa-check", color: "green" },
    { type: "user", title: "New user registered: John Doe", time: "08:45 AM", date: "Today", icon: "fas fa-user-plus", color: "purple" },
    { type: "document", title: "Document DOC-001 reviewed", time: "16:30 PM", date: "Yesterday", icon: "fas fa-file-check", color: "orange" },
];

let inboxTasks = [
    { id: 1, title: "Review license application APP-2024-001", type: "Review", priority: "High", due: "Today", status: "Pending" },
    { id: 2, title: "Update case status for CASE-0002", type: "Update", priority: "Medium", due: "Tomorrow", status: "In Progress" },
    { id: 3, title: "Approve certification request", type: "Approval", priority: "High", due: "Today", status: "Pending" },
];

let activityLog = [
    { user: "Sopheap", action: "Approved application APP-2024-001", timestamp: "2024-01-15 10:30:00", ip: "192.168.1.10" },
    { user: "Dara", action: "Created case CASE-0004", timestamp: "2024-01-15 09:15:00", ip: "192.168.1.11" },
    { user: "Admin", action: "Updated user permissions", timestamp: "2024-01-15 08:45:00", ip: "192.168.1.5" },
];

let pendingReviews = [
    { id: "DOC-001", title: "Energy License Application", submitter: "ABC Energy Co.", submitted: "2024-01-14", status: "Pending" },
    { id: "DOC-002", title: "Safety Certification Request", submitter: "SafeCorp Ltd.", submitted: "2024-01-13", status: "In Review" },
    { id: "DOC-003", title: "Equipment Registration", submitter: "TechSolutions", submitted: "2024-01-12", status: "Pending" },
];

const outgoingDocuments = [
    { id: 'DOC001', title: 'Letter to Ministry', recipient: 'Ministry of Education', status: 'Sent', sentDate: '2025-07-28'},
    { id: 'DOC002', title: 'Annual Report 2025', recipient: 'All Departments', status: 'Pending', sentDate: '2025-07-29' },
    { id: 'DOC003', title: 'Invitation Letter', recipient: 'External Partner',status: 'Delivered', sentDate: '2025-07-25' }
];

let meetings = [
    { room: "Room A", start: "2025-08-01T08:00", end: "2025-08-01T09:30", title: "ប្រជុំផែនការសប្ដាហ៍", host: "លោក សុវណ្ណ", participants: 10, status: "approved" },
    { room: "Room B", start: "2025-08-01T10:00", end: "2025-08-01T11:00", title: "សន្និសីទព័ត៌មាន", host: "លោកស្រី ម៉ាលី", participants: 6, status: "pending" },
    { room: "Room A", start: "2025-08-01T13:00", end: "2025-08-01T14:30", title: "ការជជែកលើគម្រោងថ្មី", host: "លោក វណ្ណា", participants: 8, status: "approved" },
    { room: "Room C", start: "2025-08-01T15:00", end: "2025-08-01T16:00", title: "វគ្គបណ្តុះបណ្តាល", host: "លោកស្រី ស្រីនាង", participants: 20, status: "approved" },
    { room: "Room B", start: "2025-08-01T16:30", end: "2025-08-01T17:30", title: "សន្និបាតប្រចាំខែ", host: "លោក សំអុន", participants: 12, status: "pending" }
];

// let editingIndex = null;

// const meetingTable = document.getElementById('meetingTable');
// const meetingModal = document.getElementById('meetingModal');
// const meetingForm = document.getElementById('meetingForm');

// Navigation - Updated with localStorage support
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });

    // Show selected view
    const targetView = document.getElementById(viewName);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

    // Update navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('text-gray-700', 'dark:text-gray-300');
    });

    // Find and update the clicked button
    const clickedBtn = event ? event.target : document.querySelector(`[onclick="showView('${viewName}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
        clickedBtn.classList.add('bg-primary', 'text-white');
    }

    // Save current view to localStorage
    localStorage.setItem('currentView', viewName);

    // Load view-specific data
    switch (viewName) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'user-mgmt':
            loadUsers();
            break;
        case 'case-mgmt':
            loadCases();
            break;
        case 'application-mgmt':
            loadApplications();
            break;
        case 'review-process':
            loadPendingReviews();
            break;
        case 'inbox':
            loadInbox();
            break;
        case 'document-out':
            loadOutgoingDocuments();
            break;
    }
}

// Initialize app - Load saved view or default
function initializeApp() {
    // Get saved view from localStorage
    const savedView = localStorage.getItem('currentView');
    const defaultView = 'dashboard';

    // Use saved view if it exists and the element exists, otherwise use default
    const viewToLoad = savedView && document.getElementById(savedView) ? savedView : defaultView;

    // Show the appropriate view
    showView(viewToLoad);
}

// Load functions
function loadDashboard() {
    const activityContainer = document.getElementById('recentActivity');
    if (activityContainer) {
        activityContainer.innerHTML = recentActivity.slice(0, 5).map(activity => `
                    <div class="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 bg-${activity.color}-100 dark:bg-${activity.color}-900 rounded-full flex items-center justify-center">
                                <i class="${activity.icon} text-${activity.color}-600 dark:text-${activity.color}-300 text-sm"></i>
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-medium">${activity.title}</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">${activity.date} - ${activity.time}</p>
                        </div>
                    </div>
                `).join('');
    }
}

function loadUsers() {
    const tbody = document.getElementById('usersTable');
    if (!tbody) return;

    tbody.innerHTML = users.map(user => {
        const statusColors = {
            'Active': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            'Inactive': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
        };

        return `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                                    <i class="fas fa-user text-primary"></i>
                                </div>
                                <div>
                                    <div class="text-sm font-medium">${user.name}</div>
                                    <div class="text-sm text-gray-500 dark:text-gray-400">${user.email}</div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${user.type}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[user.status]}">
                                ${user.status}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${user.lastLogin}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
    }).join('');
}

function loadCases() {
    const tbody = document.getElementById('casesTable');
    if (!tbody) return;

    tbody.innerHTML = cases.map(caseItem => {
        const statusColors = {
            'Open': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            'Closed': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        };

        return `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="text-sm font-medium text-primary">${caseItem.id}</span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="text-sm font-medium">${caseItem.title}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${caseItem.type}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[caseItem.status]}">
                                ${caseItem.status}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${caseItem.created}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                            <button class="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                                <i class="fas fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `;
    }).join('');
}

function loadApplications() {
    const tbody = document.getElementById('applicationsTable');
    if (!tbody) return;

    tbody.innerHTML = applications.map(app => {
        const statusColors = {
            'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
            'In Review': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
            'Approved': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            'Rejected': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
        };

        const paymentColors = {
            'Paid': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
            'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
        };

        return `
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="text-sm font-medium text-primary">${app.id}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${app.type}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${app.company}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[app.status]}">
                                ${app.status}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${paymentColors[app.payment]}">
                                ${app.payment}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm">${app.submitted}</td>
                    </tr>
                `;
    }).join('');
}

function loadPendingReviews() {
    const container = document.getElementById('pendingReviews');
    if (!container) return;

    container.innerHTML = pendingReviews.map(review => `
                <div class="border dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <h4 class="font-medium text-lg">${review.title}</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Submitted by: ${review.submitter}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Date: ${review.submitted}</p>
                        </div>
                        <div class="flex space-x-2">
                            <button class="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                                <i class="fas fa-check mr-1"></i>Approve
                            </button>
                            <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">
                                <i class="fas fa-times mr-1"></i>Reject
                            </button>
                            <button class="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm">
                                <i class="fas fa-undo mr-1"></i>Return
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
}

function loadInbox() {
    const tasksContainer = document.getElementById('inboxTasks');
    if (tasksContainer) {
        tasksContainer.innerHTML = inboxTasks.map(task => {
            const priorityColors = {
                'High': 'text-red-600 dark:text-red-400',
                'Medium': 'text-yellow-600 dark:text-yellow-400',
                'Low': 'text-green-600 dark:text-green-400'
            };

            return `
                        <div class="border dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="flex items-center justify-between">
                                <div class="flex-1">
                                    <h4 class="font-medium">${task.title}</h4>
                                    <div class="flex items-center space-x-4 mt-2">
                                        <span class="text-sm text-gray-600 dark:text-gray-400">${task.type}</span>
                                        <span class="text-sm ${priorityColors[task.priority]}">${task.priority} Priority</span>
                                        <span class="text-sm text-gray-600 dark:text-gray-400">Due: ${task.due}</span>
                                    </div>
                                </div>
                                <button class="bg-primary hover:bg-primary-dark text-white px-3 py-1 rounded text-sm">
                                    View
                                </button>
                            </div>
                        </div>
                    `;
        }).join('');
    }

    const logContainer = document.getElementById('activityLog');
    if (logContainer) {
        logContainer.innerHTML = activityLog.map(log => `
                    <div class="border-l-2 border-primary pl-4">
                        <p class="text-sm font-medium">${log.action}</p>
                        <p class="text-xs text-gray-600 dark:text-gray-400">by ${log.user}</p>
                        <p class="text-xs text-gray-500 dark:text-gray-500">${log.timestamp}</p>
                    </div>
                `).join('');
    }
}

function loadOutgoingDocuments() {
    const tableBody = document.getElementById('documentsOutTable');
    if (!tableBody) return;

    tableBody.innerHTML = '';

    outgoingDocuments.forEach(doc => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${doc.id}</td>
                    <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${doc.title}</td>
                    <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${doc.recipient}</td>
                    <td class="px-6 py-4 text-sm">
                        <span class="px-2 inline-flex text-xs font-semibold rounded-full ${doc.status === 'Sent' ? 'bg-blue-100 text-blue-800' :
                doc.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
            }">${doc.status}</span>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">${doc.sentDate}</td>
                    <td class="px-6 py-4 text-sm">
                        <button onclick="viewDocument('${doc.id}')" class="text-blue-600 hover:underline mr-2">View</button>
                        <button onclick="downloadDocument('${doc.id}')" class="text-green-600 hover:underline mr-2">Download</button>
                        <button onclick="editDocument('${doc.id}')" class="text-yellow-600 hover:underline">Edit</button>
                    </td>
                `;
        tableBody.appendChild(row);
    });
}

// Modal functions
function showAddUserModal() {
    const modal = document.getElementById('addUserModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function hideAddUserModal() {
    const modal = document.getElementById('addUserModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function showCreateCaseModal() {
    const modal = document.getElementById('createCaseModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function hideCreateCaseModal() {
    const modal = document.getElementById('createCaseModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// Document in
const documentInForm = document.getElementById('documentInForm');
const documentInTable = document.getElementById('documentInTable');
const documentsIn = [];

documentInForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('docTitle').value.trim();
    const submittedBy = document.getElementById('submittedBy').value.trim();
    const fileInput = document.getElementById('docFile');
    const note = document.getElementById('docNote').value.trim();
    const file = fileInput.files[0];

    if (!title || !submittedBy || !file) {
        alert("សូមបំពេញទិន្នន័យទាំងអស់");
        return;
    }

    const now = new Date();
    const submittedDate = now.toLocaleString();

    const reader = new FileReader();
    reader.onload = function (event) {
        const fileURL = event.target.result;

        // Push to array
        documentsIn.push({ title, submittedBy, submittedDate, note, fileURL, fileName: file.name });

        // Refresh table
        renderDocumentInTable();
        documentInForm.reset();
    };

    reader.readAsDataURL(file);
});

function renderDocumentInTable() {
    documentInTable.innerHTML = '';

    documentsIn.forEach(doc => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-4 py-2 text-sm text-gray-900 dark:text-white">${doc.title}</td>
            <td class="px-4 py-2 text-sm text-gray-900 dark:text-white">${doc.submittedBy}</td>
            <td class="px-4 py-2 text-sm text-gray-900 dark:text-white">${doc.submittedDate}</td>
            <td class="px-4 py-2 text-sm text-gray-900 dark:text-white">${doc.note}</td>
            <td class="px-4 py-2 text-sm">
                <a href="${doc.fileURL}" download="${doc.fileName}" target="_blank" class="text-blue-600 hover:underline">ទាញយក</a>
            </td>
        `;
        documentInTable.appendChild(row);
    });
}

////////////////////////////////////////////////////////////////




// Meeting

let participants = [];
let pendingMeetings = [];
let approvedMeetings = [];

function addParticipant() {
    const email = document.getElementById('participant-email').value.trim();
    if (email && email.includes('@') && !participants.includes(email)) {
        participants.push(email);
        updateParticipantsList();
        document.getElementById('participant-email').value = '';
    } else if (!email.includes('@')) {
        showNotification('សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ', 'error');
    }
}

function removeParticipant(email) {
    participants = participants.filter(p => p !== email);
    updateParticipantsList();
}

function updateParticipantsList() {
    const listElement = document.getElementById('participants-list');
    const countElement = document.getElementById('participant-count');

    listElement.innerHTML = participants.map(email => `
                <div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <span class="text-sm">${email}</span>
                    <button onclick="removeParticipant('${email}')" class="text-red-500 hover:text-red-700">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            `).join('');

    countElement.textContent = `ចំនួនអ្នកចូលរួម: ${participants.length} នាក់`;
}

function resetForm() {
    document.getElementById('meeting-form').reset();
    participants = [];
    updateParticipantsList();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
    notification.innerHTML = `
                <div class="flex items-center justify-between">
                    <span>${message}</span>
                    <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

function updatePendingList() {
    const pendingElement = document.getElementById('pending-list');
    const pendingSection = document.getElementById('pending-approvals');

    if (pendingMeetings.length === 0) {
        pendingSection.classList.add('hidden');
        return;
    }

    pendingSection.classList.remove('hidden');
    pendingElement.innerHTML = pendingMeetings.map((meeting, index) => `
                <div class="border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-lg">${meeting.title}</h3>
                        <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">រងចាំ</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>បន្ទប់:</strong> ${meeting.room}</p>
                        <p><strong>ថ្ងៃ:</strong> ${meeting.date}</p>
                        <p><strong>ម៉ោង:</strong> ${meeting.startTime} - ${meeting.endTime}</p>
                        <p><strong>អ្នកដឹកនាំ:</strong> ${meeting.leader}</p>
                        <p><strong>អ្នកចូលរួម:</strong> ${meeting.participants.length} នាក់</p>
                    </div>
                    ${meeting.description ? `<p class="mt-2 text-sm text-gray-600 dark:text-gray-300"><strong>បរិយាយ:</strong> ${meeting.description}</p>` : ''}
                    <div class="mt-4 flex space-x-2">
                        <button onclick="approveMeeting(${index})" class="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-sm rounded">អនុម័ត</button>
                        <button onclick="rejectMeeting(${index})" class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded">បដិសេធ</button>
                    </div>
                </div>
            `).join('');
}

function updateApprovedList() {
    const approvedElement = document.getElementById('approved-list');
    const approvedSection = document.getElementById('approved-meetings');

    if (approvedMeetings.length === 0) {
        approvedSection.classList.add('hidden');
        return;
    }

    approvedSection.classList.remove('hidden');
    approvedElement.innerHTML = approvedMeetings.map(meeting => `
                <div class="border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-semibold text-lg">${meeting.title}</h3>
                        <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">បានអនុម័ត</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <p><strong>បន្ទប់:</strong> ${meeting.room}</p>
                        <p><strong>ថ្ងៃ:</strong> ${meeting.date}</p>
                        <p><strong>ម៉ោង:</strong> ${meeting.startTime} - ${meeting.endTime}</p>
                        <p><strong>អ្នកដឹកនាំ:</strong> ${meeting.leader}</p>
                        <p><strong>អ្នកចូលរួម:</strong> ${meeting.participants.length} នាក់</p>
                    </div>
                    ${meeting.description ? `<p class="mt-2 text-sm text-gray-600 dark:text-gray-300"><strong>បរិយាយ:</strong> ${meeting.description}</p>` : ''}
                    <div class="mt-3 text-xs text-gray-500">
                        អ្នកចូលរួម: ${meeting.participants.join(', ')}
                    </div>
                </div>
            `).join('');
}

function approveMeeting(index) {
    const meeting = pendingMeetings[index];
    approvedMeetings.push(meeting);
    pendingMeetings.splice(index, 1);

    updatePendingList();
    updateApprovedList();

    // Simulate notification to participants
    showNotification(`ការប្រជុំ "${meeting.title}" បានត្រូវអនុម័ត។ ការជូនដំណឹងបានផ្ញើទៅអ្នកចូលរួម ${meeting.participants.length} នាក់`, 'success');
}

function rejectMeeting(index) {
    const meeting = pendingMeetings[index];
    pendingMeetings.splice(index, 1);
    updatePendingList();
    showNotification(`ការប្រជុំ "${meeting.title}" បានត្រូវបដិសេធ`, 'error');
}

document.getElementById('meeting-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('meeting-title').value;
    const room = document.getElementById('meeting-room').value;
    const date = document.getElementById('meeting-date').value;
    const startTime = document.getElementById('meeting-start').value;
    const endTime = document.getElementById('meeting-end').value;
    const leader = document.getElementById('meeting-leader').value;
    const description = document.getElementById('meeting-description').value;

    if (!title || !room || !date || !startTime || !endTime || !leader) {
        showNotification('សូមបញ្ចូលព័ត៌មានឱ្យបានពេញលេញ', 'error');
        return;
    }

    if (participants.length === 0) {
        showNotification('សូមបន្ថែមអ្នកចូលរួមយ៉ាងហោចណាស់ម្នាក់', 'error');
        return;
    }

    if (startTime >= endTime) {
        showNotification('ម៉ោងចាប់ផ្តើមត្រូវតូចជាងម៉ោងបញ្ចប់', 'error');
        return;
    }

    const newMeeting = {
        title,
        room: document.getElementById('meeting-room').selectedOptions[0].text,
        date,
        startTime,
        endTime,
        leader,
        participants: [...participants],
        description,
        submittedAt: new Date().toISOString()
    };

    pendingMeetings.push(newMeeting);
    updatePendingList();

    showNotification('ការកក់ប្រជុំបានដាក់ស្នើដោយជោគជ័យ។ រងចាំការយល់ព្រម', 'success');
    resetForm();
});

// Add Enter key support for participant email
document.getElementById('participant-email').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addParticipant();
    }
});

// Set minimum date to today
document.getElementById('meeting-date').min = new Date().toISOString().split('T')[0];