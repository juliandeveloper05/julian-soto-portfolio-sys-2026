export type Locale = 'es' | 'en';

export interface TranslationSchema {
  navbar: {
    brand: string;
    links: {
      root: string;
      about: string;
      services: string;
      skills: string;
      projects: string;
      timeline: string;
      contact: string;
    };
    contact_button: string;
    mobile_close: string;
    mobile_nav_label: string;
    mobile_bottom: {
      root: string;
      code: string;
      core: string;
      link: string;
    };
  };
  hero: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    download_cv: string;
    hire_me: string;
    status: string;
  };
  about: {
    section_label: string;
    heading_prefix: string;
    heading_highlight: string;
    terminal_title: string;
    terminal_command: string;
    lines: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    section_label: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  projects: {
    section_label: string;
    heading_prefix: string;
    heading_highlight: string;
    view_repo: string;
    items: {
      id: string;
      title: string;
      description: string;
      tag: string;
      image: string;
      color: string;
      githubUrl: string;
      liveUrl: string;
    }[];
  };
  services: {
    section_label: string;
    heading_prefix: string;
    heading_highlight: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: string;
      color: string;
    }[];
  };
  timeline: {
    section_label: string;
    heading_prefix: string;
    heading_highlight: string;
    events: {
      id: string;
      year: string;
      title: string;
      company: string;
      description: string;
      color: string;
    }[];
  };
  contact: {
    section_label: string;
    heading_prefix: string;
    heading_highlight: string;
    establish_title: string;
    establish_description: string;
    email_label: string;
    email_value: string;
    availability_label: string;
    availability_value: string;
    form: {
      name_label: string;
      name_placeholder: string;
      email_label: string;
      email_placeholder: string;
      message_label: string;
      message_placeholder: string;
      send_button: string;
    };
  };
  footer: {
    copyright: string;
    status: string;
  };
}
