const syntax = {
    types: {
        empty: "()",
        number: "number",
        string: "string",
        boolean: "bool",
        array: "[]"
    },
    keywords: {
        method: "method",
        struct: "struct",
        impl: "impl",

        pub: "pub",
        get: "get",
        as: "as",

        fn: "fn",
        async: "async",
        await: "await",

        if: "if",
        else: "else",
        match: "match",

        for: "for",
        in: "in",
        of: "of",

        while: "while",
        do: "do",

        let: "let",
        const: "const",
        mut: "mut",
    },
    identifiers: {
        type: "type",
        fn: "fn",
        method: "method",
        struct: "struct",
        var: "var",
    }
}

export default syntax;