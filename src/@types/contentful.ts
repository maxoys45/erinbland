// Not working

export type NavItem = {
  fields: {
    title: string;
    url: string;
  };
};

export type NavigationFields = {
  fields: {
    page: NavItem[];
  };
};
