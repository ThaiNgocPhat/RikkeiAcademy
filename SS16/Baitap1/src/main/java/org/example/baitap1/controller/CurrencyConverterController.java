package org.example.baitap1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CurrencyConverterController {

    // Trang chủ hiển thị form
    @RequestMapping("/")
    public String showForm() {
        return "currency";  // Trang currency.jsp chứa form nhập
    }

    // Xử lý chuyển đổi khi form được submit
    @RequestMapping("/convert")
    public String convertCurrency(
            @RequestParam("rate") double rate,
            @RequestParam("usd") double usd,
            Model model) {

        double result = rate * usd;
        model.addAttribute("result", result);  // Thêm kết quả vào model
        model.addAttribute("usd", usd);        // Thêm giá trị USD vào model
        model.addAttribute("rate", rate);      // Thêm tỉ giá vào model

        return "result";  // Trả về trang result.jsp để hiển thị kết quả
    }
}
