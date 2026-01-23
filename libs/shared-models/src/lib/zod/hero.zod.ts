import { z } from 'zod';

export const MemberSchema = z.object({
  name: z.string(),
  content: z.string(),
  age: z.number(),
  secretIdentity: z.string(),
  powers: z.array(z.string()),
});
export const HeroSchema = z.object({
  squadName: z.number(),
  content: z.string(),
  homeTown: z.string(),
  secretBase: z.string(),
  members: z.array(MemberSchema),
});

export const HeroesResponseSchema = z.array(HeroSchema);

export type Hero = z.infer<typeof HeroSchema>;
export type Member = z.infer<typeof MemberSchema>;
