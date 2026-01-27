import { z } from 'zod';

export const MemberSchema = z.object({
  name: z.string(),
  avatar: z.string(),
  content: z.string(),
  age: z.number(),
  secretIdentity: z.string(),
  powers: z.array(z.string()),
});
export const SquadSchema = z.object({
  squadName: z.string(),
  avatar: z.string(),
  content: z.string(),
  homeTown: z.string(),
  secretBase: z.string(),
  members: z.array(MemberSchema),
});

export const SquadsResponseSchema = z.array(SquadSchema);

export type Squad = z.infer<typeof SquadSchema>;
export type Member = z.infer<typeof MemberSchema>;
