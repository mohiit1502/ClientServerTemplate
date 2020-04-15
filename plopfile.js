module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
          type: 'add',
          // Plop will create directories for us if they do not exist
          // so it's okay to add files in nested locations.
          path: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
          templateFile:
            'plop-templates/Component/Component.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/app/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile:
            'plop-templates/Component/Component.test.js.hbs',
        },
        {
          type: 'add',
          path:
            'src/app/components/{{pascalCase name}}/{{pascalCase name}}.component.scss',
          templateFile:
            'plop-templates/Component/Component.component.scss.hbs',
        },
        {
          type: 'add',
          path: 'src/app/components/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/Component/index.js.hbs',
        },
        {
          // Adds an index.js file if it does not already exist
          type: 'add',
          path: 'src/app/components/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          // If index.js already exists in this location, skip this action
          skipIfExists: true,
        },
        {
          // Action type 'append' injects a template into an existing file
          type: 'append',
          path: 'src/app/components/index.js',
          // Pattern tells plop where in the file to inject the template
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: 'src/app/components/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    });
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.jsx',
          templateFile:
            'plop-templates/Page/Page.jsx.hbs',
        },
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile:
            'plop-templates/Page/Page.test.js.hbs',
        },
        {
          type: 'add',
          path:
            'src/app/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
          templateFile:
            'plop-templates/Page/Page.module.scss.hbs',
        },
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/reducer.js',
          templateFile: 'plop-templates/Page/reducer.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/selectors.js',
          templateFile: 'plop-templates/Page/selectors.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/actions.js',
          templateFile: 'plop-templates/Page/actions.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'add',
          path: 'src/app/pages/{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/Page/index.js.hbs',
        },
        {
          type: 'add',
          path: 'src/app/pages/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/app/pages/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
        },
        {
          type: 'append',
          path: 'src/app/pages/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`,
        },
      ],
    })
  
    plop.setGenerator('service', {
      description: 'Create service',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your service name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/services/{{camelCase name}}.js',
          templateFile: 'plop-templates/service.js.hbs',
        },
        {
          type: 'add',
          path: 'src/services/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/services/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{camelCase name}} from './{{camelCase name}}';`,
        },
        {
          type: 'append',
          path: 'src/services/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{camelCase name}},`,
        }
      ],
    })
  
    plop.setGenerator('hook', {
      description: 'Create a custom react hook',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your hook name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/hooks/{{camelCase name}}.js',
          templateFile: 'plop-templates/hook.js.hbs',
        },
        {
          type: 'add',
          path: 'src/hooks/index.js',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true,
        },
        {
          type: 'append',
          path: 'src/hooks/index.js',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{camelCase name}} from './{{camelCase name}}';`,
        },
        {
          type: 'append',
          path: 'src/hooks/index.js',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{camelCase name}},`,
        }
      ],
    })
  };