package com.dental.DentalToolSupplySystem.services;

import java.util.Optional;

import com.dental.DentalToolSupplySystem.models.User;

public interface UserService {
    void registerUser(User user);
    Optional<User> findByEmail(String email);
}
