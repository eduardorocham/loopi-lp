"use client";

/* ─── SVG Logos ────────────────────────────────────────────────── */

const GoogleDriveLogo = () => (
  <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 27h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
);

const GoogleCalendarLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="6" y="6" width="36" height="36" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
    <rect x="6" y="6" width="36" height="10" rx="4" fill="#EA4335"/>
    <rect x="6" y="12" width="36" height="4" fill="#EA4335"/>
    <rect x="14" y="4" width="4" height="6" rx="2" fill="#B71C1C"/>
    <rect x="30" y="4" width="4" height="6" rx="2" fill="#B71C1C"/>
    <text x="24" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1565C0" fontFamily="sans-serif">31</text>
  </svg>
);

const GoogleChatLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="#00AC47"/>
    <path d="M34 14H14a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4v5l6-5h10a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2z" fill="white"/>
    <circle cx="18" cy="23" r="2" fill="#00AC47"/>
    <circle cx="24" cy="23" r="2" fill="#00AC47"/>
    <circle cx="30" cy="23" r="2" fill="#00AC47"/>
  </svg>
);

const GoogleSheetsLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#0F9D58"/>
    <rect x="10" y="14" width="28" height="4" rx="1" fill="white" opacity="0.9"/>
    <rect x="10" y="22" width="28" height="4" rx="1" fill="white" opacity="0.9"/>
    <rect x="10" y="30" width="28" height="4" rx="1" fill="white" opacity="0.9"/>
    <rect x="10" y="14" width="4" height="20" rx="1" fill="white"/>
    <rect x="22" y="14" width="1" height="20" fill="white" opacity="0.4"/>
    <rect x="32" y="14" width="1" height="20" fill="white" opacity="0.4"/>
  </svg>
);

const GoogleDocsLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#4285F4"/>
    <rect x="13" y="10" width="22" height="28" rx="2" fill="white"/>
    <rect x="17" y="18" width="14" height="2" rx="1" fill="#4285F4" opacity="0.5"/>
    <rect x="17" y="23" width="14" height="2" rx="1" fill="#4285F4" opacity="0.5"/>
    <rect x="17" y="28" width="9" height="2" rx="1" fill="#4285F4" opacity="0.5"/>
  </svg>
);

const TeamLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="#5059C9"/>
    <circle cx="30" cy="16" r="5" fill="#7B83EB"/>
    <circle cx="18" cy="18" r="6" fill="white"/>
    <path d="M30 24c3.31 0 6 1.79 6 4v2H24v-2c0-2.21 2.69-4 6-4z" fill="#7B83EB"/>
    <path d="M18 26c-4.41 0-8 1.79-8 4v2h16v-2c0-2.21-3.59-4-8-4z" fill="white"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="#25D366"/>
    <path d="M24 8C15.16 8 8 15.16 8 24c0 2.84.74 5.5 2.04 7.82L8 40l8.42-2.02A15.93 15.93 0 0 0 24 40c8.84 0 16-7.16 16-16S32.84 8 24 8zm7.92 21.64c-.34.96-1.96 1.84-2.7 1.96-.7.12-1.58.16-2.56-.16-.58-.2-1.34-.46-2.28-.9-4.02-1.74-6.64-5.8-6.84-6.06-.2-.26-1.64-2.18-1.64-4.16s1.04-2.96 1.42-3.36c.34-.38.76-.46 1-.46.26 0 .5.01.72.02.24.01.56-.09.88.66.34.78 1.14 2.76 1.24 2.96.1.2.16.44.02.7-.14.26-.2.42-.4.66-.2.22-.42.5-.6.66-.2.18-.4.38-.18.74.22.36 1 1.62 2.14 2.62 1.46 1.3 2.7 1.7 3.08 1.9.38.18.6.16.82-.1.22-.26.96-1.12 1.22-1.5.24-.38.5-.32.84-.2.34.12 2.14 1.02 2.52 1.2.38.18.62.28.72.44.1.16.1.9-.22 1.86z" fill="white"/>
  </svg>
);

const BigQueryLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#4285F4"/>
    <ellipse cx="24" cy="20" rx="11" ry="8" fill="white" opacity="0.9"/>
    <ellipse cx="24" cy="20" rx="7" ry="4.5" fill="#4285F4"/>
    <rect x="13" y="20" width="22" height="3" fill="white" opacity="0.9"/>
    <ellipse cx="24" cy="28" rx="11" ry="4" fill="white" opacity="0.6"/>
    <line x1="31" y1="30" x2="36" y2="36" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="36" cy="37" r="3" fill="#FBBC04"/>
  </svg>
);

const PostgresLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#336791"/>
    <ellipse cx="24" cy="16" rx="10" ry="7" fill="white" opacity="0.15"/>
    <ellipse cx="24" cy="16" rx="10" ry="7" fill="none" stroke="white" strokeWidth="2"/>
    <rect x="14" y="16" width="20" height="14" fill="none" stroke="white" strokeWidth="2"/>
    <ellipse cx="24" cy="30" rx="10" ry="4" fill="none" stroke="white" strokeWidth="2"/>
    <path d="M34 20 Q38 18 36 28" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="19" cy="13" r="1.5" fill="white"/>
    <circle cx="29" cy="13" r="1.5" fill="white"/>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#F29111"/>
    <rect x="10" y="14" width="28" height="5" rx="2.5" fill="white"/>
    <rect x="10" y="22" width="28" height="5" rx="2.5" fill="white" opacity="0.7"/>
    <rect x="10" y="30" width="28" height="5" rx="2.5" fill="white" opacity="0.4"/>
    <text x="24" y="12" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white" fontFamily="sans-serif">MySQL</text>
  </svg>
);

const ExcelLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#217346"/>
    <rect x="6" y="10" width="22" height="28" rx="2" fill="#185C37"/>
    <text x="17" y="29" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="sans-serif">X</text>
    <rect x="26" y="14" width="16" height="4" rx="1" fill="white" opacity="0.8"/>
    <rect x="26" y="22" width="16" height="4" rx="1" fill="white" opacity="0.8"/>
    <rect x="26" y="30" width="16" height="4" rx="1" fill="white" opacity="0.8"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="white"/>
    <rect x="8" y="20" width="8" height="14" rx="4" fill="#E01E5A"/>
    <rect x="20" y="8" width="8" height="14" rx="4" fill="#36C5F0"/>
    <rect x="32" y="14" width="8" height="14" rx="4" transform="rotate(90 36 21)" fill="#2EB67D"/>
    <rect x="14" y="26" width="8" height="14" rx="4" transform="rotate(90 18 33)" fill="#ECB22E"/>
    <circle cx="12" cy="20" r="4" fill="#E01E5A" opacity="0.4"/>
    <circle cx="24" cy="12" r="4" fill="#36C5F0" opacity="0.4"/>
    <circle cx="36" cy="24" r="4" fill="#2EB67D" opacity="0.4"/>
    <circle cx="24" cy="36" r="4" fill="#ECB22E" opacity="0.4"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1"/>
    <path d="M14 10h16l8 8v20a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" fill="#0F172A"/>
    <path d="M30 10v8h8" fill="none" stroke="#0F172A" strokeWidth="1"/>
    <rect x="16" y="22" width="16" height="2" rx="1" fill="white" opacity="0.7"/>
    <rect x="16" y="28" width="12" height="2" rx="1" fill="white" opacity="0.7"/>
    <rect x="16" y="34" width="10" height="2" rx="1" fill="white" opacity="0.7"/>
  </svg>
);

const SharePointLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#0078D4"/>
    <circle cx="20" cy="20" r="9" fill="#83BEEC"/>
    <circle cx="28" cy="28" r="9" fill="#0078D4" stroke="white" strokeWidth="1.5"/>
    <circle cx="20" cy="20" r="5" fill="white"/>
    <text x="28" y="32" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">S</text>
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#13AA52"/>
    <path d="M24 6 C24 6 16 16 16 26 C16 32 19.5 37 24 38 C28.5 37 32 32 32 26 C32 16 24 6 24 6Z" fill="white"/>
    <rect x="23" y="36" width="2" height="8" rx="1" fill="white"/>
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#FF4A00"/>
    <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z" fill="white"/>
  </svg>
);

const OneDriveLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#0078D4"/>
    <path d="M8 30 Q8 22 16 22 Q17 16 24 16 Q30 16 32 22 Q38 22 40 28 Q40 34 34 34 H14 Q8 34 8 30Z" fill="white"/>
    <path d="M20 26 Q20 20 26 20 Q30 20 32 24 Q36 24 38 28 Q38 32 34 32 H22 Q18 32 18 28Z" fill="#83BEEC"/>
  </svg>
);

const AirtableLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="8" fill="#18BFFF"/>
    <rect x="8" y="14" width="32" height="8" rx="2" fill="white"/>
    <rect x="8" y="26" width="14" height="8" rx="2" fill="white" opacity="0.85"/>
    <rect x="26" y="26" width="14" height="8" rx="2" fill="white" opacity="0.85"/>
  </svg>
);

/* ─── Integration list ───────────────────────────────────────────── */

type Integration = { label: string; logo: React.ReactNode };

const row1: Integration[] = [
  { label: "Google Drive",    logo: <GoogleDriveLogo /> },
  { label: "Google Calendar", logo: <GoogleCalendarLogo /> },
  { label: "Google Chat",     logo: <GoogleChatLogo /> },
  { label: "Google Sheets",   logo: <GoogleSheetsLogo /> },
  { label: "Google Docs",     logo: <GoogleDocsLogo /> },
  { label: "Microsoft Teams", logo: <TeamLogo /> },
  { label: "WhatsApp",        logo: <WhatsAppLogo /> },
  { label: "Slack",           logo: <SlackLogo /> },
];

const row2: Integration[] = [
  { label: "BigQuery",    logo: <BigQueryLogo /> },
  { label: "PostgreSQL",  logo: <PostgresLogo /> },
  { label: "MySQL",       logo: <MySQLLogo /> },
  { label: "MongoDB",     logo: <MongoDBLogo /> },
  { label: "Excel",       logo: <ExcelLogo /> },
  { label: "OneDrive",    logo: <OneDriveLogo /> },
  { label: "Notion",      logo: <NotionLogo /> },
  { label: "SharePoint",  logo: <SharePointLogo /> },
  { label: "Airtable",    logo: <AirtableLogo /> },
  { label: "Zapier",      logo: <ZapierLogo /> },
];

function IntegrationCard({ label, logo }: Integration) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-2 bg-white border border-[#E2E8F0] rounded-2xl px-5 py-4 w-28 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {logo}
      <span className="text-[11px] font-medium text-[#64748B] text-center leading-tight">{label}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Integration[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-3 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((item, i) => (
          <IntegrationCard key={`${item.label}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────── */

export default function Integrations() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">Integrações</p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0F] leading-tight max-w-xl">
            Conectamos com as ferramentas que você já usa
          </h2>
          <p className="text-[#64748B] text-base max-w-xs sm:text-right">
            Sem migrar dados, sem abandonar sistemas. O assistente se encaixa no seu fluxo atual.
          </p>
        </div>
      </div>

      <div className="marquee-container flex flex-col gap-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
