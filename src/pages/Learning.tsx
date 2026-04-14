import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "../data/courses";
import { useStore } from "../store";

export default function Learning() {
  const { courseId, chapterId } = useParams();
  const navigate = useNavigate();
  const { progress, updateProgress } = useStore();

  const course = courses.find((c) => c.id === courseId);
  const chapterIndex = course?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  const chapter = course?.chapters[chapterIndex];

  useEffect(() => {
    if (chapterId && progress[chapterId]?.status !== "completed" && progress[chapterId]?.status !== "in_progress") {
      updateProgress(chapterId, "in_progress");
    }
  }, [chapterId, progress, updateProgress]);

  if (!course || !chapter) return <div>章节未找到</div>;

  const totalChapters = course.chapters.length;
  const progressPercent = Math.round(((chapterIndex + 1) / totalChapters) * 100);
  
  const isLastChapter = chapterIndex === totalChapters - 1;

  const handleNext = () => {
    updateProgress(chapter.id, "completed");
    if (chapter.questions && chapter.questions.length > 0) {
      navigate(`/practice/${courseId}/${chapter.id}`);
    } else {
      navigate("/");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen bg-white"
    >
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="p-2 -ml-2 text-text-main hover:bg-gray-50 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <span className="font-semibold text-sm truncate max-w-[200px]">{course.title}</span>
        <div className="w-8"></div>
      </header>

      <div className="bg-gray-50 px-4 py-2 flex items-center gap-3 text-xs text-text-muted">
        <span className="font-medium text-primary">环节 {chapterIndex + 1}/{totalChapters}</span>
        <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto pb-24">
        <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
      </div>

      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 p-4">
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-600 active:scale-[0.98] transition-all shadow-sm"
        >
          {chapter.questions && chapter.questions.length > 0 ? (
            <>
              <FileText size={20} />
              进入本环节独立测试
            </>
          ) : (
            <>
              <CheckCircle size={20} />
              完成学习
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
