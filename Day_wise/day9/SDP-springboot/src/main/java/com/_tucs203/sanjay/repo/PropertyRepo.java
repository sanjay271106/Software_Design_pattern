package com._tucs203.sanjay.repo;

import com._tucs203.sanjay.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Long> {
    List<Property> findByLocation(String location);
}

