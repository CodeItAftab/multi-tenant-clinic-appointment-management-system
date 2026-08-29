import {
    HeartPulse,
    Bone,
    Baby,
    Brain,
    Stethoscope,
    Eye,
    Smile,
    Syringe,
    Activity,
    Droplets,
    Sparkles,
    Ear,
    Users,
    Wind,
    Dumbbell,
    Pill,
    ScanLine,
    Filter,
    Venus,
    Scissors,
    BrainCircuit,
    FlaskConical,
    TestTube,
    PersonStanding,
    Droplet,
    Wand2,
    Siren,
    BedDouble,
    PillBottle,
    Apple,
    HeartHandshake,
    Scale,
    UserRound,
    Moon,
    ShieldCheck,
    Ambulance,
    Microscope,
    type LucideIcon,
} from "lucide-react";

export type Service = {
    icon: LucideIcon;
    title: string;
    desc: string;
    price: string;
    category: "General" | "Specialist" | "Diagnostics";
};

export const services: Service[] = [
    {
        icon: HeartPulse,
        title: "Cardiology",
        desc: "Comprehensive heart care including ECG, angiography, and preventive cardiac screening.",
        price: "Starts at ₹500",
        category: "Specialist",
    },
    {
        icon: Bone,
        title: "Orthopedics",
        desc: "Treatment for bone, joint, and muscle conditions — from fractures to joint replacement.",
        price: "Starts at ₹600",
        category: "Specialist",
    },
    {
        icon: Baby,
        title: "Pediatrics",
        desc: "Complete child healthcare covering vaccinations, growth monitoring, and illness care.",
        price: "Starts at ₹400",
        category: "General",
    },
    {
        icon: Brain,
        title: "Neurology",
        desc: "Diagnosis and treatment of brain, spine, and nervous system disorders.",
        price: "Starts at ₹700",
        category: "Specialist",
    },
    {
        icon: Stethoscope,
        title: "General Medicine",
        desc: "Routine check-ups, fever, infections, and everyday health concerns handled with care.",
        price: "Starts at ₹350",
        category: "General",
    },
    {
        icon: Eye,
        title: "Ophthalmology",
        desc: "Complete eye care including vision testing, cataract, and retina consultations.",
        price: "Starts at ₹450",
        category: "Specialist",
    },
    {
        icon: Smile,
        title: "Dental Care",
        desc: "From routine cleanings to root canals, crowns, and orthodontic consultations.",
        price: "Starts at ₹500",
        category: "General",
    },
    {
        icon: Syringe,
        title: "Vaccination",
        desc: "Safe, scheduled immunization services for children, adults, and travel needs.",
        price: "Starts at ₹300",
        category: "General",
    },
    {
        icon: Activity,
        title: "Diagnostics & Labs",
        desc: "Accurate lab testing, imaging, and health checkup packages under one roof.",
        price: "Starts at ₹250",
        category: "Diagnostics",
    },
    {
        icon: Droplets,
        title: "Urology",
        desc: "Diagnosis and treatment of urinary tract and male reproductive system conditions.",
        price: "Starts at ₹550",
        category: "Specialist",
    },
    {
        icon: Sparkles,
        title: "Dermatology",
        desc: "Skin, hair, and nail care including acne, allergies, and cosmetic dermatology.",
        price: "Starts at ₹450",
        category: "Specialist",
    },
    {
        icon: Ear,
        title: "ENT (Ear, Nose & Throat)",
        desc: "Treatment for hearing issues, sinus problems, throat infections, and related conditions.",
        price: "Starts at ₹400",
        category: "Specialist",
    },
    {
        icon: Users,
        title: "Psychiatry & Counseling",
        desc: "Confidential mental health support, therapy, and psychiatric consultations.",
        price: "Starts at ₹600",
        category: "Specialist",
    },
    {
        icon: Wind,
        title: "Pulmonology",
        desc: "Diagnosis and management of asthma, COPD, and other respiratory conditions.",
        price: "Starts at ₹550",
        category: "Specialist",
    },
    {
        icon: Dumbbell,
        title: "Physiotherapy",
        desc: "Personalized rehabilitation programs for injury recovery, pain, and mobility.",
        price: "Starts at ₹350",
        category: "General",
    },
    {
        icon: Pill,
        title: "Gastroenterology",
        desc: "Care for digestive system disorders including the stomach, liver, and intestines.",
        price: "Starts at ₹650",
        category: "Specialist",
    },
    {
        icon: ScanLine,
        title: "Radiology & Imaging",
        desc: "X-ray, ultrasound, CT, and MRI scans with fast, accurate reporting.",
        price: "Starts at ₹500",
        category: "Diagnostics",
    },
    {
        icon: Filter,
        title: "Nephrology",
        desc: "Kidney disease management, dialysis, and related treatment plans.",
        price: "Starts at ₹700",
        category: "Specialist",
    },
    {
        icon: Venus,
        title: "Obstetrics & Gynecology",
        desc: "Complete women's healthcare covering pregnancy, childbirth, and reproductive health.",
        price: "Starts at ₹550",
        category: "Specialist",
    },
    {
        icon: Scissors,
        title: "General & Laparoscopic Surgery",
        desc: "Minimally invasive and open surgical procedures for a wide range of conditions.",
        price: "Starts at ₹800",
        category: "Specialist",
    },
    {
        icon: BrainCircuit,
        title: "Neurosurgery",
        desc: "Surgical treatment for brain, spine, and nervous system disorders.",
        price: "Starts at ₹1200",
        category: "Specialist",
    },
    {
        icon: HeartPulse,
        title: "Cardiac Surgery (CTVS)",
        desc: "Advanced surgical care for heart and chest conditions, including bypass surgery.",
        price: "Starts at ₹1500",
        category: "Specialist",
    },
    {
        icon: FlaskConical,
        title: "Oncology (Cancer Care)",
        desc: "Comprehensive cancer diagnosis, chemotherapy, and treatment planning.",
        price: "Starts at ₹900",
        category: "Specialist",
    },
    {
        icon: TestTube,
        title: "Endocrinology",
        desc: "Management of diabetes, thyroid, and other hormone-related conditions.",
        price: "Starts at ₹500",
        category: "Specialist",
    },
    {
        icon: PersonStanding,
        title: "Rheumatology",
        desc: "Diagnosis and treatment of arthritis, joint pain, and autoimmune conditions.",
        price: "Starts at ₹550",
        category: "Specialist",
    },
    {
        icon: Droplet,
        title: "Hematology",
        desc: "Care for blood disorders including anemia, clotting issues, and blood cancers.",
        price: "Starts at ₹600",
        category: "Specialist",
    },
    {
        icon: Wand2,
        title: "Plastic & Cosmetic Surgery",
        desc: "Reconstructive and cosmetic procedures performed by experienced surgeons.",
        price: "Starts at ₹1000",
        category: "Specialist",
    },
    {
        icon: Siren,
        title: "Emergency & Trauma Care",
        desc: "24/7 emergency response for accidents, trauma, and critical medical situations.",
        price: "As per case",
        category: "General",
    },
    {
        icon: BedDouble,
        title: "Critical Care (ICU)",
        desc: "Round-the-clock intensive monitoring and treatment for critically ill patients.",
        price: "As per case",
        category: "General",
    },
    {
        icon: PillBottle,
        title: "Pharmacy Services",
        desc: "In-house pharmacy with genuine medicines and quick prescription fulfillment.",
        price: "As per prescription",
        category: "General",
    },
    {
        icon: Apple,
        title: "Dietetics & Nutrition",
        desc: "Personalized diet plans and nutrition counseling for health and recovery goals.",
        price: "Starts at ₹300",
        category: "General",
    },
    {
        icon: HeartHandshake,
        title: "Palliative & Home Care",
        desc: "Compassionate care and support for patients with serious or chronic illness.",
        price: "Starts at ₹700",
        category: "General",
    },
    {
        icon: Scale,
        title: "Bariatric (Weight Loss) Surgery",
        desc: "Surgical and non-surgical solutions for obesity and weight management.",
        price: "Starts at ₹1200",
        category: "Specialist",
    },
    {
        icon: Baby,
        title: "IVF & Fertility Care",
        desc: "Advanced fertility treatments and reproductive assistance for couples.",
        price: "Starts at ₹850",
        category: "Specialist",
    },
    {
        icon: UserRound,
        title: "Geriatric Care",
        desc: "Specialized healthcare focused on the needs of elderly patients.",
        price: "Starts at ₹400",
        category: "General",
    },
    {
        icon: Moon,
        title: "Sleep Medicine",
        desc: "Diagnosis and treatment of sleep disorders including insomnia and sleep apnea.",
        price: "Starts at ₹500",
        category: "Specialist",
    },
];

export const categories = ["All", "General", "Specialist", "Diagnostics"];

export type WhyUsItem = {
    icon: LucideIcon;
    title: string;
    desc: string;
};

export const whyUs: WhyUsItem[] = [
    {
        icon: ShieldCheck,
        title: "Verified Specialists",
        desc: "Every doctor's credentials are checked against official medical registries.",
    },
    {
        icon: Ambulance,
        title: "24/7 Emergency Support",
        desc: "Round-the-clock emergency care whenever you need it most.",
    },
    {
        icon: Microscope,
        title: "Modern Equipment",
        desc: "Advanced diagnostic and treatment technology across all departments.",
    },
];

export const includedItems: string[] = [
    "Upfront, no-surprise consultation fees",
    "Verified doctor credentials & experience",
    "Real-time slot booking, zero waiting",
    "Digital prescription & visit summary",
];

export type Testimonial = {
    name: string;
    role: string;
    quote: string;
    rating: number;
};

export const testimonials: Testimonial[] = [
    {
        name: "Ritika Sharma",
        role: "Cardiology Patient",
        quote:
            "Booking was so simple and the doctor explained everything clearly. No long waiting time at all.",
        rating: 5,
    },
    {
        name: "Amit Verma",
        role: "Orthopedics Patient",
        quote:
            "Great facility with modern equipment. The physiotherapy team helped me recover much faster.",
        rating: 5,
    },
    {
        name: "Sneha Kapoor",
        role: "Pediatrics — Parent",
        quote:
            "Very friendly staff with my kid. Vaccination records were all managed digitally, super convenient.",
        rating: 4,
    },
];

export const insurancePartners: string[] = [
    "Star Health",
    "HDFC Ergo",
    "ICICI Lombard",
    "Niva Bupa",
    "Care Health",
    "National Insurance",
];

export type Faq = {
    q: string;
    a: string;
};

export const faqs: Faq[] = [
    {
        q: "Do I need to pre-register before booking an appointment?",
        a: "No, you can book directly online. A one-time patient profile is created automatically at the time of your first appointment.",
    },
    {
        q: "Is cashless insurance treatment available?",
        a: "Yes, we accept cashless treatment from all major insurance providers listed on this page. Please carry your insurance ID at the time of visit.",
    },
    {
        q: "Can I reschedule or cancel my appointment?",
        a: "Yes, appointments can be rescheduled or cancelled from your dashboard up to 2 hours before the scheduled time, free of charge.",
    },
    {
        q: "Is emergency care available 24/7?",
        a: "Yes, our emergency department and ambulance services operate 24/7, every day of the year.",
    },
];