import { SingleDay } from "@/constants/calendar/SingleDay";
import { socialLinks } from "@/constants/socialLinks";

import {
  SocialLinkAvailableProps,
  SocialLinkElementProps,
  SocialLinkNames,
  Routes,
} from "@/constants/socialLinks/types";

import {
  upgradeResponse,
  allEventsNames,
  Categories,
  Times,
  Event,
} from "../types";

export class SocialLinkEvent implements Event {
  name: allEventsNames;
  linkName: SocialLinkNames;
  romance: Routes = Routes.Platonic;

  time: Times = Times.Day;
  special: boolean = false;
  category: Categories = Categories.Links;

  constructor(props: {
    name: allEventsNames;
    time?: Times;
    romance?: Routes;
    special?: boolean;
    linkName?: SocialLinkNames;
  }) {
    this.linkName = props.linkName || (props.name as SocialLinkNames);
    this.romance = props.romance || this.romance;
    this.special = props.special ?? this.special;
    this.time = props.time || this.time;
    this.name = props.name;

    this.available = this.available.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.label = this.label.bind(this);
  }

  label(props: SocialLinkElementProps): React.ReactNode {
    return socialLinks[this.linkName].element.bind(socialLinks[this.linkName])(
      props,
      this.romance
    );
  }

  available(props: SocialLinkAvailableProps): boolean {
    return socialLinks[this.linkName].isAvailable.bind(
      socialLinks[this.linkName]
    )(props, this.romance);
  }

  upgrade(
    props: SocialLinkAvailableProps & {
      previousWeek?: SingleDay;
    }
  ): upgradeResponse {
    return socialLinks[this.linkName].calculate.bind(
      socialLinks[this.linkName]
    )(props, this.romance);
  }
}
