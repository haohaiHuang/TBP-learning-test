export interface Chapter {
  id: string;
  title: string;
  content: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

export const courses: Course[] = [
  {
    id: "awareness",
    title: "十大基本意识",
    description: "丰田工作方法的核心思想基础",
    chapters: [
      {
        id: "a1",
        title: "1. 客户第一",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">客户第一</h1><p class="mb-4 text-gray-700 leading-relaxed">在丰田工作方法中，客户第一是所有工作的起点。我们需要理解：不仅仅是最终购买产品的消费者，后工序也是客户。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">某冲压车间生产的钣金件表面有微小划痕，虽然不影响最终车辆性能，但焊接车间的工人在操作时容易被划伤。冲压班长认为只要消费者看不见就没关系，但按照“后工序即客户”的原则，冲压车间应将焊接车间视为客户，立即停止流出不良品，并排查模具问题，确保交付给后工序的是完美合格的零件。</p></div>`,
        questions: [{ id: "q1", text: "在丰田理念中，谁是我们的客户？", options: ["仅指最终购买产品的消费者", "后工序就是客户", "只有供应商是客户", "只有管理层是客户"], correctAnswerIndex: 1 }]
      },
      {
        id: "a2",
        title: "2. 经常自问“为什么”",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">经常自问“为什么”</h1><p class="mb-4 text-gray-700 leading-relaxed">遇到问题时，不要停留在表面现象，要连续问5个“为什么”，直到找到根本原因。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">机床突然停机。问1：为什么停机？答：保险丝烧断了。问2：为什么烧断？答：轴承润滑不足导致负载过大。问3：为什么润滑不足？答：润滑泵未充分泵油。问4：为什么泵油不足？答：泵轴磨损松动。问5：为什么磨损？答：没有安装过滤器，切削屑混入。最终对策：加装过滤器，而非简单更换保险丝。</p></div>`,
        questions: [{ id: "q1", text: "遇到问题时，应该怎么做？", options: ["找借口推脱", "停留在表面现象", "连续问5个为什么找真因", "立即凭直觉处理"], correctAnswerIndex: 2 }]
      },
      {
        id: "a3",
        title: "3. 当事者意识",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">当事者意识</h1><p class="mb-4 text-gray-700 leading-relaxed">把自己当作工作的主人，对结果负责，不把问题推给别人。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">研发部设计的新零件在生产线上很难安装。如果缺乏当事者意识，生产部会抱怨研发部设计不合理，研发部会抱怨生产部技术差。具备当事者意识的员工会主动跨部门沟通：“我们在安装时遇到了困难，我们一起去现场看看是否可以优化设计或改进安装夹具”，共同为最终产品的顺利下线负责。</p></div>`,
        questions: [{ id: "q1", text: "当事者意识的核心是？", options: ["只管自己的一亩三分地", "对结果负责，不推诿", "凡事都要请示领导", "出了问题找别人原因"], correctAnswerIndex: 1 }]
      },
      {
        id: "a4",
        title: "4. 可视化",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">可视化</h1><p class="mb-4 text-gray-700 leading-relaxed">让问题和异常一目了然，任何人都能立刻看出正常与异常的区别。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">某物流仓库经常找不到急需的零件。改善团队通过划定地面区域、使用颜色编码标签，并设置“最高/最低库存警戒线”（如低于红线则自动触发采购申请）。现在任何人走进仓库，只要看到某个货架露出红线，就能立刻判断出“该零件库存异常需要补充”，无需翻阅台账，大幅提升了管理效率。</p></div>`,
        questions: [{ id: "q1", text: "可视化的主要目的是什么？", options: ["让现场更好看", "让异常一目了然", "方便领导视察", "增加工作量"], correctAnswerIndex: 1 }]
      },
      {
        id: "a5",
        title: "5. 根据事实进行判断",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">根据事实进行判断</h1><p class="mb-4 text-gray-700 leading-relaxed">不凭直觉和经验，而是去现场看现物，收集客观数据后再做决策。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">销售总监听到几位区域经理汇报“客户觉得我们的产品太贵了”，准备降价。但他没有急于决策，而是亲自拜访了5家流失客户。在现场沟通中，他发现客户不是觉得价格贵，而是觉得售后响应太慢导致停机损失大。最终对策不是降价，而是增加售后网点，这不仅挽回了客户，还保住了利润率。</p></div>`,
        questions: [{ id: "q1", text: "做决策时应基于什么？", options: ["直觉", "过往经验", "客观事实和数据", "别人的意见"], correctAnswerIndex: 2 }]
      },
      {
        id: "a6",
        title: "6. 彻底思考和执行",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">彻底思考和执行</h1><p class="mb-4 text-gray-700 leading-relaxed">想透彻再做，一旦决定就坚决执行到底，不半途而废。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">公司决定推行新的数字化报销系统。初期很多老员工抱怨系统难用，要求退回纸质报销。管理层没有妥协，因为推行前已“彻底思考”过其长远价值。他们选择了“坚决执行到底”，同时增派IT人员到各部门手把手指导。两个月后，大家适应了新系统，报销周期从一周缩短到两天。</p></div>`,
        questions: [{ id: "q1", text: "彻底执行的意思是？", options: ["边想边做，随时放弃", "想透彻后坚决执行到底", "只思考不行动", "盲目行动"], correctAnswerIndex: 1 }]
      },
      {
        id: "a7",
        title: "7. 速度·时机",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">速度·时机</h1><p class="mb-4 text-gray-700 leading-relaxed">在合适的时间以合适的速度完成工作，拖延会丧失机会。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">竞品发布了一款颠覆性产品，市场部要求研发部“越快越好”推出应对方案。研发主管认为盲目求快会导致质量灾难，于是将任务分为两步：一周内先通过软件升级提供部分功能以稳住现有客户（把握时机）；六个月内开发出高质量的全新硬件平台（把握速度与节奏）。最终既没有错失市场，又保证了品质。</p></div>`,
        questions: [{ id: "q1", text: "关于速度和时机，以下正确的是？", options: ["越快越好，不管质量", "只要质量好，再慢也没关系", "在合适的时机以合适的速度完成", "完全不需要考虑时间"], correctAnswerIndex: 2 }]
      },
      {
        id: "a8",
        title: "8. 诚实·正直",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">诚实·正直</h1><p class="mb-4 text-gray-700 leading-relaxed">不隐瞒问题，如实报告坏消息，以真诚的态度面对工作和同事。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">质检员小王在抽检时发现一批即将发货的产品存在微小的尺寸偏差，此时离交货期只剩两小时。如果重做会导致延期罚款。小王没有隐瞒，立即“拉灯”上报。厂长核实后，决定如实告知客户，宁可承担延期责任，也不让不良品流出。客户虽然对延期不满，但对公司的诚实和品质把控表达了高度赞赏，后续反而增加了订单。</p></div>`,
        questions: [{ id: "q1", text: "遇到问题时，正确的做法是？", options: ["隐瞒不报", "夸大其词", "如实报告", "推给别人"], correctAnswerIndex: 2 }]
      },
      {
        id: "a9",
        title: "9. 实现彻底的沟通",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">实现彻底的沟通</h1><p class="mb-4 text-gray-700 leading-relaxed">沟通不仅是传达信息，还要确认对方是否真正理解并达成共识。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">项目经理给团队开会布置任务，会后问“大家听懂了吗？”，全员点头。结果一周后验收时，发现两名成员做偏了方向。后来他改变了沟通方式，每次布置完任务后，不仅发邮件留存，还要求关键成员复述一遍任务目标和验收标准。通过这种双向确认的“彻底沟通”，返工率大幅下降。</p></div>`,
        questions: [{ id: "q1", text: "彻底的沟通包括哪些方面？", options: ["只管自己说", "发个邮件就行", "传达并确认对方理解", "只在开会时沟通"], correctAnswerIndex: 2 }]
      },
      {
        id: "a10",
        title: "10. 全员参与",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">全员参与</h1><p class="mb-4 text-gray-700 leading-relaxed">每个人都发挥自己的智慧和能力，共同解决问题，提升团队整体实力。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">某工厂为了降低能耗，没有只依赖外部专家，而是发起了“金点子”提案活动。一线操作工提出“利用设备余热加热清洗水”，保洁阿姨提出“将走廊灯改为分段感应控制”。管理层对这些提案进行评估并实施，不仅一年省下了上百万电费，还极大地激发了全员的主人翁精神和团队凝聚力。</p></div>`,
        questions: [{ id: "q1", text: "关于全员参与，以下说法正确的是？", options: ["只是管理层的事", "只需要专家参与", "每个人都发挥智慧共同解决", "与普通员工无关"], correctAnswerIndex: 2 }]
      }
    ]
  },
  {
    id: "process",
    title: "八步问题解决流程",
    description: "科学系统的问题解决步骤",
    chapters: [
      {
        id: "p1",
        title: "1. 明确问题",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">明确问题</h1><p class="mb-4 text-gray-700 leading-relaxed">问题解决的第一步是明确问题。理想状态与现状之间的差距就是问题。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】公司要求客服接通率达到95%，但上个月只有80%。<br>【分析】不要泛泛地说“客服太忙了”。这里的“理想状态”是95%接通率，“现状”是80%。两者之间的差距——15%的未接通电话，就是我们需要明确和解决的具体问题。</p></div>`,
        questions: [{ id: "q1", text: "问题的定义是什么？", options: ["领导提出的要求", "同事之间的矛盾", "理想状态与现状之间的差距", "工作中的失误"], correctAnswerIndex: 2 }]
      },
      {
        id: "p2",
        title: "2. 分解问题",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">分解问题</h1><p class="mb-4 text-gray-700 leading-relaxed">将大问题拆解成具体的、可操作的小问题，去现场看现物确认事实。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】接通率差了15%。<br>【分析】不能直接盲目加人。对这15%的未接通电话进行分解：按时间段拆分，发现上午9-10点占了80%；按业务类型拆分，发现“密码重置”类咨询占了60%。通过分解，将大问题聚焦到了“如何解决上午9-10点大量密码重置咨询导致漏接”这个具体的小问题上。</p></div>`,
        questions: [{ id: "q1", text: "为什么要分解问题？", options: ["为了显得工作量大", "为了将大问题化为具体可操作的小问题", "为了推卸责任", "为了拖延时间"], correctAnswerIndex: 1 }]
      },
      {
        id: "p3",
        title: "3. 设定目标",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">设定目标</h1><p class="mb-4 text-gray-700 leading-relaxed">设定具体、可衡量、有挑战性的目标，明确“要在什么时间前做到什么程度”。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】已锁定上午高峰期的密码重置问题。<br>【分析】错误的目标：“尽快提升接通率”。正确的目标：“在下个月底前，将上午9-10点密码重置类咨询的处理时间缩短一半，从而将该时段的总体接通率从目前的60%提升到90%”。这个目标具体、可衡量且有时间限制。</p></div>`,
        questions: [{ id: "q1", text: "设定目标时需要注意什么？", options: ["越模糊越好", "随便定一个", "具体、可衡量、有时间限制", "目标必须轻易达到"], correctAnswerIndex: 2 }]
      },
      {
        id: "p4",
        title: "4. 把握真因",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">把握真因</h1><p class="mb-4 text-gray-700 leading-relaxed">不要被表面原因迷惑，通过连续问“为什么”，找到导致问题的根本原因。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】为什么密码重置咨询多？<br>【分析】问1：为什么咨询多？答：因为很多用户周一早上登录不上系统。问2：为什么登录不上？答：因为系统周末更新后会强制要求修改密码。问3：为什么用户不自己改？答：因为自助修改页面的验证码短信有延迟。真因不是客服不够，而是短信网关周末积压导致验证码延迟。</p></div>`,
        questions: [{ id: "q1", text: "如何把握真因？", options: ["凭直觉判断", "连续问为什么", "听从经验丰富的人", "表面看起来是就是"], correctAnswerIndex: 1 }]
      },
      {
        id: "p5",
        title: "5. 制定对策",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">制定对策</h1><p class="mb-4 text-gray-700 leading-relaxed">针对真因提出多种对策，从效果、成本、风险等多维度进行评估，选出最佳方案。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】真因是短信网关延迟。<br>【分析】提出对策A：增加客服人员帮改（成本高，治标不治本）；对策B：取消强制改密码（安全风险高）；对策C：增加备用短信通道，并优化App端的一键免密登录功能。综合评估后，选择对策C作为永久对策，同时在IVR语音导航中加入提示作为临时对策。</p></div>`,
        questions: [{ id: "q1", text: "制定对策时应该？", options: ["只提一个对策", "提出多种对策并综合评估", "只考虑成本不考虑效果", "选择最容易执行的"], correctAnswerIndex: 1 }]
      },
      {
        id: "p6",
        title: "6. 贯彻实施对策",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">贯彻实施对策</h1><p class="mb-4 text-gray-700 leading-relaxed">制定详细的行动计划，全员齐心协力，将对策彻底执行下去。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】决定实施备用短信通道和语音提示。<br>【分析】项目组制定了甘特图：IT部本周三前完成网关对接，客服部周四完成语音录制上线，周五晚进行压力测试。过程中每天开15分钟站会确认进度。遇到测试报错，全员没有互相推诿，而是加班协同解决，确保了对策彻底落地。</p></div>`,
        questions: [{ id: "q1", text: "实施对策的关键是？", options: ["想怎么做就怎么做", "制定详细计划并彻底执行", "遇到困难就放弃", "只让少数人执行"], correctAnswerIndex: 1 }]
      },
      {
        id: "p7",
        title: "7. 评价结果和过程",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">评价结果和过程</h1><p class="mb-4 text-gray-700 leading-relaxed">客观评价是否达成目标，同时也要评价执行过程中的得失。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】对策实施一个月后。<br>【分析】查看数据：上午9-10点接通率达到了92%，总体接通率达标。评价结果：目标圆满达成。评价过程：跨部门沟通非常顺畅（值得表扬），但测试环节考虑不足差点导致系统宕机（教训）。这为后续项目积累了宝贵的经验。</p></div>`,
        questions: [{ id: "q1", text: "评价时需要注意什么？", options: ["只看结果", "只看过程", "客观评价结果和过程", "只看成功的方面"], correctAnswerIndex: 2 }]
      },
      {
        id: "p8",
        title: "8. 巩固成果",
        content: `<h1 class="text-xl font-bold text-gray-900 mb-4">巩固成果</h1><p class="mb-4 text-gray-700 leading-relaxed">将成功的对策标准化，防止问题再次发生，并将经验分享给其他团队。</p><div class="mt-8 bg-blue-50 p-5 rounded-xl border border-blue-100"><h2 class="text-lg font-bold text-blue-800 mb-2">实战案例研究</h2><p class="text-gray-700 text-sm leading-relaxed">【背景】接通率稳定了。<br>【分析】为了防止问题重演，IT部门将“双短信通道自动切换”写入了系统架构规范文件（SOP）；客服部将“异常数据监控和语音引导灵活调整机制”固化为日常流程。同时，公司将此案例作为优秀TBP（Toyota Business Process）报告，在全员大会上分享，推动其他部门的改善。</p></div>`,
        questions: [{ id: "q1", text: "巩固成果的最佳方式是？", options: ["发个奖金", "将成功经验标准化并分享", "吃顿饭庆祝", "记在脑子里"], correctAnswerIndex: 1 }]
      }
    ]
  }
];
