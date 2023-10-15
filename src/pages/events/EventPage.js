// React imports
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// Bootstrap imports
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// CSS imports
import appStyles from "../../App.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Axios imports
import { axiosReq } from "../../api/axiosDefaults";
// Component imports
import Event from "./Event";
import ReviewCreateForm from "../reviews/ReviewCreateForm";
import PopularProfiles from "../profiles/PopularProfiles";
import Review from "../reviews/Review";

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [reviews, setReviews] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: event }, { data: reviews }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
          axiosReq.get(`/reviews/?event=${id}`),
        ]);
        setEvent({ results: [event] });
        setReviews(reviews);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Event {...event.results[0]} setEvents={setEvent} eventPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <ReviewCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              event={id}
              setEvent={setEvent}
              setReviews={setReviews}
            />
          ) : reviews.results.length ? (
            "Reviews"
          ) : null}
          {reviews.results.length ? (
            reviews.results.map(review => (
              <Review key={review.id} {...review}/>
            ))
          ) : currentUser ? (
            <span>No reviews yet, be the first to leave a review!</span>
          ) : (
            <span>No reviews yet.</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default EventPage;
