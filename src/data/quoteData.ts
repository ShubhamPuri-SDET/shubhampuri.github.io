export const QUOTE_DATA = {
  services: {
    website: {
      name: "Website",
      basePrice: 0,
      subServices: {
        basic: { name: "Basic Portfolio", price: 5000 },
        business: { name: "Business Website", price: 10000 },
        ecommerce: { name: "E-commerce Website", price: 25000 },
      },
    },
    invitation: {
      name: "Invitation Card",
      basePrice: 0,
      subServices: {
        static: { name: "Static Invitation", price: 500 },
        animated: { name: "Animated Invitation", price: 2000 },
        package: { name: "Full Wedding Package", price: 5000 },
      },
    },
    resume: {
      name: "Resume/CV",
      basePrice: 0,
      subServices: {
        writing: { name: "Resume Writing", price: 1000 },
        ats: { name: "ATS Resume + Cover Letter", price: 2500 },
        portfolio: { name: "Portfolio Website", price: 8000 },
      },
    },
    profile: {
      name: "Profile Optimization",
      basePrice: 1500,
      subServices: {},
    },
    printing: {
      name: "Printing",
      basePrice: 3000,
      subServices: {},
    },
    portfolio: {
      name: "Portfolio Creation",
      basePrice: 4000,
      subServices: {},
    },
  },
  urgency: {
    normal: { name: "Normal Delivery", multiplier: 1 },
    urgent: { name: "Urgent Delivery", multiplier: 1.3 },
  },
  addOns: {
    extraRevisions: { name: "Extra Revisions", price: 500 },
    premiumDesign: { name: "Premium Design", price: 2000 },
    extraPages: { name: "Extra Pages (for website)", price: 1500 },
    animatedTemplate: { name: "Animated Template (for invitation)", price: 1000 },
  },
};
