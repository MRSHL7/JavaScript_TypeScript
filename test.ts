// Q2) Define a class named Student with the following attributes:
//      a. name, studentId, grade, address.
//      b. Include a method displayInfo() that prints all the student’s details.

// class Student{
//     name : String = "Sahil"
//     studentId : Number = 7
//     grade  : String = "A+"
//     address : String = "Bhayandar"
//     displayInfo() :void{
//         console.log(this.name);
//         console.log(this.studentId);
//         console.log(this.grade);
//         console.log(this.address);
//     }
// }
// const stu = new Student();
// stu.displayInfo();

// Q3)Create a class School that contains:
    // a. Static member: totalStudents to track the total number of students.
    // b. Non-static member: studentList to store individual student details.
    // c. Methods to increment the static member and add student details to the non static list.

// class School {
//     static totalStudents : number = 100
//     studentList : string = "Sahil"
//     static increment(){
//         this.totalStudents++;
//     }
//     studentDetails(){
//         console.log(this.studentList);
//     }
// }
// const school = new School();
// school.studentDetails();
// School.increment();

// Q4) Define an abstract class Person with abstract methods getDetails() and getRole(). Create two
// derived classes Student and Teacher that implement these methods to return their
// respective details and roles.

// abstract class Person {
//     name : string 
//     id : number
//     role : string 
    
//     constructor(name:string,id:number,role:string){
//         this.name = name
//         this.id = id
//         this.role = role
//     }

//     abstract getDetails():void
//     abstract getRole():void
// }
// class Student extends Person{
//     getDetails(): void {
//         console.log("Student Name : "+this.name);
//         console.log("Student ID : "+this.id);
//     }
//     getRole(): void {
//         console.log("Student Role : "+this.role);
//     }
// }
// class Teacher extends Person{
//     getDetails(): void {
//         console.log("Teacher Name : "+this.name);
//         console.log("Teacher ID : "+this.id);
//     }
//     getRole(): void {
//         console.log("Teacher Role : "+this.role);
//     }
// }

// const stu = new Student("Sahil",7,"CR");
// stu.getDetails();
// stu.getRole();
// const tea = new Teacher("Disha",10,"Teacher");
// tea.getDetails();
// tea.getRole();

// Q5) Create a generic function getStudentInfo(info: T): T that returns any type of student
// information, such as name, ID, or grade.

// function getStudentInfo <T> (info :T):T{
//     return info;
// }
// const studentInfo = {
//     "name" : "Sahil",
//     "id" : 7,
//     "grade" : "A+"
// }





