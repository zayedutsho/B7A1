Title: Understanding Generics in TypeScript

Introduction:
Generics is one of the powerful features in Typescript .By using this we can create reusable function,components and classes keeping the type safety

Body:
Instead of writing the same logic multiple times for different data types, Generics let us write it once and reuse it with any type.
lets understand with some examples

Example without Generics:
function stringValue(value: string): string {
return value;
}

function numberValue(value: number): number {
return value;
}
// Creates repeated code

Example with Generics:
function identity<T>(value: T): T {
return value;
}

console.log(identity<string>("Zayed"));
console.log(identity<number>(28));
console.log(identity<boolean>(true));
//Now we can use it with any type.

Conclusion:

Generics make code:Reusable,Cleaner,Flexible,Type-safe

So we can say that it allow us to write one function or component that works with different data types without losing TypeScript safety.
