
package com.challenge1.backend.resetpassword.controller;

import java.util.Random;

import com.challenge1.backend.registration.model.UserModel;
import com.challenge1.backend.registration.repository.UserRepository;
import com.challenge1.backend.resetpassword.EmailSender;
import com.challenge1.backend.resetpassword.model.ResetPasswordModel;
import com.challenge1.backend.resetpassword.repository.ResetPasswordRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ResetPasswordController {

    @Autowired
    private EmailSender emailSender;

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private ResetPasswordRepository resetRepo;

    @GetMapping("/hello-res")
    public String helloReset() {

        System.out.println("Testing Reset Password Controller...");
        return "Hello Reset Password Controller!";

    }

    @PostMapping("/forgot-password")
    public ResponseEntity<String> sendOTP(@RequestBody final ResetPasswordModel resetUser) {

        String message;

        System.out.println("Testing Forgot Password API...");

        UserModel existingUser = null;

        // Check if the Email is valid or not
        try {

            existingUser = userRepo.findByEmail(resetUser.getEmail());

            // System.out.println("Existing User : " + existingUser);

        } catch (Exception exc) { exc.printStackTrace(); }

        // If the User with the Email exists,
        // save the User Email and the OTP generated, and also, send the Email
        if (existingUser != null) {

            String otp = String.valueOf(generateOTP(6));

            ResetPasswordModel otpUser = resetRepo.findByEmail(resetUser.getEmail());

            if (otpUser == null) otpUser = resetUser;

            otpUser.setToken(otp);

            try {

                resetRepo.save(otpUser);
                emailSender.sendEmail(otpUser.getEmail(), String.valueOf(otp));

            } catch (Exception exc) { exc.printStackTrace(); }

            message = "Send OTP to " + otpUser.getEmail() + " : SUCCESS";
            System.out.println(message);

            return new ResponseEntity<>(message, HttpStatus.OK);

        }

        message = "Send OTP to " + resetUser.getEmail() + " : FAILURE [ REASON : User with " + resetUser.getEmail() + " does not exist! ]";
        System.out.println(message);

        return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);

    }

    @PostMapping("/verify-otp")
    public ResponseEntity<String> verifyOTP(@RequestBody final ResetPasswordModel resetUser) {

        String message;

        System.out.println("Testing Verify OTP API...");

        ResetPasswordModel existingUser = null;

        try {

            existingUser = resetRepo.findByEmailAndToken(resetUser.getEmail(), resetUser.getToken());
            resetRepo.delete(existingUser);

            // System.out.println("Existing User : " + existingUser);

        } catch (Exception exc) { exc.printStackTrace(); }

        if (existingUser != null) {

            message = "OTP Verification with " + existingUser.getEmail() + " : SUCCESS";
            System.out.println(message);

            return new ResponseEntity<>(message, HttpStatus.OK);

        }

        message = "OTP Verification with " + resetUser.getEmail() + " : FAILURE [ REASON : Wrong OTP entered! ]";
        System.out.println(message);

        return new ResponseEntity<>(message, HttpStatus.UNAUTHORIZED);

    }

    @PutMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody final UserModel resetPasswordUser) {

        String message;

        System.out.println("Testing Reset Password API...");

        UserModel recentUser;

        try {

            recentUser = userRepo.findByEmail(resetPasswordUser.getEmail());

            recentUser.setPassword(resetPasswordUser.getPassword());
            userRepo.save(recentUser);

            // System.out.println("Existing User : " + recentUser);

            message = "Password Reset with " + recentUser.getEmail() + " : SUCCESS";
            System.out.println(message);

            return new ResponseEntity<>(message, HttpStatus.OK);

        } catch (Exception exc) { exc.printStackTrace(); }

        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

    }

    private static char[] generateOTP(int length) {

        String numbers = "1234567890";
        Random random = new Random();

        char[] otp = new char[length];

        for (int i = 0; i < length; i++) {
            otp[i] = numbers.charAt(random.nextInt(numbers.length()));
        }

        return otp;

    }

}
