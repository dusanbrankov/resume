import { useTranslation } from "react-i18next";

function Content({ targetRef }) {
  const { t } = useTranslation();

  return <>
    <div className="cv-container" ref={targetRef}>
      <h1>Curriculum Vitae</h1>
      <div>
        <address className="cv-address">
          <div>
            <strong>Dušan Brankov</strong><br />
            Zrenjaninska 8<br />
            26232 Starčevo, {t("country")}
          </div>
          <div>
            <a href="mailto:dusanbrankov@proton.me">dusanbrankov@proton.me</a><br />
            <a href="tel:+381621758249">+381 (0)62 17 58 249</a>
          </div>
        </address>
        <div className="personal-info">
          <p>{t("birth")}</p>
          <p>{t("citizenship")}</p>
        </div>
      </div>

      <section>
        <h2>{t("career_title")}</h2>
        <div className="timeline">
          <h3>08-2018 - 02-2020</h3>
          <div>
            <p className="job-description">{t("career0_title")}</p>
            <p>{t("career0_company")}</p>
          </div>
        </div>
        <div className="timeline">
          <h3>08-2011 - 07-2018</h3>
          <div>
            <p className="job-description">{t("career1_title")}</p>
            <p>{t("career1_company")}</p>
            <ul>
              <li>{t("career1_tasks0")}</li>
              <li>{t("career1_tasks1")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>{t("education_title")}</h2>
        <div className="timeline">
          <h3>10/2010 - 05/2011</h3>
          <div>
            <p className="job-description">{t("education0_title")}</p>
            <p>{t("education0_place")}</p>
          </div>
        </div>
        <div className="timeline">
          <h3>08/2005 - 05/2008</h3>
          <div>
            <p className="job-description">{t("education1_title")}</p>
            <p>{t("education1_place")}</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>{t("skills_title")}</h2>
        <div>
          <h3>Software</h3>
          <ul>
            <li>HTML</li>
            <li>CSS (Sass, PostCSS)</li>
            <li>JavaScript, TypeScript</li>
            <li>React</li>
            <li>PHP (CodeIgniter)</li>
            <li>Bash</li>
            <li>Git (CLI)</li>
          </ul>
        </div>
        <div>
          <h3>{t("skills_lang")}</h3>
          <ul>
            <li>{t("skills_lang_de")}</li>
            <li>{t("skills_lang_en")}</li>
            <li>{t("skills_lang_sr")}</li>
          </ul>
        </div>
      </section>

    </div>
  </>;
}

export default Content;
