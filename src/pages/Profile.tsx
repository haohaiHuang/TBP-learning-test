import { UserCircle, BookOpen, Star, ChevronRight } from "lucide-react";
import { courses } from "../data/courses";
import { useStore } from "../store";

export default function Profile() {
  const { user, progress, testResults } = useStore();

  const getOverallProgress = () => {
    const totalChapters = courses.reduce((acc, course) => acc + course.chapters.length, 0);
    const completedChapters = Object.values(progress).filter(
      (p) => p.status === "completed"
    ).length;
    return Math.round((completedChapters / totalChapters) * 100) || 0;
  };

  const getAverageScore = () => {
    const scores = Object.values(testResults).map((r) => r.score);
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(sum / scores.length);
  };

  return (
    <div className="p-4 pb-20 space-y-6">
      <header className="pt-8 pb-4 flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary">
          <UserCircle size={40} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-text-main">{user?.name}</h1>
          <p className="text-text-muted text-sm mt-1">TBP 学习旅程</p>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <BookOpen size={16} />
            <span className="text-xs font-medium">总进度</span>
          </div>
          <div className="text-3xl font-bold text-text-main">
            {getOverallProgress()}<span className="text-lg text-text-muted">%</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-text-muted mb-2">
            <Star size={16} className="text-accent" />
            <span className="text-xs font-medium">平均分</span>
          </div>
          <div className="text-3xl font-bold text-text-main">
            {getAverageScore()}<span className="text-lg text-text-muted">分</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-text-main mb-4">学习记录</h2>

        {courses.map((course) => {
          const courseProgress = course.chapters.filter(
            (ch) => progress[ch.id]?.status === "completed"
          ).length;
          
          return (
            <div key={course.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-text-main mb-1">{course.title}</h3>
                <p className="text-xs text-text-muted">已完成 {courseProgress}/{course.chapters.length} 章</p>
              </div>
              <ChevronRight size={20} className="text-gray-300" />
            </div>
          );
        })}
      </div>

      <div className="space-y-4 mt-8">
        <h2 className="text-lg font-bold text-text-main mb-4">测试成绩</h2>

        {Object.entries(testResults).length === 0 ? (
          <div className="text-center text-text-muted text-sm py-8 bg-gray-50 rounded-xl">
            暂无测试成绩，快去学习吧！
          </div>
        ) : (
          <div className="space-y-3">
            {Object.values(testResults).map((result) => {
              const chapter = courses
                .flatMap((c) => c.chapters)
                .find((ch) => ch.id === result.chapterId);
              
              if (!chapter) return null;

              return (
                <div key={result.chapterId} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="font-medium text-sm text-text-main truncate">{chapter.title}</h3>
                  </div>
                  <div className={`font-bold ${result.score >= 80 ? 'text-success' : result.score >= 60 ? 'text-accent' : 'text-error'}`}>
                    {result.score}分
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
