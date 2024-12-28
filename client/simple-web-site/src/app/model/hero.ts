import { z } from 'zod';

export const MemberSchema = z.object({
  age: z.number(),
  name: z.string(),
  powers: z.array(z.string()),
  secretIdentity: z.string(),
});
export const HeroSchema = z.object({
  homeTown: z.string(),
  secretBase: z.string(),
  content: z.string(),
  squadName: z.number(),
  members: z.array(MemberSchema),
});

export const HeroResponseSchema = z.array(HeroSchema);

export type Hero = z.infer<typeof HeroSchema>;
