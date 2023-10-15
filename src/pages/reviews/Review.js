// React imports
import React from "react";
import { Link } from "react-router-dom";
// Bootstrap imports
import { Media } from "react-bootstrap";
// Component imports
import Avatar from "../../components/Avatar";
// CSS imports
import styles from "../../styles/CommentReview.module.css";

const Review = (props) => {
  const { profile_id, profile_image, owner, updated_at, review, rating } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{rating}</p>
          <p>{review}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Review;