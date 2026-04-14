import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { courses } from "../data/courses";
import { useStore } from "../store";

export default function Practice() {
  const { courseId, chapterId } = useParams();
  const navigate = useNavigate();
  const { saveTestResult } = useStore();

  const course = courses.find((c) => c.id === courseId);
  const chapterIndex = course?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  const chapter = course?.chapters[chapterIndex];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!course || !chapter || !chapter.questions) return <div>章节未找到或没有测试题</div>;

  const question = chapter.questions[currentQuestionIndex];
  const isCorrect = selectedOption === question.correctAnswerIndex;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    if (!isSubmitted) {
      setIsSubmitted(true);
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
    } else {
      if (currentQuestionIndex < chapter.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsSubmitted(false);
      } else {
        const percentage = Math.round((score / chapter.questions.length) * 100);
        saveTestResult(chapter.id, percentage);
        setShowResult(true);
      }
    }
  };

  if (showResult) {
    const percentage = Math.round((score / chapter.questions.length) * 100);

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-6 bg-white"
      >
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-success" />
        </div>
        <h2 className="text-2xl font-bold text-text-main mb-2">测试完成！</h2>
        <p className="text-text-muted mb-8 text-center">
          你在【{chapter.title}】的测试中获得了
        </p>
        <div className="text-5xl font-bold text-primary mb-12">{percentage}分</div>
        
        <div className="w-full space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-medium active:scale-[0.98] transition-all shadow-sm"
          >
            完成并返回首页
          </button>
          <button
            onClick={() => navigate(`/learning/${courseId}/${chapter.id}`)}
            className="w-full bg-gray-100 text-text-main py-3.5 rounded-xl font-medium active:scale-[0.98] transition-all hover:bg-gray-200"
          >
            重新复习本环节
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col min-h-screen bg-gray-50"
    >
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-text-main hover:bg-gray-50 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <span className="font-semibold text-sm">环节独立测试</span>
        <div className="text-xs font-medium text-primary">
          {currentQuestionIndex + 1} / {chapter.questions.length}
        </div>
      </header>

      <div className="flex-1 p-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-lg font-bold text-text-main mb-6 leading-relaxed">
            {question.text}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              let btnClass = "border-gray-200 hover:border-primary text-text-main";
              let icon = null;

              if (isSubmitted) {
                if (index === question.correctAnswerIndex) {
                  btnClass = "border-success bg-green-50 text-success";
                  icon = <CheckCircle size={20} className="text-success" />;
                } else if (index === selectedOption) {
                  btnClass = "border-error bg-red-50 text-error";
                  icon = <XCircle size={20} className="text-error" />;
                } else {
                  btnClass = "border-gray-200 opacity-50";
                }
              } else if (selectedOption === index) {
                btnClass = "border-primary bg-blue-50 text-primary";
              }

              return (
                <button
                  key={index}
                  disabled={isSubmitted}
                  onClick={() => setSelectedOption(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span className="font-medium text-sm leading-relaxed">{option}</span>
                  {icon}
                </button>
              );
            })}
          </div>
        </div>

        {isSubmitted && !isCorrect && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-error p-4 rounded-xl text-sm mb-6"
          >
            <strong>回答错误：</strong>请仔细复习相关知识点，理解正确答案的含义。
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`w-full py-3.5 rounded-xl font-medium transition-all ${
            selectedOption === null
              ? "bg-gray-200 text-gray-400"
              : "bg-primary text-white active:scale-[0.98] shadow-sm"
          }`}
        >
          {!isSubmitted ? "提交答案" : currentQuestionIndex < chapter.questions.length - 1 ? "下一题" : "查看成绩"}
        </button>
      </div>
    </motion.div>
  );
}
