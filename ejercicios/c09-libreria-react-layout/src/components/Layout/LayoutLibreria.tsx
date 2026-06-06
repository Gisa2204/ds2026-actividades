import type { ReactNode } from "react";
import HeaderLibreria from "./HeaderLibreria";
import FooterLibreria from "./FooterLibreria";

interface LayoutProps {
    children: ReactNode
};

function LayoutLibreria({ children }: LayoutProps) {
    return (
        <>
            <HeaderLibreria />
            <main>{children}</main>
            <FooterLibreria />
        </>
    )
}

export default LayoutLibreria;