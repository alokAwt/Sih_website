import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyForm = () => {
  const [tableData, setTableData] = useState([]);
  const { govt, id } = useParams();
  const initialFormState = {
    StudentName: "",
    Email: "",
    Phonenumber: "",
    State: "",
    District: "",
    Address: "",
    CollegeName: "",
    Year: "",
    CollegeEmail: "",
    CollegenNumber: "",
  };

  const GetAlldetails = async () => {
    let token = localStorage.getItem("token");
    let data = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/Users/ownProfile`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          token: token,
        },
      }
    );
    data = await data.json();
    setTableData(data.data);
    console.log(data);
  };

  useEffect(() => {
    GetAlldetails();
  }, []);

  const UploadImage = async (e, field) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vsqmoxq9");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    // SetImages(file.secure_url);
    localStorage.setItem(field, file.secure_url);
  };

  const [formData, setFormData] = useState(initialFormState);

  const formFields = [
    { name: "StudentName", label: "Full Name", type: "text" },
    { name: "Email", label: "Email", type: "email" },
    { name: "Phonenumber", label: " Phonenumber", type: "tel" },
    { name: "State", label: "State", type: "text" },
    { name: "District", label: "District", type: "text" },
    { name: "Address", label: "Full Address", type: "text" },
    { name: "CollegeName", label: "CollegeName", type: "text" },
    { name: "Year", label: "Year", type: "text" },
    { name: "CollegeEmail", label: "CollegeEmail", type: "text" },
    { name: "CollegeNumber", label: "CollegeNumber", type: "text" },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to submit the form data (e.g., send it to a server)
    let adhar = localStorage.getItem("Adhar Card");
    let caste = localStorage.getItem("Caste Certificate");
    let income = localStorage.getItem("Recedient");
    let recedient = localStorage.getItem("Income");
    let marksheet = localStorage.getItem("Marksheet");
    let Bonafite = localStorage.getItem("Bonafite");
    let token = localStorage.getItem("token");
    let data = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/application/Apply/Schlorship`,
      {
        method: "POST",
        body: JSON.stringify({
          GovtId: govt,
          SchlorshipId: id,
          StudentName: formData.StudentName,
          Email: formData.Email,
          Phonenumber: formData.Phonenumber,
          State: formData.State,
          District: formData.District,
          Address: formData.Address,
          CollegeName: formData.CollegeName,
          Year: formData.Year,
          CollegeEmail: formData.CollegeEmail,
          CollegenNumber: formData.CollegenNumber,
          AdharCard:
            tableData.LoginType === "Adharcard" ? adhar : tableData.AdharCard,
          IncomeCertificate:
            tableData.LoginType === "Adharcard"
              ? income
              : tableData.IncomeCertificate,
          RecidentCertificate:
            tableData.LoginType === "Adharcard"
              ? recedient
              : tableData.RecidentCertificate,
          CasteCertificate:
            tableData.LoginType === "Adharcard"
              ? caste
              : tableData.CasteCertificate,
          Bonafite: Bonafite,
          Marksheet:
            tableData.LoginType === "Adharcard"
              ? marksheet
              : tableData.Marksheet,
        }),
        headers: {
          "Content-type": "application/json",
          token: token,
        },
      }
    );
    data = await data.json();
    console.log(data)
    if (data.status === "success") {
      toast("Applied Successfully");
    }
    setFormData(initialFormState); // Reset form after submission
  };

  return (
    <div className="container mt-5">
      <ToastContainer></ToastContainer>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Personal Details</h2>
              <form onSubmit={handleSubmit}>
                {formFields.map((field) => (
                  <div key={field.name} className="mb-3">
                    <label htmlFor={field.name} className="form-label">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? null : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    )}
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Upload Documents</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="document1" className="form-label">
                    Adhar Card
                  </label>
                  {tableData.LoginType === "Adharcard" ? (
                    <input
                      type="file"
                      id="document1"
                      name="document1"
                      onChange={(e) => UploadImage(e, "Adhar Card")}
                      className="form-control"
                      accept=".pdf, .doc, .docx"
                    />
                  ) : (
                    <div className="card mb-3 shadow">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <span className="me-2">{tableData.AdharCard}</span>
                        <div>
                          <FaCheckCircle color="green" className="me-2" />
                          <FaEye
                            color="blue"
                            className="mt-2"
                            onClick={() => handleViewFile(tableData.AdharCard)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="document2" className="form-label">
                    Caste Certificate
                  </label>
                  {tableData.LoginType === "Adharcard" ? (
                    <input
                      type="file"
                      id="document2"
                      name="document2"
                      onChange={(e) => UploadImage(e, "Caste Certificate")}
                      className="form-control"
                    />
                  ) : (
                    <div className="card mb-3 shadow">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <span className="me-2">
                          {tableData.CasteCertificate}
                        </span>
                        <div>
                          <FaCheckCircle color="green" className="me-2" />
                          <FaEye
                            color="blue"
                            className="mt-2"
                            onClick={() =>
                              handleViewFile(tableData.CasteCertificate)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="document2" className="form-label">
                    Income Certificate
                  </label>
                  {tableData.LoginType === "Adharcard" ? (
                    <input
                      type="file"
                      id="document2"
                      name="document2"
                      onChange={(e) => UploadImage(e, "Income")}
                      className="form-control"
                    />
                  ) : (
                    <>
                      <div className="card mb-3 shadow">
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <span className="me-2">
                            {tableData.IncomeCertificate}
                          </span>
                          <div>
                            <FaCheckCircle color="green" className="me-2" />
                            <FaEye
                              color="blue"
                              className="mt-2"
                              onClick={() =>
                                handleViewFile(tableData.IncomeCertificate)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="document2" className="form-label">
                    Recedient Certificate
                  </label>
                  {tableData.LoginType === "Adharcard" ? (
                    <input
                      type="file"
                      id="document2"
                      name="document2"
                      onChange={(e) => UploadImage(e, "Recedient")}
                      className="form-control"
                    />
                  ) : (
                    <>
                      <div className="card mb-3 shadow">
                        <div className="card-body d-flex justify-content-between align-items-center">
                          <span className="me-2">
                            {tableData.RecidentCertificate}
                          </span>
                          <div>
                            <FaCheckCircle color="green" className="me-2" />
                            <FaEye
                              color="blue"
                              className="mt-2"
                              onClick={() =>
                                handleViewFile(tableData.RecidentCertificate)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="document2" className="form-label">
                    MarkSheet
                  </label>
                  {tableData.LoginType === "Adharcard" ? (
                    <input
                      type="file"
                      id="document2"
                      name="document2"
                      onChange={(e) => UploadImage(e, "Marksheet")}
                      className="form-control"
                    />
                  ) : (
                    <div className="card mb-3 shadow">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <span className="me-2">{tableData.Marksheet}</span>
                        <div>
                          <FaCheckCircle color="green" className="me-2" />
                          <FaEye
                            color="blue"
                            className="mt-2"
                            onClick={() => handleViewFile(tableData.Marksheet)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="document2" className="form-label">
                    Bonafite
                  </label>

                  <input
                    type="file"
                    id="document2"
                    name="document2"
                    onChange={(e) => UploadImage(e, "Bonafite")}
                    className="form-control"
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
