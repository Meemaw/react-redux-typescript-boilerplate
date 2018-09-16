export type HOC<PWrapped, PHoc> =
  | React.ComponentClass<PWrapped & PHoc>
  | React.SFC<PWrapped & PHoc>;
