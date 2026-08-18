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
  packing: string;
}

export const products: Product[] = [
  {
    id: "mythclav-lb-625",
    name: "MYTHCLAV LB 625",
    category: "Gynecology",
    focus: "AMOXYCILLIN 500 MG + POTASSIUM CLAVULANATE 125 MG",
    tagline: "Strong Action. Superior Protection.",
    description: "MYTHCLAV LB 625 combines Amoxycillin 500 mg and Potassium Clavulanate 125 mg Tablets IP. Designed for powerful broad-spectrum antimicrobial action, it effectively combats resistant bacterial strains with fast clinical recovery and excellent safety & tolerance in gynecological and systemic care.",
    image: "/prod-mythclav.png",
    packing: "10x10 Strip Packing",
    benefits: [
      "Broad spectrum antibiotic with high bactericidal potency",
      "Effective against resistant bacterial strains with Clavulanic Acid protection",
      "Faster recovery in Respiratory, Urinary, ENT, and Soft Tissue infections",
      "Well tolerated and safe profile with high GI compatibility"
    ],
    nutrition: [
      { component: "Amoxycillin", amount: "500 mg", label: "IP" },
      { component: "Potassium Clavulanate", amount: "125 mg", label: "IP" }
    ],
    faq: [
      { question: "What are the primary clinical indications for MYTHCLAV LB 625?", answer: "Indications include Respiratory Tract Infections, Urinary Tract Infections, Skin & Soft Tissue Infections, and Ear, Nose & Throat (ENT) Infections." },
      { question: "How does Potassium Clavulanate prevent antibiotic resistance?", answer: "Potassium Clavulanate acts as a potent beta-lactamase inhibitor, preventing enzymatic degradation of Amoxycillin by resistant bacteria." },
      { question: "What packing configuration is MYTHCLAV LB 625 supplied in?", answer: "It is supplied in a premium 10x10 Strip Packing manufactured under WHO-GMP, ISO, and GLP certified standards." }
    ],
    ingredients: ["AMOXYCILLIN 500MG", "POTASSIUM CLAVULANATE 125MG", "TABLETS IP"]
  },
  {
    id: "fermyth-xt",
    name: "FERMYTH-XT",
    category: "Gynecology",
    focus: "FERROUS ASCORBATE 100 MG + FOLIC ACID 1.5 MG",
    tagline: "The Right Combination for Iron Deficiency & Anemia.",
    description: "FERMYTH-XT provides Ferrous Ascorbate equivalent to 100 mg Elemental Iron paired with 1.5 mg Folic Acid in film-coated tablets. Specially formulated for pregnancy health, maternal & fetal well-being, boosting hemoglobin synthesis, and reducing chronic fatigue.",
    image: "/prod-fermyth.png",
    packing: "10 x 1 x 10 Tablets (Red Strip Pack)",
    benefits: [
      "Helps prevent iron deficiency & supports healthy red blood cell formation",
      "Supports pregnancy health, essential for maternal & fetal well-being",
      "Fights fatigue & weakness, helping improve energy & reduce tiredness",
      "Better iron absorption with Ferrous Ascorbate for improved tolerance & bioavailability"
    ],
    nutrition: [
      { component: "Ferrous Ascorbate (eq. to Elemental Iron)", amount: "100 mg", label: "" },
      { component: "Folic Acid", amount: "1.5 mg", label: "Film Coated" }
    ],
    faq: [
      { question: "Why is Ferrous Ascorbate preferred in FERMYTH-XT?", answer: "Ferrous Ascorbate provides superior GI tolerance and significantly higher iron absorption compared to conventional ferric or ferrous salts." },
      { question: "How does FERMYTH-XT support pregnancy health?", answer: "It ensures adequate elemental iron for maternal blood volume expansion and delivers 1.5 mg Folic Acid essential for fetal neural tube development." },
      { question: "What is the packing format for FERMYTH-XT?", answer: "It comes in a 10 x 1 x 10 Film Coated Red Strip Pack for optimal ingredient stability." }
    ],
    ingredients: ["FERROUS ASCORBATE 100MG", "FOLIC ACID 1.5MG", "ELEMENTAL IRON"]
  },
  {
    id: "mythcal-xt",
    name: "MYTHCAL-XT",
    category: "Gynecology",
    focus: "ADVANCED CALCIUM & VITAMIN FORMULA",
    tagline: "Stronger Bones, Healthier Life...",
    description: "MYTHCAL-XT is a comprehensive bone and neuromuscular support formula containing Calcium Carbonate IP 1250 mg (eq. to Elemental Calcium 500 mg), Vitamin D3 IP 2000 IU, Mecobalamin IP 1500 mcg, L-Methylfolate Calcium 1 mg, and Pyridoxal-5-Phosphate 20 mg.",
    image: "/prod-mythcal.png",
    packing: "10 x 10 Tablets (Blister Pack)",
    benefits: [
      "Helps in building & maintaining strong bones & teeth",
      "Improves Calcium absorption with high-potency Vitamin D3 (2000 IU)",
      "Supports nerve health & energy metabolism with Mecobalamin B12 (1500 mcg)",
      "Helps in bone mineralization & overall skeletal health in Osteoporosis & Post Menopause",
      "Supports red blood cell formation & reduces fatigue (L-Methylfolate & B6)"
    ],
    nutrition: [
      { component: "Calcium Carbonate I.P. (eq. to Elemental Calcium 500 mg)", amount: "1250 mg", label: "I.P." },
      { component: "Vitamin D3 I.P.", amount: "2000 IU", label: "I.P." },
      { component: "Mecobalamin I.P.", amount: "1500 mcg", label: "I.P." },
      { component: "L-Methylfolate Calcium", amount: "1 mg", label: "" },
      { component: "Pyridoxal-5-Phosphate", amount: "20 mg", label: "" }
    ],
    faq: [
      { question: "What are the clinical indications for MYTHCAL-XT?", answer: "MYTHCAL-XT is indicated for Osteoporosis, Calcium Deficiency, Pregnancy & Lactation, Post Menopausal Care, Growing Children, and Fracture Recovery." },
      { question: "Why are Vitamin D3, B12, and Folate included with Calcium?", answer: "Vitamin D3 maximizes calcium intestinal absorption, Mecobalamin protects nerve pathways, and L-Methylfolate + Pyridoxal-5-Phosphate regulate homocysteine and bone collagen synthesis." },
      { question: "What is the packing style of MYTHCAL-XT?", answer: "Supplied in a 10 x 10 Tablets Blister Pack." }
    ],
    ingredients: ["CALCIUM CARBONATE 1250MG", "VITAMIN D3 2000IU", "MECOBALAMIN 1500MCG", "L-METHYLFOLATE 1MG", "PYRIDOXAL-5-PHOSPHATE 20MG"]
  },
  {
    id: "gesthron-sr-200",
    name: "GESTHRON-SR 200",
    category: "Gynecology",
    focus: "NATURAL MICRONISED PROGESTERONE 200 MG",
    tagline: "New Life Begins for a Healthy Tomorrow...",
    description: "GESTHRON-SR 200 contains 200 mg of Natural Micronised Progesterone I.P. in sustained-release film-coated tablets. Engineered for luteal phase support, preventing threatened miscarriage, maintaining pregnancy health, and addressing progesterone insufficiency.",
    image: "/prod-gesthron.png",
    packing: "10 x 1 x 10 Tablets",
    benefits: [
      "Natural Micronised Progesterone 200 mg in Sustained Release formulation",
      "Maintains optimal therapeutic progesterone levels round-the-clock",
      "Supports uterine endometrial lining and successful embryo implantation",
      "Prevents threatened and recurrent miscarriage with enhanced compliance"
    ],
    nutrition: [
      { component: "Progesterone (Natural Micronised) I.P.", amount: "200 mg", label: "Sustained Release" }
    ],
    faq: [
      { question: "What is the key advantage of Sustained Release (SR) technology in GESTHRON-SR 200?", answer: "The Sustained Release formulation ensures uniform 24-hour therapeutic plasma progesterone concentration, minimizing hormonal fluctuations and improving safety." },
      { question: "When is GESTHRON-SR 200 prescribed in gynecology?", answer: "It is prescribed for Luteal Phase Support in pregnancy & ART protocols, prevention of threatened or recurrent miscarriage, and progesterone insufficiency." },
      { question: "What is the packaging of GESTHRON-SR 200?", answer: "Supplied in a 10 x 1 x 10 Tablets pack." }
    ],
    ingredients: ["PROGESTERONE 200MG", "NATURAL MICRONISED", "SUSTAINED RELEASE"]
  }
];
