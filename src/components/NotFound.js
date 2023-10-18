// Component imports
import PageNotFound from "../assets/not-found.png";
import Asset from "./Asset";
// CSS imports
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={`${styles.NotFound} mt-3 text-center`}>
        <p>404: Page not found</p>
        <Asset src={PageNotFound} />
      </div>
    </>
  );
};

export default NotFound;
