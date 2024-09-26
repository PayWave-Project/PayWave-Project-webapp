export const Profile = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">My Information</h2>
        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            className="border px-4 py-2 w-full"
            value="John Doe"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <input
            type="text"
            className="border px-4 py-2 w-full"
            value="23480987654"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="border px-4 py-2 w-full"
            value="johndoe@example.com"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            className="border px-4 py-2 w-full"
            value="Lagos, Nigeria"
            readOnly
          />
        </div>
      </div>
    );
  };
  