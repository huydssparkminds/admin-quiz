import { UserMenu } from "@/types/user";

const menus: UserMenu[] = [
  {
    label: "Dashboard",
    link: "/",
    icon: "gauge",
  },
  {
    label: "Managements",
    link: "/management",
    icon: "mana",
    childrens: [
      {
        label: "Questions",
        link: "question",
        icon: "question",
      },
      {
        label: "Topics",
        link: "topics",
        icon: "category",
      },
      {
        label: "Exams",
        link: "/exams",
        icon: "exam",
      },
      {
        label: "Exams result",
        link: "/exams-result",
        icon: "exam",
      },
    ],
  },
  {
    label: "User",
    link: "/user",
    icon: "users",
  },
];

export { menus };
