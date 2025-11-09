import React from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

interface GreenOrbitPageProps {
    title?: string;
    description?: string;
    showHeaderFooter?: boolean;
    companyName?: string;
}

const GreenOrbit: React.FC<GreenOrbitPageProps> = ({
    title = "Green Orbit — AgriTech Platform for Organic Farmers",
    description = "",
    showHeaderFooter = true,
    companyName = "QuasarStack",
}) => {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            {showHeaderFooter && (
                <header className="py-4 px-6 border-b border-primary/10 bg-card/5">
                    <div className="container mx-auto flex items-center justify-between">
                        <h1 className="text-xl font-bold">{companyName}</h1>
                        <nav className="text-sm text-muted-foreground">
                        </nav>
                    </div>
                </header>
            )}

            <main className="flex-1 py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Card className="p-8 flex items-center justify-center">
                            <div className="w-full flex items-center justify-center relative min-h-[300px]">
                                {/* Loading state */}
                                <div className="absolute inset-0 flex items-center justify-center bg-background/50 transition-opacity">
                                </div>

                                <span className="absolute inset-0 flex items-center justify-center bg-background/50 transition-opacity">
                                    <div className="text-center text-muted-foreground space-y-2">
                                        <p className="mt-4 text-sm italic">
                                            GreenOrbit is a next-generation FarmTech SaaS platform designed to digitize, simplify, and strengthen organic certification processes under ICS (Internal Control System) and PGS (Participatory Guarantee System) frameworks.
                                        </p>
                                        <p className="mt-4 text-sm italic"> To create a globally connected, transparent, and trusted ecosystem for organic farming and certification enabling farmers, certifiers, and consumers to orbit around sustainability, integrity, and innovation.”
                                        </p>
                                    </div>
                                </span>

                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            {showHeaderFooter && <Footer />}
        </div>
    );
};

export default GreenOrbit;
