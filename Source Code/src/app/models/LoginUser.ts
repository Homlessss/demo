export interface LoginUser {
  usernameOrEmail: string;
  password: string;
  unitId: number | string;
  departmentId: number | string;
  unit: string;
  department: string;
  type?: string;
}
