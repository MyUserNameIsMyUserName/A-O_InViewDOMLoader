// Virgil.js [next-gen JS router]
// Navigating many links can get hard and painful
// Virgil is a JS frontend/in-browser routing tool. Super fast by keeping it simple.
// 
// Slavko V.
// 12.05.2021.


class Virgil {
  _constructor(vigilMap = null) {
      if ( vigilMap !== null ) {
        console.log("Welcome friend, where would you like me to take you?");
        this.hellMap = vigilMap;
      } else {
          
    
    console.log("Welcome friend, where would you like me to take you?");
    this.hellMap = vigilMap;
      }
  }

  findRoute(route = null) {
    if (route !== null) {
      console.log("[ Virgil.findRoute( " + route + " ) ]");
    } else {
      console.warn(
        "[ ERROR: Missing Args >> route input can't be empty -> Virgil.findRoute( NULL ) ]"
      );
    }
  }

  sysPage() { return {
      error_400: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the user's request contains incorrect syntax.",
      },
      error_401: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the requested file requires authentication (a username and password).",
      },
      error_403: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the server will not allow the visitor to access the requested file. If a visitor receives this code unexpectedly, you should check the file's permission settings, or check whether the file has been protected.",
      },
      error_404: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the server could not find the file that the visitor requested. This commonly occurs when a URL is mistyped.",
      },
      error_500: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the server has encountered an unexpected condition. This often occurs when an application request cannot be fulfilled due to the application being configured incorrectly on the server.",
      },
      error_501: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the HTTP method sent by the client is not supported by the server. This is most often caused by the server being out of date. It is a very rare error and generally requires that the web server be updated.",
      },
      error_502: {
        loc: "/pages/default_error.js",
        desc: "This error is usually due to improperly configured proxy servers. However, the problem may also arise when there is poor IP communication between back—end computers, when the client's server is overloaded, or when a firewall is functioning improperly. <br> The first step in resolving the issue is to clear the client's cache. This action should result in a different proxy being used to resolve the web server's content.",
      },
      error_503: {
        loc: "/pages/default_error.js",
        desc: "This error occurs when the server is unable to handle requests due to a temporary overload or due to the server being temporarily closed for maintenance. The error indicates that the server will only temporarily be down. It is possible to receive other errors in place of 503. <br> Contact the server administrator if this problem persists.",
      },
      error_504: {
        loc: "/pages/default_error.js",
        desc: "This error occurs when a server somewhere along the chain does not receive a timely response from a server further up the chain. The problem is caused entirely by slow communication between upstream computers. <br>To resolve this issue, contact the system administrator.",
      },
      error_505: {
        loc: "/pages/default_error.js",
        desc: "This error occurs when the server refuses to support the HTTP protocol that has been specified by the client computer. This can be caused by the protocol not being specified properly by the client computer; for example, if an invalid version number has been specified.",
      },
      error_506: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the server is not properly configured. Contact the system administrator to resolve this issue.",
      },
      error_507: {
        loc: "/pages/default_error.js",
        desc: "This error indicates that the server is out of free memory. This is most likely to occur when an application that is being requested cannot allocate the necessary system resources to run.<br>To resolve the issue, the server's hard disk may need to be cleaned of any unnecessary documents to free up more hard disk space, its memory may need to be expanded, or it may simply need to be restarted.<br>Contact the system administrator for more information regarding this error message.",
      },
      error_509: {
        loc: "/pages/default_error.js",
        desc: "This error occurs when the bandwidth limit imposed by the system administrator has been reached. The only fix for this issue is to wait until the limit is reset in the following cycle. <br>Consult the system administrator for information about acquiring more bandwidth.",
      },
      error_510: {
        loc: "/pages/default_error.js",
        desc: "This error occurs when an extension attached to the HTTP request is not supported by the web server.<br>To resolve the issue, you may need to update the server. Consult the system administrator for more information.",
      },
    }
  }

  findCurrentRoute() {
    console.log("I will be finding current route/URL...");
  }

  init() {
    console.log(
      "I will be doing the initialization of the things like DOM elements and event listeners...and much more."
    );
  }
};

function virgil404(){
    if (Virgil){
        return Virgil.sysPage.show404();
        return true;
    } else {
        let Virgil = new Virgil();
        Virgil.sysPage.show404();
        return true;
    };
    console.warn('[-!- ERROR FUNC - virgil404() -!-]')
    return false;
};


// vigil_big_log_console_msg =>> vblcm(**********) [-make it shorter to write, time makes you rememer the names easier :D -]

function vblcm( msg = null, type = null ){
    if (msg !== null){
        switch (type) {
            case "info":
                console.info("[--------------------------------------------------------------------------------]");
                console.info("[-i- INFO :->  vblcm( msg = null, type = null ) -> msg can not be emtpy value -i-]");
                console.info("[--------------------------------------------------------------------------------]");
                return true;
                break;

            case "warn":
                console.warn("[--------------------------------------------------------------------------------]");
                console.warn("[-!- WARN :-> vblcm( msg = null, type = null ) -> msg can not be emtpy value -!-]");
                console.warn("[--------------------------------------------------------------------------------]");
                return true;
                break;
        
            case "error":
                // Yes only do warn cuz some browsers fail to continue after printing and error to console. Like all stops.
                console.warn("[-!-----------------------------------------------------------------------------!-]");
                console.warn("[-E- ERROR :->  vblcm( msg = null, type = null ) -> msg can not be emtpy value -E-]");
                console.warn("[-!-----------------------------------------------------------------------------!-]");
                return true;
                break;

            default:
                console.log("[-!- LOG MSG :->  vblcm( msg = null, type = null ) -> msg can not be emtpy value -!-]");
                return true;
                break;
        }
    } else {
        console.warn('[-!- ERROR FUNC - vblcm( msg = null, type = null ) -> msg can not be emtpy value -!-]')
        console.trace();
        return false;
    }
}