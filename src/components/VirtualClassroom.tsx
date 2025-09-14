import { useState } from "react";
import { Mic, MicOff, Volume2, VolumeX, Users, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const VirtualClassroom = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [chatMessage, setChatMessage] = useState("");

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Introduction to Artificial Intelligence
              </h1>
              <p className="text-muted-foreground">
                Prof. Dr. Sharma • IIT Delhi • 45 students connected
              </p>
            </div>
            <Badge variant="secondary" className="bg-success text-success-foreground">
              Live Session
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Audio Interface */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-primary" />
                  Audio Stream (Optimized for Low Bandwidth)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Audio Visualizer Placeholder */}
                <div className="bg-gradient-card rounded-lg p-8 text-center">
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 bg-primary rounded-full transition-all duration-300 ${
                          i % 3 === 0 ? 'h-8' : i % 2 === 0 ? 'h-6' : 'h-4'
                        }`}
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animation: 'pulse 1.5s ease-in-out infinite'
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    Audio quality: Clear • Data usage: 2KB/min
                  </p>
                </div>

                {/* Controls */}
                <div className="flex justify-center space-x-4">
                  <Button
                    variant={isMuted ? "destructive" : "secondary"}
                    size="lg"
                    onClick={() => setIsMuted(!isMuted)}
                    className="shadow-sm"
                  >
                    {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    {isMuted ? "Unmute" : "Mute"}
                  </Button>
                  <Button
                    variant={isAudioEnabled ? "secondary" : "outline"}
                    size="lg"
                    onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                    className="shadow-sm"
                  >
                    {isAudioEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                    Audio
                  </Button>
                </div>

                {/* Current Topic */}
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Current Topic:</h3>
                    <p className="text-sm text-muted-foreground">
                      Machine Learning Fundamentals - Understanding supervised vs unsupervised learning
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Participants */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Participants (45)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-semibold">PS</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">Prof. Sharma</p>
                      <p className="text-xs text-muted-foreground">Instructor</p>
                    </div>
                  </div>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xs text-secondary-foreground font-semibold">
                          S{i + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">Student {i + 1}</p>
                        <p className="text-xs text-muted-foreground">Online</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-muted-foreground text-center py-2">
                    +41 more students
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chat */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  <div className="text-xs p-2 bg-muted/50 rounded">
                    <span className="font-semibold text-primary">System:</span> Welcome to the AI lecture!
                  </div>
                  <div className="text-xs p-2 rounded">
                    <span className="font-semibold text-secondary">Student:</span> Can you repeat the definition of ML?
                  </div>
                  <div className="text-xs p-2 rounded">
                    <span className="font-semibold text-accent">Student:</span> Audio is very clear, thank you!
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Type your question..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="resize-none text-sm"
                    rows={2}
                  />
                  <Button size="sm" className="w-full">Send</Button>
                </div>
              </CardContent>
            </Card>

            {/* Materials */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📄 AI Fundamentals.pdf (2.1 MB)
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    🎵 Lecture Audio (5.8 MB)
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📊 ML Examples.pptx (3.2 MB)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualClassroom;