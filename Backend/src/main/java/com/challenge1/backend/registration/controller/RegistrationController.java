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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/register")
public class RegistrationController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/hello")
    public String hello() {

        System.out.println("Testing API...");
        return "Hello!";

    }

    @PostMapping("/signup")
    public ResponseEntity<UserModel> signup(@RequestBody final UserModel signupUser) {

        try {

            String tempEmail = signupUser.getEmail();

            UserModel tempUser = userRepo.findByEmail(tempEmail);

            if (tempUser != null) {

                System.out.println("Signup with " + tempEmail + " : FAILURE");
                System.out.println("[ REASON : User with " + tempEmail + " already exists! ]");

                return new ResponseEntity<>(tempUser, HttpStatus.UNAUTHORIZED);
            }

            tempUser = userRepo.save(signupUser);

            System.out.println("Signup with " + tempEmail + " : SUCCESS");

            return new ResponseEntity<>(tempUser, HttpStatus.CREATED);

        } catch (Exception exc) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

    @PostMapping("/login")
    public ResponseEntity<UserModel> login(@RequestBody final UserModel loginUser) {

        try {

            String tempEmail = loginUser.getEmail();
            String tempPass = loginUser.getPassword();

            UserModel tempUser = userRepo.findByEmail(tempEmail);

            if (tempUser == null) {

                System.out.println("Login with " + tempEmail + " : FAILURE");
                System.out.println("[ REASON : User with " + tempEmail + " does not exist! ]");

                return new ResponseEntity<>(tempUser, HttpStatus.NOT_FOUND);

            }

            if (!tempUser.getPassword().equals(tempPass)) {

                System.out.println("Login with " + tempEmail + " : FAILURE");
                System.out.println("[ REASON : Wrong password entered! ]");

                return new ResponseEntity<>(tempUser, HttpStatus.UNAUTHORIZED);

            }

            System.out.println("Login with " + tempEmail + " : SUCCESS");

            return new ResponseEntity<>(tempUser, HttpStatus.OK);

        } catch (Exception exc) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }

    }

}
