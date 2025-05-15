package com.dental.DentalToolSupplySystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dental.DentalToolSupplySystem.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
