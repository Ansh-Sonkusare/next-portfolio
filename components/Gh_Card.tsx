import { FunctionComponent } from "react";
import styles from "./card.module.css";

interface GhCardProps {}

const GhCard: FunctionComponent<GhCardProps> =  () => {
 
   
  return (
    <>
      <div className="card dark">
        <div className="cover "></div>
        <div className="card-wrapper ">
          <a
            href="https://github.com/${t.login}"
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
              <img src="https://avatars.githubusercontent.com/${t.login}" />
            </div>
            <h1>
              <a
                className="card-title"
                href="${t.html_url}"
                target="_blank"
                rel="noopener"
              >
                TEAKMIRROR
              </a>
            </h1>
            <div className="card-responsename">
              <a href="${t.html_url}" target="_blank" rel="noopener">
                TEAKMIRROR
              </a>
            </div>
            <p className="card-desc">TEAKMIRROR</p>
            <div className="card-footer">
              <div className="footer-box">
                <div className="box-wrapper">
                  <div className="count"></div>
                  <div className="box-text">Followers</div>
                </div>
                <div className="box-wrapper">
                  <div className="count"></div>
                  <div className="box-text">Following</div>
                </div>
                <div className="box-wrapper">
                  <div className="count"></div>
                  <div className="box-text">Repositories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const template = document.createElement("template"); template.innerHTML = `
//     <style>

//     </style>
//     <div class="card"></div>
// `;

//  class myCard extends HTMLElement {
//     constructor() { super(), this._shadowRoot = this.attachShadow({ mode: "open" }), this._shadowRoot.append(template.content.cloneNode(!0)) } get observedAttribute() { return ["data-theme"] } attributeChangedCallback(t, o, r) { "data-theme" === t && o !== r && "" !== r && (this[t] = r) } connectedCallback() { var t; this.fetchData(this.getAttribute("data-user")).then(t => { t = this.createCard(t); this._shadowRoot.querySelector(".card").innerHTML = t }), this.getAttribute("data-theme") && (t = this.getAttribute("data-theme"), this.setTheme(t)) } setTheme(t) { "dark" === t ? this._shadowRoot.querySelector(".card").classList.add("dark") : this._shadowRoot.querySelector(".card").classList.remove("dark") } async fetchData(t) { const o = await fetch(`https://api.github.com/users/${t}`, { method: "GET" }); return await o.json() } createCard(t) {
//         return `

//         `}
// }

export default GhCard;
