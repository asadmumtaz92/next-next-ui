'use client'
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

interface NextUIProvidersProps {
    children: React.ReactNode
};

const NextUIProviders = ({ children }: NextUIProvidersProps) => {

    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
}

export default NextUIProviders
