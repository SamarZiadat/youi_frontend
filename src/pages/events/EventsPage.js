// React imports
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
// Bootstrap imports
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// Component imports
import Event from "./Event";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import PopularProfiles from "../profiles/PopularProfiles";
import { fetchMoreData } from "../../utils/utils.js";
// CSS imports
import appStyles from "../../App.module.css";
import styles from "../../styles/EventsPage.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Axios imports
import { axiosReq } from "../../api/axiosDefaults";

function EventsPage({ message, filter = "" }) {
  const [events, setEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(
          `/events/?${filter}query=${query}&category=${category}`
        );
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchEvents();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, category, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mr-sm-2"
            placeholder="Search events by title, profile, event date, or tags..."
          />
          <Form.Control
            as="select"
            placeholder="Choose..."
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option key="blankChoice" hidden value>
              {" "}
              Category{" "}
            </option>
            <option>Conference</option>
            <option>Networking</option>
            <option>Panel</option>
            <option>Product launch</option>
            <option>Talk</option>
            <option>Workshop</option>
            <option>Other</option>
          </Form.Control>
        </Form>

        {hasLoaded ? (
          <>
            {events.results.length ? (
              <InfiniteScroll
                children={events.results.map((event) => (
                  <Event key={event.id} {...event} setEvents={setEvents} />
                ))}
                dataLength={events.results.length}
                loader={<Asset spinner />}
                hasMore={!!events.next}
                next={() => fetchMoreData(events, setEvents)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default EventsPage;
