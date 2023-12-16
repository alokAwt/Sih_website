import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginAciee() {
  const [otp, setOtp] = useState(false);
  const [InstituteCode, setInstituteCode] = useState("");
  const [incomeOtp, setIncomeOtp] = useState("");
  const [currentOtp, setCurrentOtp] = useState("");

  const navigate = useNavigate();

  const SendOtp = async (e) => {
    e.preventDefault();

    let otp1 = await fetch(`https://sih-backend-ivory.vercel.app/api/v1/College/otp/aciee`, {
      method: "POST",
      body: JSON.stringify({
        InstituteCode: InstituteCode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    otp1 = await otp1.json();
    console.log(otp1);
    if (otp1.staus === "success") {
      setIncomeOtp(otp1.otp);
      localStorage.setItem("otp", otp1.otp);
      setOtp(true);
    } else {
      alert(otp1.message);
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
        `https://sih-backend-ivory.vercel.app/api/v1/College/Login/aciee`,
        {
          method: "POST",
          body: JSON.stringify({
            InstituteCode: InstituteCode,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      res = await res.json();
      console.log("alok", res);
      if (res.message === "Success") {
        let user = "college";
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", user);
        navigate("/college");
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
            style={{ width: 300 }}
          >
            <h2 className="text-2xl font-bold font-mono mb-4 text-blue-600">
              Institute Login
            </h2>
            <form>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Institute Code:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder="Enter Institute Code"
                  style={{ width: 250 }}
                  value={InstituteCode}
                  onChange={(e) => setInstituteCode(e.target.value)}
                ></input>
              </div>

              <button
                onClick={(e) => SendOtp(e)}
                className="bg-green-500 mt-4 ml-0 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Send Otp
              </button>
            </form>
          </div>
        </div>
      )}
      <h1>hsjs</h1>
    </>
  );
}
