// Component imports
import PageNotFound from "../assets/not-found.png";
import Asset from "./Asset";
// CSS imports
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={`${styles.NotFound} mt-3 text-center`}>
        <Link to={"/"}>404 Error. Click here to return to the Homepage</Link>
        <Asset src={PageNotFound} />
      </div>
    </>
  );
};

export default NotFound;
