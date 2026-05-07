Title: any vs unknown in TypeScript

Introduction:
In typescript we may got confused between any and unknown cuz both can store any kind of value but they have differences and the main one is safety

Body:
Lets understand first what is any and and unknown in typescript

any: It is basically we can add any type of value basically it tells compiler to skip the type checking

Example:
let value:any="Hello"
value.toUpperCase()
value.notExistMethod();
and in this example TypeScript won’t show errors, even if the code is wrong.

unknown: its safer version of any lets understand it by an example

Example:
let value :unknown="zayed"
vale.toUpperCase()///it will show error
Because TypeScript forces us to check the type first.

Conclusion:
any=no type safety
unknown= safer

So using unknown instead of any because it keeps TypeScript useful and helps avoid bugs.
