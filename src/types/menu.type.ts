export interface MenuItem {
  id: string | null;
  name: string;
  uid: string;
  icon?: string;
  header_image?: string;
  menu_type?: string | null;
  page_link?: string;
  children?: MenuItem[] | null;
}
