import {useState} from 'react'

export default function Ticket() {
    const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");

  const handleCreateTicket = () => {
    // Add logic to create a ticket (send to backend, etc.)
    console.log("Ticket created:", { ticketTitle, ticketDescription });

    // Reset form after creating a ticket
    setTicketTitle("");
    setTicketDescription("");
  };
  return (
    <div>
        
              <div className="max-w-md mx-auto mt-8 p-6 bg-black/20 rounded-md shadow-md mb-5 ">
                <h2 className="text-2xl font-bold mb-4">Create a New Ticket</h2>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={ticketTitle}
                    onChange={(e) => setTicketTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  onClick={handleCreateTicket}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Create Ticket
                </button>
              </div>
            </div>
   
  )
}