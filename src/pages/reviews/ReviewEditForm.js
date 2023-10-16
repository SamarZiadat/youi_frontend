import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentReviewCreateEditForm.module.css";

function ReviewEditForm(props) {
    const { id, review, rating, setShowEditForm, setReviews } = props;

    const [formReview, setFormReview] = useState(review);

    const [formRating, setFormRating] = useState(rating);

    const handleReviewChange = (event) => {
        setFormReview(event.target.value);
    };

    const handleRatingChange = (rate) => {
        setFormRating(rate.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/reviews/${id}/`, {
                review: formReview.trim(),
                rating: formRating.trim(),
            });
            setReviews((prevReviews) => ({
                ...prevReviews,
                results: prevReviews.results.map((review) => {
                    return review.id === id
                        ? {
                            ...review,
                            review: formReview.trim(),
                            rating: formRating.trim(),
                            updated_at: "now",
                        }
                        : review;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="textarea"
                    value={formReview}
                    onChange={handleReviewChange}
                    rows={2}
                />
            </Form.Group>
            <Form.Group className="pr-1">
                <Form.Control
                    className={styles.Form}
                    as="select"
                    value={formRating}
                    onChange={handleRatingChange}
                    >
                        <option value="5 stars">5 stars</option>
                        <option value="4 stars">4 stars</option>
                        <option value="3 stars">3 stars</option>
                        <option value="2 stars">2 stars</option>
                        <option value="1 star">1 star</option>
                        <option value="0 stars">0 stars</option>
                </Form.Control>
            </Form.Group>
            <div className="text-right">
                <button
                    className={styles.Button}
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    cancel
                </button>
                <button
                    className={styles.Button}
                    disabled={!review.trim()}
                    type="submit"
                >
                    save
                </button>
            </div>
        </Form>
    );
}

export default ReviewEditForm;