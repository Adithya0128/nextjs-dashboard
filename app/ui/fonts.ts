import { Inter, Lusitana } from 'next/font/google';

// Primary Font
export const inter = Inter({ subsets: ['latin'] });

// Secondary Font (Lusitana)
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and Bold weights
});
