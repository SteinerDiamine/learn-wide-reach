import { useState } from "react";
import { CheckCircle, XCircle, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);

  const quizData = {
    title: "AI Fundamentals: Quick Check",
    description: "Test your understanding of basic AI concepts",
    totalQuestions: 5,
    timePerQuestion: 45,
    participantsCount: 23
  };

  const questions = [
    {
      id: 1,
      question: "What is the primary goal of supervised learning?",
      options: [
        "To learn without any training data",
        "To learn from labeled training examples to make predictions",
        "To group similar data points together",
        "To reduce the dimensionality of data"
      ],
      correct: 1,
      explanation: "Supervised learning uses labeled training data to learn patterns and make predictions on new, unseen data."
    },
    {
      id: 2,
      question: "Which of the following is an example of unsupervised learning?",
      options: [
        "Email spam detection",
        "Image classification",
        "Customer segmentation",
        "Medical diagnosis"
      ],
      correct: 2,
      explanation: "Customer segmentation groups customers based on similarities without pre-labeled categories."
    },
    {
      id: 3,
      question: "What does 'overfitting' mean in machine learning?",
      options: [
        "The model performs well on all datasets",
        "The model is too simple to capture patterns",
        "The model performs well on training data but poorly on new data",
        "The model takes too long to train"
      ],
      correct: 2,
      explanation: "Overfitting occurs when a model learns the training data too well, including noise, leading to poor generalization."
    }
  ];

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setTimeLeft(45);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (parseInt(answer) === questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-elevated">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
              <CardDescription>Here are your results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Display */}
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">
                  {score}/{questions.length}
                </div>
                <div className="text-xl text-muted-foreground">
                  {percentage}% Correct
                </div>
                <Progress value={percentage} className="h-3" />
              </div>

              {/* Performance Badge */}
              <div className="text-center">
                <Badge 
                  className={`text-lg px-4 py-2 ${
                    percentage >= 80 ? 'bg-success text-success-foreground' :
                    percentage >= 60 ? 'bg-accent text-accent-foreground' :
                    'bg-destructive text-destructive-foreground'
                  }`}
                >
                  {percentage >= 80 ? 'Excellent!' : 
                   percentage >= 60 ? 'Good Job!' : 
                   'Keep Learning!'}
                </Badge>
              </div>

              {/* Question Review */}
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Review Your Answers:</h3>
                {questions.map((q, index) => {
                  const userAnswer = parseInt(answers[index]);
                  const isCorrect = userAnswer === q.correct;
                  
                  return (
                    <Card key={q.id} className={`${isCorrect ? 'border-success' : 'border-destructive'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          {isCorrect ? 
                            <CheckCircle className="h-5 w-5 text-success mt-0.5" /> :
                            <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                          }
                          <div className="flex-1">
                            <p className="font-medium text-sm mb-2">{q.question}</p>
                            <p className="text-xs text-muted-foreground mb-1">
                              Your answer: {q.options[userAnswer]}
                            </p>
                            {!isCorrect && (
                              <p className="text-xs text-success mb-1">
                                Correct: {q.options[q.correct]}
                              </p>
                            )}
                            <p className="text-xs text-muted-foreground italic">
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Class Stats */}
              <Card className="bg-muted/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-sm mb-3">Class Performance</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-lg font-bold text-primary">76%</div>
                      <div className="text-muted-foreground">Class Average</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">{quizData.participantsCount}</div>
                      <div className="text-muted-foreground">Participants</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" onClick={() => window.location.reload()}>
                Take Another Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Quiz Header */}
        <Card className="shadow-card mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{quizData.title}</CardTitle>
                <CardDescription>{quizData.description}</CardDescription>
              </div>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {quizData.participantsCount}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Progress and Timer */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-1 text-sm text-accent">
                <Clock className="h-4 w-4" />
                {timeLeft}s
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Options */}
            <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mt-1" />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 text-sm leading-relaxed cursor-pointer p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {/* Action Button */}
            <div className="flex justify-end">
              <Button 
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className="min-w-32"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Bandwidth Info */}
            <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground">
              💡 This quiz uses less than 50KB data - perfect for 2G connections
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveQuiz;