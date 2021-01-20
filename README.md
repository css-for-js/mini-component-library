# Component Library Workshop

In this workshop, we'll build 3 components from scratch:

1. ProgressBar
2. Select
3. IconInput

Most of the pertinent information will be stored in the Figma document (https://www.figma.com/file/u0wCdLXheiN9f2FmAuPsE9/Mini-Component-Library), but this README will contain some additional information to help you on your mission!

Two fully-formed components have already been included, to be used as-needed in your work:

- `Icon`, an icon component that uses `react-feather` to render various icons
- `VisuallyHidden`, a component that allows us to make text available to screen-reader users, but not to sighted users.

Additionally, all of the colors you'll need are indexed in `constants.js`.

All components in this project use [the `Roboto` font](https://fonts.google.com/specimen/Roboto). This font is already included in the Storybook environment, and is already applied to all elements. It comes in two weights:

- 400 (default)
- 700 (bold)

## ProgressBar

The figma document mentions that this component should be "accessible". You can learn how to build a semantically-valid, accessible progress-bar component by reading this doc: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role

This component uses a **box shadow**. We haven't seen this property yet! For now, you can achieve this effect by copying the following CSS declaration into your component:

```css
box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
```

We'll learn much more about the `box-shadow` property in future modules =)

## Select

The Select component will need a down-arrow icon! You can use the `chevron-down` ID with the `Icon` component.

We want to use a native `<select>` tag in this component, so a bit of precursory HTML has been provided.

This component also includes a function, `getDisplayedValue`. This component uses some React APIs to work out the text that should be displayed. The value isn't currently used, but you can make use of it if needed, depending on your implementation.

## IconInput

This component also uses the `Icon` component — the specific ID will be provided as a prop.

This component requires bold text. You can achieve this look by using `font-weight: 700`.
