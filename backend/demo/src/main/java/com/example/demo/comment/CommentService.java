package com.example.demo.comment;

import com.example.demo.dog.DogModel;
import com.example.demo.dog.DogRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CommentService {
    private final CommentRepo commentRepo;
    private final DogRepository dogRepository;
    public CommentModel saveOrUpdateComment(CommentModel commentModel) {
        return commentRepo.save(commentModel);
    }

    public List<CommentModel> getAllComments() {
        return commentRepo.findAll();
    }
    public Optional<CommentModel> getCommentById(String id) {
        return commentRepo.findById(id);
    }
}
