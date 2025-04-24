package com.example.demo.comment;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface CommentRepo extends MongoRepository<CommentModel, String> {
//    CommentModel findByBreed(String breed);
    Optional<CommentModel> findById(String id);
}