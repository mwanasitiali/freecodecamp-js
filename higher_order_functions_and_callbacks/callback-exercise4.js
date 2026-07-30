// Given the array of student objects below, use .filter() to return only the students who passed (score of 50 or above) and are in Form 3.

const students = [
  { name: 'Amina', score: 78, form: 3 },
  { name: 'Kofi', score: 45, form: 3 },
  { name: 'Zola', score: 88, form: 2 },
  { name: 'Ravi', score: 60, form: 3 }
];

const studentz = students.filter(students => students.score > 50 && students.form === 3);
console.log(studentz);

