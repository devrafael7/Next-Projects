import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex max-h-screen pt-10 lg:px-40 md:px-10 px-4">
      <LoginForm className="w-full" />
    </div>
  );
}
