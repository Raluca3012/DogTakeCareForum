package com.example.demo.user;

import com.example.demo.dog.DogModel;
import com.example.demo.dog.DogRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

import static java.util.Objects.nonNull;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;



    public UserModel findOrCreateUser(UserModel userModel) {
        UserModel userModel2 = userRepository.findByEmail(userModel.getEmail());

        if (nonNull(userModel2)) {
            return userModel2;
        }
        userModel2 = new UserModel();
        userModel2.setUserName(userModel.getUserName());
        userModel2.setEmail(userModel.getEmail());
        userModel2.setPassword(passwordEncoder.encode(userModel.getPassword()));
        userModel2.setType(userModel.getType());

         userRepository.save(userModel2);
         return userModel2;
    }



    public UserModel findByEmailFunction(String email) {
        return userRepository.findByEmail(email);
    }
    public UserModel findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
    public List<UserModel> getAllUsers(){
        return userRepository.findAll();
    }
    public UserModel findByEmailAndPassword(String email, String password) {
        UserModel userModel = findByEmailFunction(email);
        if (userModel != null) {
            if (passwordEncoder.matches(password, userModel.getPassword())) {
                return userModel;
            }
        }
        return null;
    }
}
