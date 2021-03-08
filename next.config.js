// next.config.js
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX()