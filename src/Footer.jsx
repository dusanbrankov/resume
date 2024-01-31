import DownloadButton from "./DownloadButton";

function Footer() {
  return <>
    <footer className="site-footer">
      <div className="social-links">
        <a
          href="https://github.com/dusanbrankov/"
          target="_blank"
          rel="noopener"
        >GitHub</a>
        <a
          href="https://www.linkedin.com/in/dusanbrankov/"
          target="_blank"
          rel="noopener"
        >LinkedIn</a>
      </div>
      <DownloadButton />
    </footer>
  </>;
}

export default Footer;
