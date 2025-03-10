export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url?: string;
  description: string;
  status: 'completed' | 'ongoing' | 'planned';
}