import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, PlayCircle, BookOpen, ChevronRight } from "lucide-react";
import { courses } from "../data/courses";
import { useStore } from "../store";

export default function Home() {
  const navigate = useNavigate();
  const { progress } = useStore();
  const [activeTab, setActiveTab] = useState<string>("awareness");

  const currentCourse = courses.find((c) => c.id === activeTab);

  return (
    <div className="p-4 space-y-6">
      <header className="pt-6 pb-2">
        <h1 className="text-2xl font-bold text-text-main">丰田工作方法 (TBP)</h1>
        <p className="text-text-muted mt-1 text-sm">系统学习核心理论并进行实战应用</p>
      </header>

      {/* 综合应用测试 Banner */}
      <div 
        className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-5 text-white shadow-md relative overflow-hidden mb-6 cursor-pointer active:scale-[0.98] transition-transform"
        onClick={() => navigate('/comprehensive-test')}
      >
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-2">综合测试</h3>
          <p className="text-orange-50 text-sm mb-4">知识检测与实战应用，分领域检验TBP掌握度</p>
          <button 
            className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-medium transition-colors inline-flex items-center shadow-sm"
          >
            开始测试
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
      </div>

      <div className="space-y-4">
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                activeTab === course.id 
                  ? "bg-white text-primary shadow-sm" 
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              {course.title}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {currentCourse?.chapters.map((chapter) => {
            const isCompleted = progress[chapter.id]?.status === "completed";
            const isInProgress = progress[chapter.id]?.status === "in_progress";

            return (
              <div
                key={chapter.id}
                onClick={() => navigate(`/learning/${currentCourse.id}/${chapter.id}`)}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all cursor-pointer flex items-center justify-between active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    isCompleted ? "bg-green-50" : isInProgress ? "bg-blue-50" : "bg-gray-50"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle size={22} className="text-success" />
                    ) : isInProgress ? (
                      <PlayCircle size={22} className="text-primary" />
                    ) : (
                      <BookOpen size={22} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-main text-sm leading-tight">{chapter.title}</h4>
                    <p className="text-xs text-text-muted mt-1">
                      {isCompleted ? "已完成独立学习与考试" : "点击进入独立学习环节"}
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-300 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}