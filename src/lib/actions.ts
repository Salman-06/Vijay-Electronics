'use server';

import { getProductRecommendations } from '@/ai/flows/product-recommendations';
import type { ProductRecommendationsInput } from '@/ai/flows/product-recommendations';
import { z } from 'zod';

export async function getRecommendationsAction(input: ProductRecommendationsInput) {
  try {
    const recommendations = await getProductRecommendations(input);
    return { success: true, data: recommendations };
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return { success: false, error: 'Failed to get recommendations.' };
  }
}


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
        return { success: false, error: "Invalid data provided." };
    }
    
    console.log("New contact form submission:", validatedFields.data);
    // In a real application, you would integrate an email service here.
    // e.g., using Resend, SendGrid, etc.
    
    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
}
