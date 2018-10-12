(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docz/elements.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"elements"}},"Elements"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"blockquote"}},"BlockQuote"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nQuote break.\n\n> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. \n")),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Quote break."),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"put")," ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Markdown")," into a blockquote. ")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"headings"}},"Headings"),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"h1"}},"H1"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"h2"}},"H2"),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"h3"}},"H3"),o.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"h4"}},"H4"),o.a.createElement(r.MDXTag,{name:"h5",components:n,props:{id:"h5"}},"H5"),o.a.createElement(r.MDXTag,{name:"h6",components:n,props:{id:"h6"}},"H6"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Alternatively, for H1 and H2, an underline-ish style:"),o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"alt-h1"}},"Alt-H1"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"alt-h2"}},"Alt-H2"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n\nAlt-H1\n======\n\nAlt-H2\n------\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"inlinecode"}},"InlineCode"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"const a=1")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"link"}},"Link"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"[I'm an inline-style link](https://www.google.com)\n\n[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n[I'm a reference-style link][Arbitrary case-insensitive reference text]\n\n[I'm a relative reference to a repository file](../blob/master/LICENSE)\n\n[You can use numbers for reference-style link definitions][1]\n\nOr leave it empty and use the [link text itself].\n\nURLs and URLs in angle brackets will automatically get turned into links. \nhttp://www.example.com or <http://www.example.com> and sometimes \nexample.com (but not on Github, for example).\n\nSome text to show that the reference links can follow later.\n\n[arbitrary case-insensitive reference text]: https://www.mozilla.org\n[1]: http://slashdot.org\n[link text itself]: http://www.reddit.com\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.google.com"}},"I'm an inline-style link")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.google.com",title:"Google's Homepage"}},"I'm an inline-style link with title")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.mozilla.org"}},"I'm a reference-style link")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"../blob/master/LICENSE"}},"I'm a relative reference to a repository file")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://slashdot.org"}},"You can use numbers for reference-style link definitions")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Or leave it empty and use the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://www.reddit.com"}},"link text itself"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"URLs and URLs in angle brackets will automatically get turned into links.\n",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://www.example.com"}},"http://www.example.com")," or ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://www.example.com"}},"http://www.example.com")," and sometimes\nexample.com (but not on Github, for example)."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Some text to show that the reference links can follow later."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"list"}},"List"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"1. First ordered list item\n2. Another item\n\u22c5\u22c5* Unordered sub-list. \n1. Actual numbers don't matter, just that it's a number\n\u22c5\u22c51. Ordered sub-list\n4. And another item.\n\n\u22c5\u22c5\u22c5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n\n\u22c5\u22c5\u22c5To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n\u22c5\u22c5\u22c5Note that this line is separate, but within the same paragraph.\u22c5\u22c5\n\u22c5\u22c5\u22c5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n")),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"First ordered list item"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Another item\n\u22c5\u22c5* Unordered sub-list. "),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"Actual numbers don't matter, just that it's a number\n\u22c5\u22c51. Ordered sub-list"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"And another item.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u22c5\u22c5\u22c5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown)."),o.a.createElement(r.MDXTag,{name:"p",components:n},"\u22c5\u22c5\u22c5To have a line break without a paragraph, you will need to use two trailing spaces.\u22c5\u22c5\n\u22c5\u22c5\u22c5Note that this line is separate, but within the same paragraph.\u22c5\u22c5\n\u22c5\u22c5\u22c5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Unordered list can use asterisks")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Or minuses")),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Or pluses")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"images"}},"Images"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'Here\'s our logo (hover to see the title text):\n\nInline-style: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nReference-style: \n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Here's our logo (hover to see the title text):"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Inline-style:\n",o.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"}})),o.a.createElement(r.MDXTag,{name:"p",components:n},"Reference-style:\n",o.a.createElement(r.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"}})),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"tables"}},"Tables"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"Colons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\nThere must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the \nraw Markdown line up prettily. You can also use inline Markdown.\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Colons can be used to align columns."),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Tables"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:"center"}},"Are"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:"right"}},"Cool"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"col 3 is"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"center"}},"right-aligned"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"right"}},"$1600")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"col 2 is"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"center"}},"centered"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"right"}},"$12")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"zebra stripes"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"center"}},"are neat"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:"right"}},"$1")))),o.a.createElement(r.MDXTag,{name:"p",components:n},"There must be at least 3 dashes separating each header cell.\nThe outer pipes (|) are optional, and you don't need to make the\nraw Markdown line up prettily. You can also use inline Markdown."),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Markdown"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Less"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Pretty"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"Still")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"renders")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"td"},"nicely"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"1"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"2"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"3")))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"inline-html"}},"Inline HTML"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"<dl>\n  <dt>Definition list</dt>\n  <dd>Is something people use sometimes.</dd>\n\n  <dt>Markdown in HTML</dt>\n  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n</dl>\n")),o.a.createElement("dl",null,o.a.createElement("dt",null,"Definition list"),o.a.createElement("dd",null,"Is something people use sometimes."),o.a.createElement("dt",null,"Markdown in HTML"),o.a.createElement("dd",null,"Does *not* work **very** well. Use HTML ",o.a.createElement("em",null,"tags"),".")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"horizontal-rule"}},"Horizontal Rule"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"Three or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Three or more..."),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"p",components:n},"Hyphens"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"p",components:n},"Asterisks"),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"p",components:n},"Underscores"))}}}]);