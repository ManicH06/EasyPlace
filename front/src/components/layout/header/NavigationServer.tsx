import { getAuthStatus } from "@/lib/auth";
import NavigationClient from "./NavigationClient";

interface NavigationServerProps {
  onMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default async function NavigationServer({
  onMenuToggle,
}: NavigationServerProps) {
  const isAuthenticatedSSR = await getAuthStatus();

  return (
    <NavigationClient
      isAuthenticatedSSR={isAuthenticatedSSR}
      onMenuToggle={onMenuToggle}
    />
  );
}
