package com._tucs203.sanjay.service;


import com._tucs203.sanjay.model.Agent;
import com._tucs203.sanjay.repo.AgentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private static AgentRepo agentRepository;

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Optional<Agent> getAgentById(Long id) {
        return agentRepository.findById(id);
    }

    public Agent saveAgent(Agent agent) {
        return agentRepository.save(agent);
    }

    public static Agent updateAgent(Long id, Agent agentDetails) {
        return agentRepository.findById(id).map(agent -> {
                    agent.setName(agentDetails.getName());
                    agent.setLocation(agentDetails.getLocation());
                    agent.setPhone(agentDetails.getPhone());
                    agent.setExperience(agentDetails.getExperience());
                    agent.setRating(agentDetails.getRating());
                    return agentRepository.save(agent);
                })
                .orElseThrow(() -> new RuntimeException("Agent not found"));
    }

    public void deleteAgent(Long id) {
        agentRepository.deleteById(id);
    }
}
