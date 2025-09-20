import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps, UsersPageProps } from "@/interfaces";
import { useState } from "react";
import UserModal from "@/components/common/UserModal";

const Users = ({ posts }: UsersPageProps) => {
  const [users, setUsers] = useState<UserProps[]>(posts); // ✅ local state
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserProps) => {
    setUsers((prev) => [
      ...prev,
      { ...newUser, id: prev.length + 1 }, // ✅ give it a unique id
    ]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {users.map((user: UserProps, key: number) => (
            <UserCard key={key} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser} // ✅ real handler
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
