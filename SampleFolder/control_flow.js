let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let isAuthenticated = true;

let userType = "subscriber";
let userCategory;

if(userRole === 'admin') {
    accessLevel = 'Full Access Granted'
} else if (userRole === 'manager') {
    accessLevel = 'Limited access granted'
} else {
    accessLevel = 'no access level'
}

console.log("Access Level:", accessLevel);

if(isLoggedIn) {
    if(userRole === 'admin') {
        userMessage = 'Welcome, Admin!'
    } else {
        userMessage = 'We;Welcome, User!'
    }
} else {
    userMessage = 'Please log in to access the sytem'
}

console.log("User Message:", userMessage);

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log("User Category:", userCategory);

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);