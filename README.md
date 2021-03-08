# Vue - The Complete Guide (w/ Router, Vuex, Composition API)

Vue uses a declarative approach, "we declare our goal" unlike normal Javascript that uses a imperative approach. We define a goal or a template for that goal.

- Each view app works as standalone.
- unidirectional dataflow
- no sibling communication, always parent => child

# 1. Creating and Mounting the App

## 1. App creation

<details>
<summary>Guide to creating the app</summary>

```js
Const app = Vue.CreateApp({
 data() {
     return {
         exampleProperty: 'Example Value'
     };
 },
 computed() {
  //  code here
 },
 watcher() {
  //  code here
 },
 methods: {
     exampleFunction() {
         <function code> ...
     }
 }
});
app.mount('#exampleID');
```

</details>

---

## 2. Code Explained

- data, watch, computed, and methods are reserved names in the Vue
- data() is a shortening of data function()

### Mount

You can mount on Id as well as class, but only one instance of the mount will occur per app, so you might as well use Id.

## Properties

### data

Holds properties.

### methods

> Use with event binding OR data binding
> Will be executed repeatedly for every "re-render" cycle of the component.
> Used for: events or data that really needs to be re-evaluated all the time.

### computed

> Use with: data binding
> Are only re-evaluated if one of their 'used values' changed.
> Used for: data that depends on other data

Are alot like methods, but will only be executed if it's dependencies gest updated. Unlike methods that runs repeatedly whenever something is updated on the page.

Acts like a data property, even though it's technically a method. Therefor should be named as a property.

### Watchers

> Not used directly in template
> Allows you to run any code in reaction to some changed data (e.g. send Http request etc.)
> used for: Use for any non-data update you want to make. Execute code because something changed.

### Props

- **Default means of communication**
- Are used to **pass data from a parent to a child** component
- Should be defined in advance, possibly in great detail (type, required etc.)
- short for properties
- custom html attributes
- Can't mutate.

### Custom Events / Emits (child => parent )

- Which **custom events** your components will pass (via \$emit) to trigger a method in a parent component.
- can carry data which can be used in the called method

### provide - inject

- if data needs to be passed across multiple components ("pass-through"), you can use provide/inject
- Provide data in a parent component, inject it into a child component.

<details>
<summary>Example of provide/inject</summary>

```js
// Parent file
  provide() {
    return {
      // reaches out to data topics property
      topics: this.topics,
      selectTopic: this.activateTopic,
    };
```

```js
  // injecting values provided by App.vue
  inject: ['selectTopic'],
```

</details>

## Databinding

> There are different kinds of databinding in Vue.js.

### Interpolation

> Also known as **double curly brace** syntax
>
> - Is only available to use between opening and closing tags

Ex.

```html
<p>{{ courseGoal }}</p>
```

### Two-way binding

Listening and writing the value back to the element.

> v-model: Shortcut for v-on:input and v-bind:value

### Vue Binding

> - You need to use vue binding syntax when you want to link outside of opening and closing tags
>   Shorthand v-bind: :value="..."

```js
<p>
  Learn more <a v-bind:href="vueLink">about Vue</a>
</p>
```

**Example of using v-bind to dynamically binding a class.**

> demo is always true, active only true if boxASelected

```js
<div :class="{demo: true, active: boxASelected}" @click="boxSelected('A')">...
</div>
```

> As demo is always true it would be better to put it in a normal class for itself, ex:

```js
<div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')">...
</div>
```

### User Events

**v-once**

> Makes the event on happen once

#### Eventlisteners in Vue

> Shorthand v-on: @click="..."

Use Event Listener `<button v-on:<eventlistener>="function()">`

Example: `<button v-on:click="counter++"></add>`

> Every time the button is clicked it adds 1 to counter.

### Modifiers

Vue has easy access event modifiers

#### Event Modifiers

**Click**

- left (default)
- right
  > Use: Only reacts to right click

**submit**

- prevent
  > Example: v-on:submit.prevent
  > Use: Prevents default action

**keyup**

- enter
- ctrl
- shift

## Slots

- Can be used as a 'placeholder' for dynamic HTML code.
  > Shorthand v-slot: #title

<details>
<summary>Example of use of slots</summary>

```html
<!-- CourseGoals.vue - Child file -->
<ul>
  <li v-for="goal in goals" :key="goal">
    <slot :item="goal" another-prop="..test"></slot>
  </li>
</ul>

<!-- App.vue - Parent file -->
<course-goals #default="slotProps">
  <h2>{{ slotProps.item }}</h2>
  <p>{{ slotProps.anotherProp }}</p>
</course-goals>
```

</details>

### scoped slots

---

# Styling

[Style Guide](https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended)

### In-line styling (Not Optimal)

Example of using inline styling with v-bind/: to select border color by a

### [Ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) inside of an object.

<details>
<summary>Ternary expression inside of an object</summary>

```js
<div class="demo" :style="{borderColor: boxASelected ? 'red' : '#ccc'}" @click="boxSelected('A')"></div>
```

</details>

### Using computed classes

<details>
<summary>Example</summary>
```js
boxAClasses() {
            return {active: boxASelected};
        }
```

```html
<div :class="boxAClasses"></div>
```

</details>
### Array Syntax

You can have multiple classes in an array inside of the class element

```html
<div :class="['demo','boxAclasses']"></div>
```

### Scoped Styling

- Adding the keyword **scoped** to the `<style>` will scope the styling to the component it's placed in.
- **Prefer scoped styles.**

```css
<style scoped>
/* Scoped styles*/
</style>
```

## Best Practices

The HTML Code should only be about outputting values, not doing logic.

## v-if, v-if-else & v-if-else

### v-if

works like an if statement, but can be set as inline code.

- impacts the DOM (adds or removes elements from the DOM)

Example:

```js
// Show If array is empty
<p v-if="goals.length === 0">...</p>
```

### v-else

Works like a normal else statement, needs to be applied in a direct sibling elements to v-if (right after v-if).

Example:

```js
<p v-if="...">...</p>
// Only shows if v-if is false
<ul v-else></ul>
```

## Alternative

### **v-show**

- Only use v-show if you have to use the feature alot, fx. toggling a button on and off all the time.
- Hides or shows the element with CSS, but it still exists in the DOM.
- Doesn't work with v-if, v-else.
  Example

### **v-for**

- is like a for loop for dealing with repeated code.
- you should add a key attribute as an identifier when using v-for.

```html
<!-- For loop statement -->
<li v-for="goal in goals">{{ goal }}</li>
```

goal is only accesible inside of the element v-for is called upon.

```html
<!-- v-for can be used with objects too -->
<ul>
  <li v-for="(value, key, index) in {name: 'Max', age: 31}">
    {{ key}}: {{ value }} - {{ index }}
  </li>
</ul>
```

```html
<!-- You can also loop through numbers -->
<ul>
  <li v-for="num in 10">{{ num }}</li>
</ul>
```

- vue resuses content, so when you remove the first item, the second time will be copied into the first one. Hereby losing some of it's added content. So remember to use the key attribute with an unique identifier.

```html
  <!-- For loop statement, key attribute is a vue attribute (optional) -->
        <li
          v-for="(goal, index) in goals"
          :key="goal"
          @click="removeGoal(index)"
        >
          <p>{{ goal }} - {{ index }}</p>
          <!-- @click.stop, stops the click event from bobbling up. -->
          <input type="text" @click.stop />
        </li>
      </ul>
```

## Components

- components are used to build UIs by combining them
  - are reusable custom html blocks you make with vue
- components form parent-child relationships.

### Global vs Local registration

- You can import and mount the component gobally (in main.js) or locally in other components, App.vue etc.
- If you import globally they are loaded when the website is first opened
- If you do it locally it's only loaded when that .vue component is accessed.
- Use Global registration when the component needs to be used several places.
- Use local if it only needs to be used once. => **Prefer local registration.**

```js
import TheHeader from "./components/TheHeader.vue";

export default {
  components: { "the-header": TheHeader },
  ...
```

<details>
<summary>Can be written in multiple ways</summary>

`components: {"the-header": TheHeader}, components: {TheHeader: TheHeader}, components: {TheHeader}`, when used in `<template>` you can both call the element by `<the-header>...</the-header>` and `<TheHeader></TheHeader`

</details>

### Dynamic Components

- components can be swapped dynamically via the built-in "component" component.
- Component caching can be added via the "keep-alive" component.
<details>
<summary>Example of swapped components, keep-alive caching</summary>

```html
<!-- two button for switching between components active-goals and manage-goals -->
<button @click="setSelectedComponent('active-goals')">Active Goals</button>
<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

<!-- Dynamic components -->
<!-- keep-alive component makes sure the that the component below is gets cached, rather than destroyed -->
<keep-alive>
  <component :is="selectedComponent"></component>
</keep-alive>
```

```js
// local registering component
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

// Imported components
components: {
    ...,
    ActiveGoals,
    ManageGoals,
  },
  // makes sure Active goals is selected at the beginning
  data() {
    return {
      selectedComponent: "active-goals",
    };
  },
  // Method that changes selectedComponent property and changes it to the one send by button click.
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
```

</details>

## Teleport

- DOM structure can be manipulated via "teleport" - it keeps the component hierarchy!

<details>
<summary></summary>

</details>

# Routing

<details>
<summary>Installing Routing Package</summary>

**CMD:**
<code>
npm install --save vue-router@next
</code>

**main.js Registration**

```js
import { createApp } from "vue";
// Importing router and history
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

// Creating variable to hold the router
const router = createRouter({
  // Holds the history of where we've been in our singlepage application
  history: createWebHistory(),
  // An array of registered routes for the different components utilized
  routes: [{ path: "/teams", component: "" }],
});
const app = createApp(App);

app.mount("#app");
```

</details>

With redirect you are redirected to another route
with Alias you will be missing the change of the URL

<details>
<summary></summary>
</details>

## Navigation Guards - Authenticaion

> Guards: functions/methods called by the Vue app when the navigation module is started.

### Before Guards

```js
router.beforeEach(function (to, from, next) {
  console.log("Global beforeEach");
  console.log(to, from);
  // A hook that makes it impossible for you to leave teams
  if (to.name === "team-members") {
    next();
  } else {
    next({ name: "team-members", params: { teamId: "t2" } });
  }
});
```

### After Guards

## Metadata

Route Meta fields, can take any kind of value.
