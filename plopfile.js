module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Creates new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{properCase name}}.js',
        templateFile: 'plop/component.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Creates new screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{properCase name}}/index.js',
        templateFile: 'plop/screen/container.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{camelCase name}}/{{properCase name}}View.js',
        templateFile: 'plop/screen/view.hbs',
      },
    ],
  });
  plop.setGenerator('store', {
    description: 'Create a new actions and reducers',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Store name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/reducers/{{dashCase name}}/index.js',
        templateFile: 'plop/store/index.hbs',
      },
      {
        type: 'add',
        path: 'src/store/reducers/{{dashCase name}}/actions.js',
        templateFile: 'plop/store/actions.hbs',
      },
      {
        type: 'add',
        path: 'src/store/reducers/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop/store/store.hbs',
      },
    ],
  });
};
