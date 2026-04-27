"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, ArrowLeft, Phone, MapPin, ChevronDown, CheckCircle2, Users,
} from "lucide-react";
import Link from "next/link";

type Line = { speaker: string; text: string };
type Dialogue = {
  number: string;
  topic: string;
  subtitle: string;
  characters: string;
  speakerA: string;
  speakerB: string;
  bColor: { text: string; bg: string; border: string; dot: string };
  lines: Line[];
};

const dialogues: Dialogue[] = [
  {
    number: "01",
    topic: "Tree Plantation",
    subtitle: "A Dialogue Between Two Friends About Tree Plantation",
    characters: "Doha & Karim — two SSC students walking through their neighbourhood",
    speakerA: "Doha",
    speakerB: "Karim",
    bColor: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/25",
      dot: "bg-emerald-400",
    },
    lines: [
      { speaker: "Doha", text: "Hi Karim, how are you?" },
      { speaker: "Karim", text: "I am fine, Doha. How about you?" },
      { speaker: "Doha", text: "I am fine too, thanks. Look at this area. It looks so dry and empty." },
      { speaker: "Karim", text: "Yes. There used to be many trees here. Now almost all of them are gone." },
      { speaker: "Doha", text: "Why are people cutting down so many trees?" },
      { speaker: "Karim", text: "Mostly for farming, construction, and fuel. People do not think about the consequences." },
      { speaker: "Doha", text: "What are the main consequences of cutting trees?" },
      { speaker: "Karim", text: "The most serious one is the imbalance in nature. Trees absorb carbon dioxide and release oxygen." },
      { speaker: "Doha", text: "So without trees, the oxygen level in the air decreases." },
      { speaker: "Karim", text: "Exactly. And the amount of carbon dioxide increases. This leads to global warming." },
      { speaker: "Doha", text: "I have noticed the temperature in our area has become much hotter lately." },
      { speaker: "Karim", text: "That is because of deforestation. Trees provide shade and keep the environment cool." },
      { speaker: "Doha", text: "What about rainfall? I heard trees affect rain as well." },
      { speaker: "Karim", text: "Yes. Trees play a vital role in the water cycle. They help clouds form and bring rainfall." },
      { speaker: "Doha", text: "So without trees, there would be less rain and more drought." },
      { speaker: "Karim", text: "Correct. Many areas that were once fertile have turned into deserts due to deforestation." },
      { speaker: "Doha", text: "What about floods? Do trees help prevent floods too?" },
      { speaker: "Karim", text: "Very much so. Tree roots hold the soil together and absorb rainwater." },
      { speaker: "Doha", text: "So they prevent both soil erosion and flooding at the same time." },
      { speaker: "Karim", text: "Yes. In areas where forests have been cut, floods and landslides are very common." },
      { speaker: "Doha", text: "Trees also give us food and medicine, right?" },
      { speaker: "Karim", text: "Absolutely. Fruits, leaves, and bark of many trees are used as food and in traditional medicine." },
      { speaker: "Doha", text: "And they provide shelter and food for birds and animals too." },
      { speaker: "Karim", text: "That is right. Cutting trees destroys the natural habitat of many species." },
      { speaker: "Doha", text: "Many animals and birds have already become endangered because of this." },
      { speaker: "Karim", text: "So we must take immediate steps to stop deforestation and plant more trees." },
      { speaker: "Doha", text: "I heard our school is organising a tree plantation programme next month." },
      { speaker: "Karim", text: "Yes! Every student will be asked to plant at least three saplings." },
      { speaker: "Doha", text: "That is a wonderful initiative. What types of trees should we plant?" },
      { speaker: "Karim", text: "We should plant fruit trees like mango, jackfruit, and guava. They give both shade and food." },
      { speaker: "Doha", text: "We should also plant trees along roads and rivers to prevent erosion." },
      { speaker: "Karim", text: "Great idea. Bamboo and coconut trees are also very useful for coastal areas." },
      { speaker: "Doha", text: "What can we do as students to spread awareness about tree plantation?" },
      { speaker: "Karim", text: "We can make posters, give speeches, and organise rallies in our community." },
      { speaker: "Doha", text: "We should also talk to our parents and neighbours about planting trees in their homes." },
      { speaker: "Karim", text: "Even planting one tree per household can make a huge difference nationwide." },
      { speaker: "Doha", text: "The government should also enforce strict laws against illegal tree cutting." },
      { speaker: "Karim", text: "True. And forest areas must be protected. We cannot let greed destroy our environment." },
      { speaker: "Doha", text: "I feel very motivated now. Let us both plant trees this weekend." },
      { speaker: "Karim", text: "Agreed. A green earth is a healthy earth. Let us do our part and inspire others." },
    ],
  },
  {
    number: "02",
    topic: "Necessity of Reading Newspaper",
    subtitle: "A Dialogue Between Two Friends About the Importance of Reading Newspaper",
    characters: "Doha & Suma — two SSC students on their way to school",
    speakerA: "Doha",
    speakerB: "Suma",
    bColor: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/25",
      dot: "bg-violet-400",
    },
    lines: [
      { speaker: "Doha", text: "Hi Suma, how are you today?" },
      { speaker: "Suma", text: "I am fine, Doha. How are you?" },
      { speaker: "Doha", text: "I am fine. I saw you reading a newspaper this morning. Do you read it daily?" },
      { speaker: "Suma", text: "Yes, Doha. I read the newspaper every morning before school. It is a great habit." },
      { speaker: "Doha", text: "I mostly use Facebook and YouTube for news. Why do you prefer newspapers?" },
      { speaker: "Suma", text: "Social media is fast, but it often spreads false and unverified news." },
      { speaker: "Doha", text: "That is true. I have seen many fake stories go viral on social media." },
      { speaker: "Suma", text: "Newspapers are written by trained journalists. The news is checked before printing." },
      { speaker: "Doha", text: "So newspapers are more trustworthy and accurate than social media." },
      { speaker: "Suma", text: "Exactly. They also give us in-depth analysis, not just headlines." },
      { speaker: "Doha", text: "Does reading newspapers help in our studies?" },
      { speaker: "Suma", text: "It helps enormously. My vocabulary has improved a lot since I started reading it." },
      { speaker: "Doha", text: "How does vocabulary improve by reading newspapers?" },
      { speaker: "Suma", text: "Newspapers use formal, standard English. We learn new words and expressions every day." },
      { speaker: "Doha", text: "That must be very helpful for our English exams and compositions." },
      { speaker: "Suma", text: "Yes. It also improves our grammar, sentence structure, and writing skills." },
      { speaker: "Doha", text: "Does it help in subjects other than English?" },
      { speaker: "Suma", text: "Definitely. It covers history, politics, economics, science, and sports." },
      { speaker: "Doha", text: "So it works like a textbook for general knowledge." },
      { speaker: "Suma", text: "Exactly. Our teachers often ask us about current affairs. Newspapers help us answer those questions." },
      { speaker: "Doha", text: "That is a great point. I have failed to answer current affairs questions in class before." },
      { speaker: "Suma", text: "If you read newspapers regularly, that will never happen again." },
      { speaker: "Doha", text: "Does it also help beyond school life?" },
      { speaker: "Suma", text: "Very much so. Job interviews, viva exams, and competitive exams all require current knowledge." },
      { speaker: "Doha", text: "So reading newspapers prepares us for our future careers as well." },
      { speaker: "Suma", text: "Yes. A well-informed person always has an advantage over others." },
      { speaker: "Doha", text: "What about becoming a good citizen? Does it help with that too?" },
      { speaker: "Suma", text: "Of course. When we know about the problems of our country, we want to solve them." },
      { speaker: "Doha", text: "It makes us more responsible, aware, and patriotic." },
      { speaker: "Suma", text: "Perfectly said. A good citizen must stay informed about what is happening around them." },
      { speaker: "Doha", text: "Which sections of the newspaper do you read first?" },
      { speaker: "Suma", text: "I start with the front page headlines, then the editorial, and finally sports and science." },
      { speaker: "Doha", text: "What is the editorial section?" },
      { speaker: "Suma", text: "It is where experienced writers share their opinions on important issues. It is very thought-provoking." },
      { speaker: "Doha", text: "That sounds interesting. Which newspaper should I start with?" },
      { speaker: "Suma", text: "The Daily Star is perfect for SSC students. It uses clear English and covers all topics." },
      { speaker: "Doha", text: "How much time should I spend reading it each day?" },
      { speaker: "Suma", text: "Even thirty minutes daily is enough to begin with. You can read more as you get comfortable." },
      { speaker: "Doha", text: "Thank you so much, Suma. You have really convinced me. I will start tomorrow morning." },
      { speaker: "Suma", text: "That is wonderful! Remember — a newspaper a day keeps ignorance away." },
    ],
  },
  {
    number: "03",
    topic: "Early Rising",
    subtitle: "A Dialogue Between Two Friends About the Benefits of Early Rising",
    characters: "Doha & Tanim — two SSC students before their morning class",
    speakerA: "Doha",
    speakerB: "Tanim",
    bColor: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/25",
      dot: "bg-amber-400",
    },
    lines: [
      { speaker: "Doha", text: "Good morning, Tanim! How are you?" },
      { speaker: "Tanim", text: "Good morning, Doha! I am very well, thank you. How are you?" },
      { speaker: "Doha", text: "I am fine. But I feel a little sleepy today. I woke up late again." },
      { speaker: "Tanim", text: "That is not good. A student should always wake up early." },
      { speaker: "Doha", text: "You always look so fresh and energetic in the morning. What is your secret?" },
      { speaker: "Tanim", text: "My secret is simple — I rise early every day. I am out of bed by five o'clock." },
      { speaker: "Doha", text: "Five in the morning? That sounds very difficult. How do you manage it?" },
      { speaker: "Tanim", text: "I go to sleep by ten at night. So I get a full seven hours of rest." },
      { speaker: "Doha", text: "I usually sleep past midnight. That is why I feel tired in the morning." },
      { speaker: "Tanim", text: "Sleeping late is a bad habit. It ruins your health and your daily routine." },
      { speaker: "Doha", text: "I understand. But why is waking up early so important?" },
      { speaker: "Tanim", text: "The early morning is the most peaceful time of the day. There is no noise or distraction." },
      { speaker: "Doha", text: "That is true. The streets are quiet and the air is fresh in the morning." },
      { speaker: "Tanim", text: "Fresh morning air is full of oxygen. It is very good for the lungs and the brain." },
      { speaker: "Doha", text: "Does early rising help with studying?" },
      { speaker: "Tanim", text: "Greatly. Scientists say the brain is sharpest and most focused in the morning." },
      { speaker: "Doha", text: "So whatever we study in the morning, we remember it better?" },
      { speaker: "Tanim", text: "Exactly. Information absorbed in the early hours stays in memory much longer." },
      { speaker: "Doha", text: "I always try to study late at night. But I keep forgetting what I read." },
      { speaker: "Tanim", text: "That happens because the tired brain does not retain information properly at night." },
      { speaker: "Doha", text: "I never thought about it that way. What else do you do in the morning?" },
      { speaker: "Tanim", text: "I go for a walk for about thirty minutes. I breathe in the fresh air and enjoy the sunrise." },
      { speaker: "Doha", text: "That sounds very refreshing. Does it also help physically?" },
      { speaker: "Tanim", text: "Yes. Morning walks improve blood circulation, strengthen the heart, and boost energy." },
      { speaker: "Doha", text: "What do you do after the walk?" },
      { speaker: "Tanim", text: "I do some light exercise, take a bath, eat a proper breakfast, and then study for two hours." },
      { speaker: "Doha", text: "All of that before school? That is impressive." },
      { speaker: "Tanim", text: "By the time I reach school, I have already completed half my daily tasks." },
      { speaker: "Doha", text: "So early risers are more productive and organised than others." },
      { speaker: "Tanim", text: "Studies show that most successful people in the world wake up early." },
      { speaker: "Doha", text: "That makes a lot of sense. What about our mental health?" },
      { speaker: "Tanim", text: "Early risers feel less stressed and more positive throughout the day." },
      { speaker: "Doha", text: "Why is that?" },
      { speaker: "Tanim", text: "Because they are not rushing. They have time to plan their day calmly." },
      { speaker: "Doha", text: "I am always in a rush in the morning. I skip breakfast and come to school stressed." },
      { speaker: "Tanim", text: "That is why your concentration in class is affected. Breakfast is very important for the brain." },
      { speaker: "Doha", text: "I had no idea early rising had so many benefits. There is a famous proverb about this, right?" },
      { speaker: "Tanim", text: "Yes — early to bed and early to rise makes a man healthy, wealthy, and wise." },
      { speaker: "Doha", text: "That proverb is so true. I want to change my habits starting from tomorrow." },
      { speaker: "Tanim", text: "Start by sleeping thirty minutes earlier each night. Gradually shift to ten o'clock." },
      { speaker: "Doha", text: "And set an alarm for five-thirty in the morning?" },
      { speaker: "Tanim", text: "Yes. It will feel hard for the first few days. But after a week, it will become natural." },
      { speaker: "Doha", text: "Thank you so much, Tanim. This conversation has truly inspired me." },
      { speaker: "Tanim", text: "I am glad. Early rising is the first step towards a disciplined and successful life." },
    ],
  },
  {
    number: "04",
    topic: "Necessity of Learning English",
    subtitle: "A Dialogue Between Two Friends About the Importance of Learning English",
    characters: "Doha & Rubel — two SSC students after their English class",
    speakerA: "Doha",
    speakerB: "Rubel",
    bColor: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/25",
      dot: "bg-cyan-400",
    },
    lines: [
      { speaker: "Doha", text: "Hello Rubel, how are you?" },
      { speaker: "Rubel", text: "I am fine, Doha. How are you?" },
      { speaker: "Doha", text: "I am fine too. Our English teacher just said that English is the key to the modern world. Do you agree?" },
      { speaker: "Rubel", text: "I completely agree. English is the most widely used language in the world today." },
      { speaker: "Doha", text: "But we are Bangladeshi. We have our own beautiful language — Bangla. Why must we learn English?" },
      { speaker: "Rubel", text: "We should always love and respect Bangla. But English gives us access to the wider world." },
      { speaker: "Doha", text: "What do you mean by access to the wider world?" },
      { speaker: "Rubel", text: "Most of the world's knowledge — books, research, technology — is written in English." },
      { speaker: "Doha", text: "So without English, we are cut off from the largest part of human knowledge." },
      { speaker: "Rubel", text: "Exactly. A student who knows English can access millions of books and courses online." },
      { speaker: "Doha", text: "I have noticed that the best educational platforms like Coursera and Khan Academy are in English." },
      { speaker: "Rubel", text: "Yes. Even the best YouTube channels, documentaries, and tutorials are mostly in English." },
      { speaker: "Doha", text: "So a student who knows English can learn almost anything on their own." },
      { speaker: "Rubel", text: "Absolutely. English opens the door to self-education and lifelong learning." },
      { speaker: "Doha", text: "What about jobs? Does English help in finding better employment?" },
      { speaker: "Rubel", text: "It makes a huge difference. Most good jobs in Bangladesh require English communication skills." },
      { speaker: "Doha", text: "Which types of jobs are you talking about?" },
      { speaker: "Rubel", text: "Banks, multinational companies, NGOs, airlines, hotels, IT firms — they all need English speakers." },
      { speaker: "Doha", text: "So a person with good English always has more job options than someone without it." },
      { speaker: "Rubel", text: "Yes. And they earn a higher salary too. English proficiency is a very valuable skill." },
      { speaker: "Doha", text: "What about studying or working abroad?" },
      { speaker: "Rubel", text: "English is essential. It is spoken in over sixty countries as an official language." },
      { speaker: "Doha", text: "So in the UK, USA, Australia, or Canada, English is the only language we need." },
      { speaker: "Rubel", text: "That is right. And for university admissions abroad, tests like IELTS and TOEFL are required." },
      { speaker: "Doha", text: "Those are English proficiency tests, right?" },
      { speaker: "Rubel", text: "Yes. Without a good score, no foreign university will accept you." },
      { speaker: "Doha", text: "So learning English is not a choice — it is a necessity for our future." },
      { speaker: "Rubel", text: "Perfectly said. It is as important as mathematics or science in today's world." },
      { speaker: "Doha", text: "Does English help us in our personal development as well?" },
      { speaker: "Rubel", text: "Very much. Reading English literature makes us wiser, more creative, and more empathetic." },
      { speaker: "Doha", text: "How does it make us more empathetic?" },
      { speaker: "Rubel", text: "By reading about different people and cultures, we understand the world from many perspectives." },
      { speaker: "Doha", text: "That is a beautiful thought. English truly connects us to all of humanity." },
      { speaker: "Rubel", text: "It also helps us express our own ideas and culture to the world in a language everyone understands." },
      { speaker: "Doha", text: "Many students are afraid of English. They feel they can never become fluent. What would you say to them?" },
      { speaker: "Rubel", text: "I would say — do not be afraid of mistakes. Mistakes are how we learn any language." },
      { speaker: "Doha", text: "What are the best ways to improve English?" },
      { speaker: "Rubel", text: "Read English newspapers and books every day. Start with simple ones and gradually move to harder ones." },
      { speaker: "Doha", text: "What about speaking? Many students can read but cannot speak confidently." },
      { speaker: "Rubel", text: "Practice speaking with friends in English. Even five minutes of daily speaking practice helps a lot." },
      { speaker: "Doha", text: "Watching English films and shows must also help." },
      { speaker: "Rubel", text: "Yes. It trains our ears to understand natural English and improves our pronunciation too." },
      { speaker: "Doha", text: "I feel very motivated now. I will work harder on my English from today." },
      { speaker: "Rubel", text: "That is the spirit, Doha. Remember — English is a key. The harder you work, the wider the doors it opens." },
    ],
  },
];

const writingTips = [
  "Start with a greeting to open the dialogue naturally",
  "Use full sentences — avoid slang or very informal language",
  "Each exchange should flow logically from the previous one",
  "Include at least 10–12 exchanges for a full-mark answer",
  "End with a conclusion or resolution, not abruptly",
  "Use correct punctuation: speaker name followed by a colon",
];

function DialogueCard({ dialogue, index }: { dialogue: Dialogue; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="gradient-border bg-card rounded-2xl overflow-hidden"
    >
      {/* Card header — click to toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <span className="text-3xl font-black gradient-text opacity-40 leading-none flex-shrink-0 w-10">
          {dialogue.number}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base leading-snug">{dialogue.topic}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border ${dialogue.bColor.bg} ${dialogue.bColor.border} ${dialogue.bColor.text}`}>
              <Users className="h-3 w-3" />
              {dialogue.speakerA} &amp; {dialogue.speakerB}
            </span>
            <span className="text-xs text-muted-foreground">
              {dialogue.lines.length} exchanges
            </span>
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable conversation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {/* Characters info */}
            <div className="px-6 pb-3 pt-0">
              <p className="text-xs text-muted-foreground italic border-l-2 border-border pl-3">
                {dialogue.subtitle}
                <br />
                <span className="font-medium not-italic">{dialogue.characters}</span>
              </p>
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-border/60 mb-4" />

            {/* Dialogue lines */}
            <div className="px-6 pb-6 space-y-2">
              {dialogue.lines.map((line, i) => {
                const isA = line.speaker === dialogue.speakerA;
                return (
                  <div key={i} className="flex items-baseline gap-3 text-sm leading-relaxed">
                    <span
                      className={`font-bold flex-shrink-0 w-14 text-right text-xs uppercase tracking-wide ${
                        isA ? "text-primary" : dialogue.bColor.text
                      }`}
                    >
                      {line.speaker}
                    </span>
                    <span className="flex-shrink-0 text-muted-foreground/40">:</span>
                    <span className="text-foreground/85">{line.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DialogueWritingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Link
              href="/tuitions/ssc-english"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to SSC English
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MessageSquare className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                  SSC · English · Writing
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Dialogue <span className="gradient-text">Writing</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Full model dialogues for common SSC board exam topics — prepared by Arif Ur Rahman.
              Click any dialogue to read it in full.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{dialogues.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">Dialogues</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">
                  {dialogues.reduce((s, d) => s + d.lines.length, 0)}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">Total Exchanges</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">Board</span>
                <span className="text-xs text-muted-foreground mt-0.5">Exam Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative container px-4 mx-auto pb-28 space-y-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Writing Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="gradient-border bg-card rounded-2xl p-7 max-w-2xl"
        >
          <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-emerald-400" />
            Writing Tips for Dialogue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {writingTips.map((tip) => (
              <div key={tip} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dialogues */}
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Model Dialogues
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Full <span className="gradient-text">Dialogues</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="space-y-4">
            {dialogues.map((d, i) => (
              <DialogueCard key={d.number} dialogue={d} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-emerald-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Want to practise dialogue writing?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get personal feedback and more model dialogues in one-on-one sessions at your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+8801680728065"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="mailto:arifurrahman.it.doc@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 text-sm font-medium transition-all duration-300"
              >
                <MapPin className="h-4 w-4" />
                Dhaka, Bangladesh
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
