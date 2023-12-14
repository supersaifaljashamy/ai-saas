"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("1e5513dc-44e4-4674-bc16-3d28b9e80bfd");
  }, []);

  return null;
};