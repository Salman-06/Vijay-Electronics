// Product recommendations Genkit flow.

'use server';

/**
 * @fileOverview Implements AI-powered product recommendations based on viewing history and product catalog.
 *
 * - getProductRecommendations - A function that suggests similar products based on viewed products.
 * - ProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  viewedProductNames: z
    .array(z.string())
    .describe('List of product names the user has viewed.'),
  availableProductNames: z
    .array(z.string())
    .describe('List of all available product names in the catalog.'),
});
export type ProductRecommendationsInput = z.infer<
  typeof ProductRecommendationsInputSchema
>;

const ProductRecommendationsOutputSchema = z.object({
  recommendedProductNames: z
    .array(z.string())
    .describe('List of recommended product names.'),
});
export type ProductRecommendationsOutput = z.infer<
  typeof ProductRecommendationsOutputSchema
>;

export async function getProductRecommendations(
  input: ProductRecommendationsInput
): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert product recommendation system for Vijay Electronics, established in 1978.

  Based on the customer's viewing history, suggest similar products from the available catalog.
  Consider common sense rules in addition to viewing history when recommending products.

  Viewing History: {{viewedProductNames}}
  Available Products: {{availableProductNames}}

  Format your response as a list of recommended product names.`,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
