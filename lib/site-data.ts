export type Locale = "en" | "fa";

export const company = {
  name: "Piadrol",
  email: "armanem84@gmail.com",
  phone: "+43 1 000 0000",
  austria: "Vienna, Austria",
  iran: "Tehran, Iran",
};

export const content = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      logistics: "Logistics",
      leadership: "Leadership",
      contact: "Contact",
      cta: "Talk to us",
    },
    hero: {
      eyebrow: "Austria · Iran · International markets",
      title: "Trade, made clear.",
      accent: "Growth, made possible.",
      text: "Piadrol connects dependable producers with international buyers through disciplined sourcing, practical logistics, and local market insight.",
      primary: "Our capabilities",
      secondary: "Start a conversation",
      route: "Iran to Austria",
    },
    about: {
      label: "About Piadrol",
      title: "Local knowledge at both ends of the corridor.",
      text: "We are an international trading company connecting Iranian supply with European demand. Our teams coordinate sourcing, commercial requirements, and market access with one clear point of accountability.",
      points: [
        "Qualified supply networks",
        "Austria-based European access",
        "Long-term commercial relationships",
      ],
    },
    services: {
      label: "What we do",
      title: "Focused support across the trade cycle.",
      items: [
        {
          title: "Sourcing & Trade",
          text: "Supplier identification, product specifications, commercial coordination, and shipment planning.",
        },
        {
          title: "Market Entry",
          text: "Practical guidance for companies entering Iran, Austria, and selected international markets.",
        },
        {
          title: "Investment Advisory",
          text: "Local context and opportunity assessment for informed cross-border decisions.",
        },
      ],
    },
    logistics: {
      label: "Logistics & routes",
      title: "Flexible routes. Clear coordination.",
      text: "We evaluate road, rail, and maritime options around each shipment’s commercial and operational needs.",
      irislTitle: "Iranian maritime access",
      irisl:
        "Where suitable and available, shipping options may include services operated by the Islamic Republic of Iran Shipping Lines (IRISL). Piadrol does not imply an official partnership or endorsement.",
      origin: "Tehran",
      gateway: "Vienna",
    },
    leadership: {
      label: "Leadership",
      title: "Experienced, relationship-led direction.",
      people: [
        {
          role: "Chief Executive Officer",
          name: "Farnam Babaei",
          initials: "FB",
          bio: "A hands-on trade leader who believes strong business starts with clear conversations and dependable relationships.",
        },
        {
          role: "Co-Founder",
          name: "Arya Babaei",
          initials: "/arya.jpeg",
          bio: "Bringing cross-cultural commercial insight and a long-term approach to every partnership.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s discuss what comes next.",
      text: "Tell us what you are sourcing, where you want to grow, or which market you are exploring.",
      name: "Name",
      company: "Company",
      email: "Email",
      topic: "Topic",
      message: "Message",
      choose: "Select a topic",
      sourcing: "Sourcing & trade",
      entry: "Market entry",
      investment: "Investment advisory",
      other: "Other",
      send: "Send enquiry",
      sending: "Sending...",
      sent: "Thank you. We will be in touch shortly.",
      error: "The message could not be sent. Please email us directly.",
    },
    footer: {
      text: "International trade and market advisory between Europe and the Middle East.",
      top: "Back to top",
      rights: "All rights reserved.",
    },
  },
  fa: {
    nav: {
      about: "درباره ما",
      services: "خدمات",
      logistics: "لجستیک",
      leadership: "مدیریت",
      contact: "تماس",
      cta: "گفت‌وگو با ما",
    },
    hero: {
      eyebrow: "اتریش · ایران · بازارهای بین‌المللی",
      title: "تجارت، شفاف و مطمئن.",
      accent: "رشد، فراتر از مرزها.",
      text: "پیادرول تولیدکنندگان قابل اعتماد را با خریداران بین‌المللی از طریق تأمین منظم، لجستیک کاربردی و شناخت بازار محلی پیوند می‌دهد.",
      primary: "توانمندی‌های ما",
      secondary: "شروع گفت‌وگو",
      route: "ایران به اتریش",
    },
    about: {
      label: "درباره پیادرول",
      title: "دانش محلی در دو سوی مسیر تجارت.",
      text: "ما یک شرکت بازرگانی بین‌المللی هستیم که عرضه ایران را به تقاضای اروپا متصل می‌کنیم. تیم‌های ما تأمین، الزامات تجاری و ورود به بازار را با یک مسیر پاسخ‌گویی روشن هماهنگ می‌کنند.",
      points: [
        "شبکه تأمین ارزیابی‌شده",
        "دسترسی اروپایی از اتریش",
        "روابط تجاری بلندمدت",
      ],
    },
    services: {
      label: "خدمات ما",
      title: "پشتیبانی متمرکز در چرخه تجارت.",
      items: [
        {
          title: "تأمین و تجارت",
          text: "شناسایی تأمین‌کننده، مشخصات محصول، هماهنگی تجاری و برنامه‌ریزی حمل.",
        },
        {
          title: "ورود به بازار",
          text: "راهنمایی کاربردی برای شرکت‌های متقاضی ورود به بازار ایران، اتریش و بازارهای منتخب.",
        },
        {
          title: "مشاوره سرمایه‌گذاری",
          text: "شناخت محلی و ارزیابی فرصت‌ها برای تصمیم‌های آگاهانه فرامرزی.",
        },
      ],
    },
    logistics: {
      label: "لجستیک و مسیرها",
      title: "مسیرهای منعطف، هماهنگی شفاف.",
      text: "ما گزینه‌های جاده‌ای، ریلی و دریایی را متناسب با نیازهای تجاری و عملیاتی هر محموله بررسی می‌کنیم.",
      irislTitle: "دسترسی دریایی ایران",
      irisl:
        "در صورت تناسب و موجود بودن ظرفیت، گزینه‌های حمل می‌تواند شامل خدمات کشتیرانی جمهوری اسلامی ایران (IRISL) نیز باشد. این اشاره به معنای همکاری رسمی یا تأیید متقابل نیست.",
      origin: "تهران",
      gateway: "وین",
    },
    leadership: {
      label: "مدیریت",
      title: "راهبری باتجربه و مبتنی بر اعتماد.",
      people: [
        {
          role: "مدیرعامل",
          name: "فرنام بابایی",
          initials: "FB",
          bio: "مدیری فعال در تجارت که باور دارد همکاری خوب با گفت‌وگوی شفاف و رابطه‌ای قابل اعتماد شروع می‌شود.",
        },
        {
          role: "هم‌بنیان‌گذار",
          name: "آریا بابایی",
          initials: "AB",
          bio: "با شناخت تجاری بین‌فرهنگی و رویکردی بلندمدت در توسعه هر همکاری.",
        },
      ],
    },
    contact: {
      label: "تماس با ما",
      title: "درباره گام بعدی گفت‌وگو کنیم.",
      text: "نیاز تأمین، بازار هدف یا فرصت موردنظر خود را با ما در میان بگذارید.",
      name: "نام",
      company: "شرکت",
      email: "ایمیل",
      topic: "موضوع",
      message: "پیام",
      choose: "انتخاب موضوع",
      sourcing: "تأمین و تجارت",
      entry: "ورود به بازار",
      investment: "مشاوره سرمایه‌گذاری",
      other: "سایر",
      send: "ارسال درخواست",
      sending: "در حال ارسال...",
      sent: "سپاسگزاریم. به‌زودی با شما تماس می‌گیریم.",
      error: "ارسال پیام انجام نشد. لطفاً مستقیماً ایمیل بزنید.",
    },
    footer: {
      text: "تجارت بین‌المللی و مشاوره بازار میان اروپا و خاورمیانه.",
      top: "بازگشت به بالا",
      rights: "تمامی حقوق محفوظ است.",
    },
  },
} as const;
