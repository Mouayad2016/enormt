import React, { useState } from "react";
import postData from "../../requets/httpRequest";

const NewsLetter = () => {

  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [emailError, setEmailError] = useState("");

var a= undefined
  const handleFormChange = (e) => {
    const fieldValue = e.target.value;
    let fieldIsFilled = fieldValue.trim() !== '';

    setFormData({ ...formData, email: fieldValue });
    // setSubmitStatus(fieldIsFilled);
  };
   // Validates the form
const validateForm = () => {
  let isValid = true;

  // Regular expression for email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    setEmailError("Vänligen ange ett korrekt mail.");
    isValid = false;
  } else {
    setEmailError("");
  }

  return isValid;
};
  // Handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const data = { email: formData.email };

    try {
      setLoading(true);
      const response = await postData("/webinar", data);
      console.log(response.status)
      if (response.status === 200) {
        setFormData({ email: "" });
        setLoading(false);
        setSubmitStatus(true);
      }else if(response.status === 201)  {
        setSubmitStatus(undefined);
        setLoading(false);
      } 
      else{
        setSubmitStatus(false);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <>
      <section className='pb-120'>
        <div className='container'>
          <div
            className='bg-light ptb-60 px-5 position-relative overflow-hidden rounded-custom'

            // className='bg-light ptb-60 px-5 position-relative overflow-hidden rounded-custom'
            style={{
              background:
                "url('assets/img/page-header-bg.svg')no-repeat center bottom",
            }}
          >
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-md-9'>
                <div className='subscribe-info-wrap text-center position-relative z-2'>
                  <div className='section-heading'>
                    <h4 className='h5 text-body'>
                      Visst är det spännande!
                    </h4>
                    <h2 className='text-body'>Anmäl dig till kommande webinare</h2>
                    <p >
                    Skicka din e-post så mejlar vi dig om våra framkommande webinar. För att inte missa följ oss på <a href='https://www.linkedin.com/company/enormt-se/mycompany/?viewAsMember=true'>Linkedin</a>.
                    </p>
                  </div>

                  <div className='form-block-banner web-reg-news-letter-mw m-auto mt-5'>
                  <div className="field-container">

                  {/* <div className='form-block-banner mw-60 m-auto mt-5'> */}
                    <form
                      id='email-form2'
                      name='email-form'
                      className='subscribe-form d-flex smreg'
                      
                    >
                      <input
                        type='email'
                        className='form-control me-2'
                        name='E-post'
                        data-name='EmaE-postil'
                        placeholder='Din e-postadress'
                        id='Email2'
                        required=''
                        value={formData.email}
                      onChange={handleFormChange}
                      />
                    <button type="submit" className="btn btn-soft-primary" onClick={handleSubmit} required>Skicka in</button>

                    </form>
                  </div>
                  {emailError && <p className="error-message">{emailError}</p>}
          {submitStatus  === true?  <p className="success-message">Registreringen lyckades! Du kommer att få ett mail med detaljer om webinariet. <strong>Det kan hamna i skräpposten</strong>, så se även där. Får du ingen mail!, ring oss på <a href="tel:+46733524957">0733524957</a></p>: 
          submitStatus  === false? <p className="error-message">Oops! Fel inträffat! Lyckades du inte registrera dig? Ring oss på <a href="tel:+46733524957">0733524957</a> så fixar vi det.</p>:submitStatus === undefined?  <p className="mild-konflikt">Din e-postadress är redan registrerad för denna webinarium. Du kommer dock att få en bekräftelse via e-post.</p>:<></>}
        
        </div>
                  <ul className='nav justify-content-center subscribe-feature-list mt-3'>
                    <li className='nav-item'>
                      <span>
                        <i className='fad fa-dot-circle text-primary me-2'></i>
                        Oroa inte dig! du kommer bara får mejl angående kommande webbseminarium
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className='bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5'></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;