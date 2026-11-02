const DATA_FILES = { indicators: "data/indicators.json", reports: "data/reports.json" };
const SECTORS = [
 {id:"software",name:"نرم‌افزار و خدمات فناوری اطلاعات",type:"core",icon:"▣",desc:"نرم‌افزارهای سازمانی، خدمات توسعه، یکپارچه‌سازی، SaaS و برون‌سپاری فناوری."},
 {id:"telecom",name:"مخابرات و ارتباطات",type:"core",icon:"⌁",desc:"شبکه ثابت و همراه، اینترنت، انتقال داده، زیرساخت و خدمات ارتباطی."},
 {id:"hardware",name:"سخت‌افزار و تجهیزات",type:"core",icon:"▤",desc:"تجهیزات پردازشی، ذخیره‌سازی، شبکه، تجهیزات کاربر و زنجیره تأمین."},
 {id:"datacenter",name:"زیرساخت ابری و مراکز داده",type:"core",icon:"▦",desc:"رایانش ابری، میزبانی، مراکز داده، پردازش و زیرساخت دیجیتال."},
 {id:"cybersecurity",name:"امنیت سایبری",type:"core",icon:"◈",desc:"امنیت شبکه و اطلاعات، مدیریت ریسک، پایش تهدید و پاسخ به رخداد."},
 {id:"ai",name:"هوش مصنوعی و داده",type:"core",icon:"✳",desc:"هوش مصنوعی، یادگیری ماشین، تحلیل داده، پردازش زبان و محصولات داده‌محور."},
 {id:"iot",name:"اینترنت اشیا و صنعت هوشمند",type:"core",icon:"⌘",desc:"حسگرها، اتصال دستگاه‌ها، اتوماسیون صنعتی و سامانه‌های هوشمند."},
 {id:"ecommerce",name:"تجارت الکترونیکی و پلتفرم‌ها",type:"digital",icon:"⇄",desc:"بازارگاه‌ها، خرده‌فروشی آنلاین، پرداخت، لجستیک و خدمات پلتفرمی."},
 {id:"fintech",name:"فناوری‌های مالی",type:"digital",icon:"◉",desc:"پرداخت، بانکداری دیجیتال، اعتباردهی، بیمه‌گری و زیرساخت‌های مالی."},
 {id:"healthtech",name:"فناوری سلامت",type:"digital",icon:"＋",desc:"پرونده سلامت، خدمات از راه دور، نرم‌افزار مراکز درمانی و تحلیل سلامت."},
 {id:"edtech",name:"فناوری آموزش",type:"digital",icon:"▱",desc:"یادگیری دیجیتال، سامانه‌های مدیریت آموزش و ابزارهای سنجش و محتوا."},
 {id:"govtech",name:"فناوری دولت و خدمات عمومی",type:"digital",icon:"⌂",desc:"دولت هوشمند، خدمات عمومی دیجیتال، داده باز و زیرساخت تعاملات."}
];
const SIGNALS = [
 {icon:"✳",title:"هوش مصنوعی و عامل‌های هوشمند",desc:"پایش کاربردهای سازمانی، هزینه پیاده‌سازی، کیفیت داده، امنیت و مدل‌های درآمدی مبتنی بر اتوماسیون.",tag:"فناوری و بهره‌وری"},
 {icon:"◈",title:"امنیت سایبری و تاب‌آوری",desc:"بررسی تقاضای سازمان‌ها برای امنیت، انطباق، مدیریت رخداد و تداوم کسب‌وکار.",tag:"ریسک و زیرساخت"},
 {icon:"▦",title:"رایانش ابری و مراکز داده",desc:"پایش ظرفیت زیرساخت، هزینه خدمات ابری، میزبانی داخلی و نیازهای پردازشی.",tag:"زیرساخت دیجیتال"},
 {icon:"⇄",title:"نرم‌افزار به‌عنوان خدمت",desc:"بررسی گذار از فروش پروژه‌ای به درآمد تکرارشونده، نگهداشت مشتری و اقتصاد واحد.",tag:"مدل کسب‌وکار"},
 {icon:"⌘",title:"اینترنت اشیا و صنعت هوشمند",desc:"شناسایی مسائل عملیاتی صنایع که اتصال تجهیزات و تحلیل داده می‌تواند حل کند.",tag:"فناوری صنعتی"},
 {icon:"◉",title:"فناوری‌های مالی",desc:"پایش زیرساخت پرداخت، اعتبار، بانکداری باز و الزامات مقرراتی خدمات مالی.",tag:"خدمات مالی"}
];
const OPPORTUNITIES = [
 {title:"دستیارهای هوشمند برای فرایندهای سازمانی",problem:"بررسی فرایندهای پرتکرار و پرهزینه در شرکت‌ها و امکان کاهش زمان، خطا یا هزینه با ابزارهای هوشمند.",buyer:"شرکت‌های متوسط و بزرگ",validation:"مصاحبه با حداقل ۱۰ خریدار بالقوه و سنجش تمایل به پرداخت"},
 {title:"خدمات امنیت مدیریت‌شده برای کسب‌وکارها",problem:"بررسی شکاف میان نیاز امنیتی سازمان‌ها و توان داخلی آن‌ها برای پایش، پیشگیری و پاسخ به رخداد.",buyer:"سازمان‌ها و شرکت‌های فاقد تیم امنیتی",validation:"مصاحبه با مدیران IT و آزمون یک خدمت پایلوت پولی"},
 {title:"نرم‌افزارهای عمودی برای صنایع منطقه",problem:"شناسایی فرایندهای خاص و دستی در صنایع و خدمات منطقه‌ای که نرم‌افزار عمومی پاسخ مناسبی به آن‌ها نمی‌دهد.",buyer:"بنگاه‌های یک صنعت مشخص",validation:"انتخاب یک صنعت، مشاهده فرایند و اخذ تعهد پایلوت"}
];
const SOURCES = [
 {name:"مرکز آمار ایران",desc:"آمارهای بنگاه، اشتغال، فعالیت اقتصادی و حساب‌های ملی",url:"https://www.amar.org.ir/"},
 {name:"وزارت ارتباطات و فناوری اطلاعات",desc:"سیاست‌ها، گزارش‌ها و آمارهای بخش ارتباطات و فناوری اطلاعات",url:"https://www.ict.gov.ir/"},
 {name:"سازمان تنظیم مقررات و ارتباطات رادیویی",desc:"گزارش‌های فصلی و داده‌های اپراتورها و ارتباطات",url:"https://www.cra.ir/"},
 {name:"مرکز توسعه تجارت الکترونیکی",desc:"گزارش‌های تجارت الکترونیکی و داده‌های اینماد",url:"https://ecommerce.gov.ir/"},
 {name:"سازمان نظام صنفی رایانه‌ای",desc:"گزارش‌های صنعت، پیمایش‌ها و داده‌های شرکت‌های عضو",url:"https://irannsr.org/"},
 {name:"اتحادیه بین‌المللی مخابرات (ITU)",desc:"شاخص‌های بین‌المللی ارتباطات و فناوری اطلاعات",url:"https://www.itu.int/"},
 {name:"بانک جهانی",desc:"داده‌های اقتصاد دیجیتال، توسعه و شاخص‌های کلان",url:"https://data.worldbank.org/"},
 {name:"GSMA",desc:"گزارش‌های اقتصاد موبایل و اکوسیستم ارتباطات همراه",url:"https://www.gsma.com/"}
];
const $ = (selector) => document.querySelector(selector);
const toFa = (value) => new Intl.NumberFormat("fa-IR").format(value);
let indicators = [];
let reports = [];
let trendItems = [];

async function loadJson(path, fallback) {
 try { const response = await fetch(path); if (!response.ok) throw new Error("HTTP " + response.status); return await response.json(); }
 catch (error) { console.warn("Data file unavailable:", path, error); return fallback; }
}
function showSection(id) {
 document.querySelectorAll(".page-section").forEach(section => section.classList.toggle("active", section.id === id));
 document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.section === id));
 const activeLink = document.querySelector('.nav-link[data-section="' + id + '"]');
 $("#breadcrumbTitle").textContent = activeLink ? activeLink.textContent.trim() : "نمای کلی";
 $("#sidebar").classList.remove("open");
 window.scrollTo({top:0,behavior:"smooth"});
}
function setupNavigation() {
 document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", event => { event.preventDefault(); const id = link.dataset.section; history.replaceState(null,"","#"+id); showSection(id); }));
 document.querySelectorAll('a[href^="#"]').forEach(link => { if (link.classList.contains("nav-link")) return; link.addEventListener("click", event => { const id = link.getAttribute("href").slice(1); if (document.getElementById(id)?.classList.contains("page-section")) { event.preventDefault(); history.replaceState(null,"","#"+id); showSection(id); } }); });
 $("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
 const initial = location.hash.slice(1); if (document.getElementById(initial)?.classList.contains("page-section")) showSection(initial);
}
function renderSectors() {
 const search = ($("#sectorSearch")?.value || "").trim().toLocaleLowerCase("fa");
 const type = $("#sectorType")?.value || "all";
 const filtered = SECTORS.filter(item => (type === "all" || item.type === type) && (item.name+" "+item.desc).toLocaleLowerCase("fa").includes(search));
 $("#sectorGrid").innerHTML = filtered.length ? filtered.map(item => `<article class="sector-card"><div class="sector-card-top"><span class="sector-icon">${item.icon}</span><span class="sector-kind">${item.type === "core" ? "هسته ICT" : "اقتصاد دیجیتال"}</span></div><h3>${item.name}</h3><p>${item.desc}</p><a href="#reports" data-sector-filter="${item.id}">مشاهده گزارش‌های حوزه ←</a></article>`).join("") : '<div class="empty-state-inline">حوزه‌ای با این مشخصات پیدا نشد.</div>';
}
function renderSignals() {
 const icons={"هوش مصنوعی و اتوماسیون":"✳","زیرساخت AI و مراکز داده":"▦","امنیت سایبری":"◈","زیرساخت ارتباطی و تاب‌آوری":"⇄","سیاست‌گذاری و حاکمیت دیجیتال":"⌘","اقتصاد دیجیتال و پلتفرم‌ها":"◉","مهارت و سرمایه انسانی":"✦","مخابرات و خدمات پلتفرمی":"⌁"};
 const rows=trendItems.length?trendItems:[];
 $("#signalGrid").innerHTML=rows.length?rows.map((item,index)=>`<article class="signal-card"><span class="signal-icon">${icons[item.category]||"◈"}</span><div><h3>${item.title}</h3><p>${item.iran_relevance}</p><div class="signal-meta"><span class="signal-chip">${item.type}</span><span class="signal-chip">${item.status}</span><span class="signal-chip ${item.priority==="بسیار بالا"||item.priority==="بالا"?"high":""}">اولویت ${item.priority}</span><span class="signal-chip">اطمینان: ${item.confidence}</span></div><details class="signal-details"><summary>شواهد، منابع و موارد پایش ماهانه</summary><p><strong>شواهد مستند</strong></p><ul>${item.evidence.map(e=>`<li>${e.claim} <a href="${e.url}" target="_blank" rel="noopener">${e.source} ↗</a></li>`).join("")}</ul><p><strong>پیام برای شرکت‌های مرکز رشد:</strong> ${item.startup_implication}</p><p><strong>در بازبینی ماهانه بررسی شود:</strong></p><ul>${item.watch_items.map(x=>`<li>${x}</li>`).join("")}</ul><p><strong>روش به‌روزرسانی:</strong> ${item.monthly_update}</p><p><strong>محدودیت شواهد:</strong> ${item.sources_note}</p></details><div class="signal-updated">آخرین بازبینی: ${item.last_reviewed} · ${item.geography}</div></div></article>`).join(""):'<div class="empty-state-inline">فایل data/trends.json بارگذاری نشد.</div>';
}
function renderOpportunities() { $("#opportunityGrid").innerHTML = OPPORTUNITIES.map((item,index) => `<article class="opportunity-card"><span class="opp-tag">فرضیه اولیه · ${toFa(index+1)}</span><h3>${item.title}</h3><p>${item.problem}</p><div class="opp-meta"><div>مشتری احتمالی: <strong>${item.buyer}</strong></div><div style="margin-top:5px">گام اعتبارسنجی: <strong>${item.validation}</strong></div></div></article>`).join(""); }
function renderSources() { $("#sourceList").innerHTML = SOURCES.map(item => `<div class="source-item"><div><strong>${item.name}</strong><small>${item.desc}</small></div><a href="${item.url}" target="_blank" rel="noopener">وب‌سایت ↗</a></div>`).join(""); }
function renderMetricGrid() {
 const rows = indicators.filter(item => item.value !== null && item.value !== undefined);
 $("#metricGrid").innerHTML = rows.length ? rows.map(item => `<article class="metric-card"><div class="metric-top"><span>${item.geography || "—"}</span><span class="metric-type">${item.data_type || "Fact"}</span></div><h3>${item.name}</h3><strong>${toFa(item.value)} <small>${item.unit || ""}</small></strong><p>سال داده: ${item.year ? toFa(item.year) : "—"} · انتشار: ${item.publication_year ? toFa(item.publication_year) : "—"}</p><div class="metric-source">${item.source_name || "منبع نامشخص"}</div><a href="${item.source_url || "#methodology"}" target="_blank" rel="noopener">منبع و جزئیات ↗</a></article>`).join("") : '<div class="empty-state-inline">شاخص مستندی برای نمایش ثبت نشده است.</div>';
}
function renderKpis() {
 const keys = ["internet_users_share_2024","mobile_broadband_per100_2024","mobile_network_4g_coverage_2024","mobile_network_5g_coverage_2024"];
 const map = new Map(indicators.map(item => [item.id,item]));
 document.querySelectorAll("#kpiGrid .kpi-card").forEach((card,index) => {
  const item = map.get(keys[index]);
  if (!item || item.value === null || item.value === undefined) return;
  card.querySelector(".kpi-value").textContent = toFa(item.value) + (item.unit ? " "+item.unit : "");
  card.querySelector(".kpi-foot").textContent = (item.year ? "سال داده: "+toFa(item.year)+" · " : "") + (item.source_name || "منبع ثبت‌شده");
 });
}
function renderReports() {
 const query = ($("#reportSearch")?.value || "").trim().toLocaleLowerCase("fa");
 const sector = $("#reportSector")?.value || "all";
 const type = $("#reportType")?.value || "all";
 const filtered = reports.filter(item => (sector === "all" || item.sector === sector) && (type === "all" || item.source_type === type) && [item.title,item.publisher,item.tags?.join(" ")].join(" ").toLocaleLowerCase("fa").includes(query));
 $("#reportTable").innerHTML = filtered.length ? filtered.map(item => `<tr><td class="report-title">${item.title}</td><td>${item.publisher || "—"}</td><td>${item.publication_year ? toFa(item.publication_year) : "—"}</td><td>${item.sector_name || item.sector || "—"}</td><td>${({official:"رسمی",industry:"صنعتی",research:"پژوهشی"})[item.source_type] || "—"}</td><td>${item.url ? `<a class="report-link" href="${item.url}" target="_blank" rel="noopener">مشاهده ↗</a>` : "پیوند ثبت نشده"}</td></tr>`).join("") : '<tr><td colspan="6" class="table-empty">گزارشی مطابق فیلترها پیدا نشد؛ فایل data/reports.json را تکمیل کنید.</td></tr>';
 const recent = reports.slice().sort((a,b)=>(b.publication_year||0)-(a.publication_year||0)).slice(0,3);
 $("#recentReports").innerHTML = recent.length ? recent.map(item => `<div class="mini-opportunity"><span class="mini-number">▤</span><div><strong>${item.title}</strong><small>${item.publisher || "ناشر نامشخص"} · ${item.publication_year ? toFa(item.publication_year) : "بدون تاریخ"}</small></div></div>`).join("") : '<div class="empty-state-inline">هنوز گزارشی در کتابخانه ثبت نشده است.</div>';
}
function setupReportFilters() {
 const options = SECTORS.map(item => `<option value="${item.id}">${item.name}</option>`).join("");
 $("#reportSector").insertAdjacentHTML("beforeend",options);
 ["reportSearch","reportSector","reportType"].forEach(id => $("#"+id).addEventListener(id === "reportSearch" ? "input" : "change",renderReports));
}
function renderCharts() {
 const timeSeries = indicators.filter(item => Array.isArray(item.series) && item.series.length);
 if (timeSeries.length && window.Chart) {
  $("#trendEmpty").classList.add("hidden"); $("#trendWrap").classList.remove("hidden");
  const first = timeSeries[0];
  new Chart($("#trendChart"),{type:"line",data:{labels:first.series.map(point=>toFa(point.year)),datasets:[{label:first.name,data:first.series.map(point=>point.value),borderColor:"#3567bd",backgroundColor:"rgba(53,103,189,.10)",fill:true,tension:.3,pointRadius:3}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false}},y:{beginAtZero:false,grid:{color:"#edf1f6"}}}}});
 }
 const comparable = indicators.filter(item => item.sector && typeof item.value === "number" && item.chart_group === "sector_comparison");
 if (comparable.length && window.Chart) {
  $("#sectorEmpty").classList.add("hidden"); $("#sectorWrap").classList.remove("hidden");
  new Chart($("#sectorChart"),{type:"bar",data:{labels:comparable.map(item=>item.sector_name || item.sector),datasets:[{data:comparable.map(item=>item.value),backgroundColor:"#6f91c9",borderRadius:5}]},options:{indexAxis:"y",responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{color:"#edf1f6"}},y:{grid:{display:false}}}}});
 }
}
async function init() {
 $("#todayDate").textContent = new Intl.DateTimeFormat("fa-IR",{year:"numeric",month:"long",day:"numeric"}).format(new Date());
 setupNavigation(); renderSectors(); renderOpportunities(); renderSources(); setupReportFilters();
 $("#sectorSearch").addEventListener("input",renderSectors); $("#sectorType").addEventListener("change",renderSectors);
 [indicators,reports,trendItems] = await Promise.all([loadJson(DATA_FILES.indicators,[]),loadJson(DATA_FILES.reports,[]),loadJson("data/trends.json",{items:[]}).then(data=>data.items||[])]);
 renderSignals();
 renderKpis(); renderMetricGrid(); renderReports(); renderCharts();
}
document.addEventListener("DOMContentLoaded",init);
