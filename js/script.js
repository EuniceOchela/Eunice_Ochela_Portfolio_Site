const navbar=document.getElementById("navbar");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const backTop=document.getElementById("backTop");
const toast=document.getElementById("toast");

window.addEventListener("scroll",()=>{
  navbar.classList.toggle("scrolled",window.scrollY>20);
  backTop.classList.toggle("show",window.scrollY>600);
});
menuToggle.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}
  });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const projectData={
 email:{category:"01 · VIRTUAL ASSISTANCE / EMAIL MANAGEMENT",title:"Executive Email Management & Inbox Organization",challenge:"Large volumes of email can make important requests, client messages and follow-ups difficult to identify.",solution:"Create an inbox management system that categorizes messages, identifies priority items, tracks actions and keeps follow-ups visible.",workflow:"Incoming Email\\n      ↓\\nCategorization\\n      ↓\\nPriority Identification\\n      ↓\\nRespond / Forward / Archive\\n      ↓\\nFollow-up Tracking",tools:"Gmail, Outlook, Google Workspace, Notion, Trello",benefit:"A clearer inbox structure, better visibility of follow-ups and less time spent manually sorting routine messages."},
 calendar:{category:"02 · CALENDAR MANAGEMENT / MEETING COORDINATION",title:"Executive Calendar & Meeting Coordination System",challenge:"Multiple meetings, appointments and time zones can create scheduling conflicts and unnecessary administrative work.",solution:"Coordinate availability, time zones, meeting details, reminders, agendas and post-meeting follow-ups through a structured calendar workflow.",workflow:"Meeting Request\\n      ↓\\nCheck Availability\\n      ↓\\nIdentify Time Zone\\n      ↓\\nSchedule Meeting\\n      ↓\\nConfirmation + Agenda\\n      ↓\\nReminder\\n      ↓\\nFollow-up",tools:"Google Calendar, Outlook Calendar, Calendly, Zoom, Google Meet, Microsoft Teams",benefit:"A more predictable calendar, fewer scheduling clashes and a clearer meeting coordination process."},
 content:{category:"03 · CONTENT & GROWTH",title:"Content Calendar & Growth Planning System",challenge:"Inconsistent content planning can make it difficult to maintain a clear publishing rhythm and connect content to business goals.",solution:"Build a content calendar around audience needs, content pillars, research, publishing and performance review.",workflow:"Content Idea\\n      ↓\\nResearch\\n      ↓\\nContent Brief\\n      ↓\\nCreation\\n      ↓\\nReview\\n      ↓\\nScheduling\\n      ↓\\nPublishing\\n      ↓\\nPerformance Review",tools:"Notion, Google Sheets, Canva, Meta Business Suite, Trello, Google Calendar",benefit:"A repeatable content planning system that makes publishing more organized and supports consistent growth activity."},
 workflow:{category:"04 · AI AUTOMATION",title:"Business Workflow Automation System",challenge:"Manual handoffs between inquiries, records, tasks and follow-ups can create delays and duplicated work.",solution:"Connect a client inquiry to information capture, CRM updates, confirmation emails, task creation and reminders.",workflow:"New Client Inquiry\\n        ↓\\nForm Submitted\\n        ↓\\nInformation Captured\\n        ↓\\nCRM Record Created\\n        ↓\\nEmail Confirmation\\n        ↓\\nTask Created\\n        ↓\\nFollow-up Reminder",tools:"Zapier, Make, Google Forms, Gmail, Google Sheets, Notion, Slack, CRM platforms, AI tools",benefit:"A repeatable workflow that reduces manual handoffs and makes next actions easier to track."},
 crm:{category:"05 · CRM AUTOMATION",title:"CRM Lead & Customer Automation System",challenge:"Leads can be lost when records, assignments, pipeline stages and follow-ups are not consistently maintained.",solution:"Create a CRM workflow that captures, qualifies, assigns and tracks leads through the pipeline.",workflow:"New Lead\\n   ↓\\nLead Captured\\n   ↓\\nLead Qualified\\n   ↓\\nCRM Entry\\n   ↓\\nLead Assigned\\n   ↓\\nFollow-up\\n   ↓\\nPipeline Update",tools:"HubSpot, Zoho CRM, Salesforce, Pipedrive, Zapier, Make",benefit:"Better visibility of prospects, clearer ownership and a repeatable process for moving leads through the pipeline."},
 lead:{category:"06 · LEAD GENERATION / MANAGEMENT",title:"Lead Generation & Management Workflow",challenge:"Prospecting becomes difficult to manage when research, qualification and follow-up happen across disconnected lists and tools.",solution:"Build a structured process from ideal customer profile through prospect research, verification, qualification, CRM entry and follow-up.",workflow:"Ideal Customer Profile\\n        ↓\\nProspect Research\\n        ↓\\nLead Collection\\n        ↓\\nVerification\\n        ↓\\nQualification\\n        ↓\\nCRM Entry\\n        ↓\\nOutreach\\n        ↓\\nFollow-up",tools:"Google Sheets, LinkedIn research, CRM platforms, Notion, email tools",benefit:"A clearer prospecting pipeline with consistent qualification, organized records and visible follow-up dates."},
 files:{category:"07 · BUSINESS ORGANIZATION",title:"Digital File & Document Organization System",challenge:"Scattered folders and inconsistent file names make documents difficult to find and maintain.",solution:"Design a folder architecture, naming convention, archive structure and shared-drive organization.",workflow:"Audit Existing Files\\n      ↓\\nDesign Folder Architecture\\n      ↓\\nCreate Naming Rules\\n      ↓\\nCategorize Documents\\n      ↓\\nArchive Old Versions\\n      ↓\\nMaintain System",tools:"Google Drive, OneDrive, Dropbox, Notion",benefit:"A predictable digital workspace that makes information easier to locate, share and maintain."},
 travel:{category:"08 · TRAVEL PLANNING / VIRTUAL ASSISTANCE",title:"Executive Travel Planning & Itinerary System",challenge:"Business travel requires coordination across flights, accommodation, transport, meetings, time zones and reminders.",solution:"Create a central itinerary that brings travel arrangements and business commitments into one clear plan.",workflow:"Travel Request\\n      ↓\\nDestination Research\\n      ↓\\nFlight Options\\n      ↓\\nAccommodation\\n      ↓\\nTransportation\\n      ↓\\nMeeting Schedule\\n      ↓\\nItinerary\\n      ↓\\nTravel Reminders",tools:"Google Calendar, Google Maps, travel booking platforms, spreadsheets, Notion",benefit:"A single, organized travel plan that makes schedules, arrangements and important reminders easier to manage."}
};

const modal=document.getElementById("projectModal");
const modalClose=document.getElementById("modalClose");
let lastFocus=null;
function openProject(key){
  const d=projectData[key]; if(!d)return;
  lastFocus=document.activeElement;
  document.getElementById("modalCategory").textContent=d.category;
  document.getElementById("modalTitle").textContent=d.title;
  document.getElementById("modalChallenge").textContent=d.challenge;
  document.getElementById("modalSolution").textContent=d.solution;
  document.getElementById("modalWorkflow").textContent=d.workflow;
  document.getElementById("modalTools").textContent=d.tools;
  document.getElementById("modalBenefit").textContent=d.benefit;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";modalClose.focus();
}
function closeProject(){
  modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";
  if(lastFocus)lastFocus.focus();
}
document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>openProject(btn.dataset.open)));
modalClose.addEventListener("click",closeProject);
document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",closeProject));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))closeProject();});

document.querySelectorAll(".filter").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const filter=button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card=>{
      card.classList.toggle("hidden",filter!=="all"&&card.dataset.category!==filter);
    });
  });
});

const display = document.getElementById("all")
const testimonials = [...document.querySelectorAll(".testimonial")];
const dotsWrap = document.getElementById("sliderDots");
let testimonialIndex = 0;

testimonials.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);
  dot.addEventListener("click", () => showTestimonial(index));
  dotsWrap.appendChild(dot);
});

function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, i) => item.classList.toggle("active", i === testimonialIndex));
  [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle("active", i === testimonialIndex));
}
document.getElementById("prevTestimonial").addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.getElementById("nextTestimonial").addEventListener("click", () => showTestimonial(testimonialIndex + 1));
showTestimonial(0);

const contactForm=document.getElementById("contactForm");
contactForm.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(contactForm);
  const subject=encodeURIComponent(`Portfolio inquiry — ${data.get("service")}`);
  const body=encodeURIComponent(`Hello Eunice Ochela,\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company")||"Not provided"}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`);
  window.location.href=`mailto:your@email.com?subject=${subject}&body=${body}`;
  showToast("Opening your email client. Replace your@email.com with the real address.");
});
function showToast(message){
  toast.textContent=message;toast.classList.add("show");
  clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove("show"),4500);
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click",e=>{
    const target=document.querySelector(a.getAttribute("href"));if(!target)return;
    e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"});
  });
});
