import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function University() {
  const [otp, setOtp] = useState(false);
  const [Email, setEmail] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [District, setdistict] = useState("");
  const [Password, setPassword] = useState("");
  const [ConformPasswords, setConformPasswords] = useState("");
  const [incomeOtp, setIncomeOtp] = useState("");
  const [currentOtp, setCurrentOtp] = useState("");

  const navigate = useNavigate();

  const SendOtp = async (e) => {
    e.preventDefault();
    console.log(ConformPasswords, Password, Email);
    if (ConformPasswords === Password) {
      let otp1 = await fetch(
        `https://sih-backend-ivory.vercel.app/api/v1/College/OtpSend`,
        {
          method: "POST",
          body: JSON.stringify({
            Email: Email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      otp1 = await otp1.json();
      console.log(otp1);
      if (otp1.staus === "success") {
        setIncomeOtp(otp1.otp);
        localStorage.setItem("otp", otp1.otp);

        setOtp(true);
      } else {
        alert(otp1.message);
      }
    } else {
      alert("password not matched");
    }

    console.log(otp);
  };

  const SignUp = async (e) => {
    e.preventDefault();
    console.log("aloks");
    let incoming = localStorage.getItem("otp");
    console.log(incomeOtp, currentOtp);
    if (incoming === currentOtp) {
      let res = await fetch(
        `https://sih-backend-ivory.vercel.app/api/v1/College/Signup`,
        {
          method: "POST",
          body: JSON.stringify({
            Email: Email,
            PhoneNumber: Phone,
            City: City,
            distict: District,
            State: State,
            Password: Password,
            Landmark: "LOcal",
            CollgeName: collegeName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res = await res.json();
      console.log("alok", res);
      if (res.status === "success") {
        navigate("/college/Login");
      }

      console.log(res);
    }
  };
  return (
    <>
      {otp ? (
        <>
          <div
            className="min-h-screen flex items-center justify-center bg-cover"
            style={{
              backgroundImage:
                'url(" https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=996&t=st=1702288022~exp=1702288622~hmac=b102a5dbfa26a384e52393eee41874ad7a353ca3aaf3596c00c3c4b1d7d089de',
            }}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-md "
              style={{ width: 350 }}
            >
              <h2 className="text-2xl font-bold font-mono mb-4 text-blue-600">
                Otp Send SuccessFully
              </h2>
              <form>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Enter Otp
                    </label>
                    <input
                      className="border rounded w-full py-2 px-3"
                      type="text"
                      placeholder="Enter Otp"
                      style={{ width: 250 }}
                      value={currentOtp}
                      onChange={(e) => setCurrentOtp(e.target.value)}
                    ></input>
                  </div>
                </div>

                <button
                  onClick={(e) => SignUp(e)}
                  className="bg-green-500 mt-4 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div
          className="min-h-screen flex items-center justify-center bg-cover"
          style={{
            backgroundImage:
              'url(" https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=996&t=st=1702288022~exp=1702288622~hmac=b102a5dbfa26a384e52393eee41874ad7a353ca3aaf3596c00c3c4b1d7d089de',
          }}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-md "
            style={{ width: 600 }}
          >
            <h2 className="text-2xl font-bold font-mono mb-4 text-blue-600">
              Institute Login
            </h2>
            <form>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    CollgeName:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter College Name"
                    style={{ width: 250 }}
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter College Email"
                    style={{ width: 250 }}
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    PhoneNumber:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter College Number"
                    style={{ width: 250 }}
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    City:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter City"
                    style={{ width: 250 }}
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    distict:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter District"
                    style={{ width: 250 }}
                    value={District}
                    onChange={(e) => setdistict(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    State:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter State"
                    style={{ width: 250 }}
                    value={State}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Password:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter Password"
                    style={{ width: 250 }}
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Conform Password:
                  </label>
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder="Enter Conform Password"
                    style={{ width: 250 }}
                    value={ConformPasswords}
                    onChange={(e) => setConformPasswords(e.target.value)}
                  ></input>
                </div>
              </div>

              <button
                onClick={(e) => SendOtp(e)}
                className="bg-green-500 mt-4 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Proceed to Resitration
              </button>
              <button
                onClick={() => navigate("/college/Login/aciee")}
                className="bg-green-500 mt-4 ml-4 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Login With Acice Code
              </button>
              <button
                onClick={() => navigate("/college/Login")}
                className="bg-green-500 mt-4 ml-0 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Already Have account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
