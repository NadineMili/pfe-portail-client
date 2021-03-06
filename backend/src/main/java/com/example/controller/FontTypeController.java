package com.example.controller;

import com.example.model.Font_type;
import com.example.service.FontTypeService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("api/font_type")
@Api(value = "Rest Controller: Font_type")
public class FontTypeController {

    @Autowired
    public FontTypeService fontTypeService;

    @GetMapping
    public List<Font_type> getAllTypeFont() {
        return fontTypeService.getAllTypeFont();
    }
}
