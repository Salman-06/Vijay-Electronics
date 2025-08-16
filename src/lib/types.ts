export interface Product {
  id: string;
  name: string;
  category: 'Ceiling Fan' | 'Electric Fan' | 'Pressure Cooker' | 'Voltage Stabilizer' | 'Mixer Grinder' | 'Air Cooler' | 'Induction Cooktop' | 'Tawa' | 'Gas Stove' | 'Wet Grinder';
  price: number;
  image: string;
  description: string;
  brand: string;
}
