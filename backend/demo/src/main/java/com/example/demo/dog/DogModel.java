package com.example.demo.dog;

import com.example.demo.comment.CommentModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Document(collection = "dogs")
@AllArgsConstructor
@Getter
@Setter
public class DogModel {
    @Id
    private String id;
    private String breed;
    private String description;


    private List<CommentModel> comments;

    public List<CommentModel> getComments() {
        return comments;
    }
    public void addComment(CommentModel commentModel) {
        this.comments.add(commentModel);
    }
    public DogModel() {
        this.comments=new ArrayList<>();
        this.id = UUID.randomUUID().toString();
    }
}
