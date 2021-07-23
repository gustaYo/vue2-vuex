# vue2-vuex

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

vuex
mixins
i18n

https://cli.vuejs.org/guide/

instalar vue-cli
npm install -g @vue/cli @vue/cli-service-global

vue create vue2-vuex

Vue CLI v4.5.13
? Please pick a preset: 
  Default ([Vue 2] babel, eslint) 
  Default (Vue 3) ([Vue 3] babel, eslint) 
❯ Manually select features

Vue CLI v4.5.13
? Please pick a preset: Manually select features
? Check the features needed for your project: 
 ◯ Choose Vue version
❯◉ Babel
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing


? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Vuex, CSS Pre-
processors, Linter
? Use history mode for router? (Requires proper server setup for index fallback 
in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated confi
g files
? Save this as a preset for future projects? (y/N) 
vue2


Vue CLI v4.5.13
? Please pick a preset: 
❯ vue2 ([Vue 2] node-sass, babel, pwa, router, vuex, eslint) 
  Default ([Vue 2] babel, eslint) 
  Default (Vue 3) ([Vue 3] babel, eslint) 
  Manually select features 

gustayo@gustayo-ThinkPad-T470:~/Escritorio/vuejss$ vue create vue2-vuex


Vue CLI v4.5.13
? Please pick a preset: vue2 ([Vue 2] node-sass, babel, pwa, router, vuex, eslin
t)


Vue CLI v4.5.13
✨  Creating project in /home/gustayo/Escritorio/vuejss/vue2-vuex.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 54.28s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 127.94s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project vue2-vuex.
👉  Get started with the following commands:

 $ cd vue2-vuex
 $ yarn serve




https://kazupon.github.io/vue-i18n/installation.html

gustayo@gustayo-ThinkPad-T470:~/Escritorio/vuejss/vue2-vuex$ vue add i18n

📦  Installing vue-cli-plugin-i18n...

yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 10 new dependencies.
info Direct dependencies
└─ vue-cli-plugin-i18n@2.1.1
info All dependencies
├─ cli-table3@0.5.1
├─ colors@1.4.0
├─ deepmerge@4.2.2
├─ dot-object@1.9.0
├─ esm@3.2.25
├─ flat@5.0.2
├─ is-valid-glob@1.0.0
├─ vue-cli-plugin-i18n@2.1.1
├─ vue-i18n-extract@1.0.2
└─ vue-i18n@8.25.0
Done in 9.34s.
✔  Successfully installed plugin: vue-cli-plugin-i18n

? The locale of project localization. en
? The fallback locale of project localization. en
? The directory where store localization messages of project. It's stored under `src` directory. locales
? Enable locale messages in Single file components ? No

🚀  Invoking generator for vue-cli-plugin-i18n...
📦  Installing additional dependencies...

yarn install v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 6.09s.
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-i18n
gustayo@gustayo-ThinkPad-T470:~/Escritorio/vuejss/vue2-vuex$ 







### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
