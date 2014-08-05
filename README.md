# WebComponents

Polymer Custom WebComponents

## Installation

    git clone https://github.com/furier/WebComponents
    cd WebComponents
    bower install
    
## Develop

While you’re working, you’ll need a basic HTTP server to serve your pages. If you have Python installed, you can run one of the following commands in the top level of the starter project.

Python 2.x:

    python -m SimpleHTTPServer 
Python 3.x:

    python -m http.server 
Test out the web server by loading the finished version of the project. For example:

    http://localhost:8000
URLs in this tutorial assume your local server is listening on port 8000. If you’re using a different port, substitute the port you’re using.

Now you can just start hacking and slashing!

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
        <link rel="import" href="WebComponents/components/scheduler/ss-scheduler.html">
    </head>
    <body unresolved>
        <ss-scheduler></ss-scheduler>
    </body>
    </html>

