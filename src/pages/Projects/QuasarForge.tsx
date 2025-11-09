import React from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

interface QuasarForgePageProps {
    title?: string;
    description?: string;
    gifSrc?: string; // relative to public/ or absolute URL
    showHeaderFooter?: boolean;
    companyName?: string;
}

const QuasarForge: React.FC<QuasarForgePageProps> = ({
    title = "QuasarForge — Cloud-Native Web Development Platform",
    description = "A developer-centric cloud studio that brings together coding, deployment, and hosting under one intelligent platform.",
    gifSrc = '',
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
                                <div className="absolute inset-0 flex items-center justify-center bg-background/50 transition-opacity"
                                    style={{ opacity: 1 }}>
                                </div>

                                <span className="absolute inset-0 flex items-center justify-center bg-background/50 transition-opacity">
                                    <div className="text-center text-muted-foreground space-y-2">
                                        <ul className="list-disc list-inside text-sm text-foreground/80 text-left inline-block">
                                            <li>Browser-based IDE connected to the cloud</li>
                                            <li>AI-powered code generation and optimization</li>
                                            <li>One-click containerization and Kubernetes deployment</li>
                                            <li>API management and microservice orchestration built-in</li>
                                            <li>Real-time collaboration for development teams</li>
                                        </ul>
                                        <p className="mt-4 text-sm italic">Forge the Future of the Web — in the Cloud.</p>
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

export default QuasarForge;
