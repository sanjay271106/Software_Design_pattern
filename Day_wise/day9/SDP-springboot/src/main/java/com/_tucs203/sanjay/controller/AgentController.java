package com._tucs203.sanjay.controller;
import com._tucs203.sanjay.model.Agent;
// import com._tucs203.sanjay.model.Property;
import com._tucs203.sanjay.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @GetMapping("/{id}")
    public Optional<Agent> getAgentById(@PathVariable Long id) {
        return agentService.getAgentById(id);
    }
    

    @PostMapping
    public Agent createAgent(@RequestBody Agent agent) {
        return agentService.saveAgent(agent);
    }


    @DeleteMapping("/{id}")
    public void deleteAgent(@PathVariable Long id) {
         agentService.deleteAgent(id);       
    }

    @PutMapping("/{id}")
    public Agent updateAgent(@PathVariable Long id, @RequestBody Agent agentDetails) {
        return AgentService.updateAgent(id, agentDetails);
    }

}

