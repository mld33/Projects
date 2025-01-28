import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata = {
  title: "User App",
  description: "Просмотр пользователей",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
      <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
