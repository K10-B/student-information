let students = [
    { name: 'Angel Anne', age: 25, grade: 'A' },
    { name: 'Rachelle Julie', age: 23, grade: 'B' },
];

function displayStudents() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';

    for (const student of students) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = student.age;
        row.appendChild(ageCell);

        const gradeCell = document.createElement('td');
        gradeCell.textContent = student.grade;
        row.appendChild(gradeCell);

        const actionsCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(student);
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(student);
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        tbody.appendChild(row);
    }
}

function addStudent() {
    const name = prompt('Enter student name:');
    const age = prompt('Enter student age:');
    const grade = prompt('Enter student grade:');

    students.push({ name, age, grade });
    displayStudents();
}

function editStudent(student) {
    const newName = prompt('Enter new student name:', student.name);
    const newAge = prompt('Enter new student age:', student.age);
    const newGrade = prompt('Enter new student grade:', student.grade);

    student.name = newName;
    student.age = newAge;
    student.grade = newGrade;

    displayStudents();
}

function deleteStudent(student) {
    const index = students.indexOf(student);

    if (index!== -1) {
        students.splice(index, 1);
        displayStudents();
    }
}

displayStudents();