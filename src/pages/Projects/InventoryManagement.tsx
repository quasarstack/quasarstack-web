import React from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import inventoryGif from "@/assets/InventoryManagement.gif";

interface InventoryManagementPageProps {
    title?: string;
    description?: string;
    gifSrc?: string; // relative to public/ or absolute URL
    showHeaderFooter?: boolean;
    companyName?: string;
}

const InventoryManagement: React.FC<InventoryManagementPageProps> = ({
    title = "Distributor Inventory Management System",
    description = "A smart inventory management system for distributors that lets users upload data files, track inventory in real time, and generate interactive dashboards. It also provides automated PDF reports based on selected date ranges for quick insights and record-keeping.",
    gifSrc = inventoryGif,
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
                                    style={{ opacity: gifSrc ? 0 : 1 }}>
                                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                </div>

                                {/* Image with fade-in effect */}
                                <img
                                    src={gifSrc}
                                    alt="Inventory Management System Demo"
                                    className="max-w-full h-auto object-contain transition-opacity duration-300"
                                    style={{ opacity: gifSrc ? 1 : 0 }}
                                    onError={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.style.opacity = "0";
                                        console.error("Failed to load GIF");
                                    }}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            {showHeaderFooter && <Footer />}
        </div>
    );
};

export default InventoryManagement;
