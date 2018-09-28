(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/Columns/Columns.mdx":function(e,n,a){"use strict";a.r(n);var o=a("./node_modules/react/index.js"),t=a.n(o),r=a("./node_modules/@mdx-js/tag/dist/index.js"),l=a("./node_modules/docz/dist/index.m.js"),m=a("./src/index.js");function p(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}n.default=function(e){var n=e.components,a=p(e,["components"]);return t.a.createElement(r.MDXTag,{name:"wrapper",components:n},t.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"columns"}},"Columns"),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"import"}},"Import"),t.a.createElement(r.MDXTag,{name:"p",components:n},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import { Column, Columns } from 'bumbag'")),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),t.a.createElement(r.MDXTag,{name:"p",components:n},"Bumbag uses a ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"12 column")," flexbox based responsive column system."),t.a.createElement(r.MDXTag,{name:"p",components:n},"To create a basic columned layout, add a ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Columns>")," component and then add your ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Column>"),"s."),t.a.createElement(r.MDXTag,{name:"p",components:n},"By default, each ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Column>")," will have an ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"equal width")," and you can have up to ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"12")," columns."),t.a.createElement(l.Playground,{__position:0,__code:'<Columns>\n  <Column>\n    <Box backgroundColor="whitesmoke" padding="0.5rem">\n      First column\n    </Box>\n  </Column>\n  <Column>\n    <Box backgroundColor="whitesmoke" padding="0.5rem">\n      Second column\n    </Box>\n  </Column>\n  <Column>\n    <Box backgroundColor="whitesmoke" padding="0.5rem">\n      Third column\n    </Box>\n  </Column>\n  <Column>\n    <Box backgroundColor="whitesmoke" padding="0.5rem">\n      Fourth column\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,null,t.a.createElement(m.a,{backgroundColor:"whitesmoke",padding:"0.5rem"},"First column")),t.a.createElement(m.d,null,t.a.createElement(m.a,{backgroundColor:"whitesmoke",padding:"0.5rem"},"Second column")),t.a.createElement(m.d,null,t.a.createElement(m.a,{backgroundColor:"whitesmoke",padding:"0.5rem"},"Third column")),t.a.createElement(m.d,null,t.a.createElement(m.a,{backgroundColor:"whitesmoke",padding:"0.5rem"},"Fourth column")))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"sizes"}},"Sizes"),t.a.createElement(r.MDXTag,{name:"p",components:n},"A width for the column can also be specified using the ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spread")," prop. ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spread")," can be any number between ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1")," and ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"12"),"."),t.a.createElement(l.Playground,{__position:1,__code:'<Columns>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n  <Column spread={3}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      3\n    </Box>\n  </Column>\n  <Column>\n    <Box backgroundColor="whitesmoke" padding="0.5rem">\n      Auto (2)\n    </Box>\n  </Column>\n  <Column spread={1}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      1\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6")),t.a.createElement(m.d,{spread:3},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"3")),t.a.createElement(m.d,null,t.a.createElement(m.a,{backgroundColor:"whitesmoke",padding:"0.5rem"},"Auto (2)")),t.a.createElement(m.d,{spread:1},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"1")))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"offsets"}},"Offsets"),t.a.createElement(r.MDXTag,{name:"p",components:n},"To avoid using empty columns to offset, an ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadOffset")," prop can be used to offset the column."),t.a.createElement(r.MDXTag,{name:"p",components:n},"If a value of ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"left"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"right")," or ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"both")," is given, then the offset will apply to that area of the column."),t.a.createElement(l.Playground,{__position:2,__code:'<Columns>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n  <Column spread={2} spreadOffset="left">\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      2\n    </Box>\n  </Column>\n</Columns>\n<Columns>\n  <Column spread={2} spreadOffset="right">\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      2\n    </Box>\n  </Column>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n</Columns>\n<Columns>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n  <Column spread={2} spreadOffset="both">\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      2\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6")),t.a.createElement(m.d,{spread:2,spreadOffset:"left"},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"2"))),t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:2,spreadOffset:"right"},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"2")),t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6"))),t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6")),t.a.createElement(m.d,{spread:2,spreadOffset:"both"},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"2")))),t.a.createElement(r.MDXTag,{name:"p",components:n},"However, a more specific value (between ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1")," and ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"11"),") can be provided and is offset to the left of the column."),t.a.createElement(l.Playground,{__position:3,__code:'<Columns>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n  <Column spread={3} spreadOffset={3}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      3\n    </Box>\n  </Column>\n</Columns>\n<Columns>\n  <Column spread={2}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      2\n    </Box>\n  </Column>\n  <Column spread={6} spreadOffset={4}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n</Columns>\n<Columns>\n  <Column spread={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      6\n    </Box>\n  </Column>\n  <Column spread={3} spreadOffset={2}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      3\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6")),t.a.createElement(m.d,{spread:3,spreadOffset:3},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"3"))),t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:2},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"2")),t.a.createElement(m.d,{spread:6,spreadOffset:4},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6"))),t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"6")),t.a.createElement(m.d,{spread:3,spreadOffset:2},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"3")))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"variable-column-sizes"}},"Variable column sizes"),t.a.createElement(r.MDXTag,{name:"p",components:n},"Column sizes may depend on the viewport. The ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadMobile"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadTablet"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadDesktop"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadWidescreen")," and ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadFullHD")," props come in handy for these scenarios."),t.a.createElement(r.MDXTag,{name:"ul",components:n},t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spreadMobile")," is effective for a window width smaller than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"480px"),"."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spreadTablet")," is effective for a window width smaller than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"768px"),"."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spreadDesktop")," is effective for a window width smaller than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"1024px"),"."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spreadWidescreen")," is effective for a window width smaller than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"1200px"),"."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spreadFullHD")," is effective for a window width smaller than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"1440px"),"."),t.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"spread")," is effective for every viewport size, and viewports larger than ",t.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"li"},"1440px"),".")),t.a.createElement(l.Playground,{__position:4,__code:'<Columns>\n  <Column spread={10} spreadDesktop={8} spreadMobile={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      All: 10\n      <br />\n      Desktop: 8<br />\n      Mobile: 6\n    </Box>\n  </Column>\n  <Column spread={2} spreadDesktop={4} spreadMobile={6}>\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      All: 2<br />\n      Desktop: 4<br />\n      Mobile: 6\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:10,spreadDesktop:8,spreadMobile:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"All: 10",t.a.createElement("br",null),"Desktop: 8",t.a.createElement("br",null),"Mobile: 6")),t.a.createElement(m.d,{spread:2,spreadDesktop:4,spreadMobile:6},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"All: 2",t.a.createElement("br",null),"Desktop: 4",t.a.createElement("br",null),"Mobile: 6")))),t.a.createElement(r.MDXTag,{name:"p",components:n},"Variable spread offsets are also available with: ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadMobileOffset"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadTabletOffset"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadDesktopOffset"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadWidescreenOffset")," and ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadFullHDOffset"),"."),t.a.createElement(l.Playground,{__position:5,__code:'<Columns>\n  <Column\n    spread={10}\n    spreadOffset={1}\n    spreadDesktop={8}\n    spreadDesktopOffset={2}\n    spreadTablet={4}\n    spreadTabletOffset={4}\n  >\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      All: 10\n      <br />\n      Desktop: 8<br />\n      Tablet: 4\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:10,spreadOffset:1,spreadDesktop:8,spreadDesktopOffset:2,spreadTablet:4,spreadTabletOffset:4},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"All: 10",t.a.createElement("br",null),"Desktop: 8",t.a.createElement("br",null),"Tablet: 4")))),t.a.createElement(r.MDXTag,{name:"p",components:n},"If a value of ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"left"),", ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"right"),", or ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"both")," is specified as a ",t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"spreadOffset"),". Then this offset will apply for all variable column sizes."),t.a.createElement(r.MDXTag,{name:"p",components:n},"This example renders identically to the above example."),t.a.createElement(l.Playground,{__position:6,__code:'<Columns>\n  <Column spread={10} spreadDesktop={8} spreadTablet={4} spreadOffset="both">\n    <Box backgroundColor="#112ebb" color="white" padding="0.5rem">\n      All: 10\n      <br />\n      Desktop: 8<br />\n      Tablet: 4\n    </Box>\n  </Column>\n</Columns>',__scope:{props:a,Box:m.a,Columns:m.e,Column:m.d}},t.a.createElement(m.e,null,t.a.createElement(m.d,{spread:10,spreadDesktop:8,spreadTablet:4,spreadOffset:"both"},t.a.createElement(m.a,{backgroundColor:"#112ebb",color:"white",padding:"0.5rem"},"All: 10",t.a.createElement("br",null),"Desktop: 8",t.a.createElement("br",null),"Tablet: 4")))),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"more-to-come"}},"More to come..."),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"column-props"}},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<Column>")," Props"),t.a.createElement(l.PropsTable,{of:m.d}),t.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"columns-props"}},t.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"<Columns>")," Props"),t.a.createElement(l.PropsTable,{of:m.e}))}}}]);