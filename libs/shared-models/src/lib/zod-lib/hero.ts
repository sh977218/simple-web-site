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

export const HeroesResponseSchema = z.array(HeroSchema);

export type HeroType = z.infer<typeof HeroSchema>;

export type Hero = {
  homeTown: string;
  secretBase: string;
  content: string;
  squadName: number;
  members: Member[];
};

export type Member = {
  age: number;
  name: string;
  powers: string[];
  secretIdentity: string;
};
