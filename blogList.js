function importAll(r) {
    return r.keys().map((filename) => ({
        link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
        module: r(fileName)
    }))
}

export const posts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
)