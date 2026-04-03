'use strict';

// ===================== DATA =====================

const FIELDS = [
  { id:'medicine',       name:'Medicine & Healthcare',   emoji:'🏥', color:'#EF4444', bg:'#FEE2E2' },
  { id:'software',       name:'Software Engineering',    emoji:'💻', color:'#3B82F6', bg:'#DBEAFE' },
  { id:'architecture',   name:'Architecture',            emoji:'🏛️', color:'#F59E0B', bg:'#FEF3C7' },
  { id:'marketing',      name:'Marketing',               emoji:'📣', color:'#8B5CF6', bg:'#EDE9FE' },
  { id:'finance',        name:'Finance & Banking',       emoji:'💰', color:'#10B981', bg:'#D1FAE5' },
  { id:'education',      name:'Education',               emoji:'📚', color:'#6366F1', bg:'#EEF2FF' },
  { id:'law',            name:'Law',                     emoji:'⚖️', color:'#6B7280', bg:'#F3F4F6' },
  { id:'journalism',     name:'Journalism & Media',      emoji:'📰', color:'#F97316', bg:'#FED7AA' },
  { id:'engineering',    name:'Engineering',             emoji:'⚙️', color:'#06B6D4', bg:'#CFFAFE' },
  { id:'entrepreneurship',name:'Entrepreneurship',       emoji:'🚀', color:'#EC4899', bg:'#FCE7F3' },
  { id:'design',         name:'Art & Design',            emoji:'🎨', color:'#7C3AED', bg:'#EDE9FE' },
  { id:'nursing',        name:'Nursing',                 emoji:'💊', color:'#F43F5E', bg:'#FFE4E6' },
];

const PROFESSIONALS = [
  { id:1, name:'Dr. Emily Richardson', initials:'ER', title:'Cardiologist', company:'UT Southwestern Medical Center', field:'medicine', location:'Dallas, TX', shadowType:'both', availability:'available', experience:'12 years', maxStudents:'2/month', bio:'Board-certified cardiologist at one of the nation\'s top academic medical centers. I love mentoring students who are curious about medicine and healthcare.', gradient:'135deg,#7C3AED,#EC4899' },
  { id:2, name:'James Tran', initials:'JT', title:'Senior Software Engineer', company:'AT&T (Dallas)', field:'software', location:'Dallas, TX', shadowType:'virtual', availability:'available', experience:'8 years', maxStudents:'3-5/month', bio:'Full-stack engineer building telecom infrastructure at scale. I can walk you through a real engineering team\'s workflow and help you break into tech.', gradient:'135deg,#3B82F6,#06B6D4' },
  { id:3, name:'Sarah Chen', initials:'SC', title:'Principal Architect', company:'HKS Architects', field:'architecture', location:'Dallas, TX', shadowType:'both', availability:'available', experience:'14 years', maxStudents:'1/month', bio:'Award-winning architect at one of the world\'s leading design firms, headquartered right here in Dallas. Come see how we design buildings that shape communities.', gradient:'135deg,#F59E0B,#F97316' },
  { id:4, name:'Marcus Williams', initials:'MW', title:'VP of Marketing', company:'Keurig Dr Pepper', field:'marketing', location:'Frisco, TX', shadowType:'virtual', availability:'available', experience:'10 years', maxStudents:'2/month', bio:'Leading brand marketing for one of America\'s biggest beverage companies. Shadow me to see how major consumer campaigns get built from brief to launch.', gradient:'135deg,#8B5CF6,#EC4899' },
  { id:5, name:'David Okafor', initials:'DO', title:'Investment Analyst', company:'Goldman Sachs Dallas', field:'finance', location:'Dallas, TX', shadowType:'virtual', availability:'limited', experience:'6 years', maxStudents:'2/month', bio:'Covering energy and industrials from our Dallas office. I\'ll show you what an analyst\'s day really looks like and how to break into finance from DFW.', gradient:'135deg,#10B981,#06B6D4' },
  { id:6, name:'Ms. Priya Patel', initials:'PP', title:'High School Biology Teacher', company:'Dallas ISD', field:'education', location:'Dallas, TX', shadowType:'in-person', availability:'available', experience:'9 years', maxStudents:'2/month', bio:'Passionate educator who believes every student deserves an inspiring classroom. Shadow a full school day to see what teaching really looks like behind the scenes.', gradient:'135deg,#6366F1,#8B5CF6' },
  { id:7, name:'Attorney Carlos Reyes', initials:'CR', title:'Litigation Attorney', company:'Haynes and Boone LLP', field:'law', location:'Dallas, TX', shadowType:'in-person', availability:'limited', experience:'11 years', maxStudents:'1/month', bio:'Specializing in commercial litigation at one of Texas\'s top law firms. I give pre-law students an honest look at what a legal career really demands.', gradient:'135deg,#6B7280,#374151' },
  { id:8, name:'Amanda Foster', initials:'AF', title:'Investigative Reporter', company:'Dallas Morning News', field:'journalism', location:'Dallas, TX', shadowType:'both', availability:'available', experience:'7 years', maxStudents:'2/month', bio:'Covering politics and accountability for Texas\'s largest newspaper. Come see how a story goes from tip to front page and what investigative journalism takes.', gradient:'135deg,#F97316,#F59E0B' },
  { id:9, name:'Kevin Nguyen', initials:'KN', title:'Mechanical Engineer', company:'Lockheed Martin Aeronautics', field:'engineering', location:'Fort Worth, TX', shadowType:'virtual', availability:'available', experience:'5 years', maxStudents:'3/month', bio:'Working on advanced aerospace programs at the F-35 production facility in Fort Worth. Engineering students — this is as cool as it gets.', gradient:'135deg,#06B6D4,#3B82F6' },
  { id:10, name:'Jessica Park', initials:'JP', title:'Founder & CEO', company:'NomadTech (DFW Startup)', field:'entrepreneurship', location:'Plano, TX', shadowType:'both', availability:'available', experience:'8 years', maxStudents:'2/month', bio:'Built and sold two startups in the DFW tech ecosystem. I\'ll show you the real unglamorous grind of entrepreneurship — the wins, the pivots, and everything in between.', gradient:'135deg,#EC4899,#F97316' },
  { id:11, name:'Tyler Brooks', initials:'TB', title:'Senior UX Designer', company:'Match Group (Dallas)', field:'design', location:'Dallas, TX', shadowType:'virtual', availability:'available', experience:'6 years', maxStudents:'3/month', bio:'Designing product experiences used by millions at Match Group\'s global HQ right in Dallas. I\'ll teach you design thinking and how to build a portfolio that gets hired.', gradient:'135deg,#7C3AED,#6366F1' },
  { id:12, name:'Sandra Kim', initials:'SK', title:'ICU Registered Nurse', company:'Baylor Scott & White', field:'nursing', location:'Dallas, TX', shadowType:'both', availability:'available', experience:'10 years', maxStudents:'2/month', bio:'Critical care nurse in one of Texas\'s busiest ICUs. I\'ll show you the real day-to-day of nursing — not just what you see on TV — and what it takes to succeed.', gradient:'135deg,#F43F5E,#EC4899' },
  { id:13, name:'Dr. Amara Bell', initials:'AB', title:'Clinical Psychologist', company:'UT Dallas Counseling Center', field:'medicine', location:'Richardson, TX', shadowType:'virtual', availability:'available', experience:'9 years', maxStudents:'2/month', bio:'Specializing in adolescent and young adult mental health. I offer insight into what a career in psychology or counseling actually looks like day-to-day.', gradient:'135deg,#A78BFA,#C4B5FD' },
  { id:14, name:'Robert Davis', initials:'RD', title:'CFP — Financial Planner', company:'Edward Jones Fort Worth', field:'finance', location:'Fort Worth, TX', shadowType:'in-person', availability:'available', experience:'15 years', maxStudents:'1/month', bio:'Helping DFW families plan their financial futures for 15 years. Come see what client meetings, financial modeling, and a real advisory practice looks like.', gradient:'135deg,#059669,#10B981' },
  { id:15, name:'Naomi Walsh', initials:'NW', title:'Civil Engineer', company:'Freese and Nichols', field:'engineering', location:'Fort Worth, TX', shadowType:'both', availability:'available', experience:'7 years', maxStudents:'2/month', bio:'Designing the water infrastructure that DFW depends on. Come see field work, client meetings, and how engineering actually gets built from blueprint to reality.', gradient:'135deg,#06B6D4,#10B981' },
];

const RESOURCES = [
  // Medicine
  { id:1, field:'medicine', type:'Video', title:'A Day in the Life of a Cardiologist', desc:'A real cardiologist walks through their hospital rounds, patient consultations, and procedures at a DFW medical center.', url:'https://www.youtube.com/results?search_query=day+in+life+cardiologist', icon:'🎬' },
  { id:2, field:'medicine', type:'Article', title:'How to Become a Doctor: Complete Roadmap', desc:'AAMC\'s official guide covering pre-med, MCAT, medical school, residency, and specialty training from start to finish.', url:'https://students-residents.aamc.org/choosing-medical-career/what-doctor', icon:'📄' },
  { id:3, field:'medicine', type:'Course', title:'Introduction to Human Anatomy — Coursera', desc:'Duke University\'s free anatomy course used by thousands of pre-med students as a foundation for medical education.', url:'https://www.coursera.org/learn/duke-anatomy', icon:'🎓' },
  { id:4, field:'medicine', type:'Website', title:'Khan Academy — Health & Medicine', desc:'Free, comprehensive videos covering biology, physiology, pharmacology, and clinical medicine from Khan Academy.', url:'https://www.khanacademy.org/science/health-and-medicine', icon:'🌐' },
  { id:5, field:'medicine', type:'Guide', title:'Pre-Med Student Survival Guide', desc:'Everything you need to know about getting into medical school: GPA requirements, MCAT prep, research, and extracurriculars.', url:'https://students-residents.aamc.org/choosing-medical-career/article/planning-medical-education-timeline', icon:'📋' },
  { id:6, field:'medicine', type:'Day in Life', title:'Physician\'s Schedule: 5 AM to 8 PM', desc:'A real attending physician shares their complete daily schedule across rounds, procedures, clinic, and administration.', url:'https://www.youtube.com/results?search_query=physician+daily+schedule+routine', icon:'⏰' },

  // Software Engineering
  { id:7, field:'software', type:'Video', title:'Day in the Life — Software Engineer at a Tech Company', desc:'Real engineer shows their daily routine: standups, code reviews, deep work sessions, and team meetings.', url:'https://www.youtube.com/results?search_query=day+in+life+software+engineer+tech+company', icon:'🎬' },
  { id:8, field:'software', type:'Course', title:'CS50: Introduction to Computer Science — Harvard', desc:'The world\'s most popular intro to CS, taught by Harvard. 100% free on edX. The best starting point for any beginner.', url:'https://cs50.harvard.edu/x/', icon:'🎓' },
  { id:9, field:'software', type:'Website', title:'freeCodeCamp', desc:'Free certifications in web dev, Python, data structures, and APIs. Thousands of DFW engineers started here.', url:'https://www.freecodecamp.org/', icon:'🌐' },
  { id:10, field:'software', type:'Guide', title:'How to Land Your First Tech Job in DFW', desc:'Step-by-step guide to breaking into the Dallas tech scene: companies, meetups, networking, and interview prep.', url:'https://www.builtindallas.com/', icon:'📋' },
  { id:11, field:'software', type:'Article', title:'Software Engineering Career Paths Explained', desc:'Breakdown of different SWE roles — frontend, backend, full-stack, DevOps, mobile — and how to choose your path.', url:'https://www.youtube.com/results?search_query=software+engineering+career+paths+explained', icon:'📄' },
  { id:12, field:'software', type:'Day in Life', title:'Sprint Week: What Agile Engineering Really Looks Like', desc:'A real engineering team walks through a two-week sprint: planning, standups, reviews, and retrospectives.', url:'https://www.youtube.com/results?search_query=agile+sprint+day+in+life+engineer', icon:'⏰' },

  // Architecture
  { id:13, field:'architecture', type:'Video', title:'Inside HKS: A Day at Dallas\'s Top Architecture Firm', desc:'Tour one of the world\'s leading architecture firms, headquartered in Dallas, and see real projects in progress.', url:'https://www.youtube.com/results?search_query=HKS+architects+dallas+day+in+life', icon:'🎬' },
  { id:14, field:'architecture', type:'Website', title:'ArchDaily', desc:'The world\'s most visited architecture site — project inspiration, industry news, and career resources for students.', url:'https://www.archdaily.com/', icon:'🌐' },
  { id:15, field:'architecture', type:'Course', title:'Architecture Design — Coursera', desc:'An introduction to architectural thinking, design process, and the skills needed to succeed in architecture school.', url:'https://www.coursera.org/search?query=architecture+design', icon:'🎓' },
  { id:16, field:'architecture', type:'Guide', title:'Getting into Architecture School: A Complete Guide', desc:'What programs to consider, portfolio requirements, the ARE licensing exam, and what to expect in studio culture.', url:'https://www.ncarb.org/become-architect', icon:'📋' },
  { id:17, field:'architecture', type:'Day in Life', title:'Principal Architect — From Client Meeting to Construction Site', desc:'A principal architect shares a full day: client presentation, site visit, coordination with engineers, and design review.', url:'https://www.youtube.com/results?search_query=architect+day+in+life+principal', icon:'⏰' },

  // Marketing
  { id:18, field:'marketing', type:'Video', title:'Day in the Life of a Brand Marketing Manager', desc:'A marketing manager at a consumer brand walks through their day: briefs, creative reviews, analytics, and agency calls.', url:'https://www.youtube.com/results?search_query=day+in+life+brand+marketing+manager', icon:'🎬' },
  { id:19, field:'marketing', type:'Course', title:'Google Digital Marketing Certificate', desc:'Google\'s free foundational course covering SEO, SEM, social media, analytics, and digital marketing strategy.', url:'https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing', icon:'🎓' },
  { id:20, field:'marketing', type:'Website', title:'HubSpot Academy — Free Certifications', desc:'Industry-recognized free certifications in inbound marketing, content marketing, email, and social media.', url:'https://academy.hubspot.com/', icon:'🌐' },
  { id:21, field:'marketing', type:'Article', title:'Marketing Career Paths: Which One is Right for You?', desc:'Breakdown of digital, brand, product, growth, and content marketing roles and how each career path develops.', url:'https://www.youtube.com/results?search_query=marketing+career+paths+which+is+right', icon:'📄' },
  { id:22, field:'marketing', type:'Day in Life', title:'Campaign Launch Week at a Fortune 500 Brand', desc:'See how a full marketing campaign goes from creative brief to live ads — media buying, social, and launch day.', url:'https://www.youtube.com/results?search_query=marketing+campaign+launch+week+brand', icon:'⏰' },

  // Finance
  { id:23, field:'finance', type:'Video', title:'Day in the Life of an Investment Analyst', desc:'A real equity analyst walks through their morning routine, earnings calls, financial modeling, and market close.', url:'https://www.youtube.com/results?search_query=day+in+life+investment+analyst+wall+street', icon:'🎬' },
  { id:24, field:'finance', type:'Course', title:'Financial Markets — Yale (Robert Shiller)', desc:'Nobel laureate Robert Shiller\'s legendary free course on financial markets, risk, and the global economy.', url:'https://www.coursera.org/learn/financial-markets-global', icon:'🎓' },
  { id:25, field:'finance', type:'Website', title:'Investopedia', desc:'The internet\'s best financial education resource — from basic terms to advanced investment concepts, all free.', url:'https://www.investopedia.com/', icon:'🌐' },
  { id:26, field:'finance', type:'Guide', title:'Breaking into Finance from DFW', desc:'Guide to the Dallas financial services ecosystem — banks, wealth management, insurance, and how to get your foot in the door.', url:'https://www.wallstreetoasis.com/finance-industry/dallas', icon:'📋' },
  { id:27, field:'finance', type:'Day in Life', title:'Financial Planner\'s Day: Client Meetings, Models & Markets', desc:'A CFP walks through client intake, financial plan presentation, portfolio rebalancing, and market monitoring.', url:'https://www.youtube.com/results?search_query=financial+planner+day+in+life', icon:'⏰' },

  // Education
  { id:28, field:'education', type:'Video', title:'What Teaching is Really Like (An Honest Look)', desc:'A high school teacher shares the real behind-the-scenes of lesson planning, classroom management, and student relationships.', url:'https://www.youtube.com/results?search_query=what+teaching+is+really+like+honest', icon:'🎬' },
  { id:29, field:'education', type:'Guide', title:'Becoming a Teacher in Texas: Certification Guide', desc:'Step-by-step guide to Texas teacher certification, alternative routes, and what to expect your first year in the classroom.', url:'https://tea.texas.gov/texas-educators/preparation/becoming-a-teacher', icon:'📋' },
  { id:30, field:'education', type:'Website', title:'Teaching Channel', desc:'Videos, resources, and professional development tools for aspiring and current educators across every grade level.', url:'https://www.teachingchannel.com/', icon:'🌐' },
  { id:31, field:'education', type:'Day in Life', title:'First Year Teacher: September Through May', desc:'A Dallas ISD teacher documents their full first year — the triumphs, the exhaustion, and why they wouldn\'t trade it.', url:'https://www.youtube.com/results?search_query=first+year+teacher+day+in+life+dallas', icon:'⏰' },

  // Law
  { id:32, field:'law', type:'Video', title:'Day in the Life of a Litigation Attorney', desc:'A BigLaw associate walks through their day: client calls, deposition prep, brief writing, and firm culture.', url:'https://www.youtube.com/results?search_query=day+in+life+litigation+attorney+biglaw', icon:'🎬' },
  { id:33, field:'law', type:'Course', title:'Introduction to American Law — UPenn (Coursera)', desc:'University of Pennsylvania\'s overview of the US legal system — the perfect intro for pre-law and curious students.', url:'https://www.coursera.org/learn/american-law', icon:'🎓' },
  { id:34, field:'law', type:'Website', title:'LSAC — Law School Admission Council', desc:'Everything you need to know about law school: LSAT prep, application strategy, school search, and financial aid.', url:'https://www.lsac.org/', icon:'🌐' },
  { id:35, field:'law', type:'Guide', title:'Pre-Law Guide for High School & College Students', desc:'How to position yourself for law school from high school: activities, coursework, LSAT timeline, and choosing a school.', url:'https://www.lsac.org/choosing-law-school/before-law-school', icon:'📋' },

  // Journalism
  { id:36, field:'journalism', type:'Video', title:'Inside the Dallas Morning News Newsroom', desc:'A behind-the-scenes look at how Texas\'s largest newspaper produces stories every day across print and digital.', url:'https://www.youtube.com/results?search_query=newsroom+day+in+life+journalist', icon:'🎬' },
  { id:37, field:'journalism', type:'Website', title:'Poynter Institute', desc:'One of the world\'s leading journalism education organizations — free courses, guides, and career resources.', url:'https://www.poynter.org/', icon:'🌐' },
  { id:38, field:'journalism', type:'Day in Life', title:'Investigative Reporter: From Tip to Front Page', desc:'An investigative reporter documents how a major story develops over weeks — sources, documents, and publication.', url:'https://www.youtube.com/results?search_query=investigative+reporter+day+in+life+story', icon:'⏰' },

  // Engineering
  { id:39, field:'engineering', type:'Video', title:'Inside Lockheed Martin Fort Worth: F-35 Production', desc:'Tour the F-35 production facility in Fort Worth and see what aerospace engineering looks like at the largest scale.', url:'https://www.youtube.com/results?search_query=lockheed+martin+fort+worth+f35+tour', icon:'🎬' },
  { id:40, field:'engineering', type:'Course', title:'Engineering Design Process — MIT OpenCourseWare', desc:'MIT\'s free engineering design course covering problem-solving frameworks used by professional engineers.', url:'https://ocw.mit.edu/', icon:'🎓' },
  { id:41, field:'engineering', type:'Website', title:'Engineers Without Borders', desc:'Real engineering impact — learn how civil and mechanical engineers solve infrastructure challenges around the world.', url:'https://www.ewb-usa.org/', icon:'🌐' },
  { id:42, field:'engineering', type:'Day in Life', title:'Civil Engineer: Water Infrastructure Project Day', desc:'A Freese and Nichols engineer walks through site visits, CAD modeling, client meetings, and permit reviews.', url:'https://www.youtube.com/results?search_query=civil+engineer+day+in+life+infrastructure', icon:'⏰' },

  // Entrepreneurship
  { id:43, field:'entrepreneurship', type:'Video', title:'Building a Startup in DFW: A Founder\'s Story', desc:'A DFW entrepreneur shares the honest story of building their company — fundraising, failures, pivots, and growth.', url:'https://www.youtube.com/results?search_query=startup+founder+day+in+life+dfw+dallas', icon:'🎬' },
  { id:44, field:'entrepreneurship', type:'Website', title:'Dallas Startup Week', desc:'The largest free entrepreneurship event in DFW — mentors, workshops, pitch competitions, and networking.', url:'https://dallasstartupsweek.com/', icon:'🌐' },
  { id:45, field:'entrepreneurship', type:'Course', title:'How to Build a Startup — Steve Blank (Udacity)', desc:'The legendary lean startup course from Silicon Valley\'s most influential entrepreneurship teacher. Free.', url:'https://www.udacity.com/course/how-to-build-a-startup--ep245', icon:'🎓' },
  { id:46, field:'entrepreneurship', type:'Guide', title:'First-Time Founder Playbook', desc:'Everything you need to know to start your first company: validation, MVP, funding, legal structure, and launch.', url:'https://www.youtube.com/results?search_query=first+time+founder+startup+guide', icon:'📋' },

  // Design
  { id:47, field:'design', type:'Video', title:'Day in the Life of a UX Designer at a Tech Company', desc:'A product designer at Match Group\'s Dallas HQ walks through their design process, tools, and team collaboration.', url:'https://www.youtube.com/results?search_query=ux+designer+day+in+life+tech+company', icon:'🎬' },
  { id:48, field:'design', type:'Course', title:'Google UX Design Certificate — Coursera', desc:'Google\'s job-ready UX design professional certificate. Beginner-friendly with real portfolio projects included.', url:'https://www.coursera.org/professional-certificates/google-ux-design', icon:'🎓' },
  { id:49, field:'design', type:'Website', title:'Figma', desc:'The industry-standard free design tool. Start building your portfolio today with the same tool pros use.', url:'https://www.figma.com/', icon:'🌐' },
  { id:50, field:'design', type:'Guide', title:'Building a Design Portfolio That Gets You Hired', desc:'What to include, how to present your work, and what hiring managers actually look for in a student designer\'s portfolio.', url:'https://www.youtube.com/results?search_query=build+design+portfolio+ux+student', icon:'📋' },

  // Nursing
  { id:51, field:'nursing', type:'Video', title:'Day in the Life of an ICU Nurse in Texas', desc:'An ICU nurse at a major Texas hospital walks through patient assessments, medications, procedures, and handoffs.', url:'https://www.youtube.com/results?search_query=icu+nurse+day+in+life+texas+hospital', icon:'🎬' },
  { id:52, field:'nursing', type:'Guide', title:'Becoming a Nurse in Texas: Complete Roadmap', desc:'Texas Board of Nursing requirements, BSN programs in DFW, NCLEX prep, and first job strategies for new nurses.', url:'https://www.bon.texas.gov/students_prospective_nurses.asp', icon:'📋' },
  { id:53, field:'nursing', type:'Website', title:'Texas Nurses Association', desc:'Resources, career support, and networking for nursing students and professionals across the state of Texas.', url:'https://www.texasnurses.org/', icon:'🌐' },
  { id:54, field:'nursing', type:'Day in Life', title:'Night Shift Nurse: 12 Hours in the ICU', desc:'An honest, unfiltered look at what a 12-hour ICU night shift really looks like — the challenges and the rewards.', url:'https://www.youtube.com/results?search_query=night+shift+icu+nurse+12+hours', icon:'⏰' },
];

// ===================== STATE =====================

const S = {
  mode: 'student',         // 'student' | 'pro'
  student: null,           // { name, grade, location, email, interests[] }
  requests: [],            // shadow requests
  activeConv: null,        // id of active conversation
  inboxTab: 'pending',
  proProfile: null,        // { name, title, company, ... }
};

function hydrate() {
  try {
    const raw = localStorage.getItem('sp_state');
    if (raw) Object.assign(S, JSON.parse(raw));
  } catch(e) {}
}
function persist() {
  localStorage.setItem('sp_state', JSON.stringify({
    mode: S.mode, student: S.student, proProfile: S.proProfile,
    // requests intentionally omitted — managed by Firestore when online
  }));
}

// ── Firestore-backed state ──────────────────────────────────────────────────
let _firestorePros = [];   // live professionals from Firestore
let _activeListeners = {}; // active onSnapshot unsubscribers

function cleanupListener(key) {
  if (_activeListeners[key]) { _activeListeners[key](); delete _activeListeners[key]; }
}

/** Find a professional by id — works for static numeric IDs and Firestore string UIDs */
function findPro(id) {
  const numId = typeof id === 'string' && !isNaN(id) && id !== '' ? +id : id;
  return PROFESSIONALS.find(x => x.id === numId || x.id === id)
      || _firestorePros.find(x => x.firestoreId === id || x.id === id);
}

/** Start Firestore real-time listeners for the logged-in user */
function initFirestoreListeners(uid, role) {
  if (typeof dbListenPros !== 'function') return; // Firebase not configured

  // Professionals listener — always active
  cleanupListener('pros');
  _activeListeners['pros'] = dbListenPros(pros => {
    _firestorePros = pros.map(p => ({
      ...p,
      id: p.firestoreId,
      initials: p.initials || (p.name || '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      gradient: p.gradient || '135deg,#4F46E5,#06B6D4',
      availability: p.availability || 'available',
      shadowType: p.shadowType || 'both',
      location: p.location || 'DFW, TX',
      bio: p.bio || '',
      experience: p.experience || '',
      maxStudents: p.maxStudents || '2/month',
    }));
    if (currentPage === 'professionals') filterProfessionals();
    if (currentPage === 'prosignup') renderProSignup();
  });

  // Requests listener — scoped to this user's role
  cleanupListener('requests');
  _activeListeners['requests'] = dbListenRequests(uid, role, reqs => {
    S.requests = reqs;
    if (currentPage === 'dashboard')     renderDashboard();
    if (currentPage === 'messaging')     renderMessaging();
    if (currentPage === 'inbox')         renderInbox();
    if (currentPage === 'professionals') filterProfessionals();
  });
}

// ===================== NAV =====================

let currentPage = 'explore';

function goTo(page) {
  // Clean up per-conversation messages listener when leaving messaging
  if (page !== 'messaging') cleanupListener('messages');

  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.remove('hidden');
  currentPage = page;
  updateNav(page);
  window.scrollTo({ top: 0 });

  // Render
  const renders = {
    explore:       renderExplore,
    professionals: renderProfessionals,
    resources:     renderResources,
    messaging:     renderMessaging,
    dashboard:     renderDashboard,
    inbox:         renderInbox,
    prosignup:     renderProSignup,
  };
  if (renders[page]) renders[page]();

  // Close mobile nav
  document.getElementById('mobile-nav').classList.remove('open');
}

function updateNav(active) {
  document.querySelectorAll('.nav-a').forEach(a => a.classList.remove('active'));
  const map = { explore:'nav-explore', professionals:'nav-professionals', resources:'nav-resources', messaging:'nav-messaging', dashboard:'nav-dashboard', inbox:'nav-inbox', prosignup:'nav-prosignup' };
  if (map[active]) document.getElementById(map[active])?.classList.add('active');

  // Mode-based visibility
  const isPro = S.mode === 'pro';
  document.querySelectorAll('.student-only').forEach(el => isPro ? el.classList.add('hidden') : el.classList.remove('hidden'));
  document.querySelectorAll('.pro-only').forEach(el => isPro ? el.classList.remove('hidden') : el.classList.add('hidden'));

  // Avatar
  const avatar = document.getElementById('nav-avatar');
  if (S.student && !isPro) {
    avatar.style.display = 'flex';
    avatar.textContent = S.student.name.slice(0, 2).toUpperCase();
  } else if (S.proProfile && isPro) {
    avatar.style.display = 'flex';
    avatar.textContent = S.proProfile.name.slice(0, 2).toUpperCase();
  } else {
    avatar.style.display = 'none';
  }
}

function toggleMobile() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

function toggleMode() {
  S.mode = S.mode === 'student' ? 'pro' : 'student';
  persist();
  const isPro = S.mode === 'pro';
  const thumb = document.getElementById('toggle-thumb');
  const toggle = thumb.parentElement;
  thumb.classList.toggle('on', isPro);
  toggle.classList.toggle('on', isPro);
  // Re-initialize Firestore listeners for the new role so inbox/dashboard get the right data
  const user = authGetCurrentUser();
  if (user && typeof initFirestoreListeners === 'function') {
    initFirestoreListeners(user.uid, S.mode);
  }
  updateNav(currentPage);
  goTo(currentPage);
}

// ===================== EXPLORE =====================

function renderExplore() {
  const grid = document.getElementById('explore-fields');
  grid.innerHTML = FIELDS.map(f => `
    <div class="field-card" onclick="exploreField('${f.id}')">
      <div class="field-emoji">${f.emoji}</div>
      <div class="field-name">${f.name}</div>
    </div>
  `).join('');
}

function exploreField(fieldId) {
  document.getElementById('pro-field-filter').value = fieldId;
  goTo('professionals');
}

// ===================== PROFESSIONALS =====================

function renderProfessionals() {
  populateFieldFilter('pro-field-filter');
  filterProfessionals();
}

function populateFieldFilter(selId) {
  const sel = document.getElementById(selId);
  if (!sel || sel.options.length > 1) return;
  FIELDS.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.emoji + ' ' + f.name;
    sel.appendChild(opt);
  });
}

function filterProfessionals() {
  const q = (document.getElementById('pro-search')?.value || '').toLowerCase();
  const field = document.getElementById('pro-field-filter')?.value || '';
  const avail = document.getElementById('pro-avail-filter')?.value || '';
  const type  = document.getElementById('pro-type-filter')?.value || '';

  // Merge static pros with live Firestore pros (skip if already a static pro with same uid)
  const allPros = [
    ...PROFESSIONALS,
    ..._firestorePros.filter(fp => !PROFESSIONALS.find(s => s.uid === fp.firestoreId)),
  ];

  const filtered = allPros.filter(p =>
    (!q || `${p.name} ${p.title} ${p.company} ${p.location}`.toLowerCase().includes(q)) &&
    (!field || p.field === field) &&
    (!avail || p.availability === avail) &&
    (!type  || p.shadowType === type)
  );

  document.getElementById('pro-count').textContent = `Showing ${filtered.length} professional${filtered.length !== 1 ? 's' : ''} in DFW`;
  document.getElementById('pros-grid').innerHTML = filtered.length
    ? filtered.map(proCard).join('')
    : emptyBlock('No professionals found', 'Try adjusting your filters or check back later.');
}

function clearProFilters() {
  ['pro-search','pro-field-filter','pro-avail-filter','pro-type-filter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  filterProfessionals();
}

function proCard(p) {
  const req = S.requests.find(r => String(r.proId) === String(p.id));
  const availClass = { available:'avail-available', limited:'avail-limited', unavailable:'avail-unavailable' }[p.availability] || '';
  const availText = { available:'🟢 Available', limited:'🟡 Limited', unavailable:'🔴 Unavailable' }[p.availability] || '';
  // Single quotes for string UIDs (double quotes from JSON.stringify break HTML attributes)
  const idJs = typeof p.id === 'number' ? p.id : `'${p.id}'`;
  return `
    <div class="pro-card" onclick="openProfileModal(${idJs})">
      <div class="pro-card-top" style="background:linear-gradient(${p.gradient})"></div>
      <div class="pro-card-body">
        <div class="pro-avatar-row">
          <div class="pro-avatar" style="background:linear-gradient(${p.gradient})">${esc(p.initials)}</div>
          <div class="pro-avail-dot ${availClass}">${availText}</div>
        </div>
        <div class="pro-name">${esc(p.name)}</div>
        <div class="pro-role">${esc(p.title)} · ${esc(p.company)}</div>
        <div class="pro-bio">${esc(p.bio)}</div>
        <div class="pro-tags">
          <span class="badge badge-indigo">${shadowLabel(p.shadowType)}</span>
          <span class="badge badge-gray">${fieldEmoji(p.field)} ${fieldName(p.field)}</span>
          <span class="badge badge-cyan">📍 ${esc(p.location)}</span>
        </div>
        <div class="pro-card-btns">
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();openProfileModal(${idJs})">View Profile</button>
          ${req
            ? `<button class="btn btn-sm" style="background:var(--green-light);color:#065f46;border-color:var(--green-light)" disabled>Sent ✓</button>`
            : `<button class="btn btn-indigo btn-sm" onclick="event.stopPropagation();openReqModal(${idJs})">Request Shadow</button>`
          }
        </div>
      </div>
    </div>
  `;
}

// ===================== PROFILE MODAL =====================

function openProfileModal(proId) {
  const p = findPro(proId);
  if (!p) return;
  const idJs = typeof p.id === 'number' ? p.id : `'${p.id}'`;
  const req = S.requests.find(r => String(r.proId) === String(p.id));
  const availClass = { available:'badge-green', limited:'badge-amber', unavailable:'badge-red' }[p.availability] || 'badge-gray';
  const availText = { available:'🟢 Available', limited:'🟡 Limited', unavailable:'🔴 Unavailable' }[p.availability] || '';

  document.getElementById('profile-modal-box').innerHTML = `
    <div class="pm-banner" style="background:linear-gradient(${p.gradient})">
      <button class="pm-banner-close" onclick="closeProfileModal(null)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="pm-body">
      <div class="pm-avatar-row">
        <div class="pm-avatar" style="background:linear-gradient(${p.gradient})">${p.initials}</div>
        <div style="display:flex;flex-wrap:wrap;gap:.35rem;align-items:center">
          <span class="badge ${availClass}">${availText}</span>
        </div>
      </div>
      <div class="pm-name">${esc(p.name)}</div>
      <div class="pm-role">${esc(p.title)} · ${esc(p.company)}</div>
      <div class="pm-tags">
        <span class="badge badge-indigo">${shadowLabel(p.shadowType)}</span>
        <span class="badge badge-gray">${fieldEmoji(p.field)} ${fieldName(p.field)}</span>
        <span class="badge badge-cyan">📍 ${esc(p.location)}</span>
        <span class="badge badge-gray">💼 ${esc(p.experience)}</span>
      </div>
      <p class="pm-bio">${esc(p.bio)}</p>
      <div class="pm-info-grid">
        <div class="pm-info-item"><div class="pm-info-lbl">Shadowing Type</div><div class="pm-info-val">${shadowLabel(p.shadowType)}</div></div>
        <div class="pm-info-item"><div class="pm-info-lbl">Availability</div><div class="pm-info-val">${availText}</div></div>
        <div class="pm-info-item"><div class="pm-info-lbl">Experience</div><div class="pm-info-val">${p.experience}</div></div>
        <div class="pm-info-item"><div class="pm-info-lbl">Capacity</div><div class="pm-info-val">${p.maxStudents}</div></div>
      </div>
      <div class="pm-actions">
        <button class="btn btn-ghost" onclick="closeProfileModal(null)">Close</button>
        ${req
          ? `<button class="btn" style="background:var(--green-light);color:#065f46;border:none" disabled>Request Sent ✓</button>`
          : `<button class="btn btn-indigo" onclick="closeProfileModal(null);openReqModal(${idJs})">Request Shadow Opportunity</button>`
        }
      </div>
    </div>
  `;
  document.getElementById('profile-modal').classList.add('open');
}
function closeProfileModal(e) {
  if (e === null || e.target === document.getElementById('profile-modal'))
    document.getElementById('profile-modal').classList.remove('open');
}

// ===================== REQUEST MODAL =====================

function openReqModal(proId) {
  if (!S.student && S.mode === 'student') {
    toast('Create your student profile first on the Dashboard!');
    goTo('dashboard');
    return;
  }
  const p = findPro(proId);
  if (!p) return;

  document.getElementById('req-modal-body').innerHTML = `
    <input type="hidden" id="req-pro-id" value="${p.id}">
    <div style="display:flex;align-items:center;gap:.85rem;padding:.75rem;background:var(--bg);border-radius:var(--r-sm)">
      <div style="width:46px;height:46px;border-radius:50%;background:linear-gradient(${p.gradient});display:flex;align-items:center;justify-content:center;color:white;font-weight:700;flex-shrink:0">${p.initials}</div>
      <div><div style="font-weight:700;font-size:.9rem">${esc(p.name)}</div><div style="font-size:.78rem;color:var(--text-muted)">${esc(p.title)} · ${esc(p.company)}</div></div>
    </div>
    <div class="form-grp">
      <label class="form-lbl">Your full name</label>
      <input type="text" id="rq-name" class="inp" placeholder="Your full name" value="${esc(S.student?.name || '')}" maxlength="100">
    </div>
    <div class="form-grp">
      <label class="form-lbl">Your Email *</label>
      <input type="email" id="rq-email" class="inp" placeholder="you@email.com" value="${S.student?.email || ''}">
    </div>
    <div class="form-grp">
      <label class="form-lbl">Request Type</label>
      <div class="radio-group">
        <label class="radio-opt"><input type="radio" name="rq-type" value="Shadow" checked> <span>Shadow 👁️</span></label>
        <label class="radio-opt"><input type="radio" name="rq-type" value="Mentorship"> <span>Mentorship 🤝</span></label>
        <label class="radio-opt"><input type="radio" name="rq-type" value="Quick Q&A"> <span>Quick Q&A 💬</span></label>
      </div>
    </div>
    <div class="form-grid-2">
      <div class="form-grp">
        <label class="form-lbl">Preferred Date *</label>
        <input type="date" id="rq-date" class="inp">
      </div>
      <div class="form-grp">
        <label class="form-lbl">Preferred Time (optional)</label>
        <input type="time" id="rq-time" class="inp">
      </div>
    </div>
    <div class="form-grp">
      <label class="form-lbl">Note / Message *</label>
      <textarea id="rq-note" class="inp inp-ta" placeholder="Any special requests or notes..." style="min-height:80px" maxlength="500"></textarea>
    </div>
    <button class="btn btn-indigo btn-full" onclick="submitRequest()">Send Request</button>
  `;
  document.getElementById('req-modal').classList.add('open');
}

function closeReqModal(e) {
  if (e === null || e.target === document.getElementById('req-modal'))
    document.getElementById('req-modal').classList.remove('open');
}

function submitRequest() {
  const rawProId = document.getElementById('req-pro-id').value;
  // Restore original type: numeric for static pros, string for Firestore pros
  const proId = !isNaN(rawProId) && rawProId !== '' ? +rawProId : rawProId;
  const name  = document.getElementById('rq-name').value.trim();
  const email = document.getElementById('rq-email').value.trim();
  const type  = document.querySelector('input[name="rq-type"]:checked')?.value || 'Shadow';
  const date  = document.getElementById('rq-date').value;
  const note  = document.getElementById('rq-note').value.trim();

  if (!email || !date || !note) { toast('Please fill in all required fields.'); return; }

  const p = findPro(proId);
  if (!p) return;

  const studentName = name || S.student?.name || 'Student';
  const initialText = `Hi ${p.name.split(' ')[0]}! My name is ${studentName} and I'd love to ${type === 'Shadow' ? 'shadow you' : type === 'Mentorship' ? 'connect for mentorship' : 'ask you a few questions'}. ${note}`;

  const reqData = {
    proId,
    proUid:      p.firestoreId || null,  // null for static pros; real uid for Firestore pros
    studentUid:  authGetCurrentUser()?.uid || 'demo',
    proName: p.name, proTitle: p.title, proCompany: p.company || '',
    proInitials: p.initials, proGradient: p.gradient,
    studentName, studentEmail: email,
    type, date, note,
  };

  closeReqModal(null);

  if (typeof dbSaveRequest === 'function') {
    dbSaveRequest(reqData).then(docRef => {
      dbSendMessage(docRef.id, { from: 'student', senderName: studentName, text: initialText });
      toast(`🎉 Request sent to ${p.name}!`);
      // S.requests will update via the Firestore listener automatically
    }).catch(err => {
      console.error('submitRequest:', err);
      toast('Error sending request. Please try again.');
    });
  } else {
    // Demo fallback (no Firebase)
    const req = {
      id: Date.now(),
      ...reqData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      messages: [{ from: 'student', text: initialText, time: new Date().toISOString() }],
    };
    S.requests.unshift(req);
    persist();
    toast(`🎉 Request sent to ${p.name}!`);
    setTimeout(() => simulateResponse(req.id), 4000);
    if (currentPage === 'professionals') filterProfessionals();
    if (currentPage === 'dashboard') renderDashboard();
  }
}

function simulateResponse(reqId) {
  const req = S.requests.find(r => r.id === reqId);
  if (!req) return;
  const p = PROFESSIONALS.find(x => x.id === req.proId);
  if (!p) return;
  req.status = Math.random() > 0.15 ? 'accepted' : 'pending';
  if (req.status === 'accepted') {
    req.messages.push({
      from: 'pro',
      text: `Hi ${req.studentName}! Thanks so much for reaching out — I'd be happy to ${req.type === 'Shadow' ? 'have you shadow me' : req.type === 'Mentorship' ? 'be your mentor' : 'answer your questions'}. Let's plan for ${req.date}. I'll send calendar details soon!`,
      time: new Date().toISOString(),
    });
    toast(`✅ ${p.name} accepted your request!`);
  }
  persist();
  if (currentPage === 'dashboard') renderDashboard();
  if (currentPage === 'messaging') renderMessaging();
}

// ===================== RESOURCES =====================

function renderResources() {
  populateFieldFilter('res-field-filter');
  filterResources();
}

function filterResources() {
  const q     = (document.getElementById('res-search')?.value || '').toLowerCase();
  const type  = document.getElementById('res-type-filter')?.value || '';
  const field = document.getElementById('res-field-filter')?.value || '';

  const filtered = RESOURCES.filter(r =>
    (!q    || (r.title + r.desc + r.field).toLowerCase().includes(q)) &&
    (!type || r.type === type) &&
    (!field || r.field === field)
  );

  document.getElementById('res-count').textContent = `${filtered.length} resource${filtered.length !== 1 ? 's' : ''} found`;
  document.getElementById('res-grid').innerHTML = filtered.length
    ? filtered.map(resCard).join('')
    : emptyBlock('No resources found', 'Try adjusting your search or filters.');
}

function resCard(r) {
  const typeClass = 'res-type-' + r.type;
  const typeIcons = { Video:'▶️', Article:'📄', Course:'🎓', Website:'🌐', Guide:'📋', 'Day in Life':'⏰' };
  return `
    <div class="res-card" onclick="window.open('${r.url}','_blank')">
      <div>
        <span class="res-card-type ${typeClass}">${typeIcons[r.type] || '📌'} ${r.type}</span>
      </div>
      <div class="res-card-title">${r.title}</div>
      <div class="res-card-field">${fieldEmoji(r.field)} ${fieldName(r.field)}</div>
      <div class="res-card-desc">${r.desc}</div>
      <span class="res-card-link">
        ${r.type === 'Video' ? 'Watch' : r.type === 'Course' ? 'Start course' : r.type === 'Website' ? 'Visit site' : 'Read more'}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  `;
}

// ===================== MESSAGING =====================

function renderMessaging() {
  const list = document.getElementById('conv-list');
  if (S.requests.length === 0) {
    list.innerHTML = `<div class="empty-block" style="padding:2rem">
      <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <p class="text-muted" style="font-size:.82rem;text-align:center">No conversations yet.<br>Find a professional and send your first shadow request!</p>
    </div>`;
    document.getElementById('msg-main').innerHTML = `<div class="msg-empty">
      <div class="empty-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <h3>No conversations yet</h3>
      <p>Start a conversation by connecting with a professional on the Professionals page.</p>
      <button class="btn btn-indigo btn-sm" onclick="goTo('professionals')">Browse Professionals</button>
    </div>`;
    return;
  }

  list.innerHTML = S.requests.map(r => {
    const last = r.messages ? r.messages[r.messages.length - 1] : null;
    const active = String(S.activeConv) === String(r.id);
    const idJs = typeof r.id === 'number' ? r.id : `'${r.id}'`;
    return `
      <div class="conv-item ${active ? 'active' : ''}" onclick="selectConv(${idJs})">
        <div class="conv-meta">
          <div class="conv-name">${esc(r.proName)}</div>
          <div class="conv-time">${r.createdAt ? fmtDate(r.createdAt.toDate ? r.createdAt.toDate() : r.createdAt) : ''}</div>
        </div>
        <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.15rem">
          ${statusBadge(r.status)}
        </div>
        <div class="conv-last">${last ? (last.from === 'student' ? 'You: ' : '') + last.text : r.note || ''}</div>
      </div>
    `;
  }).join('');

  if (S.activeConv) {
    const r = S.requests.find(x => String(x.id) === String(S.activeConv));
    if (r) renderConvDetail(r);
  } else if (S.requests.length > 0) {
    selectConv(S.requests[0].id);
  }
}

function selectConv(id) {
  S.activeConv = id;
  const r = S.requests.find(x => String(x.id) === String(id));
  if (!r) return;
  document.querySelectorAll('.conv-item').forEach((el, i) => {
    el.classList.toggle('active', String(S.requests[i]?.id) === String(id));
  });
  renderConvDetail(r);
}

function renderConvDetail(r) {
  const statusClass = { pending:'badge-amber', accepted:'badge-green', declined:'badge-red' }[r.status] || 'badge-gray';
  const idJs = typeof r.id === 'number' ? r.id : `'${r.id}'`;
  document.getElementById('msg-main').innerHTML = `
    <div class="msg-detail-header">
      <div class="msg-d-avatar" style="background:linear-gradient(${r.proGradient})">${r.proInitials}</div>
      <div style="flex:1">
        <div class="msg-d-name">${esc(r.proName)}</div>
        <div class="msg-d-role">${esc(r.proTitle)} · ${esc(r.proCompany)}</div>
      </div>
      <span class="badge ${statusClass}">${cap(r.status)}</span>
    </div>
    <div class="msg-status-bar">
      <span style="font-size:.78rem;color:var(--text-muted)">📅 Requested: ${r.type} · ${fmtDateShort(r.date)}</span>
      ${r.status === 'accepted' ? '<span style="font-size:.78rem;color:var(--green);font-weight:600">✅ Request Accepted</span>' : ''}
    </div>
    <div class="msg-thread" id="msg-thread-${r.id}">
      <div style="text-align:center;color:var(--text-muted);font-size:.78rem;padding:1rem">Loading messages…</div>
    </div>
    <div class="msg-compose">
      <textarea class="msg-compose-inp" id="compose-${r.id}" placeholder="Type a message..." rows="1" onkeydown="onComposeKey(event,${idJs})"></textarea>
      <button class="btn btn-indigo btn-sm" onclick="sendMsg(${idJs})">Send</button>
    </div>
  `;

  // Set up real-time messages listener for this conversation
  cleanupListener('messages');
  if (typeof dbListenMessages === 'function') {
    _activeListeners['messages'] = dbListenMessages(r.id, msgs => {
      const thread = document.getElementById('msg-thread-' + r.id);
      if (!thread) return;
      if (msgs.length === 0) {
        thread.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:.78rem;padding:1rem">No messages yet. Send one below!</div>';
      } else {
        thread.innerHTML = msgs.map(m => msgBubble(m)).join('');
        thread.scrollTop = thread.scrollHeight;
      }
    });
  } else {
    // Demo fallback: render from r.messages if available
    const thread = document.getElementById('msg-thread-' + r.id);
    if (thread) {
      thread.innerHTML = (r.messages || []).map(m => msgBubble(m)).join('');
      thread.scrollTop = thread.scrollHeight;
    }
  }
}

function msgBubble(m) {
  const mine = m.from === 'student';
  return `<div class="bubble ${mine ? 'mine' : 'theirs'}">
    <div class="bubble-text">${esc(m.text)}</div>
    <div class="bubble-time">${fmtTime(m.time)}</div>
  </div>`;
}

function onComposeKey(e, id) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(id); }
}

function sendMsg(id) {
  const inp = document.getElementById('compose-' + id);
  if (!inp || !inp.value.trim()) return;
  const text = inp.value.trim();
  inp.value = '';

  const from = S.mode === 'pro' ? 'pro' : 'student';
  const senderName = from === 'pro' ? (S.proProfile?.name || 'Professional') : (S.student?.name || 'Student');

  if (typeof dbSendMessage === 'function') {
    dbSendMessage(id, { from, senderName, text });
    // UI updates automatically via the messages listener
  } else {
    // Demo fallback
    const req = S.requests.find(r => String(r.id) === String(id));
    if (!req) return;
    if (!req.messages) req.messages = [];
    req.messages.push({ from, text, time: new Date().toISOString() });
    persist();
    const thread = document.getElementById('msg-thread-' + id);
    if (thread) {
      const div = document.createElement('div');
      div.innerHTML = msgBubble({ from, text, time: new Date().toISOString() });
      thread.appendChild(div.firstElementChild);
      thread.scrollTop = thread.scrollHeight;
    }
  }
}

// ===================== DASHBOARD =====================

function renderDashboard() {
  if (!S.student) {
    document.getElementById('onboarding-card').classList.remove('hidden');
    document.getElementById('dash-content').classList.add('hidden');
    renderObInterests();
    return;
  }
  document.getElementById('onboarding-card').classList.add('hidden');
  document.getElementById('dash-content').classList.remove('hidden');

  document.getElementById('dash-greeting').textContent = `Welcome back, ${S.student.name}! 👋 Here's your career journey.`;

  const pending  = S.requests.filter(r => r.status === 'pending').length;
  const accepted = S.requests.filter(r => r.status === 'accepted').length;
  document.getElementById('d-pending').textContent  = pending;
  document.getElementById('d-accepted').textContent = accepted;
  document.getElementById('d-resources').textContent = '0';
  document.getElementById('d-fields').textContent    = (S.student.interests || []).length;

  // Recommended
  const interests = S.student.interests || [];
  const matched = PROFESSIONALS.filter(p => interests.includes(p.field)).slice(0, 4);
  const showPros = matched.length ? matched : PROFESSIONALS.slice(0, 4);
  document.getElementById('d-recommended').innerHTML = showPros.map(p => `
    <div class="mini-pro">
      <div class="mini-avatar" style="background:linear-gradient(${p.gradient})">${p.initials}</div>
      <div style="flex:1;min-width:0">
        <div class="mini-name">${esc(p.name)}</div>
        <div class="mini-role">${esc(p.title)}</div>
      </div>
      <button class="btn btn-sm btn-indigo" onclick="openReqModal(${p.id})">Request</button>
    </div>
  `).join('');

  // Requests
  const reqEl = document.getElementById('d-requests');
  if (S.requests.length === 0) {
    reqEl.innerHTML = `<div class="empty-block" style="padding:1rem">
      <p class="text-muted" style="text-align:center;font-size:.82rem">No shadow requests yet.</p>
      <button class="btn btn-sm btn-indigo" style="margin-top:.5rem" onclick="goTo('professionals')">Find Professionals</button>
    </div>`;
  } else {
    reqEl.innerHTML = S.requests.slice(0, 5).map(r => `
      <div class="req-mini" onclick="goTo('messaging')">
        <div class="req-mini-head">
          <div><div class="req-mini-name">${esc(r.proName)}</div><div class="req-mini-role">${esc(r.proTitle)}</div></div>
          ${statusBadge(r.status)}
        </div>
      </div>
    `).join('');
  }

  // Resources
  const resEl = document.getElementById('d-resources-list');
  const myFields = interests.slice(0, 3);
  const myRes = RESOURCES.filter(r => myFields.includes(r.field)).slice(0, 5);
  const showRes = myRes.length ? myRes : RESOURCES.slice(0, 5);
  const typeIcons = { Video:'🎬', Article:'📄', Course:'🎓', Website:'🌐', Guide:'📋', 'Day in Life':'⏰' };
  const typeBgs   = { Video:'#FEE2E2', Article:' #EEF2FF', Course:'#D1FAE5', Website:'#CFFAFE', Guide:'#FEF3C7', 'Day in Life':'#F3E8FF' };
  resEl.innerHTML = showRes.map(r => `
    <div class="mini-res" onclick="window.open('${r.url}','_blank')">
      <div class="mini-res-type" style="background:${typeBgs[r.type] || '#f3f4f6'}">${typeIcons[r.type] || '📌'}</div>
      <div style="flex:1;min-width:0">
        <div class="mini-name" style="font-size:.83rem">${r.title}</div>
        <div class="mini-role">${r.type} · ${fieldName(r.field)}</div>
      </div>
    </div>
  `).join('');

  // Interests
  const tagsEl = document.getElementById('d-interests');
  tagsEl.innerHTML = (S.student.interests || []).length
    ? (S.student.interests).map(id => {
        const f = FIELDS.find(x => x.id === id);
        return f ? `<span class="interest-tag">${f.emoji} ${f.name}</span>` : '';
      }).join('')
    : '<p class="text-muted" style="font-size:.82rem">No interests selected.</p>';
}

function renderObInterests() {
  const el = document.getElementById('ob-interests');
  if (!el) return;
  el.innerHTML = FIELDS.map(f => `
    <span class="mini-field-chip" data-id="${f.id}" onclick="toggleObInterest(this,'${f.id}')">${f.emoji} ${f.name}</span>
  `).join('');
}

function toggleObInterest(el, id) {
  el.classList.toggle('selected');
}

function saveStudentProfile() {
  const name  = document.getElementById('ob-name')?.value.trim();
  const email = document.getElementById('ob-email')?.value.trim();
  const grade = document.getElementById('ob-grade')?.value;
  const loc   = document.getElementById('ob-location')?.value.trim();
  if (!name || !email) { toast('Please enter your name and email.'); return; }
  const interests = [...document.querySelectorAll('.mini-field-chip.selected')].map(el => el.dataset.id);
  S.student = { name, email, grade, location: loc, interests };
  persist();
  toast(`🎉 Welcome to ShadowPath, ${name}!`);
  renderDashboard();
}

function resetProfile() {
  S.student = null;
  persist();
  renderDashboard();
}

// ===================== INBOX =====================

function renderInbox() {
  setInboxTab(S.inboxTab || 'pending', document.querySelector('.inbox-tab.active') || document.querySelector('.inbox-tab'));
}

function setInboxTab(tab, el) {
  S.inboxTab = tab;
  document.querySelectorAll('.inbox-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');

  // In pro mode show all requests; in student mode show only student's own
  const all = S.requests;
  const filtered = tab === 'all' ? all : all.filter(r => r.status === tab);
  const list = document.getElementById('inbox-list');

  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty-block" style="margin-top:2rem">
      <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
      <h3>No ${tab === 'all' ? '' : tab} requests</h3>
      <p class="text-muted">When students send you shadow requests, they'll appear here.</p>
    </div>`;
    return;
  }

  list.innerHTML = filtered.map(r => {
    const idJs = typeof r.id === 'number' ? r.id : `'${r.id}'`;
    const createdStr = r.createdAt ? fmtDate(r.createdAt.toDate ? r.createdAt.toDate() : r.createdAt) : '';
    return `
    <div class="inbox-card">
      <div class="inbox-card-head">
        <div class="inbox-student-info">
          <div class="inbox-s-avatar">${(r.studentName||'?').slice(0,2).toUpperCase()}</div>
          <div>
            <div class="inbox-s-name">${esc(r.studentName)}</div>
            <div class="inbox-s-meta">${r.type} Request · ${fmtDateShort(r.date)} ${createdStr ? '· ' + createdStr : ''}</div>
          </div>
        </div>
        ${statusBadge(r.status)}
      </div>
      <div class="inbox-note">${esc(r.note)}</div>
      <div class="inbox-actions">
        ${r.status === 'pending' ? `
          <button class="btn btn-success btn-sm" onclick="inboxAction(${idJs},'accepted')">Accept</button>
          <button class="btn btn-danger btn-sm" onclick="inboxAction(${idJs},'declined')">Decline</button>
          <button class="btn btn-ghost btn-sm" onclick="selectConv(${idJs});goTo('messaging')">Message Student</button>
        ` : `
          <span class="text-muted" style="font-size:.8rem">${r.status === 'accepted' ? '✅ Accepted' : '❌ Declined'}</span>
          <button class="btn btn-ghost btn-sm" onclick="selectConv(${idJs});goTo('messaging')">View Messages</button>
        `}
      </div>
    </div>
  `}).join('');
}

function inboxAction(id, status) {
  if (typeof dbUpdateRequest === 'function') {
    dbUpdateRequest(id, { status }).then(() => {
      if (status === 'accepted') {
        const req = S.requests.find(r => String(r.id) === String(id));
        if (req) {
          dbSendMessage(id, {
            from: 'pro',
            senderName: S.proProfile?.name || 'Professional',
            text: `Hi ${req.studentName}! I'd love to ${req.type === 'Shadow' ? 'have you shadow me' : 'connect with you'}. Let's plan for ${req.date}. I'll send you the details shortly!`,
          });
        }
      }
      toast(status === 'accepted' ? '✅ Request accepted!' : 'Request declined.');
      // renderInbox() fires automatically via the requests listener
    });
  } else {
    // Demo fallback
    const req = S.requests.find(r => String(r.id) === String(id));
    if (!req) return;
    req.status = status;
    if (status === 'accepted') {
      if (!req.messages) req.messages = [];
      req.messages.push({
        from: 'pro',
        text: `Hi ${req.studentName}! I'd love to ${req.type === 'Shadow' ? 'have you shadow me' : 'connect with you'}. Let's plan for ${req.date}. I'll send you the details shortly!`,
        time: new Date().toISOString(),
      });
    }
    persist();
    toast(status === 'accepted' ? '✅ Request accepted!' : 'Request declined.');
    renderInbox();
  }
}

// ===================== PRO SIGNUP =====================

function renderProSignup() {
  const sel = document.getElementById('pf-field');
  if (sel && sel.options.length <= 1) {
    FIELDS.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f.id;
      opt.textContent = f.emoji + ' ' + f.name;
      sel.appendChild(opt);
    });
  }

  if (S.proProfile) {
    document.getElementById('pro-form-body').classList.add('hidden');
    document.getElementById('pro-form-success').classList.remove('hidden');
  } else {
    document.getElementById('pro-form-body').classList.remove('hidden');
    document.getElementById('pro-form-success').classList.add('hidden');
  }
}

function submitProProfile() {
  const name     = document.getElementById('pf-name')?.value.trim();
  const title    = document.getElementById('pf-title')?.value.trim();
  const company  = document.getElementById('pf-company')?.value.trim() || '';
  const email    = document.getElementById('pf-email')?.value.trim() || '';
  const field    = document.getElementById('pf-field')?.value;
  const bio      = document.getElementById('pf-bio')?.value.trim() || '';
  const location = document.getElementById('pf-location')?.value.trim() || 'DFW, TX';

  if (!name || !title || !field) { toast('Please fill in all required fields.'); return; }

  S.proProfile = { name, title, company, email, field };
  persist();

  document.getElementById('pro-form-body').classList.add('hidden');
  document.getElementById('pro-form-success').classList.remove('hidden');
  updateNav(currentPage);

  const user = authGetCurrentUser();
  if (typeof dbSavePro === 'function' && user) {
    const proData = {
      name, title, company, email, field, bio, location,
      initials:     name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      gradient:     '135deg,#4F46E5,#06B6D4',
      availability: 'available',
      shadowType:   'both',
      experience:   '',
      maxStudents:  '2/month',
    };
    dbSavePro(user.uid, proData).then(() => {
      toast('🎉 Your profile is now live on the Professionals page!');
    }).catch(err => {
      console.error('dbSavePro:', err);
      toast('🎉 Profile saved locally! (Firestore save failed — check console)');
    });
  } else {
    toast('🎉 Profile submitted for review!');
  }
}

// ===================== HELPERS =====================

function fieldName(id)  { return FIELDS.find(f => f.id === id)?.name  || id; }
function fieldEmoji(id) { return FIELDS.find(f => f.id === id)?.emoji || ''; }
function shadowLabel(t) { return t === 'virtual' ? '💻 Virtual' : t === 'in-person' ? '🏢 In-Person' : '✅ Both'; }
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function esc(s) { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function fmtDate(iso)      { return iso ? new Date(iso).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : ''; }
function fmtDateShort(str) { if (!str) return ''; try { return new Date(str).toLocaleDateString('en-US',{month:'short',day:'numeric'}); } catch(e) { return str; } }
function fmtTime(iso)      { return iso ? new Date(iso).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}) : ''; }
function statusBadge(s) {
  const map = { pending:'badge-amber', accepted:'badge-green', declined:'badge-red' };
  return `<span class="badge ${map[s]||'badge-gray'}">${cap(s||'')}</span>`;
}
function emptyBlock(title, sub) {
  return `<div class="empty-block" style="grid-column:1/-1;margin:2rem 0">
    <div class="empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
    <h3>${title}</h3><p class="text-muted">${sub}</p>
  </div>`;
}

let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 3500);
}

// ===================== BOOT =====================
hydrate();
goTo('explore');
