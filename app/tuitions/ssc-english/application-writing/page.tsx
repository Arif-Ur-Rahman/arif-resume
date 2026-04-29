"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList, ArrowLeft, Phone, MapPin, ChevronDown, CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type ApplicationItem = {
  number: string;
  title: string;
  part: "A" | "B";
  partLabel: string;
  to: string[];
  subject: string;
  body: string[];
  closing: string;
  signature: string[];
  color: { text: string; bg: string; border: string };
};

const applications: ApplicationItem[] = [
  {
    number: "01",
    title: "Application to UNO for Relief Goods (Flood-Affected People)",
    part: "A",
    partLabel: "Application",
    to: ["The Upazila Nirbahi Officer (UNO)", "Upazila: ……………, District: ……………"],
    subject: "Prayer for immediate relief goods for the flood-affected people.",
    body: [
      "With due respect and humble submission, I beg to state that I am a resident of ……………… village under your upazila. Due to the recent devastating flood caused by incessant rainfall and the overflow of nearby rivers, our entire locality has been submerged under floodwater. Thousands of families have been rendered homeless and are suffering from acute shortage of food, pure drinking water, medicine, and other basic necessities of life.",
      "The floodwater has destroyed our crops, houses, and roads, making it extremely difficult for the affected people to survive. Many families have been living on embankments and in makeshift shelters without food or clean water for several days. Children, women, and elderly people are in particularly critical conditions and require urgent humanitarian assistance.",
      "Therefore, I, on behalf of the flood-affected people of our area, most respectfully request you to kindly arrange and distribute emergency relief goods such as food, dry food, pure drinking water, oral saline, medicines, blankets, and tarpaulins as soon as possible. Your immediate and generous response will save many innocent lives from further suffering and deprivation.",
      "I sincerely hope that you will consider this matter with utmost urgency and take all necessary steps without further delay.",
    ],
    closing: "Yours faithfully,",
    signature: ["Name: ……………………", "Village: ……………………", "Upazila: ……………………", "Contact No.: ……………………"],
    color: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/25" },
  },
  {
    number: "02",
    title: "Application for Setting Up a Canteen at School Campus",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for setting up a canteen on the school campus.",
    body: [
      "With profound respect, I beg to draw your kind attention to a pressing need of our school — the establishment of a proper canteen within the school campus. I am writing this application on behalf of all the students of our school to bring this important matter to your notice.",
      "Our school currently lacks a proper canteen or food stall within its premises. As a result, students often remain hungry during long class hours, particularly those who come from distant places and cannot go home for meals between periods. Some students purchase food from unhygienic roadside stalls outside the school gate, which poses serious health risks. The absence of a clean and affordable food source within the campus is adversely affecting students' health and their ability to concentrate in class.",
      "If a well-managed canteen is established within the school compound, students will be able to get fresh, hygienic, and affordable food without having to leave the campus. It will ensure better time management, reduce health hazards, and create a more productive learning environment. The canteen could also be supervised by the school authority to ensure quality and hygiene standards are maintained at all times.",
      "Therefore, I most respectfully pray and hope that you will kindly take necessary steps to establish a well-managed canteen inside our school campus at the earliest convenience. We shall remain ever grateful for your kind consideration.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of all students"],
    color: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/25" },
  },
  {
    number: "03",
    title: "Application for Opening a Debate Club in School",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for establishing a Debate Club in our school.",
    body: [
      "With due respect, I beg to state that our school, though excelling in academic activities, lacks an active debate club that could significantly contribute to the intellectual and communicative development of the students. I, along with several like-minded students, am writing this application to request the establishment of a debate club in our esteemed institution.",
      "Debating is one of the most powerful tools for developing critical thinking, logical reasoning, public speaking skills, and leadership qualities among students. A debate club will create a platform where students can express their ideas confidently, argue logically, and learn to see issues from multiple perspectives. It will also help prepare students for national and inter-school debate competitions, which will undoubtedly bring honour and recognition to our institution.",
      "We assure you that we will maintain discipline and decorum during all debate sessions and will organise all events responsibly under the supervision of a teacher-in-charge. We have already identified a number of enthusiastic students who are eager to participate and contribute actively to the club's activities.",
      "In view of the above, I humbly request you to kindly grant permission and necessary support for the formation of a Debate Club in our school. Your approval will be a great step toward the holistic intellectual development of our students.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of interested students"],
    color: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/25" },
  },
  {
    number: "04",
    title: "Application for Permission to Go on a Study Tour",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for granting permission to go on a study tour.",
    body: [
      "With due respect, I beg to draw your kind attention to the fact that the students of Class ……… are eagerly planning to go on a study tour to ……………. We believe that this educational excursion will be highly beneficial for our academic and personal development, and we are writing to seek your kind permission and wholehearted support for the same.",
      "Study tours provide students with invaluable opportunities to learn beyond the boundaries of textbooks. Visiting historical sites, museums, industrial establishments, or natural landmarks offers hands-on learning experiences that cannot be replicated within the four walls of a classroom. Such tours also nurture a sense of curiosity, teamwork, and national pride among students and give them a broader perspective on life and learning.",
      "We propose to undertake the tour on …………… and return on ……………, under the full supervision of our class teacher and two other respected teachers. All necessary arrangements regarding transport, accommodation, and the safety of students will be made well in advance. Written consent from parents and guardians will also be obtained for each participating student before the tour begins.",
      "Therefore, we most respectfully request you to kindly grant permission for the said study tour and provide your valuable guidance and support. We assure you that we will maintain full discipline and decorum throughout the entire duration of the tour.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of Class ……… Students"],
    color: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/25" },
  },
  {
    number: "05",
    title: "Application for Opening a Common Room",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for opening a Common Room for students.",
    body: [
      "With utmost respect, I beg to state that our school currently lacks a common room where students can relax and engage in recreational activities during leisure time and between classes. I, along with my fellow students, wish to bring this important matter to your kind notice and request the urgent establishment of a common room within our school premises.",
      "A common room serves as a vital space where students can rest, read newspapers and magazines, play indoor games like chess and carom, and engage in informal and productive discussions. Such a facility significantly reduces mental fatigue caused by continuous academic study, enhances social bonding among students, and contributes to the overall physical and mental well-being of the student body. Schools that have well-equipped common rooms have consistently reported improved student morale and better academic focus.",
      "We propose that an unused or underutilised room on the ground floor could be converted into a comfortable common room at minimal cost. Basic furniture, a selection of newspapers and magazines, and a few indoor games would be sufficient to make it functional and enjoyable. We are also fully willing to contribute voluntarily to its management, cleanliness, and regular upkeep.",
      "We therefore humbly appeal to you to kindly consider our request and take the necessary steps to open a common room for the students of our school. Your generous decision will be greatly appreciated and warmly welcomed by the entire student body.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of all students"],
    color: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/25" },
  },
  {
    number: "06",
    title: "Application for a Seat in the School Hostel",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for allotment of a seat in the school hostel.",
    body: [
      "With all due respect, I beg to state that I am a student of Class ……… at your esteemed institution. I live in …………… village, which is approximately ……… kilometres away from the school. Travelling such a long distance every day is both extremely time-consuming and financially burdensome for my family. This exhausting daily commute is also adversely affecting my studies, as I arrive home late and have very little time left for revision, homework, and adequate rest.",
      "I come from a modest family, and my father is a farmer. Despite our financial constraints, my parents are fully committed to supporting my education. Residing in the school hostel will enable me to focus entirely on my studies without the burden of daily travel, participate in school activities more actively, benefit from a structured and disciplined study environment, and make the most of my academic years.",
      "I assure you that I will abide by all the rules and regulations of the hostel with full sincerity and dedication. I will maintain discipline, respect fellow hostel residents, and will not engage in any activity that could disrupt the peaceful environment of the hostel or bring dishonour to the institution.",
      "In view of the above circumstances, I most humbly and earnestly request you to kindly allot me a seat in the school hostel. I will be forever grateful for your kind, compassionate, and generous consideration of my appeal.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "Father's Name: ……………………", "Village: ……………………"],
    color: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/25" },
  },
  {
    number: "07",
    title: "Application for Establishing a Computer Club",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for establishing a Computer Club in our school.",
    body: [
      "With profound respect, I beg to draw your kind attention to the pressing need for establishing a Computer Club in our school. In the present era of digital technology and information, computer literacy has become an absolutely indispensable skill for every student. Yet, our school lacks an organised club that specifically promotes and enhances students' computer knowledge and technical skills beyond the regular curriculum.",
      "A Computer Club would provide students with a structured and stimulating platform to learn programming, graphic design, web development, and basic computer operations outside of regular class hours. Club activities such as coding competitions, digital art exhibitions, and software development workshops would inspire students to explore technology in a creative and professional manner. Such skills are highly valued in today's competitive job market and in higher education institutions both nationally and internationally.",
      "We propose that the computer lab, which is currently used only during scheduled class periods, could also serve as the venue for club activities after school hours. A dedicated and knowledgeable teacher may be assigned as the club advisor to guide and oversee all activities. We are enthusiastic, motivated, and fully ready to take an active and responsible role in organising and running the club.",
      "I therefore earnestly and respectfully request you to kindly grant permission for the establishment of a Computer Club in our school. This will be a significant and forward-looking step in equipping our students for the ever-growing challenges of the digital age.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of interested students"],
    color: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/25" },
  },
  {
    number: "08",
    title: "Application for Establishing a Language Club",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for establishing a Language Club in our school.",
    body: [
      "With due respect, I beg to state that effective communication in English and other languages is one of the most critical and sought-after skills in the modern world. While our school provides a solid academic foundation in language subjects, there is currently no dedicated club that focuses on the practical, creative, and confident use of language skills in real-life contexts. I, along with my fellow students, hereby request you to establish a Language Club in our institution.",
      "A Language Club would offer students a rich variety of opportunities to practise English conversation, participate in elocution contests, creative writing competitions, poetry recitation, storytelling sessions, and vocabulary-building exercises. It would also encourage students to explore other world languages and cultures, fostering a broader worldview and a deeper appreciation for global diversity. Regular language activities would naturally and effectively improve students' speaking, writing, reading, and listening skills — all of which are essential not just for academic success but for future professional careers and global interaction.",
      "The club activities can be held after school hours in any available classroom. We respectfully request that a skilled and enthusiastic English teacher be assigned as the club advisor. We promise to manage all the club's activities with full seriousness, dedication, and a deep sense of responsibility.",
      "We humbly request you to kindly consider our appeal and grant permission for the establishment of a Language Club at the earliest possible time. We are absolutely confident that it will greatly benefit every student of our institution.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of interested students"],
    color: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/25" },
  },
  {
    number: "09",
    title: "Application for Multimedia Classroom Facilities",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for setting up multimedia classroom facilities in our school.",
    body: [
      "With due respect, I beg to draw your attention to the pressing need for multimedia classroom facilities in our school. In today's technologically advanced world, digital learning tools have fundamentally revolutionised the way knowledge is delivered and absorbed by students. Our school, however, still relies solely on traditional chalk-and-blackboard methods, which significantly limits the effectiveness, engagement, and interactivity of the teaching-learning process.",
      "A multimedia classroom equipped with projectors, interactive whiteboards, computers, and audio systems would dramatically improve the quality of education in our institution. Complex subjects such as science, mathematics, geography, and history become much easier to understand and retain when they are illustrated through educational videos, animated diagrams, and interactive digital presentations. Research consistently and conclusively shows that multimedia-aided instruction leads to better comprehension, higher retention rates, and significantly increased student engagement and motivation.",
      "We understand that the initial cost of setting up such facilities might be a concern. However, the long-term academic benefit to our students far outweighs the initial investment. We also note with encouragement that several schools in our district have already successfully implemented multimedia classrooms, and this has noticeably and measurably improved their students' performance in public examinations and inter-school competitions.",
      "We therefore earnestly and respectfully request you to kindly take the necessary steps to introduce multimedia classroom facilities in our school as soon as possible. Your visionary initiative will bring about a truly transformative improvement in our overall learning environment and academic outcomes.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "On behalf of all students"],
    color: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/25" },
  },
  {
    number: "10",
    title: "Application for a Transfer Certificate",
    part: "A",
    partLabel: "Application",
    to: ["The Headmaster", "…………… High School", "……………, Bangladesh"],
    subject: "Prayer for issuance of a Transfer Certificate.",
    body: [
      "With due respect, I beg to state that I am a student of Class ……… (Roll No.: ………) at your esteemed institution. My father has recently been transferred to …………… due to his professional and official obligations, and our entire family is compelled to relocate there. As a result, it has become absolutely necessary for me to seek admission to a school near our new place of residence.",
      "I have been a sincere, regular, and well-behaved student of this institution since Class ………. Throughout my time here, I have always maintained a satisfactory academic record and have never been involved in any act of misconduct, indiscipline, or irregularity. I have fully cleared all school dues, fees, and financial obligations, and I have no pending liabilities whatsoever toward the institution.",
      "In the above circumstances, I most respectfully and sincerely request you to kindly issue me a Transfer Certificate at your earliest possible convenience, along with any other necessary documents such as the testimonial, mark sheet, and character certificate. These documents will help me secure admission in a new school at my new place of residence without unnecessary delay or complication.",
      "I am deeply and genuinely grateful for the education, values, and opportunities that this beloved institution has so generously provided me over the years. I will always cherish the wonderful memories of my time here. I hope for your kind, prompt, and positive response to my heartfelt request.",
    ],
    closing: "Yours obediently,",
    signature: ["Name: ……………………", "Class: ………, Roll: ………", "Father's Name: ……………………", "Date of Admission: ……………………"],
    color: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/25" },
  },
  {
    number: "11",
    title: "Letter to Newspaper Editor about Poor Water Supply",
    part: "B",
    partLabel: "Letter",
    to: ["The Editor", "The Daily …………… (Name of Newspaper)", "Dhaka, Bangladesh"],
    subject: "Poor water supply in our locality — a call for urgent action.",
    body: [
      "I am writing to you through the columns of your widely read and highly respected newspaper to draw the urgent attention of the concerned authorities to the severe problem of poor water supply that has been plaguing our locality of …………… for the past several months. I trust that your esteemed newspaper will play its important role in bringing this critical issue to the notice of those who have both the power and the responsibility to resolve it without further delay.",
      "The residents of our area are facing a distressing shortage of safe and clean drinking water. The water supply taps either remain completely dry for most of the day or provide water that is severely contaminated, yellowish in colour, and carries a foul and unpleasant odour. Many families, especially those who cannot afford to purchase bottled water, are compelled to use this dangerously unsafe water for drinking and cooking, thereby risking serious waterborne diseases such as diarrhoea, typhoid, dysentery, and cholera.",
      "Despite repeated verbal and written complaints to the local water supply authority and the municipal office, no significant or meaningful action has been taken to address this crisis. The concerned authorities appear to be entirely indifferent to this critical and growing public health issue, leaving thousands of residents to suffer without any relief.",
      "I therefore sincerely and urgently appeal to the relevant government authorities through your esteemed newspaper to take immediate, concrete, and effective steps to restore a regular, clean, and adequate water supply to our locality. The residents deserve access to safe and potable drinking water, which is not merely a convenience but a fundamental and non-negotiable human right.",
    ],
    closing: "Yours faithfully,",
    signature: ["Name: ……………………", "Address: ……………………", "Contact No.: ……………………"],
    color: { text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/25" },
  },
  {
    number: "12",
    title: "Letter to Police Commissioner against Anti-Social Activities",
    part: "B",
    partLabel: "Letter",
    to: ["The Commissioner of Police", "District: ……………, Bangladesh"],
    subject: "Complaint against anti-social and criminal activities in our locality.",
    body: [
      "With utmost respect and deep concern, I beg to draw your kind and urgent attention to the alarming and rapidly worsening rise of anti-social and criminal activities in our locality of ……………, which is gravely threatening the safety, peace, harmony, and well-being of its thousands of residents.",
      "For the past several months, our area has been witnessing a deeply disturbing increase in various forms of anti-social and criminal behaviour. These include mugging and chain-snatching incidents particularly targeting women and the elderly, open drug peddling near the school and market areas, brazen eve-teasing and harassment of female students, gambling in public spaces, and late-night disturbances caused by unruly and intoxicated groups of individuals. Several innocent residents have been physically assaulted when they courageously tried to resist or protest against these illegal activities.",
      "The residents of our locality now live in constant fear and a deep sense of insecurity. Parents are afraid to send their children to school unaccompanied, women are reluctant to go out alone even during daytime, and shopkeepers are being extorted by local criminals. The deteriorating law and order situation is having a severely negative impact on everyday life, business, and the mental well-being of the entire community.",
      "We therefore sincerely and urgently request you to kindly direct the local police to significantly increase patrol frequency in our area, particularly during the night hours, arrest the known miscreants and drug dealers without further delay, and take firm and exemplary legal action against all anti-social elements. We also respectfully request the establishment of a police outpost in our locality for the permanent protection and safety of residents.",
      "We earnestly hope that you will treat this matter with utmost seriousness and take swift, decisive action to restore law, order, and security in our beloved locality. The people here desperately need your intervention.",
    ],
    closing: "Yours faithfully,",
    signature: ["Name: ……………………", "On behalf of the residents of ……………", "Address: ……………………"],
    color: { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/25" },
  },
];

const writingTips = [
  "Always address the correct authority with full designation",
  "State your purpose clearly in the Subject line",
  "Use formal, respectful language throughout",
  "Keep the body organised in 3–4 clear paragraphs",
  "Use 'Yours obediently' for Headmaster; 'Yours faithfully' for others",
  "Include your full identification at the bottom",
];

function ApplicationCard({ app, index }: { app: ApplicationItem; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="gradient-border bg-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-primary/5 transition-colors duration-200"
      >
        <span className="text-3xl font-black gradient-text opacity-40 leading-none flex-shrink-0 w-10">
          {app.number}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base leading-snug">{app.title}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border ${app.color.bg} ${app.color.border} ${app.color.text}`}>
              Part {app.part} — {app.partLabel}
            </span>
            <span className="text-xs text-muted-foreground">
              {app.body.length} paragraphs
            </span>
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

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
            <div className="mx-6 h-px bg-border/60 mb-5" />

            <div className="px-6 pb-7 space-y-4 text-sm">
              {/* Date */}
              <p className="text-muted-foreground">15 April 2025</p>

              {/* To */}
              <div className="space-y-0.5">
                {app.to.map((line, i) => (
                  <p key={i} className={i === 0 ? "font-medium" : "text-muted-foreground"}>{line}</p>
                ))}
              </div>

              {/* Subject */}
              <p>
                <span className="font-bold">Subject: </span>
                <span className="font-semibold">{app.subject}</span>
              </p>

              {/* Salutation */}
              <p className="font-medium">Dear Sir,</p>

              {/* Body */}
              <div className="space-y-3">
                {app.body.map((para, i) => (
                  <p key={i} className="leading-relaxed text-foreground/85 text-justify">
                    {para}
                  </p>
                ))}
              </div>

              {/* Closing */}
              <div className="pt-1 space-y-1">
                <p>{app.closing}</p>
                {app.signature.map((line, i) => (
                  <p key={i} className="text-muted-foreground">{line}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ApplicationWritingPage() {
  const partA = applications.filter((a) => a.part === "A");
  const partB = applications.filter((a) => a.part === "B");

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px]" />
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <ClipboardList className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                  SSC · English · Writing
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Application <span className="gradient-text">Writing</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Full model applications and letters for common SSC board exam topics — prepared by Arif Ur Rahman.
              Click any item to read the complete formatted text.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{partA.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">Applications</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{partB.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">Letters</span>
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
            <ClipboardList className="h-5 w-5 text-amber-400" />
            Writing Tips for Applications &amp; Letters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {writingTips.map((tip) => (
              <div key={tip} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Part A — Applications */}
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Part A
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Model <span className="gradient-text">Applications</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="space-y-4">
            {partA.map((a, i) => (
              <ApplicationCard key={a.number} app={a} index={i} />
            ))}
          </div>
        </div>

        {/* Part B — Letters */}
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Part B
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Model <span className="gradient-text">Letters</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="space-y-4">
            {partB.map((a, i) => (
              <ApplicationCard key={a.number} app={a} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-amber-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Want to practise application writing?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get personal feedback and more model applications in one-on-one sessions at your home.
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
