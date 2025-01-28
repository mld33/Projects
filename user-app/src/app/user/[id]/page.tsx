import { User } from "@/types/user";

async function fetchUser(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Ошибка при загрузке пользователя");
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  let user;

  try {
    user = await fetchUser(params.id);
  } catch {
    return <p className="text-red-500">Ошибка загрузки данных.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p>📩 Почта: {user.email}</p>
      <p>🏢 Компания: {user.company.name}</p>
      <p>📍 Адрес: {user.address.street}, {user.address.city}</p>          
    </div>
  );
}
