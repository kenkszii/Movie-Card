
Movie Card

Movie Card  is a web App that helps user to search for their movies based on the following:
 Production Date 
Movie Genre
List of similar movies produced and date


TEAMS
Edwin Agana
Theophilus Ayano
Abdulazeez Gaji
Above are the members of this team and we would be building the frontend and backend components.



TECHNOLOGIES


Front end

Html
CSS
JavaScript
React

Backend
Restful API

Comparison between selected technologies


1. An alternative to React.js would be Vue.js


Vue is a progressive JavaScript framework, while React is an open-source JavaScript library.

React uses JSX exceptionally for creating React components, Vue uses HTML templates apart from JSX.

Finally, React and Vue differ in terms of pre-built and third party tools. React comes with competent architecture, Virtual DOM manipulation, and component state management. All other functionality is built and supported by the community members.

As a result of this approach, developers get more freedom. At the same time, new developers may find an abundance of third-party instruments challenging.

When it comes to Vue, its widespread tools and libraries are developed by its core team. In addition to them, there are community-based solutions as well.





CHALLENGE


Describe the problem the Portfolio Project is intended to solve:

This project is targeted to helping the user  search for their favorite movies in respect to the date of production, movie genre and also related movies

Explain what the Portfolio Project will not solve:

This project will not provide for the user the ability to stream or download the movie they searched for, it is only aimed at providing relevant information about the movie and also displaying the movie’s image or poster. 

Explain who the Portfolio Project will help and/or who the users will be:

This project is supposed to assist anyone that is curious about their favorite and would love to know more about a  certain movie’s info.


Is this project relevant or dependent on a specific locale?

This project is targeted to providing information strictly only on Hollywood Movies.








RISKS


Describe the technical risks, the potential impact, and what safeguards or alternatives you have in mind
Inconsistency in coding style: This can result in code that is hard to debug, read and understand. A solution is to follow proper coding conventions and adding documentations where it is needed



High complexity in implementation: This can be prevented by using simple software architecture such as the one used in the Airbnb Project


Describe non-technical risks, the potential impact, and what strategies are in place to prevent these negative outcomes
Absence of user: If a user is not on the website they would miss notifications for upcoming tasks. This can be solved by sending automated emails of texts containing the next task and completed task to the users phone


Improper user input: For this we will assume every user input is malicious so we would have to sanitize the information before inserting it to our database



INFRASTRUCTURE


Describe your process for branching and merging in your team’s repository
Trunk-based Development (No Branching)


Trunk-based development means all developers work on the same branch, and when changes are tested and ready, a developer pushes their code to the central repository. Small organizations or those with strong internal testing practices find this strategy useful because it reduces complexity and encourages the development organization to swarm on the problem.




Describe your strategy for deployment

Recreate Deployment


In this deployment strategy, the dev team shuts down the old version of the application entirely, deploys the new version, and then reboots the whole system. This deployment technique creates a system downtime between shutting down the old software and booting the new one.


It is cheaper and mainly used when the software firm wants to change the application from scratch. It doesn’t require a load balancer as there’s no shifting of traffic from one version to another in the live production environment.


Describe how you will populate your app with data
Using test data generation platforms like SQL Data Generator would have been easier but due to the fact that most of these platforms are paid i  would be doing this manually or with the help of a python script.


Describe what tools, automation or process you will use for testing
Unit tests and tools like puppeteer would be used to simulate multiple users accessing the service at the same time.


EXISTING SOLUTION


List any similar products or solutions that currently exist.
Netflix
Movie Premier
Youtube

For each item in the list, explain similarities and differences
Netflix and Movie Card: Netflix give information about movies just like Movie Card and displays all related starches in a grid list, Movie Card is free web app anybody with internet can use it unlike Netflix which comes with subscription before one can access the information about  movies

Youtube and Movie Premier:  Unlike Youtube and Movie Premier, Movie Card doesn't providing streaming and download ability




Upcoming: This displays upcoming tasks
