---
# slug: "/serviceworker"
date: "2021-10-18"
title: "Serviceworker Basic Knowledge"
---


In a recent project, we need to implement a new ServiceWorker package. Therefore basic service worker knowledge is needed and helpful to understand the new  ServiceWorker SDK.
## What is Service worker?
A service worker is an **event-driven** worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).

* Feature 1: It is event-driven. How to handle events and properly is the key part to implement different service workers.
* Feature 2: It has lifecycle. The lifecycle of the service worker is its most complicated part.
* Feature 3: It is designed to be fully async; as a consequence, APIs such as synchronous XHR and Web Storage can't be used inside a service worker.
* Feature 4: Service workers only run over HTTPS, for security reasons. Having modified network requests, wide open to man in the middle attacks would be really bad. In Firefox, Service Worker APIs are also hidden and cannot be used when the user is in private browsing mode.
* Feature 5: It's a JavaScript Worker, so it can't access the DOM directly. Instead, a service worker can communicate with the pages it controls by message events (https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event ).

## Service worker lifecycle

* Registration
The service worker first needs to be registered (register method). If it’s registered successfully, the service worker will be downloaded to the client and attempt installation/activation.
* Installation
Then install event is the first event a service worker gets, and it only happens once. We can download static assets here. 
* Activation and waiting
After a successful installation, activate event is triggered. When a service worker is initially registered and installed, pages won't use it immediately until the next load. In other words, this service worker won’t control clients until next reload.
 <br> **However, you can take control of uncontrolled clients by calling clients.claim() within your service worker once it's activated. After that fetch events will start.**


  
   <br> One thing need to be noticed when service worker upgrade happens: the new updated service worker delays activating until the existing service worker is no longer controlling clients. This state is called "waiting", and it's how the browser ensures that only one version of your service worker is running at a time.
   <br> In other words, it is only activated when there are no longer any pages loaded that are still using the old service worker. As soon as there are no more pages to be loaded, the new service worker activates (becoming the active worker).

   <br> Usually it means user needs to close all tabs / windows and reopen again. 

   <br> Also we can use **skipWaiting** function to forces the waiting service worker to become the active service worker, and this can make the new service worker control the clients immediately. 

   <br> In conclusion, activation can happen sooner using ServiceWorkerGlobalScope.skipWaiting() and existing pages can be claimed by the active worker using Clients.claim().

<br>

* Fetch
After the service worker controls the current clients (windows/ tabs), then fetch events can be triggered.


#### References: 
1.	https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API 
2.	https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers 
3.	https://developers.google.com/web/fundamentals/primers/service-workers 
4.	https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle 