// import clsx from "clsx";
import s from "./NotFound.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(s.link, isActive && s.active);
// };

const NotFound = () => {
  return (
    <div className={s.room}>
      <div className="s.cuboid">
        <div className="s.side"></div>
        <div className="s.side"></div>
        <div className="s.side"></div>
      </div>
      <div className="s.oops">
        <h2>OOPS!</h2>
        <p>We can not find the page that you are looking for :</p>
      </div>
      <div className="s.center-line">
        <div className="s.hole">
          <div className="s.ladder-shadow"></div>
          <div className="s.ladder"></div>
        </div>
        <div className="s.four">4</div>
        <div className="s.four">4</div>
        <div className="s.btn">
          <a href="#">BACK TO HOME</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
