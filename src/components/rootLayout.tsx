import Header from "./header/header";
import Footer from "./footer/footer";

import { ReactNode } from "react";


export default function rootLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

