export interface Content {
  text?: string;
  localizedText?: string;
  linebreak?: boolean; // Currently not set up correctly
  color?: string;
  image?: string;
}

export const loginContent: Content[][] = [
  [
    { localizedText: "display.welcome_1" },
    { localizedText: "display.bearEmoji", color: "brown", linebreak: true },
    { localizedText: "display.loginDirection_1" },
  ],
  [
    { localizedText: "display.welcome_2" },
    {
      localizedText: "display.heartEmoji",
      color: "pink",
      linebreak: true,
    },
    { localizedText: "display.loginDirection_2" },
  ],
];

export const registrationContent: Content[][] = [
  [
    { localizedText: "authentication.passwordRequirements.minimum" },
    {
      localizedText: "authentication.passwordRequirements.length",
      color: "deepBlue",
    },
    { localizedText: "authentication.passwordRequirements.contain" },
    {
      localizedText: "authentication.passwordRequirements.special",
      color: "deepYellow",
    },
    {
      localizedText: "authentication.passwordRequirements.number",
      color: "lightBlue",
    },
    {
      localizedText: "authentication.passwordRequirements.capital",
      color: "deepGreen",
    },
  ],
];

export const institutionContent: Content[] = [
  { localizedText: "authentication.institutionInfo.which" },
  {
    localizedText: "common.university",
    color: "deepCyan",
  },
  { localizedText: "authentication.institutionInfo.and" },
  {
    localizedText: "common.guild",
    color: "deepGreen",
  },
  { localizedText: "authentication.institutionInfo.from" },
  { localizedText: "authentication.institutionInfo.affects" },
  {
    localizedText: "display.cutesyEmoji",
    color: "pink",
  },
  { localizedText: "authentication.institutionInfo.also" },
  {
    localizedText: "common.username",
    color: "violet",
  },
  { text: "!" },
];

export const invalidCredentialsContent: Content[] = [
  { localizedText: "authentication.loginError.credentials" },
  {
    localizedText: "display.frownEmoji",
    color: "deepCyan",
  },
];

export const loginErrorContent: Content[] = [
  {
    localizedText: "display.bearTableEmoji",
    color: "deepCyan",
  },
  { localizedText: "authentication.loginError.other" },
];
