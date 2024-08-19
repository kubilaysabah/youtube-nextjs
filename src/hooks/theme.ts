"use client";

import { useState, useEffect } from 'react'

export default function Theme(): string {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const themeSelector = window.matchMedia('(prefers-color-scheme: light)');

        themeSelector.addEventListener('change', event => {
            setTheme(event.matches ? 'light' : 'dark');
        });

        setTheme(themeSelector.matches ? 'light' : 'dark');
    }, []);

    return theme;
}