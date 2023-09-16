import "../styles/Card.css";
import moment from "moment";

const Card = ({ userData }) => {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__top">
          <img className="card__profile" src={userData?.avatar_url} alt="" />
          <div className="card__nu">
            <h4 className="card__name">{userData?.name}</h4>
            <h4 className="card__username">{userData?.login}</h4>
            <p className="card__ff">
              {userData.followers} followers · {userData.following} following
            </p>
          </div>
        </div>
        <div className="card__bottom">
          <p className="card__bio">{userData?.bio}</p>
          <p className="card__pg">Public Repos - {userData?.public_repos}</p>
          <p className="card__pg">Public Gists - {userData?.public_gists}</p>
          <p className="card__pg">
            Profile created at{" "}
            {moment(userData?.created_at).format("YYYY-MM-DD")}
          </p>

          <a href={userData?.html_url} className="git__btn" target="_blank">
            Github ↩
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
