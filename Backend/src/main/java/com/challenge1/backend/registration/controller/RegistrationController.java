package com.challenge1.backend.registration.controller;

import com.challenge1.backend.registration.model.UserModel;
import com.challenge1.backend.registration.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
// @RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/hello-reg")
    public String helloRegister() {

        System.out.println("Testing Registration Controller...");
        return "Hello Registration Controller!";

    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody final UserModel signupUser) {

        String message;

        System.out.println("Testing Signup API...");

        try {

            String tempEmail = signupUser.getEmail();

            UserModel tempUser = userRepo.findByEmail(tempEmail);

            if (tempUser != null) {

                message = "Signup with " + tempEmail + " : FAILURE [ REASON : User with " + tempEmail + " already exists! ]";
                System.out.println(message);

                return new ResponseEntity<>(message, HttpStatus.UNAUTHORIZED);
            }

            tempUser = userRepo.save(signupUser);

            message = "Signup with " + tempEmail + " : SUCCESS";
            System.out.println(message);

            return new ResponseEntity<>(message, HttpStatus.CREATED);

        } catch (Exception exc) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody final UserModel loginUser) {

        String message;

        System.out.println("Testing Login API...");

        try {

            String tempEmail = loginUser.getEmail();
            String tempPass = loginUser.getPassword();

            UserModel tempUser = userRepo.findByEmail(tempEmail);

            if (tempUser == null) {

                message = "Login with " + tempEmail + " : FAILURE [ REASON : User with " + tempEmail + " does not exist! ]";
                System.out.println(message);

                return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);

            }

            if (!tempUser.getPassword().equals(tempPass)) {

                message = "Login with " + tempEmail + " : FAILURE [ REASON : Wrong password entered! ]";
                System.out.println(message);

                return new ResponseEntity<>(message, HttpStatus.UNAUTHORIZED);

            }

            message = "Login with " + tempEmail + " : SUCCESS";
            System.out.println(message);

            return new ResponseEntity<>(message, HttpStatus.OK);

        } catch (Exception exc) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

}
