Some of the useful commands

// removes all transpiled js files
tsc --build --clean

// compile all *.ts files within directory
tsc

// generate tsconfig.json file
tsc --init

// use this command if error related to compiler. This can be configured in tsconfig.json file
tsc --noEmitOnError --target ES6 Shape.ts