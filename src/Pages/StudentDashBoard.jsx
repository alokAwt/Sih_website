import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faFile,
  faGraduationCap,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function StudentDashBoard() {
  const [name, setName] = useState("");
  const [AdharCardNumber, setAdharCardNumber] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [State, setState] = useState("");
  const [distict, setdistict] = useState("");
  const [logintype, setLogintype] = useState("");
  const [doc, setDoc] = useState([]);
  const StudentDetails = async () => {
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
    console.log(data.data);
    if (data) {
      setDoc(data.data);
      setName(data.data.Name);
      setEmail(data.data.Email);
      setPhoneNumber(data.data.PhoneNumber);
      setCity(data.data.City);
      setdistict(data.data.distict);
      setState(data.data.State);
      setLandmark(data.data.Landmark);
      setAdharCardNumber(data.data.AdharCardNumber);
      setLogintype(data.data.LoginType);
    }
  };

  useEffect(() => {
    StudentDetails();
  }, []);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    Collage: "",
    annualIncome: "",
    fieldOfEducation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      district: "",
      address: "",
      Collage: "",
      annualIncome: "",
      fieldOfEducation: "",
    });
  };
  return (
    <div>
      <>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-64 py-6 flex-shrink-0">
            <div className="text-2xl font-semibold text-center">
              Student Dashboard
            </div>
            {/* Add sidebar links here */}
            <ul className="mt-6">
              <li className="mb-4">
                <Link
                  to="/"
                  className="flex items-center  p-2 rounded hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </Link>
              </li>

              <li className="mb-4">
                <Link
                  to="/myapplication"
                  className="flex items-center  p-2 rounded hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                  My Application
                </Link>
              </li>

              <li className="mb-4">
                <Link
                  to={"/Ticket"}
                  className="flex items-center  p-2 rounded hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
                  My Ticket
                </Link>
              </li>

              {/* Add more sidebar links as needed */}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Welcome Student!</h2>
                {/* <button className="bg-red-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded ">
                  Logout
                </button> */}
              </div>
            </header>

            {/* Main Content */}
            <main className="p-6">
              {/* Dashboard components go here */}

              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2 bg-gray-800 p-4 border rounded-lg">
                  <div>
                    <label
                      htmlFor="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name"
                      value={name}
                      required
                    />
                  </div>
                  {/* <div>
                    <label
                      for=" tickets"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tickets
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hariramani"
                      value={formData.lname}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div> */}
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="company"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      value={email}
                      // onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phonenumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      PhoneNumber
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="6261677514"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      value={PhoneNumber}
                      // onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="City"
                      value={city}
                      // onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="District"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      District
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="District"
                      value={distict}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="landmark"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Landmark"
                      value={Landmark}
                      // onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div>
                    <label
                      for="logintype"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      LoginType
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div> */}
                  <div>
                    <label
                      for="application"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Total Application
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Total Application"
                      value="0"
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="adharcardnumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      AdharCardNumber
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Adhar Number"
                      value={AdharCardNumber}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div>
                    <label
                      for="adharcard"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      AdharCard
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div> */}
                </div>
                {logintype === "Adharcard" ? null : (
                  <div class="grid gap-6 mb-6 md:grid-cols-2 bg-gray-800 p-4 border rounded-lg">
                    <div>
                      <label
                        for="CasteCertificate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        CasteCertificate
                      </label>
                      <input
                        type="text"
                        id="visitors"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IIT Delhi"
                        value={doc.CasteCertificate}
                        onChange={(e) => setFormData(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="IncomeCertificate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        IncomeCertificate
                      </label>
                      <input
                        type="text"
                        id="visitors"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IIT Delhi"
                        value={doc.IncomeCertificate}
                        onChange={(e) => setFormData(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="Marksheet"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Marksheet
                      </label>
                      <input
                        type="text"
                        id="visitors"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="IIT Delhi"
                        value={doc.Marksheet}
                        onChange={(e) => setFormData(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="RecidentCertificate"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        RecidentCertificate
                      </label>
                      <input
                        type="text"
                        id="visitors"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="B.Tech"
                        value={doc.RecidentCertificate}
                        onChange={(e) => setFormData(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
              </form>
            </main>
            <Link to={"/Ticket"}>
              <div className="justify-end flex bottom-0 right-0 p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Raise Ticket Here
                </button>
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </>
    </div>
  );
}
