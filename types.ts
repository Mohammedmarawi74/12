
export interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  percentage: string;
  comparisonLabel: string;
  val1: string;
  val2: string;
  label1: string;
  label2: string;
  description: string;
  footerImage: string;
  // Theme Colors
  themeColor: string;      // Primary Color
  secondaryColor: string;  // Secondary Color
  textColor: string;       // Main Text Color
  backgroundColor: string; // Slide Background Color
  
  logoUrl?: string;        // Organization Logo URL
  customCss?: string;
}

export type ThemePreset = 'red' | 'blue' | 'green' | 'gold';

export interface AppState {
  slides: SlideData[];
  activeSlideIndex: number;
}
