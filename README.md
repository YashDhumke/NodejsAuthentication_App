Welcome to our Authentication Application! This application is built using Node.js, EJS, MongoDB, Mongoose, bcryptjs, and JWT token to provide secure authentication functionality. Below, you'll find all the information you need to understand and use the application effectively.

# Features:

1) User Registration: Users can sign up for an account by providing their email address and password. Passwords are securely hashed using bcryptjs before being stored in the database.

2) User Authentication: Registered users can log in securely using their email address and password combination. Upon successful authentication, a JWT token is generated and sent to the client for further authorization.

3) Token-based Authentication: JWT tokens are used to authenticate and authorize users for protected routes and resources within the application.

4) Password Encryption: User passwords are encrypted using bcryptjs, ensuring that sensitive information remains secure even in the event of a data breach.

5) Session Management: Sessions are managed using JWT tokens, eliminating the need for server-side session storage and improving scalability and performance.

6) Error Handling: Comprehensive error handling is implemented throughout the application to provide meaningful feedback to users in case of authentication failures or other issues.

# Technologies Used:

- Node.js: A JavaScript runtime used for building the server-side logic of the application.
- Express.js: A web application framework for Node.js used to create robust APIs and handle routing.
- EJS (Embedded JavaScript): A templating engine for generating HTML markup with plain JavaScript.
- MongoDB: A NoSQL database used to store user data, including user credentials and authentication tokens.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, used to interact with the database.
- bcryptjs: A library for hashing passwords securely before storing them in the database.
- JWT (JSON Web Tokens): A compact, URL-safe means of representing claims to be transferred between two parties securely.

# view demo - https://nodejsauthentication-app-kbi1.onrender.com/
![Screenshot (581)](https://github.com/YashDhumke/NodejsAuthentication_App/assets/89930129/0884c4af-084f-46fd-b8cc-a59214d29a03)

