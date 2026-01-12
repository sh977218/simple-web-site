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
