import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  h2,h3{
    color: ${({ theme }) => theme.colors.white} !important;
  }
  html {
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body,
figure {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary,
picture {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
template,
[hidden] {
  display: none;
}
a {
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
}
a:active,
a:hover,
:focus {
  outline: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong,
em {
  font-weight: 700;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2rem;
  margin: 0.67rem 0;
}

small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25rem;
}
sup {
  top: -0.5rem;
}
img,
video,
iframe {
  border: 0;
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  -ms-interpolation-mode: bicubic;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1rem;
}
pre {
  padding: 1rem;
  max-width: 100%;
  position: relative;
  white-space: pre-wrap;
}
pre:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.2;
  content: '';
}
figure img {
  vertical-align: top;
}
.jm15 {
  color: ${({ theme }) => theme.colors.black};
}
hr {
  background-color: currentColor;
  border: 0;
  height: 1px;
  overflow: visible;
  opacity: 0.2;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
caption {
  margin-bottom: -1px;
}
caption,
td,
th {
  border: 0;
  padding: 0.937rem;
  text-align: left;
}
button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: bold;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 0;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
legend {
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
  resize: vertical;
}
[type='checkbox'],
[type='radio'] {
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline: 0;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.8;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
@media ${({ theme }) => theme.device.laptop} {
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 15px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb:horizontal{
      border-radius: 10px;
  }
}
/*02 - .Print*/
@media print {
  *,
  *:before,
  *:after,
  *:first-letter,
  *:first-line {
    background: transparent !important;
    color: ${({ theme }) => theme.colors.black} !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: '(' attr(href) ')';
  }
  abbr[title]:after {
    content: '(' attr(title) ')';
  }
  a[href^='#']:after,
  a[href^='javascript:']:after {
    content: '';
  }
  pre,

  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}
/*04 - .Typography*/
body {
  font-size: 0.875rem;
  line-height: 1.5625rem;
  font-family: 'Source Sans Pro', sans-serif;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.colors.bg}
}
dl dt {
  font-weight: 700;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6,
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a,
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.25rem;
}
h3 {
  font-size: 1.187rem;
}
h4 {
  font-size: 1.125rem;
}
h5 {
  font-size: 1.0625rem;
}
h6 {
  font-size: 1rem;
}
/*05 - .Layout*/
*,
:before,
:after {
  box-sizing: inherit;
}
html {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

hr {
  margin: 1.87rem 0;
}
ul,
ol,
dl {
  list-style-position: outside;
}
ul ul {
  list-style-type: inherit;
}
ul ul,
ul ol,
ol ol,
ol ul {
  margin-left: 0.937rem;
  margin-bottom: 0;
}

ul,
ol {
  margin-left: 0.937rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul {
  list-style:none;
}

button,
input,
.Form-Select select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
}
button,
input,
select,
textarea {
  font: inherit;
  width: 100%;
  vertical-align: middle;
  line-height: normal;
}
fieldset {
  border: 1px solid currentColor;
  padding: 0.937rem;
}
legend {
  border: 0;
  padding: 0 1rem;
}
label {
  display: inline-block;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  line-height: normal;
  margin-bottom: 0;
}
label[for] {
  cursor: pointer;
}
[class*='Form-'] label {
  display: block;
}
/*(Input/textarea/select)*/
input,
textarea,
select,
.Form-Select label {
  border: 0;
  color: inherit;
  border-radius: 6px;
}
input,
textarea,
select,
.Form-Select label {
  display: block;
  padding: 0.5rem 1rem;
  width: 100%;
}
input,
select {
  height: 2.5rem;
  line-height: normal;
}
textarea {
  overflow: auto;
  max-width: 100%;
  height: auto;
  resize: vertical;
  padding: 1rem 1rem;
  max-height: 300px;
}
input,
textarea,
select,
.Form-Select label {
  opacity: 0.7;
}
input:focus,
textarea:focus,
select:focus,
.Form-Select select:focus + label {
  opacity: 1;
}
`;
