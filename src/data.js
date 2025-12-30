const products = [
  {
    id: 1,
    name: "Website Builder Pro",
    description: "Create stunning websites with our advanced builder",
    features: [
      "Drag & Drop Interface",
      "SEO Optimized",
      "Mobile Responsive",
      "24/7 Support",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    name: "CMS Enterprise",
    description: "Powerful content management system for enterprises",
    features: [
      "Multi-language Support",
      "Advanced Security",
      "Custom Workflows",
      "API Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    name: "LMS Platform",
    description: "Complete learning management solution",
    features: [
      "Course Management",
      "Progress Tracking",
      "Certificates",
      "Interactive Quizzes",
    ],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    name: "ERP Solution",
    description: "Streamline your business operations",
    features: [
      "Inventory Management",
      "Financial Reports",
      "HR Module",
      "Real-time Analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
  },
];

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: ["5 Projects", "10GB Storage", "Basic Support", "Core Features"],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    features: [
      "Unlimited Projects",
      "100GB Storage",
      "Priority Support",
      "Advanced Features",
      "API Access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    features: [
      "Unlimited Everything",
      "1TB Storage",
      "24/7 Dedicated Support",
      "Custom Integration",
      "White Label",
      "SLA Guarantee",
    ],
  },
];
export { products, plans };