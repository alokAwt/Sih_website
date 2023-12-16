import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const documents = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate("");

  const GetAlldetails = async () => {
    let token = localStorage.getItem("token");
    let data = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/College/GetDetails`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          token: token,
        },
      }
    );
    data = await data.json();
   console.log("alokkumar",data)
   if(data.data.CollegProve && data.data.AicteDoc && data.data.UgcDoc){
    navigate("/College");
   }
  }

  useEffect(() => {
    GetAlldetails();
  }, []);

  const UploadImage = async (e, field) => {
    setShow(false);
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
    localStorage.setItem(field, file.secure_url);
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let college = localStorage.getItem("college Prove");
    let aicte = localStorage.getItem("aicte");
    let ugc = localStorage.getItem("ugc");
    let token = localStorage.getItem("token");

    let res = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/College/UpdateDoc`,
      {
        method: "PUT",
        body: JSON.stringify({
          CollegProve: college,
          AicteDoc: aicte,
          UgcDoc: ugc,
        }),
        headers: {
          "Content-type": "application/json",
          token: token,
        },
      }
    );
    res = await res.json();
    console.log(res);
    if (res.staus === "success") {
      navigate("/College");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Document Upload for Verfication
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              College Prove
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => UploadImage(e, "college Prove")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Aicte Doc
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => UploadImage(e, "aicte")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Ugc Doc
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => UploadImage(e, "ugc")}
            />
          </div>
          {show ? (
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Upload Document
            </button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default documents;
