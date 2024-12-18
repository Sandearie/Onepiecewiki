export interface FruitItem {
  id: number;
  name: string;
  roman_name: string;
  type: string;
  description: string;
  filename: string;
  technicalFile: string;
}

export interface CrewItem {
  id: number;
  name: string;
  description: string;
  status: string;
  number: string;
  roman_name: string;
  total_prime: string;
  is_yonko: string;
  character_captain?: CharacterCaptainItem;
}

export interface CharacterCaptainItem {
  id: number;
  name: string;
  size: string;
  job: string;
  status: string;
  age: string;
  bounty: string;
}

export interface CharacterItem {
  id: number;
  name: string;
  job: string;
  age: string;
  bounty: string;
  status: string;
  crew?: CrewItem;
  fruit?: FruitItem; 
}

export interface BoatItem {
  id: number;
  name: string;
  job: string;
  size: string;
  birthday: string;
  age: string;
  bounty: string;
  status: string;
  crew?: CrewItem;
  character_captain?: CharacterCaptainItem; 
  fruit?: FruitItem; 
}
