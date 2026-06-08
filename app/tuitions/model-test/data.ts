export interface Question {
  number: number;
  question: string;
  answer: string;
  marks: number;
}

export interface ModelTest {
  id: string;
  title: string;
  subject: string;
  date: string; // ISO date string, e.g. "2024-06-08"
  totalMarks: number;
  duration: string; // e.g. "3 hours"
  questions: Question[];
}

export const modelTests: ModelTest[] = [
  {
    id: "ssc-higher-math-01",
    title: "Model Test #1",
    subject: "SSC Higher Mathematics",
    date: "2024-06-08",
    totalMarks: 100,
    duration: "3 hours",
    questions: [
      {
        number: 1,
        question:
          "If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∪ B, A ∩ B, and A \\ B.",
        answer:
          "A ∪ B = {1, 2, 3, 4, 5, 6} (all elements from both sets)\nA ∩ B = {3, 4} (common elements)\nA \\ B = {1, 2} (elements in A but not in B)",
        marks: 10,
      },
      {
        number: 2,
        question:
          "Solve the quadratic equation: 2x² − 5x + 3 = 0 using the quadratic formula.",
        answer:
          "Using x = (−b ± √(b²−4ac)) / 2a where a=2, b=−5, c=3:\nDiscriminant = (−5)² − 4(2)(3) = 25 − 24 = 1\nx = (5 ± 1) / 4\nx = 6/4 = 3/2  or  x = 4/4 = 1\nSolutions: x = 3/2 and x = 1",
        marks: 10,
      },
      {
        number: 3,
        question:
          "Prove: sin²θ + cos²θ = 1, and hence find sin θ if cos θ = 3/5.",
        answer:
          "Proof: In a right-angled triangle with hypotenuse h, opposite o, adjacent a:\nsin θ = o/h, cos θ = a/h\nsin²θ + cos²θ = o²/h² + a²/h² = (o²+a²)/h² = h²/h² = 1 (by Pythagoras)\n\nIf cos θ = 3/5:\nsin²θ = 1 − cos²θ = 1 − 9/25 = 16/25\nsin θ = 4/5",
        marks: 10,
      },
      {
        number: 4,
        question:
          "Find the distance between points A(3, −2) and B(−1, 5), and the midpoint of AB.",
        answer:
          "Distance = √[(x₂−x₁)² + (y₂−y₁)²]\n= √[(−1−3)² + (5−(−2))²]\n= √[(−4)² + 7²]\n= √[16 + 49] = √65\n\nMidpoint = ((3+(−1))/2, (−2+5)/2) = (1, 3/2)",
        marks: 10,
      },
      {
        number: 5,
        question:
          "The first term of an AP is 5 and the common difference is 3. Find the 15th term and the sum of the first 20 terms.",
        answer:
          "15th term: aₙ = a + (n−1)d = 5 + (15−1)×3 = 5 + 42 = 47\n\nSum of first 20 terms:\nSₙ = n/2 × [2a + (n−1)d]\nS₂₀ = 20/2 × [2(5) + 19×3]\n= 10 × [10 + 57]\n= 10 × 67 = 670",
        marks: 10,
      },
    ],
  },
];
