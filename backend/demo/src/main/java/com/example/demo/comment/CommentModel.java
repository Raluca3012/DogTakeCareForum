package com.example.demo.comment;

import com.example.demo.dog.DogModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "comments")
@AllArgsConstructor
@Getter
@Setter
public class CommentModel {
    @Id
    private String id;

    private String commentDescription;


    private String userName;

    private String dogId;


    public CommentModel() {
        this.id = UUID.randomUUID().toString();
    }
}
