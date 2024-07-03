"use client";

import Providers from "@/components/Providers/Providers";
import { PropsWithChildren } from "react";

const ProvidersLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
};

export default ProvidersLayout;
