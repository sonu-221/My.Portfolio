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
    'Passionate about solving real-world problems with Data and AI, building intelligent, scalable end-to-end applications.',
  email: 'thelegist5665@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sonu-kumar',
  github: 'https://github.com/sonu-221?tab=repositories',
  resumeUrl: '/resume.pdf',
  location: 'India',
  university: 'Centurion University of Technology and Management',
};

export type SkillCategory = {
  title: string;
  icon: string;
  accent: string;
  skills: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: 'Brain',
    accent: 'cyan',
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
    skills: [
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'CNN',
      'LSTM',
    ],
  },
  {
    title: 'Web & Backend',
    icon: 'Code2',
    accent: 'cyan',
    skills: [
      'Python',
      'SQL',
      'Flask',
      'REST APIs',
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Node.js',
      'MySQL',
    ],
  },
  {
    title: 'Developer Tools & Data Viz',
    icon: 'BarChart3',
    accent: 'violet',
    skills: ['Power BI', 'Excel', 'Jupyter Notebook', 'Git', 'GitHub'],
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
