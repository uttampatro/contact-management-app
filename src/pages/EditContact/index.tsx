import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../../store/contactsSlice";
import { RootState } from "../../store/store";

const EditContact = () => {
  const { id } = useParams<{ id: string }>();

  const contact = useSelector((state: RootState) =>
    state.contacts.find((contact) => contact.id === id)
  );

  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [status, setStatus] = useState<"Active" | "Inactive">(
    contact?.status || "Active"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      dispatch(editContact({ id: contact?.id, firstName, lastName, status }));
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Edit Contact
      </h1>{" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-lg font-semibold mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
