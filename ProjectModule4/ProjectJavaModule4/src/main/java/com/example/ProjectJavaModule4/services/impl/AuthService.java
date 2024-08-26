package com.example.ProjectJavaModule4.services.impl;

import com.example.ProjectJavaModule4.dto.ReqRes;
import com.example.ProjectJavaModule4.entities.CustomerEntity;
import com.example.ProjectJavaModule4.repository.OurUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AuthService {

    @Autowired
    private OurUserRepo ourUserRepo;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;

    public ReqRes signUp(ReqRes registrationRequest) {
        ReqRes resp = new ReqRes();
        try {
            CustomerEntity customerEntity = new CustomerEntity();
            customerEntity.setCustomerEmail(registrationRequest.getEmail());
            customerEntity.setCustomerPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            customerEntity.setRole(registrationRequest.getRole());
            CustomerEntity savedCustomer = ourUserRepo.save(customerEntity);

            if (savedCustomer != null && savedCustomer.getCustomerId() > 0) {
                resp.setCustomerEntity(savedCustomer); // Ensure setCustomerEntity is defined in ReqRes
                resp.setMessage("User Saved Successfully");
                resp.setStatusCode(200);
            }
        } catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }

    public ReqRes signIn(ReqRes signinRequest) {
        ReqRes response = new ReqRes();
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()));

            CustomerEntity user = ourUserRepo.findByEmail(signinRequest.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));

            String jwt = jwtUtils.generateToken(user);
            String refreshToken = jwtUtils.generateRefreshToken(new HashMap<String, Object>(), user);

            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshToken);
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Signed In");
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }
        return response;
    }

    public ReqRes refreshToken(ReqRes refreshTokenRequest) {
        ReqRes response = new ReqRes();
        String userEmail = jwtUtils.extractUsername(refreshTokenRequest.getToken());
        CustomerEntity user = ourUserRepo.findByEmail(userEmail)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (jwtUtils.isTokenValid(refreshTokenRequest.getToken(), user)) {
            String jwt = jwtUtils.generateToken(user);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshTokenRequest.getToken());
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Refreshed Token");
        } else {
            response.setStatusCode(500);
            response.setMessage("Invalid Token");
        }
        return response;
    }
}
