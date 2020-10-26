package com.challenge1.backend.registration.repository;

import com.challenge1.backend.registration.model.UserModel;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserModel, Long>{

    public UserModel findByEmail(String email);
    // public UserModel findByEmailAndPassword(String email, String password);

}
