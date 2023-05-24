import { FunctionComponent, HTMLAttributes, use } from "react";
import styles from "./card.module.css";
import { User } from "@/app";

interface GhCardProps extends HTMLAttributes<HTMLDivElement> {
  dark? : Boolean
  user: User;
}

const GhCard: FunctionComponent<GhCardProps> = ({ user, className ,dark}) => {
  console.log(dark);
  
  const mode = dark ? "card dark" : "card"
  return (
    <>
      <div className={className }>
        {" "}
        <div className={mode}>
          <div className="bg-secondary h-5 w-full left-0 right-0 absolute "></div>
          <div className="card-wrapper ">
            <a
              href={"https://github.com/" + user.login}
              target="_blank"
              rel="noopener"
            >
              <img
                id="github-logo"
                src="https://i.ibb.co/frv5pB3/github-logo.png"
                alt="github-logo"
              />
            </a>
            <div className="card-header">
              <div className="card-img-wrapper">
                <img src={"https://avatars.githubusercontent.com/"+ user.login } />
              </div>
              <h1>
                <a
                  className="card-title"
                  href="${t.html_url}"
                  target="_blank"
                  rel="noopener"
                >
                  
                  {user.name}
                </a>
              </h1>
              <div className="card-responsename">
                <a href="${t.html_url}" target="_blank" rel="noopener">
                  {user.login}
                </a>
              </div>
              <p className="card-desc">{user.bio?? ""}</p>
              <div className="card-footer">
                <div className="footer-box">
                  <div className="box-wrapper">
                    <div className="count">{user.followers}</div>
                    <div className="box-text">Followers</div>
                  </div>
                  <div className="box-wrapper">
                    <div className="count">{user.following}</div>
                    <div className="box-text">Following</div>
                  </div>
                  <div className="box-wrapper">
                    <div className="count">{user.public_repos}</div>
                    <div className="box-text">Repositories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default GhCard;
