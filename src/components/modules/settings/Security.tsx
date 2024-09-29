import { useAddPin } from "@/api/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Security = () => {
  const { mutateAsync: changeAuthPin, isLoading: isLoadingAuthPin } =
    useAddPin();
  const { toast } = useToast();

  const [newPin, setNewPin] = useState("");

  const handleChangeAuthPin = async (newPin: string) => {
    try {
      const payload = {
        authPIN: newPin,
      };
      const res = await changeAuthPin(payload);
      toast({
        title: "Success",
        description: "Auth pin changed successfully",
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change auth pin",
        variant: "error",
      });
    }
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Change Password & Auth PIN</h2>
      <div className="mb-4">
        <Label className="block mb-2">New Password</Label>
        <Input
          type="password"
          className="border px-4 py-2 w-full"
          placeholder="Enter new password"
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">Confirm Password</Label>
        <Input
          type="password"
          className="border px-4 py-2 w-full"
          placeholder="Confirm new password"
        />
      </div>
      <div className="flex justify-end">
        <Button className="bg-primary text-white px-4 py-2 mb-4">
          Change Password
        </Button>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Change Auth PIN</h3>
        <div className="mb-4">
          <Label className="block mb-2">New Auth PIN</Label>
          <Input
            type="password"
            className="border px-4 py-2 w-full"
            placeholder="Enter new Auth PIN"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button
            disabled={isLoadingAuthPin}
            onClick={() => handleChangeAuthPin(newPin)}
            className="bg-primary text-white px-4 py-2"
          >
            Change PIN
          </Button>
        </div>
      </div>
    </div>
  );
};
