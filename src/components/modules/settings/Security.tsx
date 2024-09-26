export const Security = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Change Password & Auth PIN</h2>
        {/* Change Password */}
        <div className="mb-4">
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            className="border px-4 py-2 w-full"
            placeholder="Enter new password"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            className="border px-4 py-2 w-full"
            placeholder="Confirm new password"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mb-4">Change Password</button>
  
        {/* Change Auth PIN */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Change Auth PIN</h3>
          <div className="mb-4">
            <label className="block mb-2">New Auth PIN</label>
            <input
              type="password"
              className="border px-4 py-2 w-full"
              placeholder="Enter new PIN"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2">Change PIN</button>
        </div>
      </div>
    );
  };
  