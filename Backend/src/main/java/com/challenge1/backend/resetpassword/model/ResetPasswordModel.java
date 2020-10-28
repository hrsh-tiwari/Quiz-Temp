
package com.challenge1.backend.resetpassword.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reset-password")
public class ResetPasswordModel {

    @Id
    private ObjectId id;
    private String email;
    private String token;

    public ResetPasswordModel() {
    }

    public ResetPasswordModel(ObjectId id, String email, String token) {
        this.id = id;
        this.email = email;
        this.token = token;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "ResetPasswordModel [email=" + email + ", id=" + id + ", token=" + token + "]";
    }

}
