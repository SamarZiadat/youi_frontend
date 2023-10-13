import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import {Container, Row, Col} from 'react-bootstrap'

const Event = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        reviews_count,
        bookmarks_count,
        bookmark_id,
        title,
        description,
        event_date,
        tags,
        category,
        format,
        image,
        updated_at,
        eventPage,
        setEvents,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/events/${id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/events/${id}/`);
            history.goBack();
        } catch (err) {
            //console.log(err);
        }
    };

    const handleBookmark = async () => {
        try {
            const { data } = await axiosRes.event("/bookmarks/", { event: id });
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, bookmarks_count: event.bookmarks_count + 1, bookmark_id: data.id }
                        : event;
                }),
            }));
        } catch (err) {
            //console.log(err);
        }
    };

    const handleUnbookmark = async () => {
        try {
            await axiosRes.delete(`/bookmarks/${bookmark_id}/`);
            setEvents((prevEvents) => ({
                ...prevEvents,
                results: prevEvents.results.map((event) => {
                    return event.id === id
                        ? { ...event, bookmarks_count: event.bookmarks_count - 1, bookmark_id: null }
                        : event;
                }),
            }));
        } catch (err) {
            //console.log(err);
        }
    };

    return (
        <Card className={styles.Event}>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} />
                        {owner}
                    </Link>
                    <div className="d-flex align-items-center">
                        <span>{updated_at}</span>
                        {is_owner && eventPage && (
                            <EditDeleteDropdown
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )}
                    </div>
                </Media>
            </Card.Body>
            <Card.Body>
                {title && <Card.Text><b>{title}</b></Card.Text>}
                {description && <Card.Text>{description}</Card.Text>}
                <Container className="event-grid">
                <Row>
                <Col xs={6} md={4}>
                {event_date && <Card.Text><i className="fa-regular fa-calendar-days"></i>{event_date}</Card.Text>}
                </Col>
                <Col xs={6} md={4}>
                {category && <Card.Text className={styles.Category}><i className="fa-solid fa-users-line"></i>{category}</Card.Text>}
                </Col>
                <Col xs={6} md={4}>
                {format && <Card.Text className={styles.Format}><i className="fa-solid fa-globe"></i>{format}</Card.Text>}
                </Col>
                </Row>
                </Container>
            </Card.Body>
            <Link to={`/events/${id}`}>
                <Card.Img src={image} alt="Event image" />
            </Link>
            <Card.Body>
                {tags && <Card.Text className={styles.Tags}><i className="fa-solid fa-tag"></i>{tags}</Card.Text>}
                <div className={styles.EventBar}>
                    {is_owner ? (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>You can't bookmark your own event!</Tooltip>}
                        >
                            <i className="fa-solid fa-bookmark" />
                        </OverlayTrigger>
                    ) : bookmark_id ? (
                        <span onClick={handleUnbookmark}>
                            <i className={`fa-solid fa-bookmark ${styles.Bookmark}`} />
                        </span>
                    ) : currentUser ? (
                        <span onClick={handleBookmark}>
                            <i className={`fa-solid fa-bookmark ${styles.BookmarkOutline}`} />
                        </span>
                    ) : (
                        <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>Log in to bookmark events!</Tooltip>}
                        >
                            <i className="fa-solid fa-bookmark" />
                        </OverlayTrigger>
                    )}
                    {bookmarks_count}
                    <Link to={`/events/${id}`}>
                        <i className="fa-solid fa-ranking-star" />
                    </Link>
                    {reviews_count}
                </div>
            </Card.Body>
        </Card>
    );
};

export default Event;