# TBP Learning Platform (Toyota Business Process)

A mobile-first Web Application designed for systematic learning and practical application of the Toyota Business Process (TBP). This platform breaks down complex management philosophies into interactive learning modules, knowledge tests, and domain-specific practical case studies.

## 🚀 Features

### 1. Structured Learning Modules
- **10 Core Consciences (十大基本意识)**: Detailed explanations of foundational principles like "Customer First," "Ownership," and "5 Whys."
- **8-Step Problem Solving Process (八步问题解决流程)**: Step-by-step guidance from defining the problem to standardizing successful countermeasures.
- **Rich Case Studies**: Every theoretical concept is paired with real-world business scenarios to ensure practical understanding.

### 2. Independent Assessment System
- **Module-Specific Quizzes**: Each concept (e.g., "Visualization") concludes with an independent quiz to reinforce learning immediately.
- **Progress Tracking**: Visual indicators tracking completion status across all 18 core concepts.

### 3. Comprehensive Testing (综合测试)
Divided into two major types and three professional domains (Factory, Management, Sales):
- **Knowledge Test (知识检测)**: A 10-question mixed quiz evaluating theoretical mastery across both Core Consciences and the 8-Step Process.
- **Practical Application (实战应用)**: Immersive, multi-step virtual case studies where users act as the "person-in-charge" to resolve complex business issues using the 8-Step framework.

### 4. UI/UX Design
- **Mobile-First Approach**: Optimized for H5 web rendering (375px-428px width), maintaining a centered mobile view on desktop browsers.
- **Clean & Professional Interface**: Utilizing a cohesive color palette (Primary Blue, Success Green, Warning Orange) and smooth `framer-motion` page transitions.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **State Management**: Zustand (with local storage persistence)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tbp-learning-platform.git
   cd tbp-learning-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:5173`.

## 🌐 Deployment (Vercel)

This project is pre-configured for seamless deployment on Vercel. A `vercel.json` file is included to handle React Router's client-side routing.

1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New... > Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Vite and configure the build settings.

## 📄 License

This project is licensed under the MIT License.