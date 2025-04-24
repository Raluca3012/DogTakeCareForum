package com.example.demo.user;

import com.example.demo.dog.DogRepository;
import com.example.demo.dog.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public UserModel register(@RequestBody UserModel userModel)  {

        System.out.println("You are logged in");
        return userService.findOrCreateUser(userModel);

    }
    @GetMapping("/getAllUsers")
    public List<UserModel> getAllUsers()  {

        return userService.getAllUsers();

    }


    @CrossOrigin
    @PostMapping("/auth")
    public AuthResponse auth(@RequestBody UserRequest userRequest) {
        UserModel userModel = userService.findByEmailAndPassword(userRequest.getEmail(), userRequest.getPassword());
        return new AuthResponse(userModel.getId(),userModel.getUserName(),userModel.getEmail(),userModel.getType());
    }
}
