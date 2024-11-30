package ra.exercise.controller.ss1.bt2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ra.exercise.entity.ss1.bt2.Employee;
import ra.exercise.service.ss1.bt2.EmployeeService;

import java.util.List;

@Controller
@RequestMapping("/buoi2")
public class AbcController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public String listEmployees(Model model) {
        List<Employee> employees = employeeService.findAll();
        model.addAttribute("employees", employees);
        return "ss1/bt2/list";
    }

    @GetMapping("/add")
    public String formAdd(Model model){
        List<Employee> employees = employeeService.findAll();
        model.addAttribute("employees", employees);
        return "ss1/bt2/add";
    }
}
