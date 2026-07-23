declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: Element | string, vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}