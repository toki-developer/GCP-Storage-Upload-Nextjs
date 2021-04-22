module.exports = {
    schema: [
        {
            "http://localhost:4000/graphql":{},
        },
        "src/apollo/client-schema.graphql",
    ],
    documents: ["src/pages/index.tsx"],
    overwrite: true,
    generates: {
        "src/apollo/graphql.tsx": {
        plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
        ],
        config: {
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponent: false,
            preResolveTypes: false,
            // scalars: {
            //   uuid: "string",
            //   timestamptz: "string",
            //   bigint: "number",
            //   _text: "string[]",
            // },
            // namingConvention: {
            //   typeNames: "pascal-case#pascalCase",
            //   enumValues: "upper-case#upperCase",
            // },
            // apolloReactCommonImportFrom: "@apollo/client",
            // apolloReactHooksImportFrom: "@apollo/client",
        },
        },
    },
}