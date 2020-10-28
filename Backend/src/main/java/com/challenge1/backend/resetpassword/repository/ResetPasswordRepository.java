
package com.challenge1.backend.resetpassword.repository;

import com.challenge1.backend.resetpassword.model.ResetPasswordModel;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResetPasswordRepository extends MongoRepository<ResetPasswordModel, Long> {

    public ResetPasswordModel findByEmail(String email);
    public ResetPasswordModel findByEmailAndToken(String email, String token);

}
