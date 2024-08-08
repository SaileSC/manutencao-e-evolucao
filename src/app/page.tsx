"use client";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./hooks/user/useLoginAuth";
import { useEffect } from "react";

const Home = () => {
  const userAuth = useUserAuth();

  const router = useRouter();
  useEffect(() => {
    if (!userAuth) return router.push("/login");
    return router.push("/usuario");
  });
};

export default Home;
