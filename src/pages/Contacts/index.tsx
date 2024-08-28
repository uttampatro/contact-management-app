import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../store/contactsSlice";
import { RootState } from "../../store/store";

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Contacts
        </h1>
        <Link
          to="/create"
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
        >
          + Add New Contact
        </Link>
      </div>
      {contacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                {contact.firstName} {contact.lastName}
              </h2>
              <p
                className={`text-sm ${
                  contact.status === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                } mt-2`}
              >
                {contact.status}
              </p>
              <div className="flex justify-end mt-4 space-x-2">
                <Link
                  to={`/edit/${contact.id}`}
                  className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          No contacts found. Please add new contacts.
        </p>
      )}
    </div>
  );
};

export default Contacts;
