# vivid-design-patterns

Vivid Design Patterns are a collection of styles, design tokens and re-usable react components that provide logic and uniformity for Vivid apps.

Full documentation here: http://vivid-design-patterns-master.vividseats.test

## How to Install
`yarn add @vividseats/vivid-design-patterns`

or

`npm install @vividseats/vivid-design-patterns --save`


## Documentation
To run and view documentation locally:

`yarn start:docs`

You can view and modify the jsx of any component by pressing the view code button `</>`.

For more information on creating documentation with Docz, visit: https://github.com/pedronauck/docz/blob/master/README.md


## Testing
To run tests:

`yarn test`

## Building
To build the javascript assets:

`yarn run build:js`

## Local development with other projects
If you want to make changes to vivid-design-patterns and test them in a separate project without the need to publish the package, do the following:

```$xslt
$ cd vivid-design-patterns
$ yarn link
$ cd your-other-project
$ yarn link @vividseats/vivid-design-patterns
```

If you are using webpack in your other project, be sure to include this following to your webpack config,

```$xslt
    {
        resolve: {
            symlinks: false
        }
    }
```

Each time you make a change to vivid-design patterns, rerun `yarn run build:js` to see the changes reflected in `your-other-project`

## Feature Branches

When developing with feature branches, you can publish to NPM using a tag. To publish the current branch, run `yarn run publish:branch`. Otherwise, run `yarn publish --tag <BRANCH_NAME>`to publish to NPM and set the version to `0.0.0-<BRANCH_NAME>`. Note: In the event you need to republish your branch to NPM, increment the version by 1, e.g. `0.0.0-WEB-1234-2`.

On your feature branch in other projects, use `yarn add @vividseats/vivid-design-patterns@<BRANCH_NAME>` to install the tagged version of VDP.
