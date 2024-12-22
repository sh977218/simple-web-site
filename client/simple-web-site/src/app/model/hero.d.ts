export type Hero = {
  homeTown: string;
  secretBase: string;
  content: string;
  squadName: number;
  members: {
    age: number;
    name: string;
    powers: string[];
    secretIdentity: string;
  }[];
};
