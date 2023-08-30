import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();

  return <>
    <div className="cv-container">
      <h1>Curriculum Vitae</h1>
      <div>
        <address className='cv-address'>
          <div>
            <strong>Dusan Brankov</strong><br />
            Zrenjaninska 8<br />
            26232 Starcevo, Serbia
          </div>
          <div>
            <a href="mailto:dusanbrankov@pm.me">dusanbrankov@pm.me</a><br />
            <a href="tel:+381621758249">+381 (0)62 17 58 249</a>
          </div>
        </address>
        <div className='personal-info'>
          <p>{t('birth')}</p>
          <p>{t('citizenship')}</p>
        </div>
      </div>

      <section>
        <h2>{t('career')}</h2>
        <div className="timeline">
          <h3>08-2018 - 02-2020</h3>
          <div>
            <p className="job-description">Selbstständig als Grafik- & Webdesigner</p>
            <p>Kleingewerbe - Bad Oeynhausen, Deutschland</p>
          </div>
        </div>
        <div className="timeline">
          <h3>08-2011 - 07-2018</h3>
          <div>
            <p className="job-description">Web-Entwickler & Grafikdesigner</p>
            <p>Inci Betten GmbH & Co. KG - Löhne, Deutschland</p>
            <ul>
              <li>Grafische Entwicklung von Katalogen & Websites</li>
              <li>Webentwicklung (HTML, CSS, PHP)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Ausbildung</h2>
        <div className="timeline">
          <h3>10/2010 - 05/2011</h3>
          <div>
            <p className="job-description">Mediengestaltung Digital & Print</p>
            <p>b.i.b. International College - Paderborn, Deutschland</p>
          </div>
        </div>
        <div className="timeline">
          <h3>08/2005 - 05/2008</h3>
          <div>
            <p className="job-description">Fachhochschulreife (Informationstechnischer Assistent)</p>
            <p>August-Griese-Berufskolleg - Löhne, Deutschland</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Kompetenzen</h2>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3>Sprachen</h3>
          <ul>
            <li>Deutsch (Muttersprache)</li>
            <li>Englisch</li>
            <li>Serbisch</li>
          </ul>
        </div>
      </section>

    </div>
  </>;
}

export default Main;
