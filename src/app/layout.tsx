import type { Metadata } from "next";
import BootstrapClient from "./components/BoostrapClient";
import UserProvider from "./state/UserProvider";
import { Toast } from "./components/Toast/Toast";
import LayoutMainPage from "./components/LayoutMainPage/LayoutMainPage";
import UsersFetchProvider from "./state/UsersFetchProvider";
import PrivateRoute from "./components/PrivateRouter";
import MainHeader from "./components/MainHeader/MainHeader";
import MainFooter from "./components/MainFooter/MainFooter";
import Main from "./components/Main/Main";
export const metadata: Metadata = {
  title: "Manutenção e Evolução de Software",
  description: "Saile Santos da Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <UserProvider>
        <UsersFetchProvider>
          <body>
            {children}
            <Toast />
            <BootstrapClient />
          </body>
          <PrivateRoute />
        </UsersFetchProvider>
      </UserProvider>
    </html>
  );
}
