package com.example.demo.user;

import com.example.demo.comment.CommentModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Document(collection = "users")
@AllArgsConstructor
@Getter
@Setter
public class UserModel {
    @Id
    private String id;
    private String userName;
    private String email;
    private String password;
    private String type;


    private List<CommentModel> comments;
    public List<CommentModel> getComments() {
        return comments;
    }
    public void addComment(CommentModel commentModel) {
        this.comments.add(commentModel);
    }

    public UserModel() {
        this.comments=new ArrayList<>();
        this.id = UUID.randomUUID().toString();
    }
}
