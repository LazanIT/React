/*
 U slucaju da API posalje nesto sto nije navedeno u Animal
 nas program ce pasti i dobijacemo gresku.

 Primer da posalje "horse"

 A "horse nije nigde naveden"
*/

export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit";
