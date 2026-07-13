"use client"

import { useEffect } from "react"
import { notifyFirstVisit } from "@/lib/email"

export function VisitNotifier() {
    useEffect(() => {
        void notifyFirstVisit()
    }, [])

    return null
}
