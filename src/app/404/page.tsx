// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function Page404Page() {
  return (
    <>
      <div className="utility-page-wrap error">
                <div className="utility-page-content error">
                  <h1>
                    Oops! Page Not Found
                  </h1>
                  <div className="error-para">
                    Looks like the data you’re looking for doesn’t exist… yet.
                  </div>
                  <div className="error-button">
                    <a className="primary-button" href="/">
                      <div className="text-overflow">
                        <div className="button-text _01">
                          Go to Home Page
                        </div>
                        <div className="button-text _02">
                          Go to Home Page
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <img alt="Error Image" className="error-image" loading="lazy" sizes="(max-width: 4177px) 100vw, 4177px" src="/assets/images/404.webp" srcSet="/assets/images/404-p-500.png 500w, /assets/images/404-p-800.png 800w, /assets/images/404-p-1080.png 1080w, /assets/images/404-p-1600.png 1600w, /assets/images/404-p-2000.png 2000w, /assets/images/404-p-2600.png 2600w, /assets/images/404.webp 4177w" />
              </div>
    </>
  );
}
