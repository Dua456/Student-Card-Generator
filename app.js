const cardContainer = document.getElementById("cardContainer");

// Array of student objects
const students = [
    {
        name: "Nida Naz",
        age: 17,
        course: "Mobile & Web Development",
        email: "nidanaz222@gmail.com",
        image: "https://www.shutterstock.com/image-photo/serious-busy-hardworking-student-girl-260nw-2111421656.jpg"
    },
    {
        name: "Erum Saba",
        age: 20,
        course: "Backend Developer",
        email: "erumsaba62@gmail.com",
        image: "https://thumbs.dreamstime.com/b/cheerful-happy-asian-chinese-businesswoman-lawyer-office-worker-korean-japanese-entrepreneur-business-woman-female-working-394074399.jpg"
    },
    {
        name: "Fiza",
        age: 19,
        course: "Graphic Designer",
        email: "fiza2235@gmail.com",
        image: "https://www.shutterstock.com/image-photo/realistic-photo-4k-resolution-young-260nw-2648174007.jpg"
    },
    {
        name: "Ayesha",
        age: 24,
        course: "Mobile & Web Development",
        email: "ayeshanaz782@gmail.com",
        image: "https://thumbs.dreamstime.com/b/student-girl-education-concept-school-schoolgirl-high-college-learning-lesson-homework-372449673.jpg"
    },
];

// Function to display students in cards
function displayStudents() {
    cardContainer.innerHTML = ""; // Clear previous cards

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${student.image}" alt="${student.name}" />
        <h3>${student.name}</h3>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Email:</strong> ${student.email}</p>`;

        cardContainer.appendChild(card); // Add card to container
    });
}

// Function to add new student
function addStudent() {
    // Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;
    const image = document.getElementById("image").value;

    // Check if all fields are filled
    if (!name || !age || !course || !email) {
        alert("Please fill all required fields!");
        return;
    }

    // Create new student object
    const newStudent = { name, age, course, email, image };
    students.push(newStudent);       
    displayStudents();              

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
    document.getElementById("image").value = "";
}

displayStudents(); // Show initial student cards
