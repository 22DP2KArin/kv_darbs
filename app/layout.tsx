import "./globals.css";
import Link from "next/link";
import { getCurrentProfile } from "@/lib/auth";

export const metadata = {
  title: "Dāvanu izvēles sistēma",
  description: "Tīmekļa vietne dāvanu izvēlei pēc interesēm un hobijiem."
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const profile = await getCurrentProfile();

  return (
    <html lang="lv">
      <body className="min-h-screen">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="font-semibold">
                Dāvanas
              </Link>
              <Link href="/gifts">Katalogs</Link>
              {profile && (
                <>
                  <Link href="/wishlist">Vēlmju saraksts</Link>
                  <Link href="/friends">Draugi</Link>
                  {profile.role === "admin" && (
                    <Link href="/admin/gifts">Admin</Link>
                  )}
                  <Link href="/ideas">Idejas</Link>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              {!profile && (
                <>
                  <Link href="/login">Pieteikties</Link>
                  <Link href="/register" className="btn-primary">
                    Reģistrēties
                  </Link>
                </>
              )}
              {profile && (
                <>
                  <span className="text-sm">Sveiki, {profile.username}</span>
                  <Link href="/profile">Profils</Link>
                  <form action="/logout" method="post">
                    <button className="text-sm text-red-600">
                      Izrakstīties
                    </button>
                  </form>
                </>
              )}
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      </body>
    </html>
  );
}
