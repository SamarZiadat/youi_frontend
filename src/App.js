// React imports
import { Route, Switch } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
//CSS imports
import styles from "./App.module.css";
// Bootstrap imports
import Container from "react-bootstrap/Container";
// Axios imports
import axios from "axios";
import "./api/axiosDefaults";
// Component imports
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import NavBar from "./components/NavBar";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import EventCreateForm from "./pages/events/EventCreateForm";
import EventPage from "./pages/events/EventPage";
import EventsPage from "./pages/events/EventsPage";
import EventEditForm from "./pages/events/EventEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const profile_id = currentUser?.profile_id || "";

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the search keyword/s." />
                )}
              />
              <Route
                exact
                path="/postsfeed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword/s or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/eventspage"
                render={() => (
                  <EventsPage message="No results found. Adjust the search keyword/s or category." />
                )}
              />
              <Route
                exact
                path="/eventsfeed"
                render={() => (
                  <EventsPage
                    message="No results found. Adjust the search keyword/s or category, or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/bookmarked"
                render={() => (
                  <EventsPage
                    message="No results found. Adjust the search keyword/s or category, or bookmark an event."
                    filter={`bookmarks__owner__profile=${profile_id}&ordering=-bookmarks__created_at&`}
                  />
                )}
              />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route
                exact
                path="/posts/create"
                render={() => <PostCreateForm />}
              />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route
                exact
                path="/posts/:id/edit"
                render={() => <PostEditForm />}
              />
              <Route
                exact
                path="/events/create"
                render={() => <EventCreateForm />}
              />
              <Route exact path="/events/:id/edit" render={() => <EventEditForm />} />
              <Route exact path="/events/:id" render={() => <EventPage />} />
              <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
