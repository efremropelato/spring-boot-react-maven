package com.example.app.resources;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloResource {

  @GetMapping("/hello")
  public ResponseEntity<Map<String, String>> hello() {
    Map<String, String> map = new HashMap<>();
        map.put("hello", "Hello Filippetti!!");
      return new ResponseEntity<>(map, HttpStatus.OK);
  }

}
