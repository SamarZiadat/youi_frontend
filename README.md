<h1  align="center">you.i</h1>

This the readme for the you.i project's frontend. For more information about the backend, please visit [this link](https://github.com/SamarZiadat/youi_drf_api).

'youi.i' is a professional networking platform designed and created for digital design professionals globally. The name 'you.i' plays on the abbreviation 'ui' (user interface) and the connection between the 'you' and 'I' of the professional individuals networking on the site. 

The interactive platform is intended to be used by digital designers to platform their own work, advertise their own events and create posts about their career. It also allows designers to keep up to date with digital design related events, and to interact with, learn about, and be inspired by other designers and their work.

The platform renders differently depending on authentication states of the users. Unregistered users can view other users profiles, and view, search and filter registered users posts and events. Users can also sign up to join the platform, which provides them with additional functionality, such as the ability to create their own professional profile, events and posts. Registered users can also comment on posts and like posts, to support and build a rapport with other designers. They can also  bookmark events to show interest in events and find them easily later. They can also review other user's events, as well as follow or unfollow other users.

View the live project [here](https://youi-frontend-3d2a473770e1.herokuapp.com/). 

![Responsive Mockup](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697716247/mockup_u2rbax.png)

## Table of Contents
- [User Experience Design (UX)](https://github.com/SamarZiadat/youi_frontend#user-experience-design-ux)
	 -   [The Strategy Plane](https://github.com/SamarZiadat/youi_frontend#the-strategy-plane)
		   -   [Project Objective](https://github.com/SamarZiadat/youi_frontend#project-objective)
		    -   [Agile Project Management](https://github.com/SamarZiadat/youi_frontend#agile-project-management)
		    -   [User Stories](https://github.com/SamarZiadat/youi_frontend#user-stories)
	-   [The Structure Plane](https://github.com/SamarZiadat/you.i#the-structure-plane)
		-   [Project Structure](https://github.com/SamarZiadat/youi_frontend#project-structure)
	    -   [Features](https://github.com/SamarZiadat/youi_frontend#features)
	    -   [Future Features](https://github.com/SamarZiadat/youi_frontend#future-features)
	-   [The Skeleton Plane](https://github.com/SamarZiadat/youi_frontend#the-skeleton-plane)
	    -   [Wireframes](https://github.com/SamarZiadat/youi_frontend#wireframes)
	-   [The Surface Plane](https://github.com/SamarZiadat/youi_frontend#the-surface-plane)
	    -   [Design](https://github.com/SamarZiadat/youi_frontend#design)
-   [Technologies](https://github.com/SamarZiadat/youi_frontend#technologies)
-   [Testing](https://github.com/SamarZiadat/youi_frontend#testing)
-   [Deployment](https://github.com/SamarZiadat/youi_frontend#deployment)
-   [Credits](https://github.com/SamarZiadat/youi_frontend#heroku-credits)

## User Experience Design (UX)

## The Strategy Plane

### Project Objective
The objective of this project is to build a content sharing web application for digital design professionals, allowing users to learn about events happening in their field of work, connect with and stay up to date with other professionals in their field, and to interact with the published content. The platform allows users to view, create, edit, delete, bookmark and review event listings, as well as view, create, edit, delete, like and comment on posts. The content can be viewed in a logical order, filtered by category, and searched  by keywords and tags. Users can also view, create and edit their own profiles as well as view other user's profiles, follow each other, and engage with other's shared content.

### Agile Project Management

This project was managed using agile methodologies by delivering small features in incremental sprints. There were 4 sprints in total. A kanban board was created using github projects and was utilised as a project management tool to help visualise work, limit work-in-progress, and maximise efficiency/flow. The Kanban board can be viewed [here](https://github.com/users/SamarZiadat/projects/2/views/2). 

Acceptance criteria was created in relation to each of the user stories. These stories were then assigned to an epic, of which there were 6: Project Inception, API build, Frontend build, Testing, Documentation, and Deployment. All stories were organised within sprints, and acceptance criteria was completed in order of: 'must have' , then 'should have', and finally "could have". This approach was taken in order to ensure that all core requirements were definitely delivered, with the nice to have features implemented in an iterative way according to capacity.

![Image of Kanban](https://res.cloudinary.com/ddsrnz9la/image/upload/v1695288072/kanban_ut6ueo.png)

![Image of Project Board](https://res.cloudinary.com/ddsrnz9la/image/upload/v1696005608/project_board_view_2_r40r11.png)

### User Stories

#### Navigation & Authentication

- **US01.  Navigation:** 
As a user I can view a navbar from every page so that I can navigate easily between pages
    
- **US02.  Routing:** 
As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
    
- **US03.  Authentication - Sign up:** 
As a user I can create a new account so that I can access all the features for signed up users
    
- **US04.  Authentication - Sign in:** 
As a user I can sign in to the app so that I can access functionality for logged in users
    
- **US05.  Authentication - Logged in Status:** 
As a user I can tell if I am logged in or not so that I can log in if I need to
    
- **US06.  Authentication - Refreshing access tokens:** 
As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
    
- **US07.  Navigation - Conditional rendering:**
As a logged out user I can see sign in and sign up options so that I can sign in/sign up
    
- **US08.  Avatar:** 
As a user I can view user's avatars (profile picture) so that I can easily identify users of the application
    
#### Posts

- **US09.  Create posts:** 
As a logged in user I can create posts so that I can share my content
    
- **US10.  Edit post:** 
As a post owner I can edit the post text, image and tags so that I can make corrections or update my post after it was created
    
- **US11.  Delete a post:** 
As post owner I can delete the post so that it is no longer available to view on the app
    
- **US12.  View a post:** 
As a user I can view the details of a single post so that I can learn more about it
    
- **US13.  Posts list:** 
As a user I can view a list of posts ordered by most recent first so that I can get an overview of what people are posting
    
- **US14.  Search Posts:** 
As a user, I can search for posts with keywords and tags, so that I can find the posts and user profiles I am most interested in.
    
- **US15.  View posts of followed users:** 
As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
    
#### Events

- **US16.  Create events:** 
As a logged in user I can create events so that I can share the events I’m promoting on the app
    
- **US17.  Edit an event:** 
As an event owner I can edit the event so that I can make corrections or update my event after it was created
    
- **US18.  Delete an event:** 
As an event owner I can delete the event so that it is no longer listed on the app
    
- **US19.  View all events:** 
As a user I can view a list of all events so that I can see an overview of all the events listed on the app
    
- **US20.  View a single event:** 
As a user, I can view a single event so that I can see all the details for a single event
    
- **US21.  Event category filter:**
As a user, I can filter for events by category, so that I can find the events I am most interested in.
    
- **US22.  Search Events:**
As a user, I can search for events by title, profile, date or tag so that I can find the events I am most interested in
    
- **US23.  View events of followed users:** 
As a logged in user, I can view events of users I follow so that I can keep up to date with what they are posting about
    
#### Likes

- **US24.  Like a post:** 
As a logged in user I can like a post so that I can show my support for the posts that interest me
    
- **US25.  Unlike a post:** 
As a logged in user I can unlike a post so that I can change my mind about the posts to support
    
- **US26.  View liked posts:** 
As a logged in user I can view the posts I liked so that I can find them easily at a later date
    
#### Bookmarks

- **US27.  Bookmark an event:** 
As a logged in user I can bookmark an event so that I can show my interest in an event and revisit it later
    
- **US28.  Unbookmark an event:** 
As a logged in user I can unbookmark an event so that I can change my mind about the events I’m interested in
    
- **US29.  View bookmarked events:** 
As a logged in user I can view the events I bookmarked so that I can keep track of the schedule of events that I am interested in
    
#### Comments

- **US30.  Create a comment:** 
As a logged in user I can add comments to a post so that I can share my thoughts about the post
    
- **US31.  Comment date:** 
As a user I can see how long ago a comment was made so that I know how old a comment is
    
- **US32.  View comments:** 
As a user I can read comments on posts so that I can read what other users think about the posts
    
- **US33.  Delete comments:** 
As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
    
- **US34.  Edit a comment:** 
As an owner of a comment I can edit my comment so that I can fix or update my existing comment
    
#### Reviews

- **US35.  Create a review:** 
As a logged in user I can add a review to an event so that I can share my thoughts about the event
    
- **US36.  Review date:** 
As a user I can see how long ago a review was made so that I know how old it is
    
- **US37.  View reviews:** 
As a user I can read reviews on events so that I can know what other users thought of the event
    
- **US38.  Delete reviews:** 
As an owner of a review I can delete my review so that I can control removal of my review from the application
    
- **US39.  Edit a review:** 
As an owner of a review I can edit my review so that I can fix or update my existing review
    
#### Profiles

- **US40.  View profiles:**
As a user I can view other users profiles so that I can see their posts and events, and learn more about them through their stats (number of posts and events, follows and users followed) and the information they have provided about themselves and their careers
    
- **US41.  Most followed profiles:** 
As a user I can see a list of the most followed profiles so that I can see which profiles are popular
    
- **US42.  Follow/Unfollow a user:** 
As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
    
- **US43.  View all posts by a specific user:** 
As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide if I want to follow them
    
- **US44.  View all events by a specific user:** 
As a user I can view all the events listed by a specific user so that I can view their events, or decide if I want to follow them
    
- **US45.  Edit profile:** 
As a logged in user I can edit my profile so that I can change my profile picture, job title, employer name, about section, and location
    
- **US46.  Update username and password:** 
As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

## The Structure Plane

### Project Structure

you.i renders in two different ways depending on user authentication: this depends on whether the user is logged out or when the user is logged in. These two states determine changes content restriction and restriction of actions that can be taken by the user. 

When the user is logged out the pages: Discover (Posts and Events), and Sign In or Up are available from the Navigation Bar menu. When the user is logged in Feed (Posts and Events), Bookmarks, Sign Out and Profile Page also become available. 

When the user is logged in they can take actions that logged out users can't:

Logged in users can create events and posts; edit their own profile, username and password; created and edit their own reviews and comments; like and unlike posts, bookmark and unbookmark events; and follow and unfollow users.

### Features

### Navigation

The navigation bar is sleek and simple for exceptional functionality. It renders differently depending on whether you are logged in or not. For tablet and mobile devices, the navigation bar is a hamburger menu.

When the user is logged out, the following menu items are visible:

-   you.i Logo - This is visible throughout the site to all users and hyperlinks back to the homepage.
-   Discover - This is the first menu item and it is a dropdown menu, allowing users to view and discover either all posts or all events made by users on the website
- Authentication: Sign In and Sign Up icons are available and link to the respective forms

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.30.33_ea6795.png)

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.30.54_lxritw.png)

When the user is logged in, additional links become available to select:

-   Feed - Logged in users can use this dropdown menu to access the feed page for posts and for events - where they can see events and posts of other profiles they follow.
-   Bookmarks - Logged in users can use this link to view all the events that they have bookmarked
-   Authentication - Authentication icons change so that there is now no longer Sign In and Sign Up icons, and now instead display a link to the user's own profile page and a link to Sign Out of the site.
- Add Event and Add Post - Logged in users can access links to create events and posts 

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.31.31_tgrzgp.png)

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.31.46_qde468.png)

### Authentication

Users who have no created an account can click on the Sign Up link on the Navigation Bar to create a user account. I have used the standard dj-rest/auth/registration user account signup process for this.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.34.14_jfkkvm.png)

If a user has a you.i user account, they can click on the Sign In menu option in the Navigation Bar to sign into their account.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.34.01_qldvol.png)

To sign out, already signed in users can access the Sign Out option in the Navigation Bar.

### Posts Page / Homepage

There are three main react components which make up the Posts Page, which is also the website Homepage:

1.  Popular Profiles Component
2.  Post
3.  Search 

- ### Popular Profiles Component

The popular profiles component is a feature across the entire website that appears at the right of all pages on large screens and at the top of all pages on smaller screens. This component uses a filter to order all site users by followers count from highest to lowest. The top ten profiles are displayed on larger screens, and the top 4 on smaller screens.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.35.56_d9ui5c.png)

If the user isn't logged in, they can see the profile avatar and the username, and if the user is logged in, they will also see a button enabling them to follow or unfollow the profile. Each profile avatar can also be clicked on to view the full profile page of that user.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821128/Screenshot_2023-10-20_at_17.36.34_sprmqp.png)

- ### Post
All posts that are created by users on the you.i platform are displayed on the Posts Page / Homepage. All posts created are requested from the API and they are ordered by creation date with the most recent posts at the top, organised in descending order.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821130/Screenshot_2023-10-20_at_17.41.23_qszh71.png)

Each post displays the user who created it, the date it was created, the written content, an image and the tags. A count of how many users like the post and how many have commented on the post is visible too. By clicking on the post image or the comments count, the user is taken to the post's individual page.

- ### Search
If the user wants to search for specific posts can achieve this by using the search bar. Users can search all the posts by the username who posted it, the written content of the post, and the post tags. 

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821131/Screenshot_2023-10-20_at_17.45.21_v99vwp.png)

### Events Page

The Posts Page can be accessed through the 'Discover' dropdown on the Navigation Bar. The Events Page is similar to the Posts Page in that they share a similar layout and which components they use. There are four main react components which make up the Events Page:

1.  Popular Profiles Component
2.  Event
3.  Search and Filter

- ### Event
All events that are created by users on the you.i platform are displayed on the Events Page. All events created are requested from the API and they are ordered by creation date with the most recently created events at the top, organised in descending order.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821129/Screenshot_2023-10-20_at_17.40.36_zu69he.png)

Each event displays the user who created it, the date it was created, the event title, event description, event date, event category, event format, event image, and the tags. A count of how many users bookmarked the event and how many have reviewed the event is visible too. By clicking on the event image or the review count, the user is taken to the event's individual page.

- ### Search and Filter
If the user wants to search for specific events they have two ways to achieve this: 
1. Using the search bar, users can search all the events by the username who posted it, the description of the event, and the event tags. 

2.  All events are assigned a category on creation, and so the events list can be filtered by these categories to show only the events in one category selected by the user from the dropdown options.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821131/Screenshot_2023-10-20_at_17.45.08_anvqug.png)

### Feed
    
The feed pages can be accessed via the 'Feed' dropdown in the Navigation Bar. The Posts Feed and Events Feed pages look identical to their corresponding Posts Page and Events Page counterparts - the only difference is the filtering of the Event and Post components. On the feed paged all the Posts or Events are requested from the API, but a filter is used to only show Posts or Events posted by profiles that the currently logged in user is following. For this reason, this page is not visible if the user is not logged in. If the user isn't following any other profiles, a 'No Results found' message will appear instead.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821132/Screenshot_2023-10-20_at_17.46.59_oyonlv.png)

### Bookmarks Page

The Bookmarks Page looks identical to the Events Page, with te only difference being the filtering of the Event component. On selecting the Bookmarks menu option in the Navigation Bar, the Events component is filtered to only show the events that the logged in user had bookmarked by clicking the bookmark button. 

### Create a Post
    
If as user is logged in, they can create new posts that will be published on the Posts Page. By clicking on the Add Post menu option in the Navigation Bar, users are taken to the Create Post form, where they can submit the post creation form to the API. All fields are mandatory and an image must be uploaded for the post to be submitted successfully. Once the form has been submitted successfully, you can see the published post as you are re-directed automatically to the newly created post page. In addition, every time a user creates a new post, their posts count goes up on their profile page stats for other users to see how active they are on the platform.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821133/Screenshot_2023-10-20_at_17.48.27_oztbps.png)

### Create an Event
    
If as user is logged in, they can create new events that will be published on the Events Page. By clicking on the Add Event menu option in the Navigation Bar, users are taken to the Create Event form, where they can submit the event creation form to the API. All fields are mandatory and an image must be uploaded for the event to be submitted successfully. Once the form has been submitted successfully, you can see the published event as you are re-directed automatically to the newly created event page. In addition, every time a user creates a new event, their events count goes up on their profile page stats for other users to see how active they are as an event host.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821132/Screenshot_2023-10-20_at_17.48.17_ybzhgy.png)

### Post Page

The Post Page is a page that display all the post details and comments for one specific post. Users can reach this page by clicking on the post image or comment icon on any post on the Posts Page or Posts Feed page. If the user is the owner of the  post, they are also given the option to edit or delete this post by clicking on the three dots that appear next to the post creation date.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821130/Screenshot_2023-10-20_at_17.41.41_tjkzhd.png)

If the user selects the Delete option, the post is deleted from the API and is no longer visible on the website, and the user is redirected to Post Create form where they can choose to create a new post. If the user selects the Edit option, they are taken to the Post Edit Form, which has the same fields as the Create Post form, but the fields are already pre-populated with the existing post information. The user can edit the information in the fields and save the changes, which will redirect them to the Post Page where they can see that the post has been updated successfully.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821134/Screenshot_2023-10-20_at_17.50.41_zy4l0h.png)

Below the post details is the comments section. If there are no comments yet, the user will see a message telling them that there are no comments.

If the user is not logged in, they can read all the comments that have been published, but they can't create comments themselves unless they log in.

If the user logs in they will see a comment form above the existing comments where they can create their own comment about the post for other users to read. 

### Event Page

The Event Page is a page that display all the event details and reviews for one specific event. Users can reach this page by clicking on the event image or review icon on any event on the Events Page or Events Feed page. If the user is the owner of the event, they are also given the option to edit or delete this event by clicking on the three dots that appear next to the post creation date.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821129/Screenshot_2023-10-20_at_17.40.54_asgsxo.png)

If the user selects the Delete option, the event is deleted from the API and is no longer visible on the website, and the user is redirected to Event Create form where they can choose to create a new event. If the user selects the Edit option, they are taken to the Event Edit Form, which has the same fields as the Create Event form, but the fields are already pre-populated with the existing event information. The user can edit the information in the fields and save the changes, which will redirect them to the Event Page where they can see that the event has been updated successfully.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821134/Screenshot_2023-10-20_at_17.51.01_pfvurj.png)

Below the event details is the reviews section. If there are no reviews yet, the user will see a message telling them that there are no reviews.

If the user is not logged in, they can read all the reviews that have been published, but they can't create reviews themselves unless they log in.

If the user logs in they will see a review form above the existing reviews where they can create their own review about the event for other users to read. 

### Comments

Each Post Page has a button prompting the user to post a comment for that specific post. The comment form has one field, which is a text input field for users to write their comment in. The field are mandatory, and so the comment will not publish unless there is text in the field. When a comment is published, the comment count visibly increases for that post.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821133/Screenshot_2023-10-20_at_17.53.27_sbjqum.png)

If the comment owner would like to amend the comment once it has been published, they have the option to edit or delete the commentvia the three dots to the right of the published comment.

### Reviews

Each Event Page has a button prompting the user to post a review for that specific event. If you are the owner of the event, a tooltip will tell you that you can't review your own event, and the button remains inactive. Similarly, if you have already posted a review to the selected event, the tooltip will tell you that you have already reviewed the event and will prevent you from posting another one. 

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821133/Screenshot_2023-10-20_at_17.53.45_uev0rc.png)

If the event is not your own, and you haven't previously submitted a review, you can leave a review on an event. The review form has two parts to it. Firstly, it has a dropdown menu that allows the user to select a star rating of 0 - 5 for the event. Then it has a text input field for users to publish their thoughts on the event. Both fields are mandatory, and so the review will not publish unless both are fields are satisfied. When a review is published, the review count visibly increases for that event.

If the review owner would like to amend the review once it has been published, they have the option to edit or delete the review via the three dots to the right of the published review.

### Profile Page
    
Throughout the site, wherever you see profile avatars (e.g. in the popular profiles component, next to posts or events, comments or reviews etc.) users can click on the avatar to view the full Profile Page of that user. In the Navigation Bar, via the authentication icon, users you can access their own profile page as well.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821134/Screenshot_2023-10-20_at_17.55.03_bfez2m.png)

The Profile Page of a user can displays information about that user including their:

- profile picture
- username
- job title
- current employer
- location
- Profile Stats
- about section
- published posts
- published events

When a user signs up and creates a new you.i account, a basic profile is automatically created with a username, password and default avatar image. The only information that subsequently gets automatically generated in the profile page are the user's Profile Stats which include:

- The number of events the user has published
- The number of posts the user has published
- The number of profiles the user is following
- The number of profiles that are following the user

The user's job title, current employer, location and about section remains blank unless the user visits their own Profile Page and clicks on the three dots dropdown to Edit the profile and add their personal details to the page. If they click on the Edit Profile option, they are taken to a form to fill in and submit. Here, they can add or change their profile picture, job title, current employer, location and about section. Users are welcome to add as much or little personal info as they wish.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821135/Screenshot_2023-10-20_at_17.55.40_bjlunh.png)

Each profile also has a follow button that other users can click  to follow and unfollow the profile. Additionally, all the posts and events that the user has published are listed on their Profile Page. These posts and events can be viewed via a React-Bootstrap tabs. 

### Reusable React Components
- <b>Asset</b>
Reused throughout the website to load images, messages and loading spinners.

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821136/Screenshot_2023-10-20_at_17.58.04_xkzgd8.png)
 - <b>Avatar</b>
Reused to display avatars across different pages of the website
 - <b>NavBar</b>
Reused across every single page of the website.
 - <b>Not Found</b>
Encountered by users whenever they access an invalid url.
 - <b>Three Dots Edit Delete Dropdown Menu</b>
Reused to allow users to edit and delete events, posts, comments and reviews. 

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821135/Screenshot_2023-10-20_at_17.57.02_jmzmet.png)

![enter image description here](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697821137/Screenshot_2023-10-20_at_17.57.17_rfhame.png)

### Future Features
- Add event booking features
- Develop a more sophisticated 'rating' system for reviews that calculates and displays an average rating per event 
- Develop better UI for viewing review ratings - perhaps with star icons
- Develop admin crud functionality and frontend to moderate content being posted on the website
- Develop a mobile app to compliment the website

## The Skeleton Plane

### Wireframes

<details><summary>Homepage [Logged out user]</summary>

  

![Logged out wireframe](https://res.cloudinary.com/ddsrnz9la/image/upload/v1696003650/logged_out_wireframe_toddfd.png)

  

</details>


<details><summary>Homepage [Logged in user]</summary>

  

![Logged in wireframe](https://res.cloudinary.com/ddsrnz9la/image/upload/v1696003650/logged_in_wireframe_zz8bwc.png)

  

</details>



<details><summary>Events Page [Logged out user]</summary>

  

![Logged out wireframe](https://res.cloudinary.com/ddsrnz9la/image/upload/v1696003650/logged_out_events_wireframe_rduhui.png)

  

</details>

## The Surface Plane

### Design

#### Colour Scheme
A relatively neutral colour scheme was chosen with professionalism in mind, as this app is built for professional networking. As it's an app for UI/UX professionals, neutrality was also important to that the designs that the users would be sharing would be at the forefront. The colour scheme was also chosen with a focus on accessibility and contrast. The exact hex colours and colour scheme were generated by the  [https://coolors.co/](https://coolors.co/)  colour scheme generator.

![Colour scheme](https://res.cloudinary.com/ddsrnz9la/image/upload/v1695288483/colourscheme_bxquju.png)
    
#### Logo
    
The logo was created with the  [looka.com](https://looka.com/)  logo generator. I selected the typography, colour scheme, and icon, and then applied it through the website and as the favicon. Legibility was a priority, as well as its clear portrayal of the app purpose.

![Logo](https://res.cloudinary.com/ddsrnz9la/image/upload/v1695288292/logo_yvvzqc.png)
    
 #### Typography
    
DM Sans was imported from [Google Fonts](https://fonts.google.com/specimen/DM+Sans)  as the website's main font, as it is a low-contrast sans serif design, intended for use at smaller text sizes, which is ideal for full accessibility and responsively across smaller screen sizes. I also found it similar to, but more sleek than, sans-serif (the backup font for the website).
    
#### Imagery
    
- The illustrations used across the app were generated using [design.ai](https://designs.ai/graphicmaker), specifically their free colour-editable duotone illustration set. I picked this illustration set for their artfulness, playful tone, and appropriate subject matter - I then colour-edited them to the app's colour scheme. 
![Illustration](https://res.cloudinary.com/ddsrnz9la/image/upload/v1695116881/media/images/signup_lmstyf.png)

- The 'upload' vector applied to the 'create post' and 'create event' forms was sourced from free vector supplier (vecteezy.com)[https://www.vecteezy.com/) as it's design was clear and simple in purpose.
![Upload image](https://res.cloudinary.com/ddsrnz9la/image/upload/v1693481495/default_post_e675n6.jpg)

- The images for the posts, events and profiles created on the website were sourced from free stock image provider [Pexels](https://www.pexels.com/). 
- The icons were imported from [Font Awesome](https://fontawesome.com/).  

## Technologies Used - Frontend

### Languages

-   [HTML5](https://en.wikipedia.org/wiki/HTML)  - Provides the content and structure for the website
-   [CSS3](https://en.wikipedia.org/wiki/CSS)  - Provides the styling for the website
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)  - Provides interactive elements of the website
-   [React.js](https://en.wikipedia.org/wiki/React_(software))  - Provides the base for the frontend components

### Frameworks, Software and Web Applications

-   [React Bootstrap](https://react-bootstrap.github.io/)  - A CSS framework that helps build solid, responsive, mobile-first sites
-   [Balsamiq](https://balsamiq.com/)  - Used to create the wireframes
- [Coolors](https://coolors.co/)  - Used to pick the colour scheme of the website 
-   [Github](https://github.com/)  - Used to host the repository, store the commit history and manage the project board containing user stories
-   [Heroku](https://en.wikipedia.org/wiki/Heroku)  - A cloud platform that the application is deployed to
-   [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)  - Used to test site performance
- [Looka](https://looka.com/)  - Used to generate the you.i logo
-   [Tech Sini](https://techsini.com/multi-mockup/) - Used to generate the mockup of the final website on several devices
-   [Favicon](https://favicon.io/)  - Used to create the favicon
-   [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/)  - Used to debug and test responsiveness
- [Google Fonts](https://fonts.google.com/specimen/DM+Sans) - Used to import the website font 
-   [Cloudinary](https://cloudinary.com/)  - A service that hosts image files in the project.
-   [Coolers](https://mycolor.space/?hex=%23081045&sub=1)  - Used to create the colour palette
- [Design AI](https://designs.ai/graphicmaker) - Used to generate the illustrations used across the website
-   [HTML Validation](https://validator.w3.org/)  - Used to validate HTML code
-   [CSS Validation](https://jigsaw.w3.org/css-validator/)  - Used to validate CSS code
-   [JSHint Validation](https://jshint.com/)  - Used to validate JavaScript code
- [Pexels](https://www.pexels.com/) - Free stock image provider for posts, events and avatars that were uploaded 
- [Vecteezy](https://www.vecteezy.com/) - Used to source free vectors for default avatars and form vectors
- [Font Awesome](https://fontawesome.com/) - Used for icons across UI

## Testing

Please click [here](https://github.com/SamarZiadat/youi_frontend/blob/main/TESTING.md) to read more information about testing you.i's frontend.

## Deployment

### Deployment to Heroku

Once you have created a new gitpod workspace and set up the new project, you are ready to deploy to Heroku.

1.  In your heroku account, select Create New App, and give it a unique name related to your project.
2.  Select a region corresponding to where you live and click 'Create App'.
3.  Head into the 'Deploy' tab select GitHub as the 'deployment method', find your project repository and click 'Connect'.
4.  Click 'Deploy branch' to trigger Heroku to start building the application.
5.  Once you see the message saying 'build succeeded' you can click 'Open App' to see your application in the browser.

### Connect React Frontend to the API backend

Once you have set up the workspace and done a basic deploy to Heroku, you can connect the react workspace to your API, in order to send data to the API

1.  In the Heroku dashboard, go into the API application settings
2.  In 'Settings' add a new Config Var called 'CLIENT_ORIGIN' and set that to the URL for your deployed React application.
3.  Then add another Config Var called 'CLIENT_ORIGIN_DEV' and enter the URL of your Gitpod preview link, remembering to remove the trailing slash at the end. Gitpod occasionally changes this URL so keep an eye on it, as you are working on your project.
4.  Go back into your frontend Gitpod workspace, and install the Axios library using the command 'npm install axios'.
5.  Create a folder called 'API' and inside it create a file called 'axiosDefaults'.
6.  import axios at the top of the file
7.  Define your baseURL which is the unique URL of your deployed API project. 
8.  Set the content-type header to multi-part/form-data as the API will need to deal with images as well as text in it's requests.
9.  In order to avoid any CORS issues, set withCredentials to True.
10.  Import this file into App.js to be used across all pages

### Fork this Project Repository

It is possible to make an independent copy of a GitHub Repository by forking the GitHub account. The copy can then be viewed and it is also possible to make changes in the copy without affecting the original repository. To fork the repository, follow these steps:

1.  After logging in to GitHub, locate the repository. On the top right side of the page there is a 'Fork' button. Click on the button to create a copy of the original repository.

### Clone this Project Repository

A Git clone creates a linked copy of the project that will continue to synchronize with the original repository. In order to create a clone, you can click on the 'Code' button inside the selected repository and then select the 'Clone' option from the dropdown list.

## Credits

-   [React Bootstrap documentation:](https://react-bootstrap.netlify.app/)  - Documentation used for styling and to build responsive web pages
-   [Code Institute:](https://codeinstitute.net/)  Walkthrough modules for the Moments app
-   [Code Institute Slack Community:](https://app.slack.com/)  Slack community for troubleshooting and FAQ.
-   [Code Institute Tutor Support:](https://app.slack.com/)  For help and support
-   [React documentation:](https://legacy.reactjs.org/docs/getting-started.html)  Everything you need to know about React
-   [Stack Overflow:](https://stackoverflow.com/)  For troubleshooting and FAQ
-   [W3Schools:](https://www.w3schools.com/)  Online Web Tutorials

## Acknowledgments

-   My mentor at Code Institute, Adeye Adegbenga, for code review, help and feedback. Very much appreciated!