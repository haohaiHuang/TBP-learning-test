import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, Building2, Users, TrendingUp, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";
import { knowledgeTests, practicalCases, Domain } from "../data/comprehensiveTest";
import { useStore } from "../store";

type TestMode = "select" | "knowledge" | "practical";

export default function ComprehensiveTest() {
  const navigate = useNavigate();
  const { saveTestResult } = useStore();
  
  const [mode, setMode] = useState<TestMode>("select");
  const [domain, setDomain] = useState<Domain | null>(null);
  
  // Test State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const startTest = (selectedMode: "knowledge" | "practical", selectedDomain: Domain) => {
    setMode(selectedMode);
    setDomain(selectedDomain);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (selectedOption === null || !domain) return;
    
    const currentQuestions = mode === "knowledge" ? knowledgeTests[domain] : practicalCases[domain];
    const isCorrect = selectedOption === (mode === "knowledge" ? (currentQuestions[currentIndex] as any).correctAnswerIndex : (currentQuestions[currentIndex] as any).correctIndex);
    
    if (!isSubmitted) {
      setIsSubmitted(true);
      if (isCorrect) setScore(s => s + 1);
    } else {
      if (currentIndex < currentQuestions.length - 1) {
        setCurrentIndex(s => s + 1);
        setSelectedOption(null);
        setIsSubmitted(false);
      } else {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        // Save overall test score
        saveTestResult(`${mode}_${domain}`, percentage);
        setShowResult(true);
      }
    }
  };

  if (mode === "select") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col min-h-screen bg-gray-50 pb-20"
      >
        <header className="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-text-main text-center">综合测试</h1>
          <p className="text-xs text-text-muted text-center mt-1">选择测试类型与领域</p>
        </header>

        <div className="p-5 space-y-8">
          {/* Knowledge Test Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="text-primary" size={20} />
              <h2 className="text-base font-bold text-text-main">知识检测 (10题)</h2>
            </div>
            <p className="text-xs text-text-muted mb-4">混合检测十大基本意识与八步问题解决流程的理论掌握度。</p>
            <div className="space-y-3">
              <DomainCard 
                title="工厂领域" 
                icon={<Building2 size={22} />} 
                onClick={() => startTest("knowledge", "factory")} 
              />
              <DomainCard 
                title="管理领域" 
                icon={<Users size={22} />} 
                onClick={() => startTest("knowledge", "management")} 
              />
              <DomainCard 
                title="销售领域" 
                icon={<TrendingUp size={22} />} 
                onClick={() => startTest("knowledge", "sales")} 
              />
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* Practical Application Section */}
          <section>
            <div className="flex items-center gap-2 mb-2">
              <Target className="text-orange-500" size={20} />
              <h2 className="text-base font-bold text-text-main">实战应用 (8步)</h2>
            </div>
            <p className="text-xs text-text-muted mb-4">代入具体业务场景，运用八步法解决虚拟案例问题。</p>
            <div className="space-y-3">
              <DomainCard 
                title="工厂案例：车门段差" 
                icon={<Building2 size={22} />} 
                onClick={() => startTest("practical", "factory")} 
              />
              <DomainCard 
                title="管理案例：新人离职" 
                icon={<Users size={22} />} 
                onClick={() => startTest("practical", "management")} 
              />
              <DomainCard 
                title="销售案例：复购下降" 
                icon={<TrendingUp size={22} />} 
                onClick={() => startTest("practical", "sales")} 
              />
            </div>
          </section>
        </div>
      </motion.div>
    );
  }

  // Active Test Rendering
  if (!domain) return null;
  
  const currentQuestions = mode === "knowledge" ? knowledgeTests[domain] : practicalCases[domain];
  const currentItem = currentQuestions[currentIndex] as any;
  
  const isCorrect = selectedOption === (mode === "knowledge" ? currentItem.correctAnswerIndex : currentItem.correctIndex);
  const isPractical = mode === "practical";

  if (showResult) {
    const percentage = Math.round((score / currentQuestions.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center min-h-screen p-6 bg-white"
      >
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${isPractical ? 'bg-orange-50' : 'bg-blue-50'}`}>
          <CheckCircle size={48} className={isPractical ? 'text-orange-500' : 'text-blue-500'} />
        </div>
        <h2 className="text-2xl font-bold text-text-main mb-2">测试完成！</h2>
        <p className="text-text-muted mb-8 text-center">
          你在 {isPractical ? '实战应用' : '知识检测'} ({domain}) 中获得了
        </p>
        <div className={`text-5xl font-bold mb-12 ${isPractical ? 'text-orange-500' : 'text-blue-500'}`}>{percentage}分</div>
        
        <button
          onClick={() => setMode("select")}
          className={`w-full text-white py-3.5 rounded-xl font-medium active:scale-[0.98] transition-all shadow-sm ${isPractical ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          返回测试大厅
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col min-h-screen bg-gray-50 pb-20"
    >
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => setMode("select")} className="p-2 -ml-2 text-text-main hover:bg-gray-50 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <span className="font-semibold text-sm">
          {isPractical ? '实战应用' : '知识检测'} - {domain === 'factory' ? '工厂' : domain === 'management' ? '管理' : '销售'}
        </span>
        <div className={`text-xs font-medium ${isPractical ? 'text-orange-500' : 'text-blue-500'}`}>
          {currentIndex + 1}/{currentQuestions.length}
        </div>
      </header>

      <div className="p-5 flex-1 overflow-y-auto">
        {isPractical && currentItem.description && (
          <div className="bg-orange-50 text-orange-800 p-4 rounded-xl text-sm mb-6 leading-relaxed border border-orange-100 shadow-sm">
            <strong className="block mb-1">{currentItem.title}：</strong>
            {currentItem.description}
          </div>
        )}

        <h3 className="text-lg font-bold text-text-main mb-6 leading-relaxed">
          {isPractical ? currentItem.question : currentItem.text}
        </h3>

        <div className="space-y-3">
          {currentItem.options.map((option: string, index: number) => {
            const activeColor = isPractical ? 'orange' : 'blue';
            let btnClass = `border-gray-200 hover:border-${activeColor}-500 text-text-main bg-white`;
            let icon = null;

            if (isSubmitted) {
              if (index === (isPractical ? currentItem.correctIndex : currentItem.correctAnswerIndex)) {
                btnClass = "border-success bg-green-50 text-success";
                icon = <CheckCircle size={20} className="text-success" />;
              } else if (index === selectedOption) {
                btnClass = "border-error bg-red-50 text-error";
                icon = <XCircle size={20} className="text-error" />;
              } else {
                btnClass = "border-gray-200 opacity-50 bg-white";
              }
            } else if (selectedOption === index) {
              btnClass = `border-${activeColor}-500 bg-${activeColor}-50 text-${activeColor}-700`;
            }

            return (
              <button
                key={index}
                disabled={isSubmitted}
                onClick={() => setSelectedOption(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}
              >
                <span className="font-medium text-sm leading-relaxed pr-4">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl text-sm mt-6 ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
          >
            <strong>{isCorrect ? '回答正确！' : '回答错误：'}</strong>
            <p className="mt-1 leading-relaxed">{currentItem.explanation}</p>
          </motion.div>
        )}
      </div>

      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 p-4 z-20">
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`w-full py-3.5 rounded-xl font-medium transition-all ${
            selectedOption === null
              ? "bg-gray-200 text-gray-400"
              : isPractical 
                ? "bg-orange-500 text-white active:scale-[0.98] shadow-sm hover:bg-orange-600"
                : "bg-blue-500 text-white active:scale-[0.98] shadow-sm hover:bg-blue-600"
          }`}
        >
          {!isSubmitted ? "提交答案" : currentIndex < currentQuestions.length - 1 ? "下一题" : "查看成绩"}
        </button>
      </div>
    </motion.div>
  );
}

function DomainCard({ title, icon, onClick }: { title: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
    >
      <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center shrink-0 mr-4 text-primary">
        {icon}
      </div>
      <span className="font-semibold text-text-main text-sm">{title}</span>
      <ChevronRight size={18} className="ml-auto text-gray-300 shrink-0" />
    </button>
  );
}