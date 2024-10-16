const students = [
    { id: 116257, name: "Anna Smith", program: "MBA" },
    { id: 615789, name: "John Doe", program: "Compro" },
    { id: 116868, name: "Tom Jerryh", program: "MBA" },];


export default class Student {
    constructor(id, name, program) {
        this.id = id;
        this.name = name;
        this.program = program;
    }

    static getAll() {
        return structuredClone(students);
    }
   
    static getStudentByID(studentID) {

        return students.find(x => x.id === studentID);
    }
    static getStudentByID2(studentID) {

        return students.find(x => x.id === studentID);
    }
    static create() {
        var studentExist = students.find(x => x.id === this.id);
        if (!studentExist) {
            students.push(this);
            return this;
        }
    }
    static update(id,updatedStudent) {
        const studentExist = students.find(x => x.id === id);

        if (studentExist) {
            studentExist.name = updatedStudent.name;
            studentExist.program = updatedStudent.program;
            return studentExist;

        }

        return null;
    }
    static deleteById(id) {
        const index = students.findIndex(e => e.id == id)
        if (index !== -1) {
            return students.splice(index, 1)[0];
        }
    }

    static sortBy(field, order) {
        return Student.getAll().sort((e1, e2) =>
            (typeof e1[field] === 'number') ?
                order * (e1[field] - e2[field]) : order * e1[field].localeCompare(e2[field]))
    }

    static filterByProgram(program) {
        return students.filter(student => student.program === program);
    }

}


