# o8-interview
## Assignment
Create a simple to-do list application (shown on home screen) according to following specification:
### Functional criteria:
* I can see all to-dos with their status (complete/incomplete)
  * I can filter to-dos by complete/incomplete/all, defaults to 'All' (use custom buttons)
* I can complete/uncomplete a to-do
* I can undo up to last 5 changes (use custom button)

### Technical criteria:
* Fetch lists of to-dos from (http://my-json-server.typicode.com/martinbrodziansky/o8-interview/todos) and store them in Vuex locally, manage the state of to-dos completely in Vuex, not in-component.
* Make sure you use separate components where appropriate, instead of creating one big component handling all of the logic. Reusability is key.
* If there are no to-dos to be shown, display a message saying so; when a button is unclickable (e.g. you can't undo an action of it is futher than 5 away), make it visually clear.
* Create a custom button for the purposes of the application, that you can display both with plain text and with an icon. Use Vue Slots to achieve this. Show use of Vue events to communicate with parent components.
  * The 'Undo last action' button should display an icon (provided in src/assets/undo.svg) while buttons for filtering should display plain strings.
* (Optional) Style the component according to your own taste, preferably using SASS (style lang="scss" in .vue files) and adhering to BEM methodology. Do not spend too much time on this point as it is not too important for the completion of the assignment.

## Useful reading
[TypeScript documentation](http://typescriptlang.com/)
[vue-class-component documentation](https://github.com/vuejs/vue-class-component)
[vue-property-decorator documentation](https://github.com/kaorun343/vue-property-decorator)
[vuex-class documentation](https://github.com/ktsn/vuex-class)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
