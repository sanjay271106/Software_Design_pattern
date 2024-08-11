package com._tucs203.sanjay.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com._tucs203.sanjay.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}