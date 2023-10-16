// React imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Bootstrap imports
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
// CSS imports
import styles from "../../styles/CommentReviewCreateEditForm.module.css";
// Component imports
import Avatar from "../../components/Avatar";
// Axios imports
import { axiosRes } from "../../api/axiosDefaults";

function ReviewCreateForm(props) {
    const { event, setEvent, setReviews, profileImage, profile_id } = props;
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const [errors, setErrors] = useState({});

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (rate) => {
        setRating(rate.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosRes.post("/reviews/", {
                review,
                rating,
                event,
            });
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: [data, ...prevReviews.results],
            }));
            setEvent((prevEvent) => ({
                results: [
                    {
                        ...prevEvent.results[0],
                        reviews_count: prevEvent.results[0].reviews_count + 1,
                    },
                ],
            }));
            setReview("");
            setRating("");
            console.log(setRating)
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors({ detail: err.response?.data.detail });
                console.log(err.response)
            }
            console.log(errors)
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Label className="d-none">Review</Form.Label>
                    <Form.Control
                        className={styles.Form}
                        placeholder="my review..."
                        as="textarea"
                        value={review}
                        onChange={handleReviewChange}
                        rows={2}
                    />
                </InputGroup>
                </Form.Group>
                {errors.review?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
                <Form.Group>
                <Form.Label className="d-none">Rating</Form.Label>
                    <Form.Control
                        className={styles.Form}
                        as="select"
                        name="rating"
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        <option key="blankChoice" hidden value>
                            {" "}
                            Rating{" "}
                        </option>
                        <option value="5 stars">5 stars</option>
                        <option value="4 stars">4 stars</option>
                        <option value="3 stars">3 stars</option>
                        <option value="2 stars">2 stars</option>
                        <option value="1 star">1 star</option>
                        <option value="0 stars">0 stars</option>
                    </Form.Control>
                </Form.Group>
                {errors.rating?.map((message, idx) => (
                            <Alert key={idx} variant="warning">
                                {message}
                            </Alert>
                        ))}
            <button
                className={`${styles.Button} btn d-block ml-auto`}
                disabled={!review.trim()}
                type="submit"
            >
                post
            </button>
            {errors.detail && (
                <Alert variant="warning" className="mt-3">
                    {errors.detail}
                </Alert>
            )}
        </Form>
    );
}

export default ReviewCreateForm;