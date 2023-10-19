import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import postData from '../../requets/httpRequest';
const RegisterForm = ({ hideOnMobile }) => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [emailError, setEmailError] = useState('');

  // Handles change in form field
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
      setEmailError('Vänligen ange ett korrekt mail.');
      isValid = false;
    } else {
      setEmailError('');
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
      const response = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/webinar`,
        data,
      );
      if (response.status === 200) {
        setFormData({ email: '' });
        setLoading(false);
        setSubmitStatus(true);
      } else if (response.status === 201) {
        setSubmitStatus(undefined);
        setLoading(false);
      } else {
        setSubmitStatus(false);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  // Renders the component
  return (
    <div
      className={`mt-sm-4 bg-light p-3 rounded-custom ${
        hideOnMobile === true ? 'hide-on-mobile' : 'hide-on-desc'
      }`}
    >
      <h5 className="text-body mb-sm-4">Anmäl dig till kommande webinar</h5>
      <form id="email-form2" name="email-form" className="subscribe-form">
        <div className="field-container">
          <div className="smreg d-md-flex d-flex">
            <input
              type="email"
              className="form-control me-2 mb-2"
              id="email"
              required
              placeholder="E-post"
              aria-label="Email"
              value={formData.email}
              onChange={handleFormChange}
            />

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
                  className="btn btn-soft-primary"
                  onClick={handleSubmit}
                  required
                >
                  Skicka
                </button>
              </Box>
            )}
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
          {submitStatus === true ? (
            <p className="success-message">
              Registreringen lyckades! Du kommer att få ett mail med detaljer om
              webinariet. <strong>Det kan hamna i skräpposten</strong>, så se
              även där. Får du ingen mail!, ring oss på{' '}
              <a href="tel:+46733524957">0733524957</a>
            </p>
          ) : submitStatus === false ? (
            <p className="error-message">
              Oops! Fel inträffat! Lyckades du inte registrera dig? Ring oss på{' '}
              <a href="tel:+46733524957">0733524957</a> så fixar vi det.
            </p>
          ) : submitStatus === undefined ? (
            <p className="mild-konflikt">
              Din e-postadress är redan registrerad för denna webinarium. Du
              kommer dock att få en bekräftelse via e-post.
            </p>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
