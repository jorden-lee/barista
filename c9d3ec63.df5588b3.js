(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(6),o=(r(0),r(110)),i={id:"barista-on-docker",title:"Building and Running Barista using Docker",sidebar_label:"barista-on-docker"},s={id:"barista-on-docker",title:"Building and Running Barista using Docker",description:"While you are free to buid and run Barista on your own, we find it easiest to use docker images to manage the process.  Using docker-compose, one can get a demo version of Barista up and running in a short time with very few changes.",source:"@site/docs/barista-on-docker.md",permalink:"/barista/docs/barista-on-docker",sidebar_label:"barista-on-docker",sidebar:"someSidebar",previous:{title:"How To Develop a Web Feature",permalink:"/barista/docs/develop-web-feature"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While you are free to buid and run Barista on your own, we find it easiest to use docker images to manage the process.  Using docker-compose, one can get a demo version of Barista up and running in a short time with very few changes.\nThis set of files are used to build the application with docker and to run the 5 major components."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Postgres Database - stores the state of the application."),Object(o.b)("li",{parentName:"ul"},"Redis Server - a queue and ephemeral store for inter-server communication."),Object(o.b)("li",{parentName:"ul"},"barista-web - A web server (nginx) that presents the application to the user's browser and also performs as a reverse proxy for the browser to transact with the API server."),Object(o.b)("li",{parentName:"ul"},"barista-api - The main processing to manage the state of the application and service the users."),Object(o.b)("li",{parentName:"ul"},"barista-scan - The engine that takes care of scanning, building, and evaluating the software under test.")),Object(o.b)("h1",{id:"barista-source-build-and-deploy-files"},"Barista Source, Build, and Deploy files"),Object(o.b)("p",null,"This set of files are used to build the application with docker and to deploy the components via docker-compose.  There are a few steps necessary to build the image."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Download the code from github.\n",Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/optum/Barista.git"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/install/"}),"docker")," is running on your workstation or server.  Docker version 19.0.3 or greater is preferred, but anything over 18 should work.  (but has not been tested)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Be aware that RHEL and CentOs and others may ship earlier versions of docker and not be viable"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ensure ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/compose/install/"}),"docker-compose")," is installed")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Run commands to replace symlinks with actual files.  (only needed if you do not use the pre-built docker images)"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("inlineCode",{parentName:"p"},"cd barista;\n  rm -fr barista-scan/src/{models,services,shared}  ;\n  cp -r barista-api/src/{models,services,shared} barista-scan/src;"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"check the settings in the file barista-compose.env .  Make modifications as necessary.  (Things like SMTP server, usernames and passwords for internal Git servers, personal access token for public github server if private repos are in play)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Start the program using docker-compose"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"log into the barista service at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://servername/signin"}),"http://servername/signin")," (default username is Admin, password is $barista@admin)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add a project and initiate a scan."))))}l.isMDXComponent=!0},110:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},b=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(m,s({ref:t},p,{components:r})):n.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);