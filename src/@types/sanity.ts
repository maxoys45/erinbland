// export type NavItems = string[] | null;

export type SubItem = {
  title: string;
  slug: string;
};

export type NavItem = {
  title: string;
  slug: string;
  children?: SubItem[];
};

export type NavItems = NavItem[] | null;
