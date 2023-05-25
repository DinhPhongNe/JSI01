

// Định nghĩa class Employee
class Employee {
    constructor(name, id, position) {
      this.name = name;
      this.id = id;
      this.position = position;
    }
  
    getInfo() {
      return `Tên: ${this.name}, ID: ${this.id}, Chức vụ: ${this.position}`;
    }
  }
  
  // Định nghĩa class Giám đốc, kế thừa từ class Employee
  class Director extends Employee {
    constructor(name, id) {
      super(name, id, "Giám đốc");
    }
  
    manage() {
      console.log("Quản lý công ty");
    }
  }
  
  // Định nghĩa class Kế toán, kế thừa từ class Employee
  class Accountant extends Employee {
    constructor(name, id) {
      super(name, id, "Kế toán");
    }
  
    calculate() {
      console.log("Tính toán tài chính");
    }
  }
  
  // Định nghĩa class Lập trình viên, kế thừa từ class Employee
  class Programmer extends Employee {
    constructor(name, id) {
      super(name, id, "Lập trình viên");
    }
  
    code() {
      console.log("Viết mã nguồn");
    }
  }
  
  // Sử dụng prompt để yêu cầu người dùng nhập thông tin nhân viên
  const name = prompt("Nhập tên nhân viên:");
  const id = prompt("Nhập ID nhân viên:");
  const position = prompt("Nhập chức vụ nhân viên (Giám đốc / Kế toán / Lập trình viên):");
  
  // Tạo đối tượng nhân viên dựa trên chức vụ được nhập vào
  let employee;
  switch (position) {
    case "Giám đốc":
      employee = new Director(name, id);
      break;
    case "Kế toán":
      employee = new Accountant(name, id);
      break;
    case "Lập trình viên":
      employee = new Programmer(name, id);
      break;
    default:
      console.log("Chức vụ không hợp lệ");
      break;
  }
  
  // Hiển thị thông tin nhân viên và gọi phương thức tương ứng
  if (employee) {
   console.log(employee.getInfo());
    if (employee instanceof Director) {
      employee.manage();
    } else if (employee instanceof Accountant) {
      employee.calculate();
    } else if (employee instanceof Programmer) {
      employee.code();
    }
  }