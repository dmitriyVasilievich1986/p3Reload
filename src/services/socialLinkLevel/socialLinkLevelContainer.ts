import { SocialLinkLevel } from './socialLinkLevel';

import type { SocialLinkLevelProps } from './types';

export class SocialLinkLevelContainer {
  readonly socialLinkLevels: SocialLinkLevel[];

  constructor(props: SocialLinkLevelProps[]) {
    this.socialLinkLevels = props.map((sllProps) => new SocialLinkLevel(sllProps));
  }

  getSocialLinkLevel(level: number, isRomantic: boolean): SocialLinkLevel {
    let payload = this.socialLinkLevels.find(
      (sll) => sll.level === level && sll.isRomantic === isRomantic
    );
    if (!payload) {
      // Single try with opposite isRomantic. Needed to reduce amount of duplicates.
      payload = this.socialLinkLevels.find(
        (sll) => sll.level === level && sll.isRomantic === !isRomantic
      );
    }
    if (!payload) {
      throw new Error(
        `Social link level not found for level ${level} and isRomantic ${isRomantic}`
      );
    }
    return payload;
  }
}
