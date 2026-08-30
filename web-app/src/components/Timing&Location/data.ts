export type DaySchedule = {
    day: string;
    shortDay: string;
    hours: string;
    closed?: boolean;
};

// Used by the live "Open Now" status pill in the hero — keep this in
// sync with generalOpd below if you change timings.
export const generalOpd: DaySchedule[] = [
    { day: "Monday", shortDay: "Mon", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Tuesday", shortDay: "Tue", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Wednesday", shortDay: "Wed", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Thursday", shortDay: "Thu", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Friday", shortDay: "Fri", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Saturday", shortDay: "Sat", hours: "9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM" },
    { day: "Sunday", shortDay: "Sun", hours: "9:00 AM – 12:00 PM (limited OPD)" },
];

export type ServiceHours = {
    title: string;
    hours: string;
    note: string;
    alwaysOpen?: boolean;
};

export const otherHours: ServiceHours[] = [
    {
        title: "Emergency & Trauma",
        hours: "Open 24 hours",
        note: "Every day, including holidays — walk in any time.",
        alwaysOpen: true,
    },
    {
        title: "Pharmacy",
        hours: "Open 24 hours",
        note: "In-house pharmacy, no prescription delays.",
        alwaysOpen: true,
    },
    {
        title: "Diagnostics & Labs",
        hours: "7:00 AM – 9:00 PM",
        note: "Mon–Sat. Sundays 8:00 AM – 2:00 PM.",
    },
    {
        title: "Specialist OPD",
        hours: "By appointment",
        note: "Cardiology, Neurology & Ortho: Tue, Thu, Sat.",
    },
];

export const locationInfo = {
    name: "HOSPITAL MANAGEMENT SYSTEM",
    addressLine1: "Dehri-on-sone, Near Bus Stand Chowk",
    addressLine2: "Rohtas, Bihar 821308",
    phone: "+91 12345 67890",
    phoneHref: "tel:+911234567890",
    email: "hms@care.exampe",
  
    mapQuery: "Dehri-on-Sone, Rohtas, Bihar",
    mapEmbedSrc:
        "https://maps.google.com/maps?q=Dehri-on-Sone%2C%20Rohtas%2C%20Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Dehri-on-Sone,Rohtas,Bihar",
};

export type QuickFact = {
    label: string;
    value: string;
};

export const quickFacts: QuickFact[] = [
    { label: "Parking", value: "Free on-site parking for patients & visitors" },
    { label: "Wheelchair Access", value: "Fully accessible entrance, lifts & wards" },
    { label: "Ambulance", value: "24/7 dispatch, average response 12 minutes" },
    { label: "Admitted Patient Visiting", value: "10:00 AM – 12:00 PM & 5:00 PM – 7:00 PM" },
    { label: "ID Requirement", value: "Carry a government photo ID for registration" },
    { label: "Nearest Landmark", value: "5 min from Purnia Junction Railway Station" },
];

export type VisitFaq = {
    q: string;
    a: string;
};

export const visitFaqs: VisitFaq[] = [
    {
        q: "Do I need an appointment for General OPD?",
        a: "Walk-ins are welcome for General OPD, though booking a slot online skips the queue. Specialist OPD (Cardiology, Neurology, Ortho) is by appointment only.",
    },
    {
        q: "Is parking free?",
        a: "Yes, on-site parking is free for both patients and visitors, with dedicated space near the main entrance.",
    },
    {
        q: "What should I bring for my first visit?",
        a: "A government photo ID, any previous prescriptions or reports, and your insurance card if applicable.",
    },
    {
        q: "Can I visit an admitted patient outside visiting hours?",
        a: "General visiting hours are 10:00 AM – 12:00 PM and 5:00 PM – 7:00 PM. For ICU or exceptions, please check with the nursing station on the floor.",
    },
];