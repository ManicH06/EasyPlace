"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../../../services/authServices";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Attribution du role membre
    const roleId = 4;
    try {
      // Appelle l'API
      const data = await registerUser(email, password, name, roleId);

      // Afficher un message de succès
      console.log("Inscription réussie !");
      console.log(data);

      // Rediriger l'utilisateur vers la page de connexion après un délai
      setTimeout(() => {
        alert("Inscription réussie !");
        // Redirection
        router.push("/auth");
        // 2 secondes
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Erreur d'inscription :", err);
      console.log("email:", email);
      console.log("password:", password);
      console.log("name:", name);
      console.log("roleId", roleId);
      console.log("Une erreur est survenue lors de l'inscription.");
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-black mb-10">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Créer un compte</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Chargement..." : "S'inscrire"}
            </button>
          </form>
          <Link href="/auth"> J&apos;ai déjà un compte</Link>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
    </>
  );
}
