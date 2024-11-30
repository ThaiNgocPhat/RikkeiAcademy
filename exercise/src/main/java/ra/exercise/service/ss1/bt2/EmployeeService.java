package ra.exercise.service.ss1.bt2.impl;

import ra.exercise.entity.ss1.bt2.Employee;
import ra.exercise.service.IGeneric;

public interface EmployeeService extends IGeneric<Employee, Integer> {
    //tìm kiếm theo tên hoặc phòng ban
    Employee findByFirstNameOrDepartment(String firstName, String department);
}
