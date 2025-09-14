import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Wifi, Download, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-5xl">
            Bridge the Rural Learning Gap
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl max-w-3xl mx-auto">
            A low-bandwidth virtual classroom designed for rural colleges. Connect expert lecturers 
            with students anywhere, even with limited internet connectivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/classroom">
              <Button variant="secondary" size="lg" className="shadow-elevated">
                Start Teaching <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/library">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                Browse Content
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Built for Rural Reality
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every feature optimized for low bandwidth, entry-level devices, and unreliable connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ultra-Low Bandwidth</CardTitle>
                <CardDescription>
                  Audio-first design with compressed visuals. Works on 2G connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Live polls, quizzes, and discussions that work even on slow connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Offline Content</CardTitle>
                <CardDescription>
                  Download lectures during off-peak hours. Study without internet.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Subject Expertise</CardTitle>
                <CardDescription>
                  Connect with city-based experts in AI, VLSI, renewable energy, and more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Simple Interface</CardTitle>
                <CardDescription>
                  WhatsApp-simple design. Works on entry-level smartphones.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Cost Effective</CardTitle>
                <CardDescription>
                  No expensive hardware. No costly licenses. Just effective learning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Connect Rural Students with Expert Teachers?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Start your first virtual classroom session today. No setup required.
          </p>
          <Link to="/quiz">
            <Button size="lg" className="shadow-elevated">
              Try Interactive Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;