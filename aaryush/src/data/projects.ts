export type Project = {
    id: string;
    title: string;
    // Narrative fields
    value: string; // one-liner value
    problem: string; // problem snapshot (plain language)
    result: string; // result/impact paragraph
    summary: string;
    impact: string[];
    stack: string[];
    details: string[]; // what I built
    metrics?: { label: string; value: string }[];
    links?: { label: string; href: string }[];
};

export const projects: Project[] = [
    {
        id: 'cylerity-underwriting',
        title: 'Cylerity Claims Underwriting Platform',
        value: 'Advance cash to healthcare providers in days, not weeks.',
        problem: 'Clinics wait weeks for claims to pay, creating cash crunches that stall operations.',
        result: 'Providers receive decisions fast and see exactly what was approved and why. The business unlocked financing to scale underwriting confidently.',
        summary: 'A platform that helps healthcare providers get paid faster by advancing payments against insurance claims.',
        impact: [
            'Enabled 8-figure lending facility',
            'Migrated MVP→scale in Azure Data Factory',
            'PHI throughput ≈ $4MM/month',
        ],
        stack: ['Next.js', 'TypeScript', 'Node.js', 'Firebase', 'Firestore', 'SQL Server', 'Azure', 'Azure Data Factory', 'Docker', 'Confluence', 'Jira'],
        details: [
            'Uploads and reviews claim data, then quickly estimates risk and payback timing.',
            'Gives clinics near‑instant decisions so cash arrives in days, not weeks.',
            'Dashboard shows what was approved, what needs attention, and why.',
            'Built to protect patient information and meet healthcare privacy rules.',
            'Helped unlock financing so the business could scale quickly.',
        ],
        metrics: [
            { label: 'AR lead time', value: '≈ 1 day' },
            { label: 'Monthly throughput', value: '$4M+ PHI' },
            { label: 'Financing unlocked', value: '8-figure' },
        ],
        links: [
            { label: 'Company', href: 'https://cylerity.com/' },
        ],
    },
    {
        id: 'skalewin',
        title: 'Skale.win GenAI Interview Platform',
        value: 'Practice realistic interviews and get instant, targeted feedback.',
        problem: 'Job seekers and hiring teams waste time with generic prep and slow review cycles.',
        result: 'Candidates get better faster with role‑specific coaching. Teams review answers quickly and keep everything in one place.',
        summary: 'Practice interviews and faster candidate reviews with realistic conversations and instant feedback.',
        impact: ['~100 beta users', 'GTM Q3 2025', 'Rapid iteration via prompt tuning'],
        stack: ['FastAPI', 'Python', 'Next.js', 'TypeScript', 'OpenRouter', 'Perplexity', 'ElevenLabs', 'Kubernetes', 'Azure', 'PostgreSQL'],
        details: [
            'Speak your answers and get helpful guidance on clarity, structure, and depth.',
            'Generate role‑specific questions in one click and tailor resumes to job posts.',
            'Hiring teams can review answers quickly and keep everything in one place.',
            'Designed to adapt as AI tools change without locking users in.',
        ],
        metrics: [
            { label: 'Beta users', value: '~100' },
            { label: 'GTM target', value: 'Q3 2025' },
            { label: 'Iteration speed', value: 'On-Demand' },
        ],
    },
    {
        id: 'umn-launchpad',
        title: 'UMN Discovery Launchpad',
        value: 'Turn interviews and documents into a clear plan of next steps.',
        problem: 'Early founders juggle scattered notes and docs; it’s hard to know what to do next.',
        result: 'Teams see gaps at a glance and get timely nudges when mentor help will matter most. Private data stays private.',
        summary: 'A dashboard for founders and mentors that turns interviews and documents into a simple plan of next steps.',
        impact: ['Automated gap detection', 'Timely expert nudges', 'Secure multi-tenant data'],
        stack: ['Next.js', 'TypeScript', 'Vercel', 'PostgreSQL', 'Auth', 'Stripe'],
        details: [
            'Brings pitch decks, research, and mentor notes into one organized view.',
            'Highlights missing information and suggests what to do next.',
            'Tells mentors where their help will have the most impact.',
            'Built with privacy in mind for early‑stage companies.',
        ],
        metrics: [
            { label: 'Gap detection', value: 'Automated' },
            { label: 'Content Delivery', value: 'Real-time' },
            { label: 'Hosting', value: 'Vercel' },
        ],
    },
    {
        id: 'univise',
        title: 'Univise (Academic Advisor AI)',
        value: 'Answer advising questions in plain language with links to official pages.',
        problem: 'Students struggle to find concrete answers across scattered university docs.',
        result: 'Quick answers with source links boosted adoption and saved advisors time.',
        summary: 'A student helper that answers common advising questions and points to the right university pages.',
        impact: ['2,000 users in week one', 'Best pitch at Transcend'],
        stack: ['RAG', 'LLMs', 'Next.js', 'TypeScript', 'Pinecone', 'LangChain'],
        details: [
            'Finds information about courses, deadlines, and policies in plain language.',
            'Grew quickly on campus thanks to word of mouth.',
            'Built with RAG and LLMs to be fast and accurate.',
        ],
        metrics: [
            { label: 'Week‑1 users', value: '2,000' },
            { label: 'Recognition', value: 'Best Pitch' },
            { label: 'Adoption', value: 'Viral on Campus' },
        ],
    },
    {
        id: 'smartbenai',
        title: 'SmartBenAI Claims Adjudication Automation',
        value: 'Extract key fields from claim documents to cut manual data entry.',
        problem: 'TPAs spend hours re‑typing claim data from noisy scans.',
        result: 'Clean, structured claim data with human checks where needed; built for healthcare privacy standards.',
        summary: 'Reads insurance claim documents and pulls out the important fields to reduce manual data entry.',
        impact: ['High accuracy parsing', 'Compliance-first design'],
        stack: ['Gemini Vision', 'Google Cloud', 'Azure', 'Docker', 'Next.js'],
        details: [
            'Users upload PDFs or images and receive clean, structured claim data.',
            'Flags low‑confidence items for a quick human check to avoid mistakes.',
            'Built for healthcare standards so sensitive data stays protected.',
        ],
        metrics: [
            { label: 'Accuracy', value: 'High' },
            { label: 'Compliance', value: 'HIPAA-ready' },
            { label: 'Status', value: 'Shelved' },
        ],
    },
];
