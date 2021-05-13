class EmployeePayrollData {
  //properties
  id;
  name;
  salary;
  gender;
  startDate;

  //constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  /**
   * getters and setters:
   * while using setters and getters, we need to use '_' before every variable
   */

  //getters
  get id() {
    return this._id;
  }

  get name() {
    return this._name; //'-' used before variable 'name': must syntax
  }

  get salary() {
    return this._salary;
  }

  get gender() {
    return this._gender;
  }

  //setters
  set id(id) {
    this._id = id;
  }

  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");//not working
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Incorrect name";
    }
  }

  set salary(salary) {
    this._salary = salary;
  }

  set gender(gender) {
    this._gender = gender;
  }

  //toString
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options); //see toLocaleDateString
    return (
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", gender = " +
      this.gender +
      ", salary = " +
      this.salary +
      ", Date started = " +
      empDate
    );
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Me", 5000000); //inserting data
console.log(employeePayrollData);
employeePayrollData.name = "mememe"; //modifying name
console.log(employeePayrollData);

//new employee
let employeePayrollData1 = new EmployeePayrollData(2, "Terisa", 3000000, "F", new Date());
console.log(employeePayrollData1);
