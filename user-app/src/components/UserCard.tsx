import Link from "next/link";
import { FaEnvelope, FaBuilding,FaMapMarkerAlt } from "react-icons/fa";

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    company: { name: string }; 
    address: { street: string; city: string };   
  };
}

export default function UserCard({ user }: UserProps) {
  return (
    <div className="border p-3 rounded-md shadow-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 ">{user.name}</h2>
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-gray-500" />
        {user.email}
      </p>
      <p className="flex items-center gap-2">
        <FaBuilding className="text-gray-500" />
        {user.company.name}
      </p> 
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-gray-500" />
        {user.address.city}
      </p>           
      <Link href={`/user/${user.id}`}>
        <button className="mt-2 text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-green-700">
          Подробнее
        </button>
      </Link>
    </div>
  );
}
