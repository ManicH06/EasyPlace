"use client";
import { useState } from "react";
import Nav from "./NavigationClient";

export default function Header() {
  // Désactivation regles eslint pour les variables non utilisées
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Nav onMenuToggle={setIsMenuOpen} isAuthenticatedSSR={false} />
    </>
  );
}
