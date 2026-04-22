export const ROLES = {
  DESIGNER: 'designer',
  CLIENT: 'client',
};

export const PROJECT_STATUS = {
  ACTIVE: 'active',
  COMPLETED: 'completed',
  ARCHIVED: 'archived',
  IN_REVIEW: 'in_review',
};

export const BID_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  WITHDRAWN: 'withdrawn',
};

export const CHECKPOINT_STATUS = {
  DONE: 'done',
  ACTIVE: 'active',
  UPCOMING: 'upcoming',
};

export const BRIEF_CATEGORIES = [
  'All', 'Logo Design', 'Brand Identity', 'UI/UX',
  'Illustration', 'Motion', 'Packaging', 'Print',
];

export const TIMELINE_OPTIONS = [
  '24h', '3 Days', '1 Week', '2 Weeks', '1 Month', 'Custom',
];

export const CURRENCIES = ['USD', 'EUR', 'GBP', 'EGP'];

export const MENU_ITEMS = [
  { id: 'settings',      label: 'Settings',        icon: 'settings-outline',       screen: 'Settings' },
  { id: 'notifications', label: 'Notifications',   icon: 'notifications-outline',  screen: 'Notifications' },
  { id: 'wallet',        label: 'Wallet',           icon: 'wallet-outline',         screen: 'Wallet' },
  { id: 'portfolio',     label: 'Portfolio',        icon: 'briefcase-outline',      screen: 'Portfolio' },
  { id: 'schedule',      label: 'Schedule',         icon: 'calendar-outline',       screen: 'Schedule' },
  { id: 'aiscanner',     label: 'AI Scanner',       icon: 'scan-outline',           screen: 'AIScanner' },
  { id: 'smartwatch',    label: 'Smartwatch',       icon: 'watch-outline',          screen: 'Smartwatch' },
  { id: 'language',      label: 'Language',          icon: 'language-outline',       screen: 'Language' },
  { id: 'help',          label: 'Help & Support',   icon: 'help-circle-outline',    screen: 'Help' },
];
