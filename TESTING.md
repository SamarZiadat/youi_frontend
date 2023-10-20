# you.i

## Frontend Testing

### Table of Contents

- [Code Validation](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#code-validation)
- [Automated Testing](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#automated-testing)
- [Manual Testing](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#manual-testing)
- [Browser Compatibility](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#browser-compatibility)
- [Lighthouse Testing](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#lighthouse-testing)
- [Peer Review](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#peer-review)
- [Known Bugs](https://https://github.com/SamarZiadat/youi_frontend/TESTING.md#known-bugs)

### Code Validation

The you.i site has been passed through the [W3C html Validator](https://validator.w3.org/), the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the [ESLint Validator](https://eslint.org/docs/latest/use/getting-started#next-steps).

#### W3C HTML Validation Results

No errors were found when the deployed URL was passed through W3C HTML validation checker. 9 warning messages warned of trailing slashes in the index.html file, which I quickly resolved.

![HTML testing](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697796073/html_test_rbfm0z.png)

#### W3C CSS Validation Results

No errors or warnings were found when the deployed URL was passed through the W3C CSS Validation checker.

![CSS testing](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697796073/css_test_uvo8px.png)

#### ESLint Validation Results

There were only 9 errors regarding the testing files, so I have left these.

![ESLint testing](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697796073/eslint_test_lf4wt0.png)

### Automated Testing

The following Jest automated tests have been written to check that frontend components render correctly:

<b>NotFound.js</b>
Go Back to homepage link renders ✓

<b>Avatar.js</b>
Avatar renders ✓

### Manual Testing

As well as the automated tests, I carried out the following
manual tests to check all the user story scenarios:

#### Authentication - Logged Out User

✓ Typing posts feed url into the browser, the user can not access the feed page. User is redirected to homepage

✓ Typing events feed url into the browser, the user can not access the feed page. User is redirected to homepage

✓ Typing bookmarked url into the browser, the user views the homepage

✓ Typing create post url into the browser, the user is redirected back to the homepage

✓ Typing create event url into the browser, the user is redirected back to the homepage

✓ Typing edit profile form url into the browser, the user is redirected back to the homepage

✓ Typing even edit form url into the browser, the user is redirected back to the homepage

✓ Desktop and tablet users can see an image next to the sign in form

✓ Mobile users can't see an image next to the sign in form

✓ Desktop and tablet users can see an image next to the sign up form

✓ Mobile users can't see an image next to the sign up form

**Navigation - Logged In User**

✓ Clicking the navbar brand logo loads the home page

✓ User can't see the sign in button in the navigation bar profile section dropdown menu

✓ User can't see the sign up button in the navigation bar profile section dropdown menu

✓ The user can see the profile page link in the navigation bar

✓ The user can see the sign out link in the navigation bar

✓ Users can see the Discover menu option in the navigation bar

✓ Users can see the Feed menu option in the navigation bar

✓ Users can see the Bookmarks menu dropdown in the navigation bar

✓ Users can see the 'Add Post' button in the navigation bar

✓ Users can see the 'Add Event' button in the navigation bar

✓ Tablet and mobile users can see the navigation bar options in a burger menu dropdown

**Posts Page / Homepage - Logged Out User**

✓ Users can view the Popular Profiles component

✓ Users can not view the follow button under each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view all posts - content, image and tags

✓ Users can view the likes count

✓ Users can view the comments count

✓ Clicking on an post image, users are redirected to the selected post detail page

✓ Clicking on a post comments count, users are redirected to the selected post detail page

✓ Clicking on an post owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular post by typing in the post title, the username of the post owner or the post tag

**Posts Page / Homepage - Logged In User**

✓ Users can view the Popular Profiles component

✓ Users can view the follow button under each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Clicking on a popular profile follow button, users can follow or unfollow profile

✓ Users can view all posts - content, image and tags

✓ Users can view the likes count

✓ If the logged in user is the post owner, user can not click the like button - tooltip warning given

✓ Clicking on the like button, if logged in user is not post owner, like count goes up and down on a toggle

✓ Users can view the comments count

✓ Clicking on a post image, users are redirected to the selected post detail page

✓ Clicking on a post comments count, users are redirected to the selected post detail page

✓ Clicking on a post owner avatar, users are redirected to the selected profile page

**Events Page - Logged Out User**

✓ Users can view the Popular Profiles component

✓ Users can not view the follow button under each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view all events - title, description, event date, event format, event category, image and tags

✓ Users can view the bookmarks count

✓ Users can view the reviews count

✓ Clicking on an event image, users are redirected to the selected event detail page

✓ Clicking on an event reviews count, users are redirected to the selected event detail page

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular event by typing in the event title, the username of the event owner, the event date, or the event tag

✓ Users can filter the list of events by selecting a category from the category dropdown

**Events Page - Logged In User**

✓ Users can view the Popular Profiles component

✓ Users can not view the follow button under each Popular Profile

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the follow button under each Popular Profile

✓ Clicking on a popular profile follow button, users can follow or unfollow profile

✓ Users can view all events - title, description, event date, event format, event category, image and tags

✓ Users can view the bookmarks count

✓ If the logged in user is the event owner, user can not click the bookmark button - tooltip warning given

✓ Clicking on the bookmark button, if logged in user is not event owner, bookmark count goes up and down on a toggle

✓ Users can view the reviews count

✓ Clicking on an event image, users are redirected to the selected event detail page

✓ Clicking on an event reviews count, users are redirected to the selected event detail page

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular event by typing in the event title, the username of the event owner, the event date, or the event tag

✓ Users can filter the list of events by selecting a category from the category dropdown

**Post Page - Logged Out User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view details of a single post

✓ Clicking on an post owner avatar, users are redirected to the selected profile page

✓ Clicking on the like button, users are advised to login to like a post

✓ Users can view any published comments posted about this event

✓ Users can not see the create comment form

**Post Page - Logged In User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view details of a single post

✓ Users can view the like count

✓ Users can view the comments count

✓ Clicking on an post owner avatar, users are redirected to the selected profile page

✓ Clicking on the like button, like count goes up and down on a toggle

✓ If the logged in user is the post owner, user can not click the like button - tooltip warning given

✓ Users can view any published comment posted about this post

✓ Users can view the create comment form

✓ Users can type into the comment form and submit a comment to the post

✓ On submitting a comment, the comment count increases by 1

✓ If the logged in user is the owner of a published comment, they can see the three dots edit/delete menu next to it

✓ User can edit their own comment via the three dots edit/delete menu

✓ User can delete their own comment via the three dots edit/delete menu

✓ On deleting a comment, the comment count decreases by 1

✓ If the logged in user is the owner of the post, they can see the three dots edit/delete menu next to the created at date

✓ User can edit their own posts via the three dots edit/delete menu

✓ On clicking edit post, user is redirected to the edit post page

✓ User can delete their own posts via the three dots edit/delete menu

✓ On clicking delete post, user is taken to create post page

**Event Page - Logged Out User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view details of a single event

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Clicking on the bookmark button, users are advised to login to bookmark an event

✓ Users can view any published reviews posted about this event

✓ Users can not see the create review form

**Event Page - Logged In User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view details of a single event

✓ Users can view the bookmarks count

✓ Users can view the reviews count

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Clicking on the bookmark button, bookmark count goes up and down on a toggle

✓ If the logged in user is the event owner, user can not click the bookmark button - tooltip warning given

✓ Users can view any published review posted about this event

✓ Users can view the create review form

✓ Users can type into the review form, select a rating from the dropdown, and submit a review to the event

✓ If logged in user is event owner, they cannot submit a review to the event

✓ If logged in user has already published a review for the event, they cannot submit a second review

✓ On submitting a review, the comment count increases by 1

✓ If the logged in user is the owner of a published review, they can see the three dots edit/delete menu next to it

✓ User can edit their own review via the three dots edit/delete menu

✓ User can delete their own review via the three dots edit/delete menu

✓ On deleting a review, the review count decreases by 1

✓ If the logged in user is the owner of the event, they can see the three dots edit/delete menu next to the created at date

✓ User can edit their own events via the three dots edit/delete menu

✓ On clicking edit event, user is redirected to the edit events page

✓ User can delete their own events via the three dots edit/delete menu

✓ On clicking delete event, user is taken to create event page

**Add Post Page - Logged In User**

✓ Users can view the empty form to create a new post

✓ Users can upload an image into the form

✓ Users can change an uploaded image

✓ Users can't submit the form without an image - warning message displayed

✓ Users can't submit the form without at least one tag - warning message displayed

✓ Users can't submit the form without filling out the post text field - warning message displayed

**Add Event Page - Logged In User**

✓ Users can view the empty form to create a new event

✓ Users can upload an image into the form

✓ Users can change an uploaded image

✓ Users can't submit the form without an image - warning message displayed

✓ Users can't submit the form without at least one tag - warning message displayed

✓ Users can't submit the form without filling out the event title field - warning message displayed

✓ Users can't submit the form without filling out the event description field - warning message displayed

✓ Users can't submit the form without selecting an event date - warning message displayed

✓ Users can submit the form without selecting an event format - but default option 'in person' will be published for them

✓ Users can submit the form without selecting an event category - but default option 'conference' will be published for them

**Edit Event Page - Logged In User**

✓ Users can view the event form pre-populated with the current event details

✓ Users can upload an image into the form

✓ Users can change an uploaded image

✓ Users can't submit the form without an image - warning message displayed

✓ Users can't submit the form without at least one tag - warning message displayed

✓ Users can't submit the form without filling out the event title field - warning message displayed

✓ Users can't submit the form without selecting an event date - warning message displayed

✓ Users can't submit the form without filling out the event description field - warning message displayed

**Edit Post Page - Logged In User**

✓ Users can view the post form pre-populated with the current post details

✓ Users can upload an image into the form

✓ Users can change an uploaded image

✓ Users can't submit the form without an image - warning message displayed

✓ Users can't submit the form without at least one tag - warning message displayed

✓ Users can't submit the form without entering written content for the post - warning message displayed

**Event Feed - Logged In User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the follow button under each Popular Profile

✓ Clicking on a popular profile follow button, users can become a follower of the selected profile

✓ Users can view all events posted by profiles they follow - title, description, event date, category, format, image and tags

✓ Users can view the bookmarks count

✓ Users can view the reviews count

✓ Users see a new results found message if they don't follow any profiles, or the profiles they follow haven't posted any events

✓ Clicking on an event image, users are redirected to the selected event page

✓ Clicking on the bookmark button, bookmark count goes up and down on a toggle

✓ If the logged in user is the event owner, user can not click the bookmark button - tooltip warning given

✓ Clicking on an event reviews count, users are redirected to the selected event detail page

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular event by typing in the event title, the username of the event owner, the event date, or the event tag

✓ Users can filter the list of events by selecting a category from the category dropdown

**Post Feed - Logged In User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the follow button under each Popular Profile

✓ Clicking on a popular profile follow button, users can become a follower of the selected profile

✓ Users can view all posts posted by profiles they follow - written content, image and tags

✓ Users can view the likes count

✓ Users can view the comments count

✓ Users see a new results found message if they don't follow any profiles, or the profiles they follow haven't created any posts

✓ Clicking on a post image, users are redirected to the selected post page

✓ Clicking on the like button, likes count goes up and down on a toggle

✓ If the logged in user is the post owner, user can not click the like button - tooltip warning given

✓ Clicking on an post comments count, users are redirected to the selected post detail page

✓ Clicking on a post owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular post by typing in keywords from the post content, the username of the post owner, or the post tag

**Bookmarks - User Logged In**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the follow button under each Popular Profile

✓ Clicking on a popular profile follow button, users can become a follower of the selected profile

✓ Users can view all events where they have clicked the bookmark button - title, description, event date, category, format, image and tags

✓ Users see a new results found message if they haven't clicked bookmark button on any events

✓ Users can view the bookmark count

✓ Users can view the reviews count

✓ Clicking on an event image, users are redirected to the selected event page

✓ Clicking on the bookmark button, bookmark count goes down and event is removed from bookmarks page

✓ Clicking on an event reviews count, users are redirected to the selected event page

✓ Clicking on an event owner avatar, users are redirected to the selected profile page

✓ Users can search for a particular event by typing in the event title, keywords from the description, the username of the event owner, the event date, or the event tag

✓ Users can filter the list of events by selecting a category from the category dropdown

**Profile Page - Logged In User**

✓ Users can view the Popular Profiles component

✓ Clicking on a popular profile avatar, users are redirected to the selected profile page

✓ Users can view the number of posts the profile owner has posted

✓ Users can view the number of events the profile owner has posted

✓ Users can view the number of followers the selected profile has

✓ Users can view the number of other profiles the selected profile is following

✓ Users can view the profile owner's username

✓ If the profile owner has provided this information, users can view the profile owner's about section, location, job title and current employer name

✓ Users can view the posts which were posted by the selected profile

✓ Users can view the events which were posted by the selected profile

✓ Clicking on the post image, users are redirected to the selected post page

✓ Clicking on the event image, users are redirected to the selected event page

✓ Clicking on the like button, like count goes up and down for post on a toggle

✓ Clicking on the bookmark button, bookmark count goes up and down for event on a toggle

✓ If the logged in user is the post owner, user can not click the like button - tooltip warning given

✓ If the logged in user is the event owner, user can not click the bookmark button - tooltip warning given

✓ Clicking on post comments count, users are redirected to the selected post page

✓ Clicking on an event reviews count, users are redirected to the selected event page

✓ If the user is viewing their own profile page, they can see the three dots edit profile menu next to the profile stats

✓ Users can edit their own profile page via the three dots edit/delete menu

✓ On clicking edit profile, user is redirected to the edit profile page

✓ User can edit their own username via the three dots edit profile menu

✓ User can edit their own password via the three dots edit profile menu

**Edit Profile Page - Logged In User**

✓ Users can view the profile form pre-populated with the current profile details

✓ Users can upload an avatar image into the form

✓ Users can change the uploaded image

✓ Users can input their location into the form

✓ Users can input their job title into the form

✓ Users can input their employer name into the form

✓ Users can input their location into the form

✓ Users can input information into their about section on the form

### Browser Compatibility

Chrome DevTools was used to test the responsiveness of the application on different screen sizes. In addition, testing has been carried out on the following browsers:

- Chrome Version 107.0.5304.87
- Edge Version 107.0.1418.24
- Firefox Version 94.0.1
- Safari on macOS (Safari Version 15.6)

### Lighthouse Testing

Google Lighthouse in Chrome Developer Tools was used to test the application within the areas of _Performance_, _Accessibility_, _Best Practices_ and _SEO_. The testing showed the following:

- Home Page - Performance: 72, Accessibility: 94, Best Practises: 875, SEO: 100

![Lighthouse test](https://res.cloudinary.com/ddsrnz9la/image/upload/v1697796073/lighthouse_test_hh2kin.png)

### Peer Review

In addition to the above tests, I asked my peers to review my code and interact with the site and their overall response was positive.

### Known Bugs

Apart from the ESLint testing errors highlighted above, there are authentication issues for the project. There are known issues with authentication on mobile devices where the React app and the DRF app live on different servers. When the application tries to set the JWT json web token as a http-only cookie in the browser, it gets blocked and cannot be set due to some browser settings. In Safari and Chrome on iOS, users must enable "Allow cross-website tracking" in order to access the full functionality of the project.
