package com._tucs203.sanjay.repo;

import com._tucs203.sanjay.model.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import java.util.List;

@Repository
public interface AgentRepo extends JpaRepository<Agent, Long> {
   
}
