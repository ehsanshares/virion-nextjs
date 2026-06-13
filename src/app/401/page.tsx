// Virion template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function Page401Page() {
  return (
    <>
      <div className="utility-page-wrap password">
            <div className="utility-page-content password">
              <form className="utility-page-form password" data-demo-form="1" data-name="Email Form" id="email-form" name="email-form">
                <div className="form-header">
                  <div className="lock-block">
                    <div className="lock-box">
                      <img alt="Lock Icon" className="lock-icon" src="/assets/images/locked.webp" />
                    </div>
                  </div>
                  <h4 className="password-title">
                    Password Protected
                  </h4>
                  <p className="password-para">
                    To create a password-protected page, you typically need to use authentication system.
                  </p>
                </div>
                <label className="field-label-password" htmlFor="pass">
                  Password
                </label>
                <div className="password-form-box">
                  <div className="password-flex">
                    <div className="small-paragraph pw-text">
                      Password
                    </div>
                    <input autoFocus className="password-text-field" data-name="field" id="pass" maxLength={256} name="pass" placeholder="• • • • • • • • • • " type="password" />
                  </div>
                  <input className="password-button" type="submit" value="Submit" />
                </div>
                <div className="pw-error-message" data-form-fail="1" hidden>
                  <div>
                    Incorrect password. Please try again.
                  </div>
                </div>
                <div>
                  <input name="path" type="hidden" value="&lt;%WF_FORM_VALUE_PATH%&gt;" />
                  <input name="page" type="hidden" value="&lt;%WF_FORM_VALUE_PAGE%&gt;" />
                </div>
                <div>
                </div>
              </form>
            </div>
          </div>
    </>
  );
}
