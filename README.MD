## The file structure flows like this:

**index.js** will start the server, it will then call **controller.js** to handle the requests.

**controller.js** will implement all the authentication and authorization nessecary.(Handling tokens and what not)

**controller.js** will then call **database.js** *if* nessecary

**contoller.js** will call the **logic.js** layer to process the information
