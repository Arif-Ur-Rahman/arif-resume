"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenLine, ArrowLeft, Phone, MapPin, ChevronDown, CheckCircle2,
} from "lucide-react";
import Link from "next/link";

type Composition = {
  number: string;
  topic: string;
  wordRange: string;
  paragraphs: string[];
  color: { text: string; bg: string; border: string };
};

const compositions: Composition[] = [
  {
    number: "01",
    topic: "A Journey You Recently Enjoyed",
    wordRange: "200–250 words",
    color: { text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/25" },
    paragraphs: [
      "Travelling is one of the most enriching and memorable experiences in human life, and I had the great fortune of enjoying a truly delightful journey recently that I shall never forget. It was a family trip to Cox's Bazar, the world's longest unbroken natural sea beach, located in the Chittagong division of southern Bangladesh. I went there with my family during the school holidays, and every single moment of the journey was filled with joy, excitement, wonder, and the warmth of shared happiness.",
      "We departed from Dhaka early in the morning aboard a comfortable air-conditioned coach. The journey through the winding roads of Chittagong and its surrounding hills was itself a breathtaking visual treat. The lush green hills rolling gently against the blue sky, the serene and sparkling rivers winding through the valleys, and the rich scenic beauty of the Bangladeshi countryside made the long ride thoroughly enjoyable and refreshing.",
      "Upon reaching Cox's Bazar, we were instantly mesmerised by the magnificent sight and thunderous sound of the mighty Bay of Bengal. The endless stretch of golden sand shimmering under the afternoon sun, the rhythmic crashing of powerful waves against the shore, and the cool and salty sea breeze created a profound sense of peace and freedom that is truly impossible to capture in words. We spent our days walking along the vast shoreline, collecting beautiful seashells, watching the glorious sunrise over the horizon, and enjoying the freshest seafood imaginable.",
      "We also visited the enchanting Himchari waterfall cascading down the hillside, the pristine and uncrowded Inani Beach with its mysterious hexagonal rocks, and the peaceful island of Sonadia, each offering its own unique and unforgettable charm. The evenings at Cox's Bazar were particularly magical and deeply moving. As the setting sun slowly descended toward the sea, it painted the entire sky in brilliant and vivid shades of gold, orange, crimson, and deep purple — a natural spectacle of breathtaking beauty.",
      "The journey came to an end far too soon, but the priceless memories it has left behind will remain with me forever. It reminded me of the extraordinary natural beauty that Bangladesh quietly possesses and deepened my love and pride for my homeland in ways I had not previously experienced. I eagerly look forward to my next great journey and to discovering more of this beautiful world.",
    ],
  },
  {
    number: "02",
    topic: "Your Favourite Game",
    wordRange: "200–250 words",
    color: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/25" },
    paragraphs: [
      "Of all the games and sports I have had the pleasure of playing throughout my childhood and student life, cricket holds an absolutely special and irreplaceable place in my heart. It is not merely a game for me — it is a deep passion, a powerful source of immense joy and excitement, and a beloved daily pastime that I look forward to with great enthusiasm every afternoon after school. Cricket is the most popular and widely followed sport in Bangladesh, and it is no surprise whatsoever that it has captured the imagination and devotion of millions of people across the country, myself proudly included.",
      "Cricket is a team sport played between two sides of eleven players each, on a large oval field. It is a game that requires a remarkable combination of batting skill, bowling technique, sharp fielding reflexes, and deep tactical thinking, making it one of the most comprehensive and intellectually demanding sports in the world. The tremendous thrill of hitting a perfectly timed boundary, the deep satisfaction of taking a crucial wicket, and the breathless excitement of a closely fought finish make cricket an endlessly engaging, entertaining, and emotionally fulfilling sport for both players and spectators alike.",
      "I usually play cricket with my friends and neighbours on the open field near our home every afternoon, using a rubber ball and homemade stumps. I particularly enjoy batting and spend time practising my cover drive and pull shot to improve my technique. My all-time favourite cricketer is Shakib Al Hasan, the brilliant all-rounder whose extraordinary skill, fierce competitive spirit, and remarkable consistency under pressure inspire me immensely. I also passionately enjoy watching international cricket matches on television, especially when Bangladesh faces strong opponents.",
      "Beyond the sheer entertainment it provides, cricket teaches invaluable and enduring life lessons. It teaches teamwork, patience, discipline, sportsmanship, and the vital ability to remain calm and focused under intense pressure. A successful cricketer must be mentally resilient, strategically sharp, physically fit, and able to adapt quickly to changing circumstances — qualities that are equally essential for success in everyday life and professional careers.",
      "Cricket has brought me countless moments of pure happiness and genuine camaraderie. It has given me some of my most treasured memories and some of my most loyal and trusted friendships. I am deeply proud to call it my favourite game, and I sincerely hope to continue playing and enjoying it for many more years to come.",
    ],
  },
  {
    number: "03",
    topic: "Your Childhood Memories",
    wordRange: "200–250 words",
    color: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/25" },
    paragraphs: [
      "Childhood is the most innocent, carefree, and beautiful phase of human life, and looking back fondly at those golden early years fills my heart with a deep warmth, sweet nostalgia, and quiet gratitude. The memories of my childhood are like precious and vivid photographs carefully stored in the treasured album of my mind — colourful, joyful, innocent, and deeply and permanently cherished.",
      "I grew up in a small and peaceful village surrounded by vast green paddy fields, swaying bamboo groves, mango orchards in full bloom, and a sparkling river that ran not far from our home. Life was beautifully simple and wonderfully unhurried. Every morning, I would wake up to the melodious sounds of birds chirping in the trees and the comforting smell of my mother's cooking drifting warmly through the house. Those simple, everyday pleasures now seem like the greatest and most irreplaceable luxuries in the world.",
      "Some of my fondest and most vivid memories are of playing freely with neighbourhood children until the last light of the sun disappeared behind the horizon. We played kabaddi, marbles, spinning tops, and hide-and-seek in the open fields and narrow lanes, laughing without restraint and running without a single care in the world. During the joyful monsoon season, we would splash enthusiastically in rain-filled puddles and float carefully folded paper boats along the flowing lanes of our village — simple games that filled our hearts with the purest and most uncomplicated kind of happiness.",
      "I also treasure the warm memories of accompanying my beloved grandfather to the local market on Friday mornings. He would buy me small treats — a handful of puffed rice, a stick of sweet sugar cane, or a small paper bag of roasted chickpeas — which felt like the most magnificent gifts imaginable to my young heart. His wonderful and imaginative stories of the past, told in the cool evenings under the vast and star-studded open sky, ignited my young imagination and made me dream excitedly of distant lands, grand adventures, and a wide world full of mysteries and possibilities.",
      "School days in those early years were equally memorable and deeply formative. The friendships formed in the classrooms and playgrounds of my village school were pure, honest, and beautifully uncomplicated. My childhood was not filled with material luxuries or expensive entertainments, but it was extraordinarily rich in love, in laughter, in the warm company of family and friends, and in the simple but profound happiness that only the young and innocent can truly feel and fully appreciate. I treasure every single moment of it and carry those golden memories with me everywhere I go as a source of comfort, joy, and strength.",
    ],
  },
  {
    number: "04",
    topic: "Science in Everyday Life",
    wordRange: "200–250 words",
    color: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/25" },
    paragraphs: [
      "Science is no longer confined to the laboratories of researchers, scholars, and academics — it has been woven deeply and permanently into the very fabric of our daily lives. From the moment we wake up in the early morning to the time we finally go to sleep at night, we are completely and inevitably surrounded by the countless marvellous creations of science. It would be absolutely no exaggeration to say that modern life as we know and enjoy it today would be entirely impossible without the extraordinary contributions of science to human civilization.",
      "Consider the simple and familiar act of waking up in the morning. The alarm clock that rouses us from sleep is a direct product of scientific knowledge and engineering. The electric lights that instantly brighten our rooms at the flick of a switch, the gas stove or electric cooker that efficiently prepares our breakfast, the refrigerator that preserves our food and keeps it fresh — all are remarkable and now taken-for-granted gifts of applied scientific knowledge and human ingenuity. Even the humble toothbrush and toothpaste that we use every morning are carefully developed products of applied chemistry and materials science.",
      "Transportation and communication have been completely and utterly transformed by science. Cars, trains, aeroplanes, and modern ships have made it possible to travel across vast continents and oceans in a matter of hours, shrinking the world to an extent that previous generations could never have imagined. The internet and mobile phones have revolutionised global communication, enabling us to instantly and effortlessly connect with people living on the other side of the planet. Medical science has developed life-saving vaccines, powerful antibiotics, and advanced surgical techniques that have significantly extended the average human lifespan and dramatically reduced unnecessary human suffering.",
      "Agriculture too has been dramatically and fundamentally improved by scientific advancement. Modern fertilisers, improved pesticide formulations, hybrid seeds, and sophisticated irrigation techniques have multiplied crop yields many times over, helping to feed billions of people across the developing and developed world alike. Even entertainment — television, digital cinema, streaming music, and video games — owes its very existence to decades of scientific discovery and technological innovation.",
      "In short, science has made human life immeasurably more comfortable, efficient, healthy, safe, and interconnected. As students living in the twenty-first century, it is our greatest responsibility to study science with genuine interest, enthusiasm, and dedication, for it holds the most important key to building a better, healthier, and more just future for ourselves and for all of humanity.",
    ],
  },
  {
    number: "05",
    topic: "Necessity of Reading Newspaper",
    wordRange: "200–250 words",
    color: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/25" },
    paragraphs: [
      "In the fast-paced age of digital media, social networks, and instant online information, some people may question whether the traditional newspaper still holds any real relevance or value. Yet the habit of reading a newspaper every day remains one of the most genuinely valuable, intellectually enriching, and practically rewarding practices that any person — especially any student — can consciously cultivate. A newspaper is far more than a mere collection of daily news stories — it is a comprehensive and daily window to the entire world, an invaluable source of diverse knowledge, and an absolutely essential cornerstone of informed and responsible citizenship.",
      "Reading a newspaper keeps us well and regularly informed about important events happening around us — at the local, national, and global levels. From major political developments, significant economic trends, and pressing environmental issues to important social affairs, scientific breakthroughs, and cultural news, a good newspaper provides a comprehensive, reliable, and well-rounded overview of the state of the world in one convenient and accessible package. This essential awareness is the very foundation of responsible citizenship and meaningful participation in the democratic life of a society.",
      "For students in particular, newspapers serve as an absolutely invaluable and irreplaceable educational tool that goes far beyond the prescribed textbook syllabus. They steadily expand vocabulary, sharpen reading comprehension skills, and continuously expose students to a rich diversity of excellent writing styles and genres. The editorial and opinion pages teach the critical habit of thinking independently by presenting multiple, often competing viewpoints on complex and controversial issues. Furthermore, current affairs covered comprehensively in newspapers are regularly and importantly tested in competitive examinations, university admission tests, and academic discussions at every level.",
      "Newspapers also play a deeply crucial and irreplaceable role in upholding the foundations of democracy by holding governments, institutions, and powerful individuals accountable for their actions and decisions. A free, fair, and responsible press investigates corruption and wrongdoing, gives a powerful voice to the ordinary and often voiceless citizen, and ensures that those in positions of power cannot act with impunity. Without a vibrant and independent newspaper press, democratic societies would be far more vulnerable to the misuse of power and the suppression of truth.",
      "In conclusion, reading a newspaper daily is not merely an optional and pleasant habit — it is a fundamental civic duty and an investment in one's own intellectual development and social awareness. It consistently makes us better informed, more thoughtful, more empathetic, and more engaged members of our communities and our nation. Every student should consciously form the daily habit of reading at least one newspaper, as it is one of the most productive and rewarding uses of one's valuable time.",
    ],
  },
  {
    number: "06",
    topic: "July Revolution",
    wordRange: "200–250 words",
    color: { text: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/25" },
    paragraphs: [
      "The historic July Revolution of 2024 stands as one of the most significant, inspiring, and defining events in the recent history of Bangladesh. It was a powerful mass uprising led primarily by the courageous students of the country, who rose in initially peaceful but increasingly determined protest against deep-rooted injustice and demanded their fundamental rights and a fairer, more equitable society for all. The movement shook the entire nation to its very foundations and ultimately brought about a profound, far-reaching, and historic change in Bangladesh's political landscape.",
      "The revolution began with the student movement against the controversial quota system in government job recruitment. Students from universities and colleges across Bangladesh took to the streets in large numbers, demanding a fair, transparent, and merit-based recruitment process that would give every qualified young Bangladeshi an equal opportunity to serve their country. The protests were initially entirely peaceful and well-organised, but the situation escalated dramatically and tragically when security forces used disproportionate violence to suppress the peaceful demonstrators. Lives were lost, hundreds were injured, and the nation watched in shock — but the indomitable spirit of the students remained completely unbroken.",
      "The extraordinary courage, remarkable resilience, and unwavering determination shown by the young people of Bangladesh during the July Revolution moved the entire nation and the international community deeply. Facing tear gas, rubber bullets, sound grenades, and even live ammunition, they continued to march through the streets, raise their voices, and demand justice with remarkable bravery. Social media platforms became a powerful and indispensable tool for mobilising solidarity, organising resistance, and documenting the events in real time for the world to witness. A whole generation of young Bangladeshis stood up fearlessly and unitedly for their rights.",
      "The revolution ultimately succeeded in compelling the government to address the core demands of the protesters and led to sweeping and historic changes in the country's political structure and leadership. It powerfully demonstrated the immense transformative power of united, principled, and organised youth action, and reaffirmed the enduring truth that citizens, when sufficiently motivated and determined, can indeed bring about meaningful and lasting change through collective action.",
      "The July Revolution will be permanently and proudly remembered as a watershed and defining moment in Bangladesh's modern history — a powerful and inspiring testament to the extraordinary bravery, selfless idealism, and deep patriotism of its young generation. It is a timeless reminder that the true future of every nation ultimately rests in the energetic and determined hands of its youth.",
    ],
  },
  {
    number: "07",
    topic: "Aim in Life",
    wordRange: "200–250 words",
    color: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/25" },
    paragraphs: [
      "Every person who genuinely wishes to achieve something meaningful and worthwhile in life must have a clear, firm, and well-considered aim — a guiding star that gives direction, purpose, and motivation to all their efforts, decisions, and ambitions. Without a definite and inspiring goal, life becomes ultimately aimless, unproductive, and deeply unfulfilling, like a ship without a rudder drifting helplessly and directionlessly on the vast and unpredictable open sea. I have thought very carefully and seriously about my future and my place in the world, and my deepest and most heartfelt aim in life is to become a doctor and dedicate my professional life to serving the suffering people of my country.",
      "The decision to pursue medicine as my life's calling was not made lightly or impulsively. I was powerfully inspired by a visit to a rural government hospital during my early childhood, where I witnessed dedicated doctors working tirelessly and selflessly to save the lives of desperately sick patients with very limited resources, inadequate equipment, and insufficient medicines. The remarkable compassion, extraordinary dedication, and impressive skill they displayed in the face of such challenging circumstances left a deep, permanent, and life-changing impression on my young mind. From that memorable day, I resolved firmly and sincerely that I too would dedicate my entire professional life to healing the sick, comforting the suffering, and alleviating human pain and misery.",
      "Bangladesh is a developing country where access to quality, affordable healthcare remains one of the most significant and persistent challenges, particularly in rural, remote, and underprivileged areas. Millions of people in the countryside suffer unnecessarily from easily preventable and readily treatable diseases simply because there are not enough qualified, committed, and accessible doctors in remote regions. I want to become a skilled and compassionate doctor who not only treats patients in a modern city hospital but also actively reaches out to serve the desperately underserved and underprivileged communities who have the greatest need and the fewest resources.",
      "To achieve my cherished aim, I am currently working with great diligence and consistency on my studies, with a particular and focused emphasis on science subjects such as biology, chemistry, and physics. I fully and realistically understand that the long and challenging path to becoming a qualified doctor requires many years of intensive study, unwavering dedication, personal sacrifice, and perseverance through numerous difficulties. However, I am completely and wholeheartedly prepared to face all these challenges head-on, because I know with certainty that the ultimate reward — the profound ability to save precious lives, restore health, and bring genuine relief to those in pain and distress — is worth every single effort and every personal sacrifice.",
      "My aim in life is not merely a professional goal or a career choice — it is a sincere calling, a deeply felt moral obligation, and a personal mission. I firmly and sincerely believe that a life spent in dedicated and compassionate service to others is the most genuinely meaningful, most deeply fulfilling, and most truly worthwhile life that any human being can aspire to live.",
    ],
  },
  {
    number: "08",
    topic: "Wonders of Modern Science",
    wordRange: "200–250 words",
    color: { text: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/25" },
    paragraphs: [
      "We are privileged to live in a truly extraordinary age of miracles — and the creator of these remarkable and life-transforming miracles is the relentless advance of modern science. Over the course of the past two centuries, science has transformed the world with a speed and thoroughness that is almost beyond human comprehension. What would have seemed like pure fantasy, impossible magic, or wild imagination to people living just a hundred years ago is now completely ordinary, everyday reality for us. The astounding wonders of modern science are far too numerous and diverse to count exhaustively, but a few stand out as particularly remarkable and world-changing achievements of human genius, curiosity, and perseverance.",
      "Perhaps the single most revolutionary and far-reaching wonder of modern science is the internet and the broader revolution of digital technology. The internet has connected billions of people across every corner of the globe, enabling instant communication, providing access to virtually unlimited information, and facilitating seamless international commerce and collaboration on an unprecedented scale. Mobile smartphones have effectively put the computing power of a sophisticated computer directly into every person's pocket, making knowledge and connectivity available anywhere and at any time. Social media platforms have fundamentally and permanently reshaped how people interact, how communities are built, and how information travels across the world.",
      "Medical science has produced equally astounding and life-saving wonders that previous generations could not have imagined. Vaccines have virtually eliminated devastating diseases — such as smallpox and polio — that once routinely killed or permanently disabled millions of people. Complex organ transplants, once considered utterly impossible science fiction, are now standard and increasingly routine medical procedures. Advanced diagnostic technologies such as MRI, CT scans, and ultrasound allow skilled doctors to see deep inside the human body with extraordinary precision and detail, enabling earlier and more accurate diagnoses and far better treatment outcomes.",
      "Space exploration represents yet another magnificent, awe-inspiring, and intellectually humbling achievement of modern science. Human beings have successfully walked on the surface of the moon, sent highly sophisticated robotic explorers to investigate the surface of Mars, and launched powerful space telescopes that can peer billions of light-years into the deepest and most ancient reaches of the universe. These magnificent endeavours have profoundly expanded our understanding of the cosmos and of our own remarkable and fragile place within it.",
      "Modern science has also produced renewable energy technologies such as highly efficient solar panels, large wind turbines, and advanced battery storage systems that together offer very real and increasingly viable hope for a sustainable, clean energy future for our planet. From supersonic aeroplanes to sophisticated artificial intelligence systems capable of learning and reasoning, the wonders of modern science continue to reshape and reimagine every single aspect of human civilization at an ever-accelerating pace. We owe it to science — and to ourselves — to use its extraordinary gifts wisely, ethically, and responsibly for the lasting benefit of all humanity.",
    ],
  },
  {
    number: "09",
    topic: "Duties of Students",
    wordRange: "200–250 words",
    color: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/25" },
    paragraphs: [
      "Students are the most vital, dynamic, and energetic segment of any nation. They are the future leaders, thinkers, innovators, scientists, teachers, and citizens upon whom the entire prosperity, progress, and moral standing of the country will ultimately depend. It is therefore of the utmost importance that students clearly understand their wide-ranging duties and responsibilities — both as dedicated learners committed to academic excellence and as thoughtful and responsible members of their families, communities, and society at large.",
      "The most fundamental and primary duty of a student is, of course, to study diligently, consistently, and with genuine intellectual curiosity. Education is the essential and irreplaceable foundation upon which all future achievements, opportunities, and contributions are built. A student must attend classes regularly and punctually, pay close and respectful attention to lessons, complete assignments and homework on time and to the best of their ability, and make the fullest possible use of every learning opportunity available to them. Acquiring deep and broad knowledge is not merely a personal benefit for the individual student — it is a vital and long-term investment in the collective future of the entire nation.",
      "Beyond their primary academic duties, students must also actively and consciously cultivate good character and strong moral values as an integral part of their personal development. Honesty, integrity, fairness, respect for all people regardless of background, and genuine compassion for those who are less fortunate are qualities that no school curriculum can fully teach from a textbook — they must be deliberately and consistently developed through daily personal effort, self-reflection, and the conscious choice to do what is right even when it is difficult or inconvenient.",
      "Students also carry important and meaningful social duties and responsibilities toward their communities and their country. They should maintain a clear and informed awareness of the significant problems and challenges facing their community and nation, and wherever possible, actively contribute to their solution through practical action. Volunteering in community service projects, raising awareness about pressing social issues such as environmental pollution or child marriage, participating constructively in civic activities, and speaking up against injustice and wrongdoing are all powerful and meaningful ways in which students can make a genuine and lasting difference.",
      "Maintaining good physical health through regular exercise, outdoor activities, and balanced nutrition is also an important duty that students must never neglect. A strong and healthy body actively supports a sharp and productive mind, and both together are absolutely necessary for a fulfilling, successful, and meaningful life. Furthermore, in today's world, students must learn to use technology — particularly the internet and social media — wisely, responsibly, and constructively, avoiding its many potential misuses and focusing on its enormous educational, creative, and productive applications. In essence, the duties of a student extend far beyond the walls of the classroom. By being sincere, responsible, compassionate, and socially aware, students can truly fulfil their vast potential and become the worthy, capable, and principled future citizens that their nation needs and deserves.",
    ],
  },
  {
    number: "10",
    topic: "The Season You Like the Most",
    wordRange: "200–250 words",
    color: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/25" },
    paragraphs: [
      "Bangladesh is extraordinarily blessed with the rich and varied tapestry of six distinct and beautiful seasons, each possessing its own unique character, mood, special charm, and distinctive gifts to the natural world and to those who live within it. Of all these six wonderful seasons, I love the winter season — known in Bengali as Shitkal — the most deeply and unreservedly. It is a season that brings with it a wonderfully refreshing coolness, a calm and serene natural beauty, and a deep sense of physical comfort and quiet well-being that I find profoundly appealing and genuinely restorative.",
      "Winter in Bangladesh typically spans the months from November to February. During this pleasantly cool season, the punishing and relentless scorching heat of summer and the heavy, continuous rains of the monsoon give way at last to a gentle and refreshing coolness that makes the air remarkably fresh, clean, and invigorating. The early mornings are often beautifully blanketed in a soft, silvery mist and gentle white fog that lend an ethereal, dreamlike, and almost magical beauty to the countryside, the fields, and the rivers. The warm and golden rays of the winter sun, when they emerge from behind the morning mist, feel like a wonderfully gentle and welcome embrace after the sharp chill of the early morning hours.",
      "One of the very greatest joys and most anticipated pleasures of winter is the truly magnificent abundance of fresh vegetables, fruits, and seasonal foods that the season so generously brings. Cauliflower, cabbage, carrots, fresh spinach, mustard greens, radishes, tomatoes, and a wonderfully wide variety of leafy greens fill the markets with colour, freshness, and extraordinary flavour. Freshly harvested date palm juice — collected in clay pots on cool winter mornings by skilled collectors who climb the tall palm trees before dawn — is a particularly special, sweet, and deeply nostalgic delight that I look forward to with great anticipation and excitement every single year.",
      "Winter is also the ideal season for outdoor activities, social gatherings, and cultural celebrations. The comfortable and pleasant weather makes it absolutely perfect for school and family picnics, friendly cricket and football matches, educational excursions to historical sites, and leisurely walks in the countryside. School picnics and educational study tours are most commonly and enjoyably organised during this wonderful season, and they are always eagerly and enthusiastically awaited by students and teachers alike.",
      "There is a special, quiet, and golden beauty about winter mornings in Bangladesh that fills my heart with a deep and abiding sense of peace, contentment, and genuine gratitude for the natural world. The frost-touched green fields glistening in the early light, the fog-draped country roads, the warm and fragrant evenings spent around a small wood fire with family — everything about winter feels like nature's most generous and most beautiful gift to us. It is, without any doubt or reservation, my absolute favourite season of the entire year, and I cherish every single day of it.",
    ],
  },
  {
    number: "11",
    topic: "Necessity of Tree Plantation",
    wordRange: "200–250 words",
    color: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/25" },
    paragraphs: [
      "Trees are undeniably among the most indispensable, life-sustaining, and ecologically irreplaceable living organisms on our remarkable planet Earth. They are rightly described as the lungs of the Earth — producing the life-giving oxygen that every living creature breathes and simultaneously absorbing the carbon dioxide that would otherwise accumulate dangerously in the atmosphere and accelerate devastating climate change. Yet, due to the rapid and largely unchecked deforestation caused by relentless urbanisation, aggressive industrialisation, and the constant expansion of agricultural land, the world's precious forests are shrinking at a truly alarming and deeply worrying rate. In this urgent context, the necessity of large-scale, sustained, and systematic tree plantation programmes has never been more critically important or more urgently needed.",
      "The ecological, environmental, social, and economic benefits of trees are vast, varied, and absolutely essential to human civilization and to all life on Earth. Trees purify the air we breathe by steadily absorbing a wide range of harmful and toxic gases and continuously releasing fresh, clean oxygen into the atmosphere. They play a vital role in regulating the global water cycle by efficiently absorbing rainfall, significantly reducing dangerous surface runoff and flooding, and steadily replenishing underground water tables that millions of people depend upon for drinking water and irrigation. The world's forests and woodlands are home to an estimated eighty percent of all land-based species of animals, plants, and insects — their widespread destruction leads to irreversible and permanent loss of precious biodiversity that we are only beginning to fully understand and appreciate.",
      "Trees also play an absolutely vital and irreplaceable role in the global effort to combat the escalating climate crisis. Through the natural process of photosynthesis, trees absorb massive quantities of carbon dioxide — one of the primary greenhouse gases directly responsible for dangerous global warming and its increasingly severe consequences. Planting trees on a truly massive national and global scale is widely recognised by scientists and environmental experts as one of the most effective, affordable, natural, and immediately actionable solutions available to humanity in the urgent fight against climate change and its devastating effects.",
      "Beyond their immense environmental benefits, trees provide vital food, traditional medicines, valuable timber for construction, and crucial livelihoods for hundreds of millions of people around the world. Fruit trees supply nutritious and life-sustaining food for communities, while many medicinal plants derived from trees have saved countless human lives throughout history and continue to do so today. Trees also provide deep, cooling shade in hot weather, enhance the natural beauty of landscapes, improve the quality of urban environments, and have a proven and deeply calming and restorative effect on human mental health and overall well-being.",
      "In Bangladesh — a low-lying, densely populated, and highly climate-vulnerable country that faces severe threats from devastating cyclones, catastrophic flooding, coastal erosion, and the steadily rising sea levels caused by climate change — the large-scale and systematic plantation of trees is not simply an environmental preference or a worthy optional activity. It is a matter of absolute and urgent national survival, security, and resilience. We must make tree planting a genuine national movement, an essential part of our school curriculum, and a sincere personal commitment of every citizen. Let us always remember this fundamental and life-affirming truth: to plant a tree today is to make the most important and most lasting investment possible in the health, survival, and prosperity of our future.",
    ],
  },
  {
    number: "12",
    topic: "Computer",
    wordRange: "200–250 words",
    color: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/25" },
    paragraphs: [
      "The computer is without any doubt one of the single greatest and most transformative inventions in the entire recorded history of human civilization. What began in the mid-twentieth century as an enormous, room-sized, enormously expensive, and relatively limited machine capable of performing only basic mathematical calculations has evolved with breathtaking speed, over just a few remarkable decades, into a compact, astonishingly powerful, incredibly versatile, and now entirely affordable device that has permanently and profoundly transformed virtually every single aspect of modern life as we know and experience it. Today, the computer is not merely a useful tool or a convenient appliance — it is an absolutely indispensable companion, partner, and enabler in education, business, healthcare, scientific research, communication, creative arts, and entertainment across the entire world.",
      "At its fundamental technical core, a computer is a sophisticated electronic device that processes, stores, retrieves, and communicates data at extraordinary and continuously increasing speed and accuracy. Modern computers can perform many billions of calculations per second, make highly complex decisions and predictions through advanced artificial intelligence algorithms, process and analyse massive datasets that would take human researchers centuries to examine manually, and connect instantly to every corner of the entire world through the global internet. The capabilities of computers continue to expand at a truly breathtaking pace, making them increasingly and irreplaceably central to every field of human endeavour and every dimension of modern civilisation.",
      "In the vitally important field of education, computers have opened up a whole new and previously unimaginable world of learning, discovery, and intellectual development. Students today can access vast digital libraries containing millions of books, research papers, and educational resources with a single click or touch. They can attend high-quality virtual classes and educational video lectures delivered by the world's finest teachers, submit assignments digitally, conduct sophisticated research projects online, and collaborate productively with fellow students and academic partners located across the globe. Interactive educational software and digital learning platforms make studying engaging, personalised, and adaptive in ways that traditional teaching methods alone simply cannot match or replicate.",
      "In the critical field of modern medicine and healthcare, powerful computers are used extensively for complex medical diagnosis, advanced drug research and development, precise surgical planning and assistance, medical imaging analysis, and the efficient management of large-scale patient medical records. In the world of business and commerce, computers enable the efficient management of highly complex global operations, facilitate instant international communication and financial transactions, and support sophisticated data-driven strategic decision-making at every level of organisational management. In engineering, architecture, and scientific research, advanced computer-aided design and simulation software have completely and fundamentally revolutionised the way complex structures, machines, medicines, and scientific theories are conceived, designed, tested, and refined.",
      "However, despite its extraordinary and wide-ranging benefits, the computer must also be honestly acknowledged as a double-edged sword. While it offers immense and largely positive benefits to humanity, its deliberate misuse — through sophisticated cybercrime, online fraud and identity theft, digital addiction among young people, the rapid and unchecked spread of harmful misinformation and propaganda, and the erosion of personal privacy — poses very real, serious, and growing challenges to individuals, communities, and societies worldwide. It is therefore absolutely essential that all users, especially students and young people, develop strong digital literacy skills, sound ethical judgment, and responsible, safe, and constructive habits in their use of computers and the internet. In conclusion, the computer stands as one of the most magnificent, most powerful, and most consequential marvels of modern science and human ingenuity. As students preparing for a future that will be shaped entirely by digital technology, we must embrace it enthusiastically, master its capabilities thoroughly, and use its remarkable power wisely, creatively, and responsibly for the benefit of ourselves, our communities, and the wider world.",
    ],
  },
];

const writingTips = [
  "Write 200–250 words as required for SSC board exams",
  "Organise into 4–5 well-structured paragraphs",
  "Begin with a strong, engaging opening sentence",
  "Use varied sentence structures and rich vocabulary",
  "End with a concluding thought or personal reflection",
  "Avoid repetition — use synonyms and varied expressions",
];

function CompositionCard({ composition, index }: { composition: Composition; index: number }) {
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
          {composition.number}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base leading-snug">{composition.topic}</h3>
          <div className="flex flex-wrap items-center gap-2 mt-1.5">
            <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border ${composition.color.bg} ${composition.color.border} ${composition.color.text}`}>
              {composition.wordRange}
            </span>
            <span className="text-xs text-muted-foreground">
              {composition.paragraphs.length} paragraphs
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
            <div className="px-6 pb-7 space-y-4">
              {composition.paragraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/85 text-justify">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CompositionWritingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <PenLine className="h-7 w-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                  SSC · English · Writing
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  Composition <span className="gradient-text">Writing</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Full model compositions for common SSC board exam topics — prepared by Arif Ur Rahman.
              Click any composition to read it in full.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{compositions.length}</span>
                <span className="text-xs text-muted-foreground mt-0.5">Compositions</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">200–250</span>
                <span className="text-xs text-muted-foreground mt-0.5">Words Each</span>
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
            <PenLine className="h-5 w-5 text-violet-400" />
            Writing Tips for Composition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {writingTips.map((tip) => (
              <div key={tip} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Compositions */}
        <div>
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              Model Compositions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">
              Full <span className="gradient-text">Compositions</span>
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="space-y-4">
            {compositions.map((c, i) => (
              <CompositionCard key={c.number} composition={c} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/10 p-10 text-center"
        >
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Want to practise composition writing?</h3>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
              Get personal feedback and more model compositions in one-on-one sessions at your home.
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
