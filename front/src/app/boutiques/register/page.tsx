"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerShop } from "@/services/shopServices";

export default function BoutiqueRegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    prefix: "+33",
    telephone: "",
    street: "",
    postalCode: "",
    city: "",
    departement: "",
    siret: "",
    type: "",
    describe: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {prefix, telephone, ...rest} = formData
    const submissionData = {
      ...rest,
      phone: `${prefix}${telephone}`,

    };
    try {
      const data = await registerShop(submissionData);
      console.log("Formulaire d'enregistrement soumis avec succès !", data);
      console.log("Données soumises:", submissionData);
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mb-10">
      <CardHeader>
        <CardTitle>Enregistrement de Boutique</CardTitle>
        <CardDescription>
          Remplissez ce formulaire pour enregistrer votre boutique
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Nom de la boutique</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Numéro de téléphone</Label>
            <div className="flex">
              <Input
                id="prefix"
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                className="w-20 mr-2"
                required
              />
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="street">Adresse</Label>
            <Input
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="postalCode">Code postal</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="departement">Département</Label>
            <Input
              id="departement"
              name="departement"
              value={formData.departement}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siret">SIRET</Label>
            <Input
              id="siret"
              name="siret"
              value={formData.siret}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Type d&apos;entreprise</Label>
            <Select
              onValueChange={handleSelectChange("type")}
              value={formData.type}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type d'entreprise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sarl">SARL</SelectItem>
                <SelectItem value="sas">SAS</SelectItem>
                <SelectItem value="ei">Entreprise Individuelle</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="describe">Description de la boutique</Label>
            <Textarea
              id="describe"
              name="describe"
              value={formData.describe}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Catégorie</Label>
            <Select
              onValueChange={handleSelectChange("category")}
              value={formData.category}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alimentation">Alimentation</SelectItem>
                <SelectItem value="vetements">Vêtements</SelectItem>
                <SelectItem value="electronique">Électronique</SelectItem>
                <SelectItem value="autre">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Enregistrer la boutique
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
