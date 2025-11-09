import React from "react";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

interface QuasarLearnPageProps {
    title?: string;
    description?: string;
    showHeaderFooter?: boolean;
    companyName?: string;
}

const QuasarLearn: React.FC<QuasarLearnPageProps> = ({
    title = "QuasarLearn — AI Knowledge Platform",
    description = "Democratize access to personalized education globally.",
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
                                        <p className="mt-4 text-sm italic"> QuasarStack is an innovative SaaS e-learning platform designed for students in grades 5 through 8. Our platform provides high-quality knowledge content, comprehensive assessments, and expert guidance to foster academic growth and mental well-being. QuasarStack uniquely bridges the gap between theoretical knowledge and real-life applications, helping students understand the practical use of their studies and explore potential career paths.</p>

                                        <ul className="list-disc list-inside text-sm text-foreground/80 text-left inline-block">
                                            <li>🧩 Adaptive Learning Engine: Customizes content difficulty and format to each learner’s pace.</li>
                                            <li>🗣️ AI Tutor Chat: Instant help for any topic using multimodal understanding (text, diagrams, video).</li>
                                            <li>🔍 Smart Content Indexing: AI categorizes and ranks open educational resources.</li>
                                            <li>📈 Learning Insights Dashboard: Personalized progress analytics for students and teachers.</li>
                                        </ul>
                                        <p className="mt-4 text-sm italic">Free access to knowledge + scalable personalized learning.</p>
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

export default QuasarLearn;
