'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { personalityTests } from '@/data/personalityTests'
import { Test, Answer, Question } from '@/types/quiz'

function TestSelection({ onSelectTest }: { onSelectTest: (test: Test) => void }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Choose a Personality Test</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {personalityTests.map((test) => (
          <Button key={test.id} onClick={() => onSelectTest(test)}>
            {test.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

function Quiz({ test, onComplete }: { test: Test; onComplete: (score: any) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState<any>(
    test.id === 'introvert-extrovert' ? 0 : {}
  )

  const handleAnswer = (answerScore: number | Record<string, number>) => {
    let newScore: any

    if (typeof answerScore === 'number') {
      newScore = (score as number) + answerScore
    } else {
      newScore = { ...score }
      Object.entries(answerScore).forEach(([key, value]) => {
        newScore[key] = (newScore[key] || 0) + value
      })
    }

    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setScore(newScore)
    } else {
      onComplete(newScore)
    }
  }

  const progress = ((currentQuestion + 1) / test.questions.length) * 100

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{test.name}</CardTitle>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">{test.questions[currentQuestion].text}</h3>
        <div className="flex flex-col gap-2">
          {test.questions[currentQuestion].answers.map((answer, index) => (
            <Button key={index} onClick={() => handleAnswer(answer.score)}>
              {answer.text}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Result({ test, score }: { test: Test; score: any }) {
  let result = ''

  switch (test.id) {
    case 'introvert-extrovert':
      if (score > 5) {
        result = test.results.extrovert
      } else if (score < -5) {
        result = test.results.introvert
      } else {
        result = test.results.ambivert
      }
      break

    case 'mbti':
      // Calculate MBTI type based on the highest scores for E/I, S/N, T/F, and J/P
      const mbtiType = 
        (score.E > score.I ? 'E' : 'I') +
        (score.S > score.N ? 'S' : 'N') +
        (score.T > score.F ? 'T' : 'F') +
        (score.J > score.P ? 'J' : 'P')
      result = test.results[mbtiType]
      break

    case 'love-language':
      // Calculate love language based on the highest score
      const loveLanguage = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b))
      result = test.results[loveLanguage]
      break

    case 'disc':
      // Calculate DISC profile based on the highest score
      const discType = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b))
      result = test.results[discType]
      break
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Your Result</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{result}</p>
      </CardContent>
    </Card>
  )
}

export function KatalisTestComponent() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [finalScore, setFinalScore] = useState<any>(null)

  const handleSelectTest = (test: Test) => {
    setSelectedTest(test)
    setQuizCompleted(false)
    setFinalScore(null)
  }

  const handleCompleteQuiz = (score: any) => {
    setFinalScore(score)
    setQuizCompleted(true)
  }

  const handleReset = () => {
    setSelectedTest(null)
    setQuizCompleted(false)
    setFinalScore(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        {!selectedTest && (
          <TestSelection onSelectTest={handleSelectTest} />
        )}
        {selectedTest && !quizCompleted && (
          <Quiz test={selectedTest} onComplete={handleCompleteQuiz} />
        )}
        {selectedTest && quizCompleted && (
          <>
            <Result test={selectedTest} score={finalScore} />
            <Button onClick={handleReset} className="mt-4 w-full">
              Take Another Test
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
