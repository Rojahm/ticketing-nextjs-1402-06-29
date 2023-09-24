"use client";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function LogOut() {
  const router = useRouter();
  const handleSignOut = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.refresh();
      router.push("/");
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleSignOut} className="flex items-center">
      <FaSignOutAlt size={20} /> خروج
    </button>
  );
}

export default LogOut;
