# cat-event-userservice

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Terraform using
We use a terraform setup with global state management over AWS S3 Backend.
The TF workspace for this service: prod-userservice

### change workspace
```sh
terraform workspace select prod-userservice
```
### Terraform AWS secrets for local testing
add a file with the following content and name "secrets.auto.tfvars" in the directory ./terraform/prod/
```sh
access_key = "id"
secret_key = "secret_key"
```

### Terraform Infrastructure Variables
in ./terraform/prod/s3_userservice/ .tfvars file or command input variable.
(tags are optional)
```sh
bucket_name = "userservice"
tags = {
    "Environment" = "Prod"
    }
```  
The name of the created bucket consists the workspace name and the variable "bucket_name".
Are bucket_name a empty string only the workspace is used.


 
