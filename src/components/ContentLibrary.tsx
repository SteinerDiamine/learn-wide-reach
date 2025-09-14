import { useState } from "react";
import { Search, Download, Play, BookOpen, Clock, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const subjects = [
    { id: "all", name: "All Subjects" },
    { id: "ai", name: "Artificial Intelligence" },
    { id: "vlsi", name: "VLSI Design" },
    { id: "renewable", name: "Renewable Energy" },
    { id: "iot", name: "Internet of Things" },
    { id: "blockchain", name: "Blockchain Technology" }
  ];

  const content = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      subject: "Artificial Intelligence",
      instructor: "Prof. Dr. Sharma",
      institution: "IIT Delhi",
      duration: "45 min",
      size: "12 MB",
      downloadSize: "Audio: 2.8 MB",
      students: 234,
      rating: 4.8,
      type: "lecture",
      description: "Comprehensive introduction to ML concepts, algorithms, and real-world applications."
    },
    {
      id: 2,
      title: "CMOS Circuit Design Fundamentals",
      subject: "VLSI Design",
      instructor: "Dr. Patel",
      institution: "IIT Bombay",
      duration: "52 min",
      size: "15 MB",
      downloadSize: "Audio: 3.2 MB",
      students: 156,
      rating: 4.7,
      type: "lecture",
      description: "Deep dive into CMOS technology and circuit design principles."
    },
    {
      id: 3,
      title: "Solar Panel Efficiency Quiz",
      subject: "Renewable Energy",
      instructor: "Prof. Singh",
      institution: "IIT Kanpur",
      duration: "15 min",
      size: "1.2 MB",
      downloadSize: "Text: 180 KB",
      students: 89,
      rating: 4.6,
      type: "quiz",
      description: "Interactive quiz on photovoltaic cell efficiency and optimization."
    },
    {
      id: 4,
      title: "Neural Networks Workshop",
      subject: "Artificial Intelligence",
      instructor: "Dr. Agarwal",
      institution: "IIT Madras",
      duration: "1h 20min",
      size: "22 MB",
      downloadSize: "Audio: 4.1 MB",
      students: 312,
      rating: 4.9,
      type: "workshop",
      description: "Hands-on workshop covering neural network implementation and training."
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === "all" || 
                          item.subject.toLowerCase().includes(selectedSubject);
    return matchesSearch && matchesSubject;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lecture": return <Play className="h-4 w-4" />;
      case "quiz": return <BookOpen className="h-4 w-4" />;
      case "workshop": return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "lecture": return "bg-primary/10 text-primary";
      case "quiz": return "bg-accent/10 text-accent";
      case "workshop": return "bg-secondary/10 text-secondary";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Content Library</h1>
          <p className="text-muted-foreground">
            Download optimized educational content for offline learning
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
              <Input
                placeholder="Search lectures, workshops, quizzes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {subjects.map(subject => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredContent.map(item => (
            <Card key={item.id} className="shadow-card hover:shadow-elevated transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(item.type)}>
                        {getTypeIcon(item.type)}
                        <span className="ml-1 capitalize">{item.type}</span>
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {item.subject}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                    <CardDescription>
                      {item.instructor} • {item.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {item.students} students
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    {item.downloadSize}
                  </div>
                </div>

                {/* Download Options */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Audio Only
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Materials
                    </Button>
                  </div>
                  <Button variant="secondary" className="w-full" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Stream Now
                  </Button>
                </div>

                {/* Data Usage Warning */}
                <div className="bg-accent/10 text-accent p-2 rounded text-xs">
                  💡 Audio-only download recommended for 2G connections
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Footer */}
        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Lectures Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Expert Instructors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">2,400+</div>
              <div className="text-sm text-muted-foreground">Students Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLibrary;