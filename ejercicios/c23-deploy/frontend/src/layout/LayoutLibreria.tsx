import type { ReactNode } from "react";
import HeaderLibreria from "./HeaderLibreria";
import FooterLibreria from "./FooterLibreria";
import FloatingLogin from "./FloatingLogin";

interface LayoutProps {
    children: ReactNode
};

function LayoutLibreria({ children }: LayoutProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <HeaderLibreria />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <FooterLibreria />

            <FloatingLogin />
        </div>
    )
}

export default LayoutLibreria;