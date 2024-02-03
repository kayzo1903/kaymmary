"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { BiMoon, BiSun } from "react-icons/bi"


export function ModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { setTheme , resolvedTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div>
            {
                resolvedTheme === 'light' ? (
                    <button onClick={() => setTheme('dark')}><BiSun  className="text-yellow-600"/></button>
                ) : (
                    <button onClick={() => setTheme('light')}><BiMoon /></button>
                )
            }
        </div>
    )
}
