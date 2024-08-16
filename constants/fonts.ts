import normalize from "@/utils/normalize";

interface Font {
    fontSize: number;
    lineHeight: number;
}

/* display - large */
export const dl: Font = {
    fontSize: normalize(34, "height"),
    lineHeight: normalize(41, "height"),
};

export const h1: Font = {
    fontSize: normalize(28, "height"),
    lineHeight: normalize(34, "height"),
};

export const h2: Font = {
    fontSize: normalize(22, "height"),
    lineHeight: normalize(28, "height"),
};

export const h3: Font = {
    fontSize: normalize(20, "height"),
    lineHeight: normalize(25, "height"),
};
/* headline */
export const headline: Font = {
    fontSize: normalize(17, "height"),
    lineHeight: normalize(22, "height"),
};
/* subhead */
export const subhead: Font = {
    fontSize: normalize(15, "height"),
    lineHeight: normalize(20, "height"),
};

export const body: Font = {
    fontSize: normalize(17, "height"),
    lineHeight: normalize(22, "height"),
};

export const callout: Font = {
    fontSize: normalize(16, "height"),
    lineHeight: normalize(21, "height"),
};

export const footnote: Font = { 
    fontSize: normalize(13, "height"),
    lineHeight: normalize(18, "height"),
};

export const caption1: Font = {
    fontSize: normalize(12, "height"),
    lineHeight: normalize(16, "height"),
};

export const caption2: Font = {
    fontSize: normalize(11, "height"),
    lineHeight: normalize(13, "height"),
};
