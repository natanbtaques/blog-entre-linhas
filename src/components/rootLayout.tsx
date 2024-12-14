import Header from "./header/index";
import Footer from "./footer/index";

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

