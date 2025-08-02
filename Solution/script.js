/*1. Parse JSON String into Object
• Write a JavaScript code that uses JSON.parse() to convert a JSON
string into a JavaScript object.*/
 
const jsonString = '{"name": "Mais Sarhan", "age": 21, "email": "maisserhan09@gmail.com"}';

const user = JSON.parse(jsonString);

console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Email:", user.email);


//---------------------------------------------------------------------------------------------------------

/*2. Stringify JavaScript Object into JSON
• Write a function that takes a JavaScript object and converts it into
a JSON string using JSON.stringify().*/

function convertObjectToJSON(obj) {
    const jsonString = JSON.stringify(obj);
    return jsonString;
}

const result = convertObjectToJSON(user);


//---------------------------------------------------------------------------------------------------------


/*3. Display User Data Using JSON
• Create a JSON string representing a user with properties like name,
age, and email. Parse the JSON string and display the user's
information in the console.*/

const user1 = JSON.parse(jsonString);

console.log("Name:", user1.name);
console.log("Age:", user1.age);
console.log("Email:", user1.email);


//-----------------------------------------------------------------------------------------------------------

/*4. Parse JSON and Modify Data
• Parse a JSON string of a product, update its price, and then display
the updated product information.*/

let productJSON = '{"name":"Laptop","price":1000}';
let productObj = JSON.parse(productJSON);
productObj.price = 900;
console.log("4. Updated Product:", productObj);


//-----------------------------------------------------------------------------------------------------------

/*5. Convert JavaScript Array to JSON
• Write a function that takes an array of objects and converts it into a
JSON string using JSON.stringify().*/

function arrayToJSON(arr) {
    return JSON.stringify(arr);
}
console.log("5. Array to JSON:", arrayToJSON([{ id: 1 , name: "Mais"}, { id: 2 , name: "Sarhan"}]));


//-----------------------------------------------------------------------------------------------------------

/*6. JSON Validation
• Write a function that checks if a string is valid JSON before
attempting to parse it. Use a try...catch block.*/

function isValidJSON(str) {
    try {
    JSON.parse(str);
    return true;
    } catch (error) {
    return false;
    }
}
console.log("6. Validate JSON:", isValidJSON('{"valid":true}'));


//-----------------------------------------------------------------------------------------------------------


/*7. Handle API Response with JSON
• Fetch data from a JSON placeholder API
(https://jsonplaceholder.typicode.com/users), parse the JSON
response, and log the first user's name.*/

fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log("7. First User Name:", data[0].name));


//-----------------------------------------------------------------------------------------------------------

/*8. Using XMLHttpRequest for JSON API
• Write a function that uses XMLHttpRequest to fetch data from a
public API that returns a JSON response. Parse and log the result.*/

function getWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log("8. XHR User:", data[0]);
    }
    };
    xhr.send();
}
getWithXHR();


//-----------------------------------------------------------------------------------------------------------

/*9. Create JSON Object from Form Data
• Create a JSON object from the values in an HTML form (e.g.,
name, email, and message fields) and log the JSON string.*/

const formData = {
    name: "Mais Sarhan",
    email: "maisserhan09@gmail.com",
    message: "Hello!"
};
const jsonFormData = JSON.stringify(formData);
console.log("9. Form Data JSON:", jsonFormData);


//-----------------------------------------------------------------------------------------------------------

/*10. Fetch JSON Data and Display in HTML
• Use the fetch() API to retrieve JSON data from a remote server
and display the fetched information in an HTML list.*/

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then(res => res.json())
.then(data => {
const list = document.createElement('ul');
data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    list.appendChild(li);
});
document.body.appendChild(list);
});


//-----------------------------------------------------------------------------------------------------------

/*11. Display Multiple User Data from API
• Use fetch() to get an array of users from an API and display their
names and emails in an HTML table.*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => {
const table = document.createElement('table');
users.forEach(user => {
    const row = table.insertRow();
    row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
});
document.body.appendChild(table);
});


//-----------------------------------------------------------------------------------------------------------

/*12. AJAX Request to Send JSON Data
• Create an AJAX request using XMLHttpRequest that sends a POST
request with JSON data (such as a new user's information) to a
server.*/

function sendUserData() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = () => console.log("12. Sent:", xhr.responseText);
    xhr.send(JSON.stringify({ title: "Hello", body: "Test", userId: 1 }));
}
sendUserData();


//-----------------------------------------------------------------------------------------------------------

/*13. Handling Asynchronous Data with Promises
• Write a function that uses a Promise to simulate an asynchronous
operation that fetches JSON data, and then resolve it by logging
the data to the console.*/

function fakeFetchJSON() {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({ message: "Fetched JSON" });
    }, 1000);
    });
}
fakeFetchJSON().then(data => console.log("13. Promise:", data));


//-----------------------------------------------------------------------------------------------------------

/*14. Async-Await with Fetch API
• Use the fetch() API with async/await to retrieve data from a public
API (like JSONPlaceholder) and log the response.*/

async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log("14. Async/Await:", data);
}
fetchData();


//-----------------------------------------------------------------------------------------------------------

/*15. Convert Nested Object to JSON
• Write a function that converts a nested JavaScript object (such as a
user with address and contact details) into a JSON string using
JSON.stringify().*/

const nestedObj = {
    name: "Mais",
    address: {
    city: "Tubas"
    },
    contact: {
    wibsite: "https://mais-sarhan.vercel.app/"
    }
};
console.log("15. Nested to JSON:", JSON.stringify(nestedObj));




//-----------------------------------------------------------------------------------------------------------

/*16. Send JSON Data via Fetch POST Request
• Use the fetch() API to send a POST request with JSON data to an
API endpoint. Log the response or success message.*/

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "Post", body: "Body", userId: 2 })
})
.then(res => res.json())
.then(data => console.log("16. POST JSON:", data));




//-----------------------------------------------------------------------------------------------------------

/*17. Use Fetch API with Query Parameters
• Use fetch() to retrieve data from an API with query parameters
(e.g., ?id=123). Log the returned JSON response.*/

fetch('https://jsonplaceholder.typicode.com/comments?id=1')
.then(res => res.json())
.then(data => console.log("17. Query Param:", data));


//-----------------------------------------------------------------------------------------------------------

/*18. Use XMLHttpRequest to Get JSON Data
• Write a function using XMLHttpRequest to fetch JSON data from an
API and log the data to the console.*/

function getDataXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhr.onload = () => console.log("18. XHR Get:", JSON.parse(xhr.responseText));
    xhr.send();
}
getDataXHR();


//-----------------------------------------------------------------------------------------------------------

/*19. Asynchronous Data Fetching with Callback
• Write a function that fetches data asynchronously using
XMLHttpRequest with a callback function to handle the response and
display the data.*/

function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
    xhr.onload = () => callback(JSON.parse(xhr.responseText));
    xhr.send();
}
fetchDataWithCallback(data => console.log("19. Callback:", data));


//-----------------------------------------------------------------------------------------------------------

/*20. Error Handling with Fetch and JSON
• Use the fetch() API to retrieve JSON data. If the response is not
successful (e.g., 404), handle the error by displaying an error
message.*/

fetch('https://jsonplaceholder.typicode.com/invalid-url')
.then(res => {
if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
return res.json();
})
.then(data => console.log("20. Safe Fetch:", data))
.catch(err => console.error("20. Error:", err.message));