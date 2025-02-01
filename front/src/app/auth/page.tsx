"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../../services/authServices";


export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Appelle l'API
      // eslint-disable-line no-unused-vars
      const data = await loginUser(email, password);
      if (data?.token) {
        // Stocker le token dans un cookie
        Cookies.set("authToken", data.token, { expires: 7 }); // Cookie valide 7 jours
      }

      // Afficher un message de succès
      console.log("Connexion réussie !");

      // Rediriger l'utilisateur vers la page de profile après un délai
      setTimeout(() => {
        // Masquer le message
        alert("Connexion réussie !");
        // Redirection
        router.push("/boutiques"); 
      }, 5000); // 5 secondes
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Erreur de connexion :", err);
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-black mb-10">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Se connecter</h2>
          <form onSubmit={handleLogin} className="space-y-4">
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
              {loading ? "Chargement..." : "Se connecter"}
            </button>
          </form>
          <Link href="/auth/register"> Pas encore membre ? Inscris toi</Link>
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </div>
      </div>
  
    </>
  );
}
