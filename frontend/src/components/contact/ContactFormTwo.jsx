// import "./style.css";
import postData from '../../requets/httpRequest';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import React, { useState } from 'react';
import CircleLoader from '../loader/circleLoader';
import Link from 'next/link';

const ContactFormTwo = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    företagsnamn: '',
    message: '',
  });

  const handleFormChange = () => {
    // const privacyCheckbox = document.getElementById("privacyCheckbox");
    // const submitButton = document.querySelector('button[type="submit"]');
    const requiredFields = document.querySelectorAll(
      'input[required], textarea[required]',
    );
    let allFieldsFilled = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        allFieldsFilled = false;
      }
    });
  };

  async function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Get the values of the form inputs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const företagsnamn = document.getElementById('Företagsnamn').value;
    const message = document.getElementById('yourMessage').value;
    // Create an object with the form data
    const formData = {
      förNamn: firstName,
      efterNamn: lastName,
      telephone: phone,
      mail: email,
      företagNamn: företagsnamn,
      medelande: message,
    };
    try {
      setLoading(true);
      const response = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/kontakt`,
        formData,
      );

      if (response.status === 200) {
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          företagsnamn: '',
          message: '',
        });
        // const submitButton = document.querySelector('button[type="submit"]');
        setLoading(false);
        setSubmitStatus(true);
        // submitButton.disabled = true;
      } else {
        setSubmitStatus(false);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setSubmitStatus(false);
    }
  }

  return (
    <>
      <section
        id="contact-us-form"
        className="contact-us-form pt-0 pb-100"
        data-aos="fade-right"
        data-aos-duration="30000"
      >
        <buble></buble>
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="section-heading ">
                <h2 className="text-dark">Här kan du kontakta oss</h2>
                <p className="text-dark res-fs-5">
                  Har du frågor eller funderingar som bäst formuleras i text?
                  Kontakta oss här så återkopplar vi så snart som möjligt.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                action="#"
                className="register-form"
                onChange={handleFormChange}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="mb-1">
                      Förnamn
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Förnamn"
                        aria-label="First name"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            firstName: event.target.value,
                          })
                        }
                        value={formData.firstName}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="mb-1">
                      Efternamn
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Efternamn"
                        aria-label="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="mb-1">
                      Telefonnummer
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Telefonnummer"
                        aria-label="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="mb-1">
                      E-post<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        placeholder="E-post"
                        aria-label="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="Företagsnamn" className="mb-1">
                      Företagsnamns
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="Företagsnamn"
                        className="form-control"
                        id="Företagsnamn"
                        placeholder="Företagsnamn"
                        aria-label="Företagsnamn"
                        value={formData.företagsnamn}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            företagsnamn: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourMessage" className="mb-1">
                      Meddelande <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        id="yourMessage"
                        required
                        placeholder="Hur kan vi hjälpa dig?"
                        style={{ height: '120px' }}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privacyCheckbox"
                      required
                    />
                    <label
                      className="form-check-label text-primary"
                      htmlFor="privacyCheckbox"
                    >
                      Jag accepterar
                      <Link href="/policy" className="text-primary">
                        användarvillkoren och integritetspolicyn
                      </Link>
                      .
                    </label>
                  </div>
                </div>
                {submitStatus === true ? (
                  <>
                    <div className="alert alert-success mt-2" role="alert">
                      Tack för ditt meddelande! Vi har mottagit din förfrågan
                      och återkommer snart.
                    </div>
                  </>
                ) : null}
                {submitStatus === false ? (
                  <>
                    <div className="alert alert-danger mt-4" role="alert">
                      <p>
                        Ett okänd fel uppstod. Vänligen försök igen senare eller
                        kontakta vårt supportteam för hjälp.<br></br>
                      </p>
                      <p>
                        <a className="me-2" href="mailto:info@omania.se">
                          info@omania.se
                        </a>
                        <a href="tel:+46733524957">073 352 49 57</a>
                      </p>
                    </div>
                  </>
                ) : null}
                {loading === true ? (
                  <Box sx={{ height: '50px' }}>
                    <CircularProgress
                      className="btn btn-omaina-color  mt-4"
                      size={15}
                    />
                  </Box>
                ) : (
                  <Box sx={{ height: '50px' }}>
                    <button
                      type="submit"
                      className="btn btn-soft-primary mt-4"
                      onSubmit={handleSubmit}
                    >
                      Skicka
                    </button>
                  </Box>
                )}
              </form>
            </div>

            <div className="col-lg-4 col-md-7 d-flex contact-loader-bg display-none-on-ipad">
              <CircleLoader></CircleLoader>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormTwo;
