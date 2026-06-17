import { Code2, Container, Cpu, Database, GitBranch, Network, Terminal, Server, Braces, Languages, Zap, Layers, MessageSquare } from "lucide-react"

export function getExperienceYears() {
  const currentYear = new Date().getFullYear()
  return currentYear - 2021
}

export const siteData = {
  navItems: [
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Стек' },
    { id: 'contact', label: 'Контакты' }
  ],
  hero: {
    title: "Developer Node.js",
    buttonValue: "Написать",
    description: "4+ года коммерческой разработки. Специализируюсь на Node.js: Fastify, Express, NestJS. Проектирую микросервисные архитектуры, работаю с PostgreSQL, MongoDB, Redis.",
    stats: [
      { number: '4+', label: 'года коммерческого опыта' },
      { number: '15+', label: 'реализованных проектов' },
      { number: '24/7', label: 'поддержка проектов' }
    ]
  },
  about: {
    title: "ОБО МНЕ",
    title1: "Backend",
    subTitle1: "на",
    subSubTitle1: "Node.js",
    subSubSubTitle1: "",
    title2: "Пишу надёжный и масштабируемый backend. Проектирую архитектуру, оптимизирую запросы и строю высоконагруженные системы. Люблю чистый код и продуманные решения.",
    subTitle2: "Ищу интересные проекты, где могу применить свой опыт и решать сложные задачи",
    items: [
      {
        title: "Backend разработка на Node.js",
        description: "Разрабатываю REST API и микросервисы на Fastify, Express, NestJS. Строю архитектуру, оптимизирую производительность, пишу интеграционные и unit-тесты.",
        metric: "4+ ГОДА",
        gradient: "from-[#68A063] to-[#7CB873]",
        icon: Braces,
        features: ["Fastify", "Express.js", "NestJS", "REST API"]
      },
      {
        title: "Базы данных и оптимизация",
        description: "Проектирую схемы, пишу оптимизированные запросы, работаю с индексами и транзакциями. Настраиваю кеширование с Redis и оптимизирую производительность БД.",
        metric: "PRODUCTION",
        gradient: "from-[#68A063] to-[#539B4A]",
        icon: Database,
        features: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
      },
      {
        title: "Микросервисы и инфраструктура",
        description: "Строю микросервисные архитектуры, настраиваю очереди (RabbitMQ), контейнеризирую приложения, работаю с Docker, настраиваю CI/CD пайплайны.",
        metric: "ДОКЕР",
        gradient: "from-[#7CB873] to-[#68A063]",
        icon: Server,
        features: ["Docker", "RabbitMQ", "CI/CD", "Linux"]
      }
    ],
    stats: [
      { 
        number: "4",
        label: "года коммерческой разработки",
        suffix: "+",
        gradient: "from-[#68A063] to-[#7CB873]",
        delay: "0s"
      },
      { 
        number: "15",
        label: "backend проектов с нуля",
        suffix: "+",
        gradient: "from-[#7CB873] to-[#68A063]",
        delay: "0.1s"
      },
      { 
        number: "30",
        label: "микросервисов разработано",
        suffix: "+",
        gradient: "from-[#68A063] to-[#539B4A]",
        delay: "0.2s"
      },
      { 
        number: "100",
        label: "покрытие тестами",
        suffix: "%",
        gradient: "from-[#7CB873] to-[#539B4A]",
        delay: "0.3s"
      }
    ],
  },

  skills: {
    title: "TECH STACK",
    title1: "Мой инструментарий",
    subtitle1: "Технологии, с которыми работаю ежедневно в продакшене",
    skillIcons: {
      "Node.js": Server,
      "Fastify": Zap,
      "Express": Network,
      "NestJS": Layers,
      "PostgreSQL": Database,
      "MongoDB": Database,
      "MySQL": Database,
      "Redis": Cpu,
      "Docker": Container,
      "REST API": GitBranch,
      "WebSocket": MessageSquare,
      "RabbitMQ": Network,
      "TypeScript": Languages,
      "Git": GitBranch,
      "Linux": Terminal,
      "Jest": Code2,
    },
    categories: [
      {
        category: "Node.js",
        level: "Экспертный уровень",
        skills: [
          { name: "Fastify", level: 95 },
          { name: "Express.js", level: 92 },
          { name: "NestJS", level: 88 },
          { name: "TypeScript", level: 90 }
        ]
      },
      {
        category: "Базы данных",
        level: "Продакшен опыт",
        skills: [
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 85 },
          { name: "MySQL", level: 85 },
          { name: "Redis", level: 88 }
        ]
      },
      {
        category: "Архитектура",
        level: "Проектирование",
        skills: [
          { name: "REST API", level: 95 },
          { name: "Микросервисы", level: 90 },
          { name: "Очереди (RabbitMQ)", level: 85 },
          { name: "WebSocket", level: 85 }
        ]
      },
      {
        category: "Инфраструктура",
        level: "DevOps",
        skills: [
          { name: "Docker", level: 90 },
          { name: "CI/CD", level: 85 },
          { name: "Linux", level: 85 },
          { name: "Git", level: 90 }
        ]
      }
    ],
    stats: {
      title1: "Node.js",
      subTitle1: "Экспертный уровень",
      title2: "Базы данных",
      subTitle2: "PostgreSQL, MongoDB, MySQL",
      title3: "Микросервисы",
      subTitle3: "Проектирование и разработка",
    }
  },
  contacts: {
    title: "КОНТАКТЫ",
    title1: "Есть проект",
    title2: "или задача?",
    title3: "Напишите",
    title4: "Отвечу в течение дня. Расскажу о своём опыте, покажу проекты и обсудим, как я могу быть полезен. Готов присоединиться к команде или сделать проект под ключ.",
    footerTitle1: "Быстрый отклик",
    footerSubTitle1: "Отвечаю в течение дня",
    footerTitle2: "Открыт к общению",
    footerSubTitle2: "Всегда рад новым проектам",
    footerTitle3: "Честно",
    footerSubTitle3: "Без пафоса и обещаний",
    footerTitle: "Связаться",
    footer: `© ${new Date().getFullYear()} Node.js Backend Developer`,
    items: [
      {
        platform: "Telegram",
        platformName: "Telegram",
        label: "@mico_developer",
        url: "https://t.me/@mico_developer",
        icon: "Telegram",
        status: "Online",
        description: "Быстрее всего отвечаю тут",
      },
      {
        platform: "GitHub",
        platformName: "GitHub",
        label: "github.com/okmic",
        url: "https://github.com/okmic",
        icon: "GitHub",
        status: "Мои проекты",
        description: "Код и pet-проекты на Node.js",
      },
      {
        platform: "Email",
        platformName: "Почта",
        label: "okmic.dev@gmail.com",
        url: "mailto:okmic.dev@gmail.com",
        icon: "Email",
        description: "Для детального обсуждения",
        status: "Проверяю регулярно"
      }
    ]
  }
}
