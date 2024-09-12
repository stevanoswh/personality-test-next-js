export type Answer = {
  text: string
  score: number | Record<string, number>
}

export type Question = {
  text: string
  answers: Answer[]
}

export type Test = {
  id: string
  name: string
  questions: Question[]
  results: { [key: string]: string }
}