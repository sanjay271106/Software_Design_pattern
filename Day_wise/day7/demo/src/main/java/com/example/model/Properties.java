package com.sanjay.realestate.model;


// import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Properties {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pid;
    private String PropertyTitle;
    private double price;
    private String location;
    private String type;
    private String description;

    
    public Property(long pid, String propertyTitle, double price, String location, String type, String description) {
        this.pid = pid;
        PropertyTitle = propertyTitle;
        this.price = price;
        this.location = location;
        this.type = type;
        this.description = description;
    }
    public Property(){

    }
    public long getPid() {
        return pid;
    }
    public void setPid(long pid) {
        this.pid = pid;
    }
    public String getPropertyTitle() {
        return PropertyTitle;
    }
    public void setPropertyTitle(String propertyTitle) {
        PropertyTitle = propertyTitle;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

}
