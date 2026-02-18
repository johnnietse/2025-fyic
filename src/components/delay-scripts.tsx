"use strict";
"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export function DelayedScripts() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Delay loading by 5 seconds OR on user interaction
        const timer = setTimeout(() => setShouldLoad(true), 5000);

        const handleInteraction = () => {
            setShouldLoad(true);
            clearTimeout(timer);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
        };

        window.addEventListener("scroll", handleInteraction);
        window.addEventListener("mousemove", handleInteraction);
        window.addEventListener("touchstart", handleInteraction);
        window.addEventListener("keydown", handleInteraction);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("keydown", handleInteraction);
        };
    }, []);

    if (!shouldLoad) return null;

    return (
        <>
            <Script
                id="nepcha-analytics"
                data-site="https://2025-fyic.vercel.app/"
                src="https://api.nepcha.com/js/nepcha-analytics.js"
                strategy="afterInteractive"
            />
            <Script
                id="userway-widget"
                src="https://cdn.userway.org/widget.js"
                data-account="7EpVmNijkz"
                strategy="afterInteractive"
            />
        </>
    );
}

export default DelayedScripts;
