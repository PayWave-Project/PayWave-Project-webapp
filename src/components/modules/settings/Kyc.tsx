export const KYC = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">KYC & BVN</h2>
        <div className="mb-4">
          <label className="block mb-2">KYC ID</label>
          <input
            type="text"
            className="border px-4 py-2 w-full"
            placeholder="Enter KYC ID"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">BVN</label>
          <input
            type="text"
            className="border px-4 py-2 w-full"
            placeholder="Enter BVN"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2">Submit</button>
      </div>
    );
  };
  