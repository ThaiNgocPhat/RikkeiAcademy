package org.example.baitap1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CalculatorController {
    @RequestMapping("/list1")
    public String showForm() {
        return "calculator";
    }
}
