import React from "react";
import { useFetch } from "../hooks/useFetch";

const UserList = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">Loading users...</div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-7">
          🌟 Our Awesome Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-700">
                {user.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">✉️ {user.email}</p>
              <p className="text-sm text-gray-600">🏢 {user.company.name}</p>
              <p className="text-sm text-gray-500 mt-2">
                📍 {user.address.city}, {user.address.street}
              </p>
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                🌐 Visit the Websiteeeeeeeeeeeeeeee
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
