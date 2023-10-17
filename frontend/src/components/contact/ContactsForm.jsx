import React, { useState } from "react";
import postData from "../../requets/httpRequest";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Link from "next/link";
const ContactsForm = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    namn: "",
    org: "",
    org_nummer: "",
    mail: "",
    budget: "",
    land: "",
    medelande: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    const namn = document.getElementById("namn").value;
    const org_namn = document.getElementById("organisation_namn").value;
    const org_numer = document.getElementById("organisation_nummer").value;
    const epost = document.getElementById("e-post").value;
    const budget = document.getElementById("budget").value;
    // const land = document.getElementById("country").value;
    const message = document.getElementById("medelande").value;
    // Create an object with the form data
    const formData = {
      namn: namn,
      org: org_namn,
      org_nummer: org_numer,
      mail: epost,
      budget: budget,
      // land: land,
      medelande: message,
    };
    try {
      setLoading(true);
      const response = await postData(`${process.env.NEXT_PUBLIC_API_URL}/demo-request`, formData);
      if (response.status === 200) {
        setFormData({
          namn: "",
          org: "",
          org_nummer: "",
          mail: "",
          budget: "",
          land: "",
          medelande: "",
        });
        setSubmitStatus(true);
      } else {
        setSubmitStatus(false);
      }
      setLoading(false);
    } catch (e) {
      setSubmitStatus(false);
      setLoading(false);
    }
  }
  return (
    <>
      <div className="col-xl-6 col-lg-7 col-md-12 order-0 order-lg-1">
        <div className="register-wrap p-5 bg-white shadow rounded-custom mt-5 mt-lg-0 mt-xl-0">
          <h3 className="fw-medium h4 text-body">
            Fyll i formuläret så återkopplar vi inom kort.{" "}
          </h3>

          <form
            action="#"
            className="mt-4 register-form"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Namn"
                    aria-label="name"
                    id="namn"
                    value={formData.namn}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        namn: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Organisation"
                    aria-label="Organisation"
                    id="organisation_namn"
                    value={formData.org}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        org: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={formData.org_nummer}
                    placeholder="Org.nummer"
                    aria-label="Org.nummer"
                    id="organisation_nummer"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        org_nummer: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <input
                    required
                    type="email"
                    className="form-control"
                    placeholder="E-post"
                    value={formData.mail}
                    aria-label="E-post"
                    id="e-post"
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        mail: event.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group mb-3">
                  <select
                    className="form-control form-select"
                    name="Budget"
                    id="budget"
                    required
                    novalidate
                    value={formData.budget}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        budget: event.target.value,
                      })
                    }
                  >
                    <option value="">Budget</option>
                    <option value="0">Ingen, har precis börjat</option>
                    <option value="Mindre än 200 000&nbsp;kr">
                      Mindre än 200 000&nbsp;kr
                    </option>
                    <option value="200 000&nbsp;kr till 500 000&nbsp;kr">
                      200 000&nbsp;kr till 500 000&nbsp;kr
                    </option>
                    <option value="500 000&nbsp;krr till 1 000 000&nbsp;kr">
                      500 000&nbsp;krr till 1 000 000&nbsp;kr
                    </option>
                    <option value="1 000 000&nbsp;kr till 5 000 000&nbsp;kr">
                      1 000 000&nbsp;kr till 5 000 000&nbsp;kr
                    </option>
                    <option value="Mer än 5 000 000&nbsp;kr">
                      Mer än 5 000 000&nbsp;kr
                    </option>
                  </select>
                </div>
              </div>
             
              <div className="col-12">
                <div className="input-group mb-3">
                  <textarea
                    required
                    value={formData.medelande}
                    className="form-control"
                    id="medelande"
                    placeholder="Beskriv ditt projekt koncist och tydligt"
                    style={{ height: "120px" }}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        medelande: event.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label small"
                    htmlFor="flexCheckChecked"
                  >
                    Jag godkänner att Enormt får behandla mina personuppgifter i
                    enlighet med deras personuppgiftspolicy.
                    <Link href="/policy" className="text-primary">
                      {" "}
                      användarvillkoren och integritetspolicyn
                    </Link>
                    .
                  </label>
                </div>
              </div>

              <div className="col-12">
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
                        {" "}
                        Ett okänd fel uppstod. Vänligen försök igen senare eller
                        kontakta vårt supportteam för hjälp.<br></br>
                      </p>
                      <p>
                        {" "}
                        <a className="me-2" href="mailto:info@enormt.se">
                          info@enormt.se
                        </a>
                        <a href="tel:+46733524957">073 352 49 57</a>
                      </p>
                    </div>
                  </>
                ) : null}
                {loading === true ? (
                  <Box sx={{ height: "50px" }}>
                    <CircularProgress
                      className="btn btn-omaina-color mt-4"
                      size={15}
                    />{" "}
                  </Box>
                ) : (
                  <Box sx={{ height: "50px" }}>
                    <button
                      type="submit"
                      className="btn btn-soft-primary mt-4"
                      onSubmit={handleSubmit}
                    >
                      Kom igång idag{" "}
                    </button>
                  </Box>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactsForm;
