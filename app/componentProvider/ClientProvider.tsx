"use client";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Provider from "../Provider";

function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ClerkProvider>
        <Provider>{children}</Provider>
      </ClerkProvider>
    </div>
  );
}

export default ClientProvider;
