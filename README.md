# Angular-Codepen

![Angular-Codepen1](https://github.com/labu4bd/angular-codepen/assets/6726366/73af231b-1ce5-4a61-bfe6-b42099e649ac)

Very nice codepen project with Angular. No coding or custom markup required! This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Install Codemirror Dependencies

`codemirror` is a peer dependency and must also be installed

```sh
npm install @ctrl/ngx-codemirror codemirror@5
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Inputs of Codemirror

All Inputs of [ngModel](https://angular.io/api/forms/NgModel#inputs) and

- `options` - options passed to the CodeMirror instance see http://codemirror.net/doc/manual.html#config
- `name` - name applied to the created textarea
- `autoFocus` - setting applied to the created textarea
- `preserveScrollPosition` - preserve previous scroll position after updating value

## Outputs of Codemirror

All outputs of [ngModel](https://angular.io/api/forms/NgModel#outputs) and

- `codeMirrorLoaded` - called when codeMirror instance is initiated
- `focusChange` - called when the editor is focused or loses focus
- `scroll` - called when the editor is scrolled (not wrapped inside angular change detection must manually trigger change detection or run inside ngzone)
- `cursorActivity` - called when the text cursor is moved
- `drop` - called when file(s) are dropped

