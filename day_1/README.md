# Day 1

## Agenda
1) Typescript Overview
2) Development Environment setup
3) Run Hello World in Typescript
4) tsconfig.json

### Typescript Overview
JavaScript was introduced as a language for the client side. The development of Node.js has marked JavaScript as an emerging server-side technology too. However, as JavaScript code grows, it tends to get messier, making it difficult to maintain and reuse the code. Moreover, its failure to embrace the features of Object Orientation, strong type checking and compile-time error checks prevents JavaScript from succeeding at the enterprise level as a full-fledged server-side technology. TypeScript was presented to bridge this gap.

Typescript is an open source programing language developed and maintained by Microsoft. It is a strict syntactical superset of javascript and adds optional static typing to the language. It is designed for development of large applications and transcompile (source to source complie) to javascript. Since Typescript is a superset of Javascript, any valid Javascript code is also a valid Typescript.

Types enable Javascript developers to use highly productive development tools and practices like staic checking and code refactoring when developing javascript applications. Typescript is purely object oriented with classes, interfaces and statically typed like C# or Java. TypeScript adopts its basic language features from the ECMAScript5 specification, i.e., the official specification for JavaScript. TypeScript language features like Modules and class-based orientation are in line with the EcmaScript 6 specification. Additionally, TypeScript also embraces features like generics and type annotations that aren’t a part of the EcmaScript6 specification.

### Development Environment Setup
For Typescript development, we need following tools
1) Code Editor -> using Visual Studio Code (https://code.visualstudio.com/download)
2) NodeJs -> using v9.3.0 (https://nodejs.org/en/download/)

To install typescript, run following command from command prompt, powershell or Git Bash
```sh
npm i -g typescript
```

Once completed, run following command to check if Typescript compiler installed properly
```sh
tsc --v
```
The output should be something like
```sh
Version 3.4.5
```

### Hello World
To run first Typescript code, do the followings
1) Create a folder which will be the workspace
2) Open Visual Studio Code and then open that folder
3) Create a file named hello_world.ts and write some code (see the file in this repository)
4) Type following command to compile the code. This will generate hello_world.js
    ```sh
    tsc hello_world.ts
    ```
5) To run the program written, type the following in the terminal.
    ```sh
    node hello_world.js
    ```
6) Compiler can run in watch mode to detect any changes in the ts file and update js file instantly
    ```sh
    tsc -w hello_world.ts
    ```
### tsconfig.json 
Typescript compiler can take a number of commandline options ( like -w for watch mode, -t VERSION to specify ECMAScript target version etc ) while compiling a file. But for large scale application, it is not practical to use commandline everytime to pass these options. So the compiler has an option of specifing a configuration file named **tsconfig.json** which contains all those arguments and we can run the compiler without any argumants. It just refers to that configuration file and gets all the information it needs. 

The presence of a **tsconfig.json** file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways:

#### Setup
We need to run following command in the root of the project folder to initialize tsconfig.
```sh
tsc --init
```
After this we can run following command to compile all ts files present in the project.
```sh
tsc
```
 For current example, only **tsc** command can generate hello_world.js.

#### Using tsconfig.json
1) By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
2) By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

