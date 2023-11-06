export const USER_ROLES = ["unauthenticated", "authenticated", "user", "admin"];

export type Item = {
  name: string;
  slug: string;
  description?: string;
  role: "unauthenticated" | "authenticated" | "user" | "admin";
};

export const paths: {
  name: string;
  items: Item[];
  role: "unauthenticated" | "authenticated" | "user" | "admin";
}[] = [
  {
    name: "Account",
    items: [
      {
        name: "Dashboard",
        slug: "dashboard",
        description: "Organize routes without affecting URL paths",
        role: "user",
      },
      {
        name: "Profile",
        slug: "profile",
        description: "Main information about your account.",
        role: "user",
      },
      {
        name: "Account Settings",
        slug: "account-settings",
        description: "Manage your info, privacy and security.",
        role: "unauthenticated",
      },
      {
        name: "My Notes",
        slug: "notes",
        description: "Render multiple pages in the same layout[boilerplate]",
        role: "authenticated",
      },
    ],
    role: "unauthenticated",
  },
  {
    name: "Expenses",
    items: [
      {
        name: "New Expense",
        slug: "expense",
        description:
          "Create meaningful Loading UI for specific parts of an app",
        role: "authenticated",
      },
      {
        name: "Dashboard",
        slug: "expense-dashboard",
        description: "Create Error UI for specific parts of an app",
        role: "authenticated",
      },
      {
        name: "Listed Expenses",
        slug: "expense-list",
        description: "Create Not Found UI for specific parts of an app",
        role: "authenticated",
      },
    ],
    role: "authenticated",
  },
  {
    name: "Minigames",
    items: [
      {
        name: "Memory Game",
        slug: "memory-game",
        description: "Create UI that is shared across routes",
        role: "user",
      },
      {
        name: "TIC-TAC-TOE",
        slug: "tic-tac-toe",
        description: "Create UI that is shared across routes",
        role: "user",
      },
      {
        name: "Dots",
        slug: "dots-page",
        description: "Create UI that is shared across routes",
        role: "user",
      },
      {
        name: "Guess the Color",
        slug: "color-guess-game",
        description: "Organize routes without affecting URL paths",
        role: "user",
      },
      {
        name: "Counter",
        slug: "counter-page",
        description: "Render multiple pages in the same layout",
        role: "user",
      },
    ],
    role: "user",
  },
  {
    name: "[Open Title #1]",
    items: [
      {
        name: "Streaming with Suspense",
        slug: "streaming",
        description:
          "Streaming data fetching from the server with React Suspense",
        role: "admin",
      },
      {
        name: "Static Data",
        slug: "ssg",
        description: "Generate static pages",
        role: "admin",
      },
      {
        name: "Dynamic Data",
        slug: "ssr",
        description: "Server-render pages",
        role: "admin",
      },
      {
        name: "Incremental Static Regeneration",
        slug: "isr",
        description: "Get the best of both worlds between static & dynamic",
        role: "admin",
      },
    ],
    role: "unauthenticated",
  },
  {
    name: "[Open Title #2]",
    items: [
      {
        name: "Page#1",
        slug: "hooks",
        description: "TEST Description",
        role: "authenticated",
      },
      {
        name: "Page#2",
        slug: "styling",
        description: "TEST Description",
        role: "unauthenticated",
      },
      {
        name: "Page#3",
        slug: "snippets",
        description: "TEST Description",
        role: "admin",
      },
      {
        name: "Page#4",
        slug: "functions",
        description: "TEST Description",
        role: "user",
      },
    ],
    role: "unauthenticated",
  },
];
