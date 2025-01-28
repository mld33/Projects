"use client"; // Используем useState и useEffect

import { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";
import Skeleton from "@/components/Skeleton";

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Ошибка при загрузке пользователей");
  return res.json();
}

export default function HomePage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Список пользователей</h1>

      {/* Поле поиска */}
      <input
        type="text"
        placeholder="🔍 Поиск по имени..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} />)
          : filteredUsers.length > 0
          ? filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
          : <p className="text-gray-500">Ничего не найдено 😕</p>}
      </div>
    </main>
  );
}
