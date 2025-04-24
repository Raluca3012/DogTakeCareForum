package com.example.demo.dog;

import com.example.demo.comment.CommentModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DogRepository extends MongoRepository<DogModel, String> {
    DogModel findByBreed(String breed);
    Optional<DogModel> findById(String id);
    List<CommentModel> findByCommentsDogId(String orderId);
}