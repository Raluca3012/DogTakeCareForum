package com.example.demo.dog;


import com.example.demo.comment.CommentModel;
import com.example.demo.comment.CommentRepo;
import com.example.demo.comment.CommentService;
import com.example.demo.user.UserModel;
import com.example.demo.user.UserRepository;
import com.example.demo.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DogService {

    private final DogRepository dogRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final CommentRepo commentRepo;
    private final CommentService commentService;


    public List<DogModel> findAll() {
        return dogRepository.findAll();
    }
    public CommentModel createComment(String dogId, String userName, CommentModel commentModel) {
        DogModel dogModel = dogRepository.findById(dogId).orElse(null);
        System.out.println(dogModel);
        UserModel userModel=userService.findByUserName(userName);
        System.out.println(userModel);

        if (dogModel != null&&userModel!=null) {
            commentModel.setDogId(dogId);
            commentModel.setUserName(userName);
            //userModel.setUserName(userName);
            dogModel.getComments().add(commentModel);
            userModel.getComments().add(commentModel);
            userRepository.save(userModel);
            dogRepository.save(dogModel);
            commentService.saveOrUpdateComment(commentModel);
            return commentModel;
        }
        return null;
    }
    public DogModel saveOrUpdateDog(DogModel dog) {
        return dogRepository.save(dog);
    }
    public void deleteDogById(String id) {
        dogRepository.deleteById(id);
    }
    public DogModel findByBreed(String breed) {
        return dogRepository.findByBreed(breed);
    }
    public List<CommentModel> getCommentsByDogId(String dogId) {
        return dogRepository.findByCommentsDogId(dogId);
    }
}
