document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const regno = document.getElementById("regno").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const points = document.getElementById("points").value;
    const academic = document.getElementById("academic").value;
    const website = document.getElementById("website").value;

    // Collect multiple skills
    let skills = [];
    document.querySelectorAll('input[name="skills"]:checked').forEach(skill => {
      skills.push(skill.value);
    });

    // Validate phone
    if (phone.length !== 10) {
      alert("Phone number must be 10 digits!");
      return;
    }

    // Display output
    const details = `
    Name: ${firstname} ${lastname}
    Registration No: ${regno}
    Email: ${email}
    Password: ${password}
    Gender: ${gender}
    Phone: ${phone}
    DOB: ${dob}
    Course: ${course}
    Address: ${address}
    Points: ${points}
    Skills: ${skills.join(", ")}
    Academic Year: ${academic}
    Website: ${website}
    `;

    output.textContent = details;
    alert("Form submitted successfully!");
  });
});
