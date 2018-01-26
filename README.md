# BACKEND

## Node Token Authentication

This repo uses JSON Web Tokens and the [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) package to implement token based authentication on a simple Node.js API.

### Requirements

- node and npm

### Usage

1. Clone the repo
2. Install dependencies: `npm install`
3. Change SECRET in `config.js`
4. Add your own MongoDB database to `config.js`
5. Start the server: `node server.js`
6. Create sample user by visiting: `http://localhost:8000/setup`

Once everything is set up, we can begin to use our app by creating and verifying tokens.

#### Getting a Token

Send a `POST` request to `http://localhost:8000/api/auth/token/obtain/` with test user parameters as `x-www-form-urlencoded`. 

```
  {
    name: 'test',
    password: 'password'
  }
```

#### Verifying a Token and Listing Users

Send a `GET` request to `http://localhost:8000/api/users` with a header parameter of `x-access-token` and the token.

You can also send the token as a URL parameter: `http://localhost:8080/api/users?token=YOUR_TOKEN_HERE`

Or you can send the token as a POST parameter of `token`.


#FRONTEND

Using React, Redux and ImmutableJS
=======================
Usage
-----

#### `npm install`
Install Node modules listed in ./package.json`

#### `npm start`
Runs the webpack build system with HMR. Webpack dev server can be found at `localhost:8000`.

Structure
---------

```
.
├── bin                          # Build/Start scripts
├── build                        # All build-related configuration
│   ├── webpack                  # Environment-specific configuration files for Webpack
├── config                       # Project configuration settings
└── src                          # App source code
    ├── actions                  # Redux actions
    ├── components               # Generic React Components
    ├── constants                # Constants for Redux actions
    ├── reducers                 # Redux reducers (all are imported in index.js)
    ├── styles                   # App SASS styles, all are imported into app.scss
    ├── utils                    # Reusable utility functions
    ├── index.html               # Most basic index.html
    └── init.js                  # App bootstrap and rendering
```
