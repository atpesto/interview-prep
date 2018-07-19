//Proxies
// Metaprogramming

// Programming with the ability to treat programs as data.

// Reflective metaprogramming means that a program processes itself.

// Introspection: you have read-only access to the structure of a program.
// Self-modification: you can change that structure.
// Intercession: you can redefine the semantics of some language operations.

const target = {
  a: 1
}
const handler = {
  get(target, key) {
    if( key in target ) {
      return target[key];
    }
    else {
      return 'This property doesnt exist'
    }
  },
  set(target, key, value) {
    target[key] = `This is the proxied value: ${value}`
  }
}

const proxyExample = new Proxy(target, handler);

// console.log(proxyExample.a);
// console.log(proxyExample.b);

proxyExample['c'] = 'anything';
console.log(proxyExample.c);