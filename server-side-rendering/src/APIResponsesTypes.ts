/*
 U slucaju da API posalje nesto sto nije navedeno u Animal
 nas program ce pasti i dobijacemo gresku.

 Primer da posalje "horse"

 A "horse nije nigde naveden"
*/

export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";

// Kako ce nasa zivotinja da izgleda
// PET SHAPE
export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  description: string;
  breed: string;
  images: string[];
  city: string;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasNext: boolean;
  pets: Pet[];
}
