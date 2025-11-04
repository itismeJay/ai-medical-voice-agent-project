"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export type UserDetail = {
  name: string;
  email: string;
  credits: number;
};

export function Provider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    if (user) createOrGetUser();
  }, [user]);

  const createOrGetUser = async () => {
    try {
      const result = await axios.post("/api/users");
      setUserDetail(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  return <div>{children}</div>;
}
