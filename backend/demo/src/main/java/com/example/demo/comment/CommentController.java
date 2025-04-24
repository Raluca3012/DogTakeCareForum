package com.example.demo.comment;

import com.example.demo.dog.DogService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
@CrossOrigin(origins = "http://localhost:3000")
@AllArgsConstructor
public class CommentController {
    private final CommentService commentService;
    private final DogService dogService;
    private final CommentRepo commentRepo;

@PostMapping("/saveComment/{dogId}/{userName}")
public ResponseEntity<CommentModel> createComment(@PathVariable String dogId,@PathVariable String userName, @RequestBody CommentModel commentModel) {


    CommentModel comment = dogService.createComment(dogId,userName, commentModel);

    if (comment != null) {
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}



    @GetMapping(value = "/getComments")
    public List<CommentModel> getAllComments() {
        return commentService.getAllComments();
    }


    @GetMapping("/{id}")
    public Optional<CommentModel> getCommentById(@PathVariable String id) {
        return commentService.getCommentById(id);
    }




}
