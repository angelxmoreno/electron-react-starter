import React, { SFC, ComponentType } from "react";
import * as Icons from "react-feather";
import { camelize } from "inflection";

type FeatherProps = React.ComponentProps<typeof Icons.Activity>;
interface IconProps {
  name: string;
}

const Icon: SFC<FeatherProps & IconProps> = props => {
  const properName = camelize(props.name.replace(new RegExp("-", "g"), "_"));
  const classes = `feather feather-${props.name}`;
  const IconComponent = (Icons as any)[properName] as ComponentType<
    FeatherProps
  >;
  return <IconComponent {...props} className={classes} />;
};

export default Icon;
