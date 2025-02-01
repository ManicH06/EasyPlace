import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Address {
    name: string;
    street: string;
    city: string;
    zip: string;
    phone: string;
  }

  interface UserAddressProps {
    address: Address;
    setAddress: React.Dispatch<React.SetStateAction<Address>>;
  }


export default function UserAddress({ address, setAddress }: UserAddressProps) {
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  return (
    <>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Adresse de Livraison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={address.name}
              onChange={handleAddressChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Numéro de téléphone"
              value={address.phone}
              onChange={handleAddressChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="street"
              placeholder="Adresse (Rue)"
              value={address.street}
              onChange={handleAddressChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="Ville"
              value={address.city}
              onChange={handleAddressChange}
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              name="zip"
              placeholder="Code postal"
              value={address.zip}
              onChange={handleAddressChange}
              className="border rounded p-2 w-full"
            />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
