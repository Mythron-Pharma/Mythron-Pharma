export interface NutritionItem {
  component: string;
  amount: string;
  label?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  focus: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  nutrition: NutritionItem[];
  faq: FAQItem[];
  ingredients: string[];
}

export const products: Product[] = [
  {
    id: "mythclav-lb-625",
    name: "MYTHCLAV LB 625",
    category: "Anti-Infective",
    focus: "AMOXYCILLIN & POTASSIUM CLAVULANATE",
    tagline: "Strong Action. Superior Protection.",
    description: "MYTHCLAV LB 625 is a high-potency broad-spectrum antibiotic formulation combining Amoxycillin 500 mg and Potassium Clavulanate 125 mg IP. Engineered to combat resistant bacterial pathogens, it delivers targeted clinical efficacy for respiratory, urinary, and soft tissue infections with a high safety and tolerance profile.",
    image: "/prod-mythclav.jpg",
    benefits: [
      "Broad spectrum antibiotic action against resistant bacterial strains",
      "High efficacy in Respiratory, Urinary, and ENT infections",
      "Effective treatment for skin & soft tissue clinical infections",
      "Faster recovery with superior gastrointestinal tolerance"
    ],
    nutrition: [
      { component: "Amoxycillin", amount: "500 mg", label: "IP" },
      { component: "Potassium Clavulanate", amount: "125 mg", label: "IP" }
    ],
    faq: [
      { question: "What are the primary clinical indications for MYTHCLAV LB 625?", answer: "It is indicated for lower and upper respiratory tract infections, urinary tract infections, skin & soft tissue infections, and ear, nose & throat (ENT) infections." },
      { question: "How does Potassium Clavulanate enhance Amoxycillin?", answer: "Potassium Clavulanate acts as a beta-lactamase inhibitor, protecting Amoxycillin from enzymatic degradation by resistant bacterial strains." }
    ],
    ingredients: ["AMOXYCILLIN 500MG", "POTASSIUM CLAVULANATE 125MG", "TABLETS IP"]
  },
  {
    id: "fermyth-xt",
    name: "FERMYTH-XT",
    category: "Hematology",
    focus: "IRON & FOLIC ACID SUPPORT",
    tagline: "The Right Combination for Iron Deficiency & Anemia.",
    description: "FERMYTH-XT combines Ferrous Ascorbate equivalent to 100mg Elemental Iron with 1.5mg Folic Acid in film-coated tablets. Specially formulated to treat iron deficiency anemia, support pregnancy health, boost hemoglobin synthesis, and reduce chronic fatigue.",
    image: "/prod-fermyth.jpg",
    benefits: [
      "Helps prevent iron deficiency and supports red blood cell formation",
      "Essential for maternal and fetal well-being in pregnancy health",
      "Fights fatigue, weakness, and improves daily energy levels",
      "Superior iron absorption with Ferrous Ascorbate for enhanced tolerance"
    ],
    nutrition: [
      { component: "Ferrous Ascorbate (eq. to Elemental Iron)", amount: "100 mg", label: "" },
      { component: "Folic Acid", amount: "1.5 mg", label: "Film Coated" }
    ],
    faq: [
      { question: "Why is Ferrous Ascorbate preferred in FERMYTH-XT?", answer: "Ferrous Ascorbate offers significantly higher bioavailability and lower gastrointestinal side effects compared to conventional iron salts." },
      { question: "Is FERMYTH-XT suitable during pregnancy?", answer: "Yes, it provides essential iron and folic acid support crucial for maternal health and fetal neural tube development." }
    ],
    ingredients: ["FERROUS ASCORBATE 100MG", "FOLIC ACID 1.5MG", "ELEMENTAL IRON"]
  },
  {
    id: "mythcal-xt",
    name: "MYTHCAL-XT",
    category: "Orthopedics",
    focus: "ADVANCED CALCIUM & VITAMIN FORMULA",
    tagline: "Stronger Bones, Healthier Life...",
    description: "MYTHCAL-XT is an advanced skeletal and neuromuscular support formulation containing Calcium Carbonate (500mg elemental calcium), Vitamin D3 (2000 IU), Mecobalamin (1500 mcg), L-Methylfolate Calcium (1 mg), and Pyridoxal-5-Phosphate (20 mg). Designed for bone mineralization, fracture recovery, and joint vitality.",
    image: "/prod-mythcal.jpg",
    benefits: [
      "Helps in building and maintaining strong bones and teeth",
      "Improves calcium absorption with high-potency Vitamin D3 (2000 IU)",
      "Supports nerve health and energy metabolism with Mecobalamin (B12)",
      "Promotes bone mineralization in Osteoporosis and post-menopausal care"
    ],
    nutrition: [
      { component: "Calcium Carbonate (eq. to Elemental Calcium)", amount: "500 mg", label: "1250 mg IP" },
      { component: "Vitamin D3", amount: "2000 IU", label: "IP" },
      { component: "Mecobalamin", amount: "1500 mcg", label: "IP" },
      { component: "L-Methylfolate Calcium", amount: "1 mg", label: "" },
      { component: "Pyridoxal-5-Phosphate", amount: "20 mg", label: "" }
    ],
    faq: [
      { question: "What clinical conditions is MYTHCAL-XT recommended for?", answer: "It is recommended for Osteoporosis, calcium deficiency, pregnancy & lactation, post-menopausal skeletal support, growing children, and fracture recovery." },
      { question: "Why does MYTHCAL-XT include L-Methylfolate and B6?", answer: "They reduce plasma homocysteine levels and support overall red blood cell formation and bone collagen matrix synthesis." }
    ],
    ingredients: ["CALCIUM CARBONATE 500MG", "VITAMIN D3 2000IU", "MECOBALAMIN 1500MCG", "L-METHYLFOLATE 1MG", "PYRIDOXAL-5-PHOSPHATE 20MG"]
  },
  {
    id: "gesthron-sr-200",
    name: "GESTHRON-SR 200",
    category: "Gynecological Care",
    focus: "NATURAL MICRONISED PROGESTERONE",
    tagline: "New Life Begins for a Healthy Tomorrow...",
    description: "GESTHRON-SR 200 contains 200mg of Natural Micronised Progesterone in sustained-release film-coated tablets. Specially engineered for luteal phase support, preventing threatened miscarriage, supporting pregnancy maintenance, and managing progesterone deficiencies.",
    image: "/prod-gesthron.jpg",
    benefits: [
      "Sustained-release natural micronised progesterone 200mg",
      "Critical luteal phase support in pregnancy and ART protocols",
      "Prevents progesterone deficiency and maintains endometrial health",
      "Optimized bio-availability with sustained therapeutic plasma levels"
    ],
    nutrition: [
      { component: "Progesterone (Natural Micronised)", amount: "200 mg", label: "IP Sustained Release" }
    ],
    faq: [
      { question: "What is the benefit of the Sustained Release (SR) technology in GESTHRON-SR 200?", answer: "The SR technology ensures uniform, round-the-clock progesterone release, avoiding hormone spikes and improving patient compliance." },
      { question: "Is GESTHRON-SR 200 prescribed during pregnancy?", answer: "Yes, it is widely prescribed for luteal support during early pregnancy and in high-risk pregnancies with progesterone insufficiency." }
    ],
    ingredients: ["PROGESTERONE 200MG", "NATURAL MICRONISED", "SUSTAINED RELEASE"]
  }
];
