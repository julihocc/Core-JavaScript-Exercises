## How to setup Babel 

Setting up Babel for a JavaScript project allows you to use next-generation JavaScript features that are not yet supported in all browsers. Babel is a JavaScript compiler that lets you transform your JavaScript code into a backward-compatible version with support for older browsers. Here's a step-by-step guide to setting up Babel:

### 1. Initialize Your Project (if not already done)

If your project is not yet initialized, start by creating a new directory for your project and initializing it with npm:

```bash
mkdir my-project
cd my-project
npm init -y
```

### 2. Install Babel Packages

You need to install Babel CLI and the Babel preset for environment. The CLI is used to compile files from the command line, and the preset-env is a smart preset that allows you to use the latest JavaScript.

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Optionally, if you're using Babel with a specific library like React, you might also want to install the corresponding Babel preset (e.g., `@babel/preset-react` for React).

### 3. Configure Babel

Create a Babel configuration file, `.babelrc`, or `babel.config.json` in your project's root directory. Here, you specify the presets and plugins Babel should use:

```json
{
  "presets": ["@babel/preset-env"]
}
```

### 4. Add Babel to Your Build Process

You can now add a script in your `package.json` file to run Babel and compile your JavaScript files. Here's an example that compiles files from a `src` directory to a `lib` directory:

```json
"scripts": {
  "build": "babel src --out-dir lib"
}
```

### 5. Run Babel

With the script added to your `package.json`, you can now compile your JavaScript files by running:

```bash
npm run build
```

This command tells Babel to compile the JavaScript files found in the `src` directory and output them to the `lib` directory.

### 6. Further Configuration

Depending on your project's needs, you might want to explore additional configurations like specifying browser targets in `preset-env`, adding plugins for additional language features, or integrating Babel with a bundler like Webpack or Rollup for a more complex build process.

### 7. Integration with Webpack (Optional)

If you are using Webpack, you can integrate Babel by installing `babel-loader` and configuring it in your `webpack.config.js`:

```bash
npm install --save-dev babel-loader
```

Then, add the loader to your Webpack configuration:

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

This setup allows you to use modern JavaScript without worrying about compatibility issues, enabling you to focus on writing your code.

## How to test the configuration

To test your Babel configuration effectively, follow these steps to ensure that your setup correctly compiles your JavaScript code:

### 1. Create a Test JavaScript File

If you haven't already, create a JavaScript file in your `src` directory (or wherever you've configured Babel to look for your source files) that uses some ES6+ features not supported in all browsers. For example, you could use arrow functions, `const`/`let`, async/await, or any other newer syntax. Here's an example:

```javascript
// src/test.js
const greet = (name) => `Hello, ${name}!`;
console.log(greet('World'));
```

### 2. Run Babel Compile Command

Use the npm script you set up for Babel to compile your JavaScript files. If you followed the setup instructions previously mentioned, you would run:

```bash
npm run build
```

This command compiles the files from your source directory (`src` by default) to your output directory (`lib` by default).

### 3. Check the Output

After running the compile command, check the output in your destination directory (e.g., `lib/test.js`). The compiled file should be in a syntax compatible with your target environments, specified in your Babel configuration. For instance, ES6+ features like arrow functions might be transformed into ES5 syntax.

### 4. Verify in a Browser (Optional)

For further testing, especially if you're targeting web browsers:

- Include the compiled JavaScript file in an HTML file.
- Open the HTML file in various browsers, including older ones if necessary, to check if the JavaScript runs correctly.
  

This step helps verify that your Babel configuration is correctly targeting the browsers you intend to support.

### 5. Automated Testing (Advanced)

For a more robust testing strategy, consider setting up automated tests with a testing framework like Jest. You can configure Jest to use Babel for transforming your test files, allowing you to write tests using the latest JavaScript features. Here’s a brief guide:

- **Install Jest** and the Babel Jest plugin:

  ```bash
  npm install --save-dev jest babel-jest
  ```

- **Configure Jest** to use Babel in your `package.json` or in a `jest.config.js` file:

  ```json
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  }
  ```

- **Write Tests** for your JavaScript functions or components in the same or adjacent files (e.g., `test.js` or `test.spec.js`).

- **Run Jest** to execute your tests:

  ```bash
  npm test
  ```

This approach not only tests your Babel setup but also ensures your JavaScript code works as expected across the board.

Testing your Babel configuration like this ensures that your JavaScript code is correctly transformed and compatible with your target execution environments. It's a crucial step in maintaining a robust and cross-compatible JavaScript codebase.

## Decorators proposal

Check https://babeljs.io/docs/babel-plugin-proposal-decorators 

### Installation 

```
npm install --save-dev @babel/plugin-proposal-decorators
```

### Usage

In `babel.config.json`

```
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "version": "2023-05" }]
  ]
}
```