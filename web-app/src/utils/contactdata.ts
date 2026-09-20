import { Phone, Mail, MapPin, Siren, type LucideIcon } from "lucide-react";


export type ContactMethod = {
    icon: LucideIcon;
    title: string;
    value: string;
    subtitle: string;
    href: string;
    urgent?: boolean;
};

export const contactMethods: ContactMethod[] = [
    {
        icon: Siren,
        title: "Emergency Hotline",
        value: "+91 90000 00000",
        subtitle: "24/7 — for medical emergencies only",
        href: "tel:+919000000000",
        urgent: true,
    },
    {
        icon: Phone,
        title: "Reception & OPD",
        value: "+91 12345 67890",
        subtitle: "Mon–Sat, 9:00 AM – 8:00 PM",
        href: "tel:+911234567890",
    },
    {
        icon: Mail,
        title: "Email Us",
        value: "hms@care.example",
        subtitle: "We reply within 24 hours",
        href: "mailto:hms@care.example",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "Dehri-on-Sone, Rohtas",
        subtitle: "Near Bus Stand Chowk, Bihar 821308",
        href: "https://www.google.com/maps/dir/?api=1&destination=Dehri-on-Sone,Rohtas,Bihar",
    },
];



export type DepartmentContact = {
    department: string;
    phone: string;
    hours: string;
};

export const departmentContacts: DepartmentContact[] = [
    { department: "Reception & General Inquiry", phone: "+91 12345 67890", hours: "9:00 AM – 8:00 PM" },
    { department: "Appointments & OPD Booking", phone: "+91 12345 67891", hours: "9:00 AM – 6:00 PM" },
    { department: "Emergency & Ambulance", phone: "+91 90000 00000", hours: "24/7" },
    { department: "Billing & Insurance Desk", phone: "+91 12345 67892", hours: "9:00 AM – 5:00 PM" },
    { department: "Pharmacy", phone: "+91 12345 67893", hours: "24/7" },
    { department: "Diagnostics & Lab Reports", phone: "+91 12345 67894", hours: "7:00 AM – 9:00 PM" },
    { department: "Feedback & Grievance Cell", phone: "+91 12345 67895", hours: "10:00 AM – 5:00 PM" },
    { department: "Careers / HR", phone: "+91 12345 67896", hours: "10:00 AM – 5:00 PM (Mon–Fri)" },
];


export const formSubjects: string[] = [
    "General Inquiry",
    "Book an Appointment",
    "Billing & Insurance",
    "Feedback / Complaint",
    "Careers",
    "Other",
];



export type ContactFaq = {
    q: string;
    a: string;
};

export const contactFaqs: ContactFaq[] = [
    {
        q: "How soon will I get a reply to my message?",
        a: "General inquiries submitted through this form are answered within 24 hours on working days. For anything urgent, please call the reception number directly.",
    },
    {
        q: "Can I book an appointment through this form?",
        a: "Yes — select \"Book an Appointment\" as the subject and mention your preferred department and date. Our team will confirm your slot by phone.",
    },
    {
        q: "Who do I contact for a billing or insurance query?",
        a: "Reach the Billing & Insurance Desk directly at the number listed above, or select \"Billing & Insurance\" in the form and our team will call you back.",
    },
    {
        q: "I have a complaint about my visit — where do I report it?",
        a: "You can use the Feedback / Complaint option in this form, call the Feedback & Grievance Cell, or speak to the floor supervisor during your visit.",
    },
];