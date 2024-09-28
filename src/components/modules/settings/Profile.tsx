import { useGetMerchantProfile } from "@/api/profile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Profile = () => {
  const { data } = useGetMerchantProfile();

  const profileData = data?.data.data;

  const businessName = profileData?.businessName;
  const firstName = profileData?.firstName;
  const lastName = profileData?.lastName;
  const phoneNumber = profileData?.phoneNumber;
  const email = profileData?.email;
  const address = profileData?.address;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Information</h2>
      <div className="mb-4">
        <Label className="block mb-2">Business Name</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          value={businessName}
          readOnly
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">Full Name</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          value={`${firstName} ${lastName}`}
          readOnly
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">Phone Number</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          value={phoneNumber}
          readOnly
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">Email</Label>
        <Input
          type="email"
          className="border px-4 py-2 w-full"
          value={email}
          readOnly
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">Address</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          value={address}
          readOnly
        />
      </div>
    </div>
  );
};
