# Restful

Before you start make sure you have installed an Netbeans and an Restful client.

### Step 1
Import the project from github in your IDEA. Run the project and open your Restful client. Try to call http://localhost:8080.
Did you find the file? Great, now check the other files in the project out.

A short explanation of the project files:
"IssueTrackerCompleteApplication" initialize the springframwork.
"Issue" is the model class.
"IssueController" defines the endpoints.
"IssueRespository" is the temporarily database that holds the data when its running.

### Step 2
Let's start with the first endpoint in the IssueController.
Create a mehtod that a string returns. For example:
```
public String firstEndpoint() {
    return "You wrote your first endpoint.";
```
To make the endpoint callable, add the annotation.
```
@RequestMapping(value="/firstendpoint", method=RequestMethod.GET)
```
The spring framework map the method with the annotation *@RequestMapping* to a url path. To seperate each method a url is defined, the variable *value* define the second part of the url after http://localhost:8080. 
In this example:
```
http://localhost:8080/firstendpoint
```
Try to call the endpoint with your restful client.
**Important if the api is running stop it before you run it again.**
### Step 3
Lets start with a small project *Issue Tracker*. Your task is it to implement the api for the GUI.

Already implemented are
- Model
- Database

ToDo:
A endpoint to retieve an issue  
```
GET /issues/{id} 
```
A endpoint to create an issue   
```
POST /issues
```
A endpoint to delete an issue                 
```
DELETE /issues/{id} 
```
A endpoint to update an issue                 
```
PUT /issues/{id} 
```
A endpoint to retrieve a list of all issues   
```
GET /issues 
```
### Step 4
Start with the endpoint that retrieve an certain issue. Create a methode like in step 2. Change the url path to:
```
/issues/{id}
```
To get a ceratin issue we send a http request with the id in the url to the endpoint. To read the id out of the url we add a parameter in the method.
```
@PathVariable long id
```
The return value and response has to be upadeted to:
```
ResponseEntity<Void>
return new ResponseEntity(issue, HttpStatus.OK)
```
The last step is to find the object with the id in the database.
```
Issue current = issueRepository.findOne(id);
```
Before we can test it, we need to add an issue.

### Step 5
For that create a new endpoint "addIssue":
```
POST /issues
```
Create a method like descripted in the steps before. To define from which Content-Type the http request is, add in the annotation:
```
consumes=MediaType.APPLICATION_JSON_VALUE
```
This define the how the body of the http request should be written. For our endpoint. To read the values from the http request add the following to the parameter in the method:
```
@RequestBody Issue issue
```
Add the Issue object to the database and check out which *HttpStatus* response would be great for this endpoint:
```
issueRepository.save(new Issue(issue.title, issue.category));
```
Now we can test it. Goto to you restful client call the endpoint and dont forget the body must be json. 
*Hint don't forget to change the Content-Type.*
```
Content-Type: application/json
```
JSON Body:
```
{
    "title": "Tire",
    "category": "Car"
}
```
```
POST on http://localhost:8080/issues
```
After adding some issues try to call a certain issue with a id.
```
GET on http://localhost:8080/issues/1
```

### Step 6
Great work so far. Try to create the last three endpoints on your own with these informations.

A endpoint to retrieve a list of all issues   
```
GET /issues 
issueRepository.findAll()
```

A endpoint to delete an issue                 
```
DELETE /issues/{id} 
issueRepository.delete(issueId)
```

A endpoint to update an issue             
```
PUT /issues/{id} 
issueRepository.save(issue);
```

### Step 7
The last step is about exceptions with restful. Maybe you already noticed that the enum HttpStatus holds a lot of status codes. For example: 
```
404 NOT_FOUND
411 LENGTH_REQUIRED
200 OK
201 CREATED
204 NO_CONTENT
```
Unitl now we only implemented success calls, let's add fail responses to our endpoints. Here is one example to do a not found error. 
```
if(issue == null) {
    return new ResponseEntity("Issue with the id: "+id+" not found.", HttpStatus.NOT_FOUND);
}
```
Try on your own to implement the LENGTH_REQUIRED for the value title>3.
Good luck :).


We hope you had some fun to implement a restful api.
