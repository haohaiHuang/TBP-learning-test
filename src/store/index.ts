import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
}

interface Progress {
  chapterId: string;
  status: "not_started" | "in_progress" | "completed";
}

interface TestResult {
  chapterId: string;
  score: number;
}

interface AppState {
  user: User | null;
  progress: Record<string, Progress>;
  testResults: Record<string, TestResult>;
  updateProgress: (chapterId: string, status: "not_started" | "in_progress" | "completed") => void;
  saveTestResult: (chapterId: string, score: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: { id: "1", name: "学习者" },
      progress: {},
      testResults: {},
      updateProgress: (chapterId, status) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [chapterId]: { chapterId, status },
          },
        })),
      saveTestResult: (chapterId, score) =>
        set((state) => ({
          testResults: {
            ...state.testResults,
            [chapterId]: { chapterId, score },
          },
        })),
    }),
    {
      name: "tbp-learning-storage",
    }
  )
);
