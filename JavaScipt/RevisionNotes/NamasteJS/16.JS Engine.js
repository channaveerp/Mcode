// JS engine working

/*
JS is everywhere

it runs in browser, nodeJS, server, smart watch, smart bulb, robotes...

this all is possible because of JS run time environment.

JS engine is not a machine

takes codes as input ==> goes throug 3 stpes
1. parsing, 2. compilation and 3. execution

//astexplorer.net to check it

1.parsing: during parsing code is broken in to tokens. there is somthing known as syntest parser, it's role is AST[abstract syntext tree]

AST looks like nested object also it has array init like we get data after fetching;

2. compilation: 
JIT: just in time compilation;
Interpreter: Inmany programming languages code is executed by interpreter. execute line by line; and also ==> it optimize the code to run it fast.
many langues uses compiler to compile: 

JS is both interpreter and compiler language;

In it's first lauch it was interpriter but now in modern days it is both interpreter and compiler. due to this we call it JIT compiler
it produces byte code and sends to next proccess.

AST ==> Interpriter/Compiler ==> execution;

3. without memory heap[where all the veriable assigned] and callStack execution is not possible;

garbage colleter: Mark and Sweep algo. IT uses this algo to clear the garbage wherever it possible.


read these:
Inline Caching
Mark and sweep
Inlining
copy elision

googles V8 is fastes JS engine
It has interprite named as ignition along with turbo fan optimizing compiler.

*/
