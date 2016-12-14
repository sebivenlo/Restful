package org.fontysvenlo.issuetracker;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Issue {

    @Id
    @GeneratedValue
    public Long id;
    
    public String title;
    public String category;
    // priority

    protected Issue() {} // only exists for the sake of JPA
    
    public Issue(String title, String category) {
        this.title = title;
        this.category = category;
    }
    
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getCategory() {
        return category;
    }
}
