//conditional type -> a type dependent on another type
type t1 = string;
type t2 = t1 extends string ? string : null;

//nested conditional type
type t3 = number;
type t4 = t1 extends string ? string : t3 extends string ? number : null;