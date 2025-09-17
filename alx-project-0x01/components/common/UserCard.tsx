import { UserProps } from "@/interface/index";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, phone, website, company, address }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
      </div>

      {/* Contact Info */}
      <div className="text-gray-700 text-sm space-y-1">
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`http://${website}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Company Info */}
      <div className="mt-4 text-sm">
        <p className="font-semibold text-gray-800">{company.name}</p>
        <p className="italic text-gray-500">"{company.catchPhrase}"</p>
      </div>

      {/* Address */}
      <div className="mt-4 text-xs text-gray-600">
        <p>
          {address.suite}, {address.street}
        </p>
        <p>
          {address.city}, {address.zipcode}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs text-gray-400 flex justify-between">
        <span>User ID: {id}</span>
        <span>Geo: {address.geo.lat}, {address.geo.lng}</span>
      </div>
    </div>
  );
};

export default UserCard;
