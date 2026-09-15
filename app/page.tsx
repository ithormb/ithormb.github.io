"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Raiz do site estático: encaminha para o idioma padrão.
export default function Root() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/pt/");
  }, [router]);
  return (
    <main className="px-6 py-16">
      <Link href="/pt/" className="link-ul">
        Português
      </Link>
      {" · "}
      <Link href="/en/" className="link-ul">
        English
      </Link>
    </main>
  );
}
