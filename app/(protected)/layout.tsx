"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // 👈 state

  useEffect(() => {
    const token = localStorage.getItem("password");
    if (!token) {
      router.replace("/");
    } else {
      const isMatch=token===process.env.NEXT_PUBLIC_PASSWORD
      if(!isMatch){
        router.replace("/");
      }else{
      setIsLoading(false);
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center bg-black text-white justify-center">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
