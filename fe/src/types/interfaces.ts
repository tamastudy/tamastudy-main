export interface User {
  id: string;
  username: string;
  about: string;
  email: string;
  profileImg: string;
  jobTitle: string;
  jobPlace: string;
  phone?: string;
  address?: string;
  customLink?: {
    text: string;
    link: string;
  };
  sns?: {
    linkedIn?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
