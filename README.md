# Brikcss Typography

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/typography">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/typography.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/typography">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/typography.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/typography/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/typography">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/a50d4c1d525d4ad6b07c134d03eeac3b/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/typography?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/typography/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

Front end component to make managing typography in HTML and CSS easier.

---

## Environment and browser support

| Node   | CLI   | UMD   | ES Module | Browser   |
|:------:|:-----:|:-----:|:---------:|:---------:|
| x      | x     | x     | x         | ✓         |

| Chrome | Firefox | Safari | Edge | IE  | iOS | Android |
|:------:|:-------:|:------:|:----:|:---:|:---:|:-------:|
| ✓      | ✓       | ✓      | ✓    | 11  | ✓   | ✓       |

## Install

1. Install from NPM:

	```sh
	npm i -D @brikcss/typography
	```

2. Include file(s) in your app:

	- Include `./dist/typography.min.css` or `./dist/typography.css` for the precompiled CSS.
	- To create your own custom typography styles, follow `./src/typography.css` as an example. It is compiled with PostCSS using [postcss-font-magician](https://github.com/jonathantneal/postcss-font-magician), [postcss-apply](https://github.com/pascalduez/postcss-apply), and [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem).

## Usage

Brikcss Typography follows [Material Design's Typography](https://material.io/design/typography/) to create the following font styles:

- overline
- caption
- button
- body2
- body
- subtitle2
- subtitle
- h6
- h5
- h4
- h3
- h2
- h1

### Font classes

A class is created for each font style. Each class is named as follows: `.font__<font style name>` (i.e., `.font__body`).

### Font property sets

A "property set" is also created for each font style, which allows you to `@apply` a font style's properties inside your own CSS rules.

Example input:

```css
.my-selector {
	@apply --font__title;
}
```

Output:

```css
.my-selector {
	font-size: 1.25rem;
	font-weight: 500;
	line-height: 3rem;
	letter-spacing: 0.02em;
}
```

### Creating your own custom font styles

You can easily create your own custom font styles by following the example in [the source typography.css](./src/typography.css). It uses [postcss-apply](https://github.com/pascalduez/postcss-apply) to create property sets. Refer to their documentation for configuration and usage details.
