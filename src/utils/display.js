const display = (traits, trait, value) =>
    traits.attributes[trait].filter(({ value: val }) => val === value)[0].label;
export default display;