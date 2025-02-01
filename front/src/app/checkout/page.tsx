"use client";
import { useState } from "react";
import OrderDetail from "@/components/pages/checkout/CartContent";
import UserAddress from "@/components/pages/checkout/UserAddress";
import OrderPreview from "@/components/pages/checkout/OrderPreview";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
  });


  const goToNextStep = () => setStep((prevStep) => prevStep + 1);
  const goToPreviousStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        {step === 1 && "Contenu du Panier"}
        {step === 2 && "Adresse de Livraison"}
        {step === 3 && "Résumé et Informations"}
      </h1>

      {step === 1 && (
        <div>
         <OrderDetail/>
          <button
            onClick={goToNextStep}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Procéder
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
         <UserAddress address={address} setAddress={setAddress}/>
          <div className="flex justify-between">
            <button
              onClick={goToPreviousStep}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Retour
            </button>
            <button
              onClick={goToNextStep}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Procéder
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <OrderPreview address={address}/>
          <div className="flex justify-between mt-6">
            <button
              onClick={goToPreviousStep}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Retour
            </button>
            <button
              onClick={() => alert("Commande confirmée !")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Commander
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
