type password = string | number;
type id = string | number;

enum USERTYPE {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export interface User {
  userId: id;
  name: string;
  correo: string;
  password: password;
  userType: USERTYPE;
}
