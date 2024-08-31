# rspack unexpected css transform

reproduction steps:

1. Run `pnpm build:webpack`, see `./dist/main.css`:

    ```css
    body {
        background-color: rgba(0, 0, 0, 0.5);
    }
    ```

2. Run `pnpm build:rspack`, see `./dist/main.css`:

    ```css
    body{background-color:#00000080}
    /*# sourceMappingURL=main.css.map*/
    ```

