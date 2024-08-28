import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../store/contactsSlice";

const CreateContact: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !status) {
      return;
    }
    dispatch(addContact({ id: uuidv4(), firstName, lastName, status }));
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Create Contact
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-lg font-semibold mb-2">First Name</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Last Name</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="Active"
                checked={status === "Active"}
                onChange={(e) =>
                  setStatus(e.target.value as "Active" | "Inactive")
                }
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={(e) =>
                  setStatus(e.target.value as "Active" | "Inactive")
                }
                className="mr-2"
              />
              Inactive
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
