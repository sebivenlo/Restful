package org.fontysvenlo.issuetracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
class IssueController {
    
    private final IssueRepository issueRepository;
    
    @RequestMapping(value="/step1", method=RequestMethod.GET)
    public ResponseEntity<Void> firstEndpoint() {
        return new ResponseEntity("You wrote your first endpoint.", HttpStatus.OK);
    }
    
    @Autowired
    IssueController(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }
    
    @CrossOrigin()
    @RequestMapping(value="/issues", method=RequestMethod.GET)
    public ResponseEntity<Void> listAllIssues() {
        return new ResponseEntity(this.issueRepository.findAll(), HttpStatus.OK);
    }
    
    @CrossOrigin()
    @RequestMapping(value="/issues/{issueId}", method=RequestMethod.GET)
    public ResponseEntity<Void> getIssue(@PathVariable long issueId) {
        Issue current = issueRepository.findOne(issueId);
        if(current == null) {
            return new ResponseEntity("Issue with the id: "+issueId+" not found.", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(current, HttpStatus.OK);
    }
    
    @CrossOrigin()
    @RequestMapping(value="/issues", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> addIssue(@RequestBody Issue issue) {
        if(issue.title.length()<=3) {
            return new ResponseEntity("Title length to short.", HttpStatus.LENGTH_REQUIRED);
        }
        Issue current = issueRepository.save(new Issue(issue.title, issue.category));
        return new ResponseEntity(current, HttpStatus.CREATED);
    }
    
    @CrossOrigin()
    @RequestMapping(value="/issues/{issueId}", method=RequestMethod.PUT, consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> editIssue(@PathVariable long issueId, @RequestBody Issue issue) {
        Issue current = issueRepository.findOne(issueId);
        if(current == null) {
            return new ResponseEntity("Issue with the id: "+issueId+" not found.", HttpStatus.NOT_FOUND);
        }
        if(issue.title.length()<=3) {
            return new ResponseEntity("Title length to short.", HttpStatus.LENGTH_REQUIRED);
        }
        current.title = issue.title;
        current.category = issue.category;
        issueRepository.save(current);
        return new ResponseEntity(current, HttpStatus.OK);
    }
    
    @CrossOrigin()
    @RequestMapping(value="/issues/{issueId}", method=RequestMethod.DELETE)
    public ResponseEntity<Void> deleteIssue(@PathVariable long issueId) {
        Issue current = issueRepository.findOne(issueId);
        if(current == null) {
            return new ResponseEntity("Issue with the id: "+issueId+" not found.", HttpStatus.NOT_FOUND);
        }
        issueRepository.delete(issueId);
        return new ResponseEntity("Deleted.", HttpStatus.NO_CONTENT);
    }
}
