// Component imports
import PageNotFound from "../assets/not-found.png";
import Asset from "./Asset";
// CSS imports
import styles from "../styles/NotFound.module.css";
// React imports
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
