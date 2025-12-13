"use client";

import React from "react";
import { cn } from "@/lib/utils";


export function Skills() {
    return (
        <section id="arsenal" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] font-mono text-sm tracking-wide">
                        [ SECURE CONTAINER // CLICK TO ACCESS ]
                    </p>
                </div>

                <div className="w-full flex justify-center py-10">
                    <div className="text-muted-foreground font-mono">
                        [ SYSTEM PURGED // WAITING FOR INPUT ]
                    </div>
                </div>
            </div>
        </section>
    );
}
