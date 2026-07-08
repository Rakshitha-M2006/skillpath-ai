// Maps a clean, canonical skill name -> every way it might realistically
// appear written in a resume. This becomes editable via the Admin
// Dashboard later (Phase 9) — for now it lives in code to get us moving.
export const SKILL_TAXONOMY = {
  // === CORE AI / MACHINE LEARNING ===
  "Machine Learning": ["machine learning", "ml", "scikit-learn", "sklearn", "supervised learning", "unsupervised learning"],
  "Deep Learning": ["deep learning", "dl", "neural networks", "neural network", "ann", "cnn", "rnn", "lstm"],
  "Artificial Intelligence": ["artificial intelligence", "ai"],
  "Natural Language Processing": ["natural language processing", "nlp", "text processing", "bert", "gpt", "llm", "transformers", "word2vec"],
  "Computer Vision": ["computer vision", "cv", "opencv", "image processing", "yolo", "object detection"],
  "Generative AI": ["generative ai", "genai", "prompt engineering", "langchain", "llamaindex", "stable diffusion"],
  
  // === AI/ML FRAMEWORKS & LIBRARIES ===
  "Python": ["python", "py"],
  "TensorFlow": ["tensorflow", "tf"],
  "PyTorch": ["pytorch", "torch"],
  "Keras": ["keras"],
  "Pandas": ["pandas"],
  "NumPy": ["numpy"],
  "Matplotlib": ["matplotlib", "seaborn"],
  "Hugging Face": ["hugging face", "huggingface", "hf"],
  
  // === AI CORE MATH ===
  "Data Science": ["data science", "ds", "data analysis"],
  "Statistics & Probability": ["statistics", "probability", "statistical modeling"],
  "Linear Algebra": ["linear algebra", "calculus", "optimization"],

  // === DATA STRUCTURES & ALGORITHMS (DSA) ===
  "Data Structures": ["data structures", "dsa", "arrays", "linked lists", "trees", "graphs", "stacks", "queues"],
  "Algorithms": ["algorithms", "sorting", "searching", "dynamic programming", "dp", "greedy algorithms", "time complexity"],

  // === CLOUD COMPUTING & MLOps ===
  "Cloud Computing": ["cloud computing", "cloud infrastructure"],
  "AWS": ["aws", "amazon web services", "s3", "ec2", "sagemaker"],
  "Google Cloud Platform": ["gcp", "google cloud", "vertex ai"],
  "Microsoft Azure": ["azure", "azure ml"],
  "MLOps": ["mlops", "model deployment", "mlflow", "dvc"],
  "Docker": ["docker", "containerization"],
  "Kubernetes": ["kubernetes", "k8s"],

  // === CYBERSECURITY ===
  "Cybersecurity": ["cybersecurity", "cyber security", "information security", "infosec"],
  "Network Security": ["network security", "firewalls", "vpn"],
  "Cryptography": ["cryptography", "encryption", "decryption", "hashing"],
  "Penetration Testing": ["penetration testing", "pen testing", "ethical hacking", "vulnerability assessment"],

  // === WEB DEVELOPMENT & DATABASES ===
  "JavaScript": ["javascript", "js", "es6"],
  "React": ["react", "react.js", "reactjs"],
  "Node.js": ["node.js", "nodejs", "node js"],
  "Express.js": ["express.js", "express"],
  "HTML": ["html", "html5"],
  "CSS": ["css", "css3", "tailwind", "bootstrap"],
  "REST API": ["rest api", "restful api", "apis"],
  "SQL": ["sql", "mysql", "postgresql", "postgres", "sqlite"],
  "MongoDB": ["mongodb", "mongo", "nosql"],
  "Firebase": ["firebase", "firestore"],
  "Cloudinary": ["cloudinary"],

  // === CORE COMPUTER SCIENCE & LANGUAGES ===
  "C++": ["c++", "cpp"],
  "Java": ["java"],
  "Git": ["git", "github", "version control"],
  "Computer Networks": ["computer networks", "networking", "tcp/ip", "http"],
  "Operating Systems": ["operating systems", "os concepts", "linux", "ubuntu"],
  "DBMS": ["dbms", "database management", "rdbms"]
};