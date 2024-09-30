function generatemarksheet() {
    // Get input values
    const englishMarks = parseInt(document.getElementById('EnglishMarks').value);
    const biologyMarks = parseInt(document.getElementById('BiologyMarks').value);
    const chemistryMarks = parseInt(document.getElementById('ChemistryMarks').value);
    const physicsMarks = parseInt(document.getElementById('PhysicsMarks').value);
    const mathematicsMarks = parseInt(document.getElementById('MathematicsMarks').value);

    // Calculate total and percentage
    const totalMarks = englishMarks + biologyMarks + chemistryMarks + physicsMarks + mathematicsMarks;
    const percentage = (totalMarks / 500) * 100;

    // Determine grade
    let grade;
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    } else {
        grade = 'F';
    }

    // Display result in the table
    document.getElementById('EnglishResult').textContent = englishMarks;
    document.getElementById('BiologyResult').textContent = biologyMarks;
    document.getElementById('ChemistryResult').textContent = chemistryMarks;
    document.getElementById('PhysicsResult').textContent = physicsMarks;
    document.getElementById('MathematicsResult').textContent = mathematicsMarks;

    // Display total, percentage, and grade
    document.getElementById('totalMarks').textContent = totalMarks;
    document.getElementById('Percentage').textContent = percentage.toFixed(2);
    document.getElementById('Grade').textContent = grade;

    // Show the marksheet section
    document.getElementById('markSheet').style.display = "block";
}
