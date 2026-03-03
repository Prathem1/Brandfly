"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/admin/users")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setUsers(data);
          else setError(data.error || "Failed to load users");
        })
        .catch(() => setError("Failed to fetch users"));
    }
  }, [status]);

  if (status === "loading")
    return <p className="text-center text-black mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <h1 className="text-3xl text-black font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full text-black border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Verified</th>
            <th className="border px-4 py-2">Admin</th>
            <th className="border px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center py-4 text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{u.id}</td>
                <td className="border px-4 py-2">{u.email}</td>
                <td className="border px-4 py-2">{u.first_name}</td>
                <td className="border px-4 py-2">{u.last_name}</td>
                <td className="border px-4 py-2">{u.phone}</td>
                <td className="border px-4 py-2">{u.location}</td>
                <td className="border px-4 py-2">{u.is_verified ? "✅ Yes" : "❌ No"}</td>
                <td className="border px-4 py-2">{u.is_admin ? "✅ Yes" : "❌ No"}</td>
                <td className="border px-4 py-2">{new Date(u.created_at).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
