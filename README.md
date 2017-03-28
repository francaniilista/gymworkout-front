# gymworkout-front
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b4c8c4e4363c4cb197fb1f242b3bd33a)](https://www.codacy.com/app/francaniilista/gymworkout-front?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=francaniilista/gymworkout-front&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/francaniilista/gymworkout-front.svg?branch=master)](https://travis-ci.org/francaniilista/gymworkout-front)  

This project is part an web application project to log all variables during the gym's wourkout in order to show one's progress.

## Getting Started

To get you started you can simply clone the gymworkout-front and gymworkout api repository and install the dependencies:

### Prerequisites

You need git to clone the gymworkout-front repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I also use a number of node.js tools to initialize and test gymworkout-front. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone gymworkout-front

Clone the gymworkout-front repository using [git][git]:

```
git clone https://github.com/francaniilista/gymworkout-front.git
cd gymworkout-front
```

### Install Dependencies

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the front-end code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the front-end framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000`.