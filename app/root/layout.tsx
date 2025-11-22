import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <style>{`
        .navbar-container,
        .footer-container {
          display: none;
        }
      `}</style>
      {children}
    </>
  );
}
