export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string };

export const PROFILE = {
  name: 'Sonu Kumar',
  title: 'Data Analytics · Game Developer',
  tagline:
    'Turning raw data into actionable insights with Power BI, SQL, and analytics — and building engaging interactive experiences.',
  email: 'thelegist5665@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sonu-kumar',
  github: 'https://www.linkedin.com/in/sonu-kumar-765b62313?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resumeUrl: '"C:\Users\thele\Downloads\Sonu-Resume-2.0.pdf"',
  location: 'India',
  university: 'Centurion University of Technology and Management',
};

export type SkillCategory = {
  title: string;
  icon: string;
  accent: string;
  description?: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics & Visualization',
    icon: 'BarChart3',
    accent: 'cyan',
    description:
      'I turn raw, messy data into clear, interactive dashboards and actionable business insights — writing optimized SQL queries, building Power BI reports with DAX measures, and running exploratory data analysis to uncover the trends that drive decisions.',
    skills: [
      'Power BI',
      'SQL',
      'MySQL',
      'Microsoft Excel',
      'DAX',
      'Data Cleaning',
      'Exploratory Data Analysis',
      'Dashboards & Reporting',
      'Data Storytelling',
      'Pivot Tables',
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'Brain',
    accent: 'cyan',
    description:
      'From training classifiers to deploying deep learning models, I build intelligent systems that solve real-world problems across computer vision, NLP, and generative AI.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'Computer Vision',
      'Model Training & Evaluation',
      'Hyperparameter Tuning',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: 'Layers',
    accent: 'violet',
    description:
      'The libraries I reach for daily to build, train, and evaluate models end-to-end.',
    skills: [
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'Jupyter Notebook',
      'CNN',
      'LSTM',
    ],
  },
  {
    title: 'Web & Backend',
    icon: 'Code2',
    accent: 'violet',
    description:
      'I ship full-stack applications — APIs, dashboards, and web interfaces that bring models and data to life for end users.',
    skills: [
      'Python',
      'Flask',
      'REST APIs',
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Node.js',
      'Git',
      'GitHub',
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: string;
  accent: 'cyan' | 'violet';
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Smart AI Workplace Safety Monitoring System',
    tagline: 'Real-time PPE violation detection & alerting',
    description:
      'Built a real-time safety monitoring system using YOLOv8 to detect workers, safety helmets, and high-visibility vests. Automated PPE violation detection with Telegram alerts, alarms, and screenshots. Flask-based interactive live dashboard.',
    highlights: [
      'YOLOv8 real-time object detection',
      'Telegram + alarm + screenshot alerts',
      'Flask live dashboard',
    ],
    tags: ['YOLOv8', 'OpenCV', 'Flask', 'Computer Vision', 'Python'],
    icon: 'HardHat',
    accent: 'cyan',
  },
  {
    id: 2,
    title: 'AI-Powered Video Note Extraction',
    tagline: 'Automated transcripts & downloadable PDF reports',
    description:
      'Intelligent video summarization platform integrating Whisper AI and Google Gemini for automated transcripts and downloadable PDF reports using FFmpeg audio processing.',
    highlights: [
      'Whisper AI transcription',
      'Gemini-powered summarization',
      'FFmpeg audio processing',
    ],
    tags: ['Whisper AI', 'Gemini', 'FFmpeg', 'Generative AI', 'Python'],
    icon: 'Video',
    accent: 'violet',
  },
  {
    id: 3,
    title: 'AI-Powered Multi-City Weather Forecasting',
    tagline: 'LSTM forecasting + Gemini voice chatbot',
    description:
      'Forecasting system using LSTM models and Flask with an integrated Gemini AI voice-assisted chatbot for interactive weather insights.',
    highlights: [
      'LSTM time-series forecasting',
      'Gemini voice-assisted chatbot',
      'Flask web dashboard',
    ],
    tags: ['LSTM', 'Flask', 'Gemini', 'Time Series', 'Python'],
    icon: 'CloudSun',
    accent: 'cyan',
  },
  {
    id: 4,
    title: 'AI-Powered Food Calorie & Weight Estimation',
    tagline: 'Food recognition + nutrition estimation',
    description:
      'Food recognition system using TensorFlow, MobileNetV2, and OpenCV on Food-101 dataset to classify food and estimate calories/nutrition.',
    highlights: [
      'MobileNetV2 on Food-101 dataset',
      'TensorFlow + OpenCV pipeline',
      'Calorie & nutrition estimation',
    ],
    tags: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'CNN', 'Python'],
    icon: 'Apple',
    accent: 'violet',
  },
  {
    id: 5,
    title: 'AI-Based Cyber Threat Agent',
    tagline: 'ML-driven threat & spam detection',
    description:
      'Cybersecurity system using machine learning techniques to detect cyber threats and classify email spam with high accuracy.',
    highlights: [
      'ML threat detection',
      'Email spam classification',
      'High-accuracy classifiers',
    ],
    tags: ['Machine Learning', 'Scikit-learn', 'Cybersecurity', 'NLP'],
    icon: 'ShieldCheck',
    accent: 'cyan',
  },
  {
    id: 6,
    title: 'InternOrbit',
    tagline: 'AI-powered internship discovery platform built with Bolt',
    description:
      'A web platform that connects students and fresh graduates with relevant internship opportunities. Built end-to-end with Bolt, it lets users browse curated internships, filter by role and location, and apply directly — streamlining the path from campus to career.',
    highlights: [
      'AI-matched internship recommendations',
      'Role & location filtering',
      'Built and deployed with Bolt',
    ],
    tags: ['React', 'Bolt', 'Supabase', 'Full-Stack', 'Job Board'],
    icon: 'Rocket',
    accent: 'violet',
  },
];

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'Claude AI' | 'Data Analytics' | 'Machine Learning' | 'Game Development';
};

export const CERTIFICATES: Certificate[] = [
  { id: 1, title: 'Claude AI Fundamentals', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 2, title: 'Prompt Engineering with Claude', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 3, title: 'Building AI Agents with Claude', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 4, title: 'Claude API & Tool Use', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 5, title: 'Retrieval-Augmented Generation with Claude', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 6, title: 'Claude Code Mastery', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 7, title: 'Claude for Data Analysis', issuer: 'Anthropic', date: '2025', category: 'Claude AI' },
  { id: 8, title: 'Advanced Prompt Patterns', issuer: 'Anthropic', date: '2024', category: 'Claude AI' },
  { id: 9, title: 'LLM Evaluation & Safety', issuer: 'Anthropic', date: '2024', category: 'Claude AI' },
  { id: 10, title: 'Multimodal AI with Claude', issuer: 'Anthropic', date: '2024', category: 'Claude AI' },
  { id: 11, title: 'Microsoft Power BI Data Analyst (PL-300)', issuer: 'Microsoft', date: '2025', category: 'Data Analytics' },
  { id: 12, title: 'SQL for Data Science', issuer: 'IBM', date: '2024', category: 'Data Analytics' },
  { id: 13, title: 'Data Analytics with Excel', issuer: 'Google', date: '2024', category: 'Data Analytics' },
  { id: 14, title: 'Data Visualization with Power BI', issuer: 'Microsoft', date: '2025', category: 'Data Analytics' },
  { id: 15, title: 'DAX Fundamentals', issuer: 'Microsoft', date: '2024', category: 'Data Analytics' },
  { id: 16, title: 'Data Storytelling & Dashboards', issuer: 'Coursera', date: '2024', category: 'Data Analytics' },
  { id: 17, title: 'Machine Learning Specialization', issuer: 'DeepLearning.AI', date: '2024', category: 'Machine Learning' },
  { id: 18, title: 'Deep Learning with TensorFlow', issuer: 'Google', date: '2024', category: 'Machine Learning' },
  { id: 19, title: 'Python for Data Science & AI', issuer: 'IBM', date: '2024', category: 'Machine Learning' },
  { id: 20, title: 'Computer Vision with OpenCV', issuer: 'Coursera', date: '2024', category: 'Machine Learning' },
  { id: 21, title: 'Game Development with Unity', issuer: 'Unity', date: '2025', category: 'Game Development' },
  { id: 22, title: 'Game Design Fundamentals', issuer: 'Coursera', date: '2025', category: 'Game Development' },
];

export async function submitContact(
  payload: ContactPayload
): Promise<ContactResult> {
  try {
    const { supabase } = await import('@/lib/supabase');
    const { error } = await supabase.from('contact_messages').insert({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    });

    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: 'Unable to send your message right now. Please try again later.',
    };
  }
}
