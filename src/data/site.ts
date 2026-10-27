// One place for the details that appear on every page and in every privacy policy.
export const site = {
  name: 'Taha Imran',
  url: 'https://tahaimran.com',
  // The support address shown on the site and in every policy. Set up mail forwarding for it
  // (for example Cloudflare Email Routing) before the first app goes live.
  email: 'support@tahaimran.com',
  description:
    'Taha Imran makes small Android apps that work offline, need no account and keep your data on your phone.',
  // Date the policies on this site take effect. Bump it whenever a policy changes.
  policyDate: '2026-10-27',
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
