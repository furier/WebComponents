# WebComponents

[Polymer](http://www.polymer-project.org/) Custom WebComponents

## Installation

### Bower

If you want to use the WebComponents in your project, they can be added with bower.

    bower install WebComponents

### Git

If you want to develop more components or edit existing once, clone the git repo.

    git clone https://github.com/furier/WebComponents
    cd WebComponents
    bower install
    
## Develop

### Simple

While you’re working, you’ll need a basic HTTP server to serve your pages. If you have Python installed, you can run one of the following commands in the top level of the starter project.

Python 2.x:

    python -m SimpleHTTPServer 
Python 3.x:

    python -m http.server 
Test out the web server by loading the project. For example:

    http://localhost:8000
The URL assume your local server is listening on port 8000. If you’re using a different port, substitute the port you’re using.

Now you can just start hacking and slashing!

### Livereload

    npm install
    gulp
    
NPM will install gulp and gulp-connect to serve as a simple static web server with live reload.
**NOTE:** python SimpleHTTPServer is not needed with this approach.

## Usage

Assuming your directory structure looks like this:

    My Project
        WebComponents
            bower_components
                platform
                    platform.js
            components
                scheduler
                    ss-scheduler.html
        Index.html

Your HTML should look like this:

    <!DOCTYPE html>
    <html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>My Project</title>
    
        <!--PLATFORM JS - FOR CROSS BROWSER WEB COMPONENT SUPPORT-->
        <script src="WebComponents/bower_components/platform/platform.js"></script>
    
        <!--WEB COMPONENT IMPORTS-->
        <link rel="import" href="WebComponents/bower_components/polymer/polymer.html">
        <link rel="import" href="WebComponents/components/scheduler/ss-scheduler.html">
    </head>
    <body unresolved>
        <ss-scheduler></ss-scheduler>
    </body>
    </html>
