export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  brief: string;
  problem: string;
  solution: string;
  empathize: {
    title: string;
    content: string;
    insights: string[];
  };
  define: {
    title: string;
    content: string;
    findings: string[];
  };
  ideate: {
    title: string;
    content: string;
    concepts: string[];
  };
  prototype: {
    title: string;
    content: string;
    components: string[];
  };
  test: {
    title: string;
    content: string;
    improvements: string[];
  };
  screens: string[];
  figmaLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: "practical-design-test",
    title: "Practical Design Test",
    category: "UI Design • Problem Solving",
    description: "A practical design assessment focused on UI design execution, layout skills, and visual hierarchy",
    thumbnail: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    brief: "This project was a practical design assessment focused on evaluating UI design execution, layout skills, visual hierarchy, and the ability to solve design challenges under constraints.",
    problem: "Design a clear, functional interface that effectively communicates information while balancing usability, brand alignment, and practical user needs.",
    solution: "Develop a simple, visually structured layout using clear typography, intuitive spacing, and easily scannable content. Use component consistency to improve usability.",
    empathize: {
      title: "Understanding User Expectations",
      content: "Reviewed similar UI interfaces to understand patterns and user expectations. Identified pain points from typical design test tasks including readability, spacing, and alignment issues.",
      insights: [
        "Users expect clear visual hierarchy in interfaces",
        "Readability is crucial for quick information scanning",
        "Consistent spacing improves perceived quality",
        "Alignment issues create visual tension"
      ]
    },
    define: {
      title: "Defining Core Requirements",
      content: "Users need an interface that is easy to scan, visually balanced, and consistent with modern UI standards.",
      findings: [
        "Clear typography hierarchy is essential",
        "Grid alignment improves visual consistency",
        "Whitespace enhances readability",
        "Component consistency builds trust"
      ]
    },
    ideate: {
      title: "Exploring Layout Directions",
      content: "Explored multiple layout directions and visual concepts focusing on clarity and minimalism.",
      concepts: [
        "Multiple layout directions with varying hierarchy",
        "Visual concepts emphasizing clarity",
        "Minimalist approaches to reduce cognitive load",
        "Component-based design system"
      ]
    },
    prototype: {
      title: "Creating Refined UI",
      content: "Created refined UI screens with consistent spacing, grid alignment, visual hierarchy, and color balance.",
      components: [
        "Consistent spacing system implementation",
        "Grid-aligned component layouts",
        "Visual hierarchy through typography",
        "Balanced color palette application"
      ]
    },
    test: {
      title: "Quality Assurance",
      content: "Checked alignment, scale, and overall usability. Made improvements to spacing, color balance, and readability.",
      improvements: [
        "Refined spacing for better rhythm",
        "Improved color contrast for accessibility",
        "Enhanced readability through typography adjustments",
        "Perfected alignment across all components"
      ]
    },
    screens: [
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674509036252-5a517959a3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    figmaLink: "https://www.figma.com/design/your-practical-design-test",
    liveLink: "https://your-practical-design-test.example.com"
  },
  {
    id: "starbucks-redesign",
    title: "Starbucks Web UI Redesign",
    category: "Web Design • Brand Consistency",
    description: "A modern redesign of the Starbucks website interface focused on enhancing usability and visual consistency",
    thumbnail: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    brief: "A modern redesign of the Starbucks website interface, focused on enhancing usability, improving visual consistency, and elevating the digital brand experience.",
    problem: "The existing interface lacked modern visual appeal and needed improved flow, stronger typography, and better product visibility.",
    solution: "Redesign the layout with a structured grid, updated visuals, stronger hierarchy, and a UI style aligned with Starbucks' established branding.",
    empathize: {
      title: "Understanding Coffee Brand Expectations",
      content: "Examined user expectations for coffee brand websites. Analyzed patterns from Starbucks competitors and e-commerce design trends.",
      insights: [
        "Users expect premium visual experience from coffee brands",
        "Quick access to menu is a top priority",
        "Rewards program should be prominent",
        "Store locator is frequently used"
      ]
    },
    define: {
      title: "Defining User Needs",
      content: "Users want quick access to drinks, menu, rewards, and store locations. The website must feel premium yet simple.",
      findings: [
        "Navigation must be intuitive and accessible",
        "Product imagery drives engagement",
        "Brand consistency builds trust",
        "Premium feel without complexity"
      ]
    },
    ideate: {
      title: "Conceptualizing the Redesign",
      content: "Generated concepts around hero sections, product modules, navigation, and brand visuals.",
      concepts: [
        "Clean hero banner with seasonal promotions",
        "Product spotlight sections with rich imagery",
        "Modern navigation with mega menu",
        "Improved typography system"
      ]
    },
    prototype: {
      title: "Building the Web Interface",
      content: "Developed a polished web UI with clean hero banner, product spotlight sections, modern navigation, and improved typography.",
      components: [
        "Hero banner with brand imagery",
        "Product card components",
        "Navigation system with dropdown menus",
        "Typography and spacing system"
      ]
    },
    test: {
      title: "Reviewing Design Quality",
      content: "Reviewed prototype for visual alignment, accessibility, and brand consistency. Adjusted spacing and component sizes.",
      improvements: [
        "Enhanced visual alignment across sections",
        "Improved color contrast for accessibility",
        "Refined component spacing for better rhythm",
        "Optimized for brand consistency"
      ]
    },
    screens: [
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zfGVufDF8fHx8MTc2NDE0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    figmaLink: "https://www.figma.com/design/your-starbucks-redesign",
    liveLink: "https://your-starbucks-redesign.example.com"
  },
  {
    id: "wireframing-prototyping",
    title: "Wireframing & Prototyping",
    category: "User Flows • UX Design",
    description: "A UX project demonstrating the process of creating wireframes and prototypes that show user flows and interaction logic",
    thumbnail: "https://images.unsplash.com/photo-1674509036252-5a517959a3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    brief: "A UX project demonstrating the process of creating wireframes and prototypes that show user flows, structure, and interaction logic.",
    problem: "Create a set of wireframes that clearly outlines interactions, layout structure, and navigation.",
    solution: "Develop low-fidelity frames that emphasize flow, functionality, and user tasks before visual design.",
    empathize: {
      title: "Studying User Journeys",
      content: "Studied user journeys and interaction patterns for similar products. Identified common flow issues that create friction in user experience.",
      insights: [
        "Users get confused with complex navigation",
        "Clear interaction patterns reduce learning curve",
        "Flow documentation helps team alignment",
        "Early wireframes save development time"
      ]
    },
    define: {
      title: "Defining Flow Requirements",
      content: "Users need intuitive steps and predictable navigation that guides them through tasks efficiently.",
      findings: [
        "Navigation should be predictable and consistent",
        "User flows must minimize steps to completion",
        "Interaction feedback is essential",
        "Structure should support user mental models"
      ]
    },
    ideate: {
      title: "Sketching Flow Options",
      content: "Sketched multiple flow options and interface layouts to explore different approaches to user tasks.",
      concepts: [
        "Multiple flow variations for user testing",
        "Interface layout alternatives",
        "Navigation pattern explorations",
        "Interaction state considerations"
      ]
    },
    prototype: {
      title: "Building Interactive Flows",
      content: "Built wireframes → clickable prototype → refined flow screens to demonstrate complete user journeys.",
      components: [
        "Low-fidelity wireframe screens",
        "Mid-fidelity prototype with interactions",
        "Flow diagram documentation",
        "Clickable prototype for testing"
      ]
    },
    test: {
      title: "Optimizing User Flows",
      content: "Reviewed user flows for clarity and efficiency. Optimized navigation paths to reduce friction and improve task completion.",
      improvements: [
        "Reduced navigation depth for faster access",
        "Simplified complex interaction patterns",
        "Added clear call-to-action guidance",
        "Improved flow documentation for clarity"
      ]
    },
    screens: [
      "https://images.unsplash.com/photo-1674509036252-5a517959a3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    figmaLink: "https://www.figma.com/design/your-wireframing-project",
    liveLink: "https://your-wireframing-project.example.com"
  },
  {
    id: "greenhub-mobile-app",
    title: "GreenHub Mobile App",
    category: "Mobile Design • Sustainability",
    description: "A sustainability-focused mobile app designed to encourage eco-friendly habits through tracking and insights",
    thumbnail: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zfGVufDF8fHx8MTc2NDE0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    brief: "GreenHub is a sustainability-focused mobile app designed to encourage eco-friendly habits by providing insights, tools, and tracking features.",
    problem: "People struggle to build sustainable habits because current solutions are not engaging, visually motivating, or easy to integrate into daily life.",
    solution: "Create a mobile experience with clear actions, visual guidance, habit tracking, and educational content.",
    empathize: {
      title: "Understanding Sustainability Challenges",
      content: "Interviewed users who want to live sustainably. Identified barriers like complexity, lack of reminders, and confusing information.",
      insights: [
        "Users want to be sustainable but find it overwhelming",
        "Tracking progress is motivating",
        "Small daily actions are more achievable than big changes",
        "Visual feedback encourages continued engagement"
      ]
    },
    define: {
      title: "Defining User Requirements",
      content: "Users need simple, motivating tools that help them track, understand, and build eco-friendly habits.",
      findings: [
        "Simplicity is key to daily engagement",
        "Progress visualization drives motivation",
        "Educational content should be bite-sized",
        "Reminders help build consistent habits"
      ]
    },
    ideate: {
      title: "Developing Engagement Concepts",
      content: "Developed concepts around gamification, progress tracking, and simple UI cards to make sustainability accessible.",
      concepts: [
        "Gamification elements for engagement",
        "Visual progress tracking system",
        "Simple card-based UI design",
        "Educational modules integration"
      ]
    },
    prototype: {
      title: "Designing the Mobile Experience",
      content: "Designed intuitive mobile screens including dashboard, habit tracking, educational modules, and user progress views.",
      components: [
        "Home dashboard with key metrics",
        "Habit tracking interface",
        "Educational content cards",
        "User progress visualization"
      ]
    },
    test: {
      title: "Refining the Experience",
      content: "Gathered feedback on layout clarity and flow. Simplified navigation and improved icon prompts for better usability.",
      improvements: [
        "Simplified navigation structure",
        "Enhanced icon clarity and prompts",
        "Improved onboarding flow",
        "Added quick-action shortcuts"
      ]
    },
    screens: [
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zfGVufDF8fHx8MTc2NDE0MzkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674509036252-5a517959a3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    figmaLink: "https://www.figma.com/design/your-greenhub-app",
    liveLink: "https://your-greenhub-app.example.com"
  },
  {
    id: "brand-graphic-design",
    title: "Brand & Graphic Design Projects",
    category: "Print Design • Typography • Identity",
    description: "A collection of visual design work exploring branding, typography, layout, and print composition",
    thumbnail: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    brief: "A collection of visual design work exploring branding, typography, layout, and print composition.",
    problem: "Brands often struggle with presenting a consistent, compelling visual identity across different media formats.",
    solution: "Create designs with strong visual hierarchy, consistent typography systems, and a cohesive brand identity style.",
    empathize: {
      title: "Understanding Brand Needs",
      content: "Reviewed typical brand assets and analyzed how users interact with printed and visual materials across different touchpoints.",
      insights: [
        "Consistency across media builds brand recognition",
        "Typography choices impact brand perception",
        "Print materials require special considerations",
        "Visual hierarchy guides user attention"
      ]
    },
    define: {
      title: "Defining Design Goals",
      content: "Clients need designs that communicate clearly and align with brand identity while being adaptable across formats.",
      findings: [
        "Clear communication is paramount",
        "Brand alignment across all touchpoints",
        "Typography must be purposeful",
        "Layout should enhance content"
      ]
    },
    ideate: {
      title: "Exploring Visual Styles",
      content: "Explored several layout styles, typography choices, and composition arrangements to find the best brand expression.",
      concepts: [
        "Multiple layout style explorations",
        "Typography pairing experiments",
        "Composition arrangement variations",
        "Color palette development"
      ]
    },
    prototype: {
      title: "Creating Design Assets",
      content: "Created high-quality design mockups with balanced layout and graphic elements that work across different formats.",
      components: [
        "Poster design layouts",
        "Brand identity mockups",
        "Typography system",
        "Print composition templates"
      ]
    },
    test: {
      title: "Quality Control",
      content: "Reviewed print readability, brand consistency, contrast, and spacing to ensure design quality across all applications.",
      improvements: [
        "Enhanced print readability",
        "Improved brand consistency across assets",
        "Optimized contrast for accessibility",
        "Refined spacing for visual balance"
      ]
    },
    screens: [
      "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTIzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674509036252-5a517959a3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHJlc2VhcmNoJTIwbm90ZXN8ZW58MXx8fHwxNzY0MTU0MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    figmaLink: "https://www.figma.com/design/your-brand-design-projects",
    liveLink: "https://your-brand-design-projects.example.com"
  }
];
