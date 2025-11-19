export const projects = [
  {
    id: 'eduplus',
    title: 'Blockchain Based Academic Credentials',
    description: 'A secure credential management system where educational institutes upload students’ scores and credits to a blockchain ledger, ensuring tamper-proof records. Built during your internship at EduPlus, you developed the entire backend using Node.js and MongoDB, enabling students to access their verified academic data and allowing recruiters to authenticate credentials instantly, thus maintaining integrity across the ecosystem.',
    tech: ['Node.js', 'MongoDB', 'Blockchain', 'Smart Contracts'],
    github: 'https://github.com/aryangiri03/eduplus',
    color: '#ff0055'
  },
  {
    id: 'notewise',
    title: 'NoteWise – Multimodal RAG Study Companion',
    description: 'An AI-powered study assistant that lets students upload notes and learning material, then interact with it through natural Q&A and voice conversations. It integrates a multimodal RAG pipeline, using Deepgram for speech-to-text and Edge TTS for output, effectively acting like a personalised tutor that understands both textual and audio inputs to support seamless learning.',
    tech: ['RAG', 'AI', 'Deepgram', 'Edge TTS'],
    github: 'https://github.com/aryangiri03/NoteWise',
    color: '#bd00ff'
  },
  {
    id: 'smart-resume',
    title: 'Smart Resume Ranker',
    description: 'A resume-filtering system designed for hiring teams to quickly identify candidates who best match a given job description. Users upload the JD along with up to fifty resumes, and the platform scores each document using similarity metrics, returning a ranked list and a detailed report. The solution is deployed via Streamlit for smooth, accessible use.',
    tech: ['NLP', 'Python', 'Streamlit', 'Data Science'],
    github: 'https://github.com/aryangiri03/smart-resume-ranker',
    color: '#00ff88'
  },
  {
    id: 'carbonsense',
    title: 'CarbonSense – Real-Time Vehicle Emission Estimator',
    description: 'A system that estimates real-time vehicle carbon emissions using fuel-station interactions and government-linked vehicle data. When a vehicle refuels, cameras capture its number plate, gather attributes like fuel type and engine capacity, and feed them into a RandomForestRegressor model for emission prediction. The final output is transformed into a humorous yet informative message using OpenAI’s GPT-OSS-120B (served via Groq) and delivered to the owner through email and SMS using Twilio.',
    tech: ['ML', 'OpenAI', 'Twilio', 'React'],
    github: 'https://github.com/aryangiri03/CarbonSense',
    color: '#00f3ff'
  },
  {
    id: 'codepilot',
    title: 'CodePilot – MERN App Generator VS Code Extension',
    description: 'A VS Code extension that generates complete MERN applications from natural-language prompts. Users simply describe the app they want, and the tool scaffolds the entire project, runs it, and displays the output instantly. It also supports iterative updates, letting users request changes that the extension applies directly to the codebase, making it a powerful prompt-driven development assistant.',
    tech: ['VS Code API', 'MERN', 'GenAI'],
    github: 'https://github.com/aryangiri03/codepilot-ai-vs-extension',
    color: '#ffaa00'
  }
];
