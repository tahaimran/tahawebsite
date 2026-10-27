import type { ImageMetadata } from 'astro';

import habitsIcon from '../assets/apps/habits/icon.png';
import habitsFeature from '../assets/apps/habits/feature.png';
import siplingIcon from '../assets/apps/sipling/icon.png';
import siplingFeature from '../assets/apps/sipling/feature.png';
import wordSearchIcon from '../assets/apps/word-search/icon.png';
import wordSearchFeature from '../assets/apps/word-search/feature.png';
import quizoraIcon from '../assets/apps/quizora/icon.png';
import quizoraFeature from '../assets/apps/quizora/feature.png';
import contractionIcon from '../assets/apps/contraction-timer/icon.png';
import contractionFeature from '../assets/apps/contraction-timer/feature.png';

const shotFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/apps/*/shots/*.png', { eager: true });

/** The 8 store screenshots of an app, in upload order (01 … 08). */
function shots(slug: string): ImageMetadata[] {
  return Object.entries(shotFiles)
    .filter(([path]) => path.includes(`/apps/${slug}/shots/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}

export interface FeatureGroup {
  title: string;
  points: string[];
}

export interface Faq {
  q: string;
  a: string;
}

/** Colours come from each app's own theme: `light` / `dark` primary, and the soft tint behind it. */
export interface AppColors {
  light: string;
  dark: string;
  soft: string;
  softDark: string;
}

export interface App {
  slug: string;
  /** The short name on the phone's home screen. */
  name: string;
  /** The Google Play title. */
  title: string;
  /** The Google Play short description. */
  tagline: string;
  intro: string;
  category: string;
  audience: string;
  /** Google Play link, once the app is live. Until then the page says "Coming soon". */
  playUrl: string | null;
  icon: ImageMetadata;
  feature: ImageMetadata;
  shots: ImageMetadata[];
  /** Screenshot captions, used as alt text (same order as `shots`). */
  shotAlts: string[];
  colors: AppColors;
  highlights: string[];
  features: FeatureGroup[];
  privacy: string[];
  faq: Faq[];
  /** Extra line shown in a callout on the app and policy pages. */
  notice?: string;
}

export const apps: App[] = [
  {
    slug: 'habits',
    name: 'Habits',
    title: 'Habit Tracker: Streak & Widget',
    tagline: 'Habit tracker for daily routines, streaks, reminders and a home screen widget.',
    intro:
      'Build habits one small check-in at a time. Track yes/no, count and timed habits, keep your streak alive, and tick things off right from your home screen.',
    category: 'Productivity',
    audience: 'Ages 13+',
    playUrl: null,
    icon: habitsIcon,
    feature: habitsFeature,
    shots: shots('habits'),
    shotAlts: [
      'Build habits that stick: the Today screen with habits checked off',
      'Check off from your home screen: the Habits widget on an Android home screen',
      'See your progress grow: a habit’s heatmap calendar and streaks',
      'Track water, workouts and study time: count and timer habits',
      'Weekly stats that motivate: completion rates for the week',
      'Missed a day? Keep your streak: streak freezes',
      'Gentle reminders, your way: reminder settings',
      'Private. Offline. No sign-up.',
    ],
    colors: { light: '#5B3DF5', dark: '#8B78FF', soft: '#ECE8FF', softDark: '#2A2350' },
    highlights: ['Home screen widget', 'Streak freezes', 'Works offline'],
    features: [
      {
        title: 'Track any kind of habit',
        points: [
          'Yes/no habits: meditate, read, make your bed',
          'Count habits: 8 glasses of water, 50 push-ups',
          'Timed habits: study for 25 minutes, stretch for 10',
          'Every day, a few times a week, or on chosen weekdays',
        ],
      },
      {
        title: 'Streaks that keep you going',
        points: [
          'Current and best streak for every habit',
          'Earn streak freezes to protect a streak on a busy day',
          'A small celebration on every check-in',
        ],
      },
      {
        title: 'Home screen widget',
        points: ['See today’s habits and your streak at a glance', 'Tick a habit or add +1 without opening the app'],
      },
      {
        title: 'Progress you can see',
        points: ['A heatmap calendar for each habit', 'Weekly and monthly completion rates', 'A short note and mood for any day'],
      },
      {
        title: 'Reminders on your terms',
        points: ['A reminder time for each habit', 'An optional evening nudge before a streak breaks', 'You choose how many you get'],
      },
      {
        title: 'Private by design',
        points: ['No account and no cloud', 'Back up to a file and restore it on a new phone'],
      },
    ],
    privacy: [
      'No account, no sign-in and no developer server.',
      'Your habits, check-ins and notes stay on your phone.',
      'Google AdMob shows ads and collects device data to do it. You can change your ad choices in Settings.',
    ],
    faq: [
      {
        q: 'How do I move my habits to a new phone?',
        a: 'Open Settings, then Backup & restore, and export a backup. Save the file somewhere you can reach from the new phone (Drive, email, a USB cable), then import it there from the same screen.',
      },
      {
        q: 'How do I add the widget?',
        a: 'Long-press an empty spot on your home screen, tap Widgets, find Habits and drag "Habits: Today" onto the screen. You can resize it to show more habits.',
      },
      {
        q: 'How do I delete all my data?',
        a: 'Everything lives on your phone, so uninstalling the app or clearing its storage in Android settings deletes it for good. There is nothing stored on a server.',
      },
    ],
  },
  {
    slug: 'sipling',
    name: 'Sipling',
    title: 'Sipling: Drink Water Reminder',
    tagline: 'Water tracker and daily hydration reminder that grows a cute plant as you drink.',
    intro:
      'Every glass you log makes your plant a little happier. Sipling sets a daily water goal that fits you, reminds you only while you are awake, and lets you log a drink right from the notification.',
    category: 'Health & Fitness',
    audience: 'Ages 13+',
    playUrl: null,
    icon: siplingIcon,
    feature: siplingFeature,
    shots: shots('sipling'),
    shotAlts: [
      'Drink water, grow your plant: the Today screen with the plant and water level',
      'Log right from the reminder: a reminder with Add 250 ml and Snooze buttons',
      'Your personal daily goal: the goal setup',
      'Smart reminders, only when awake: reminder settings with wake and bed times',
      'Build a streak, watch it bloom: the garden of plants',
      'See your weekly progress: the weekly chart',
      'Water, coffee, tea and more: choosing a drink',
      'Private, offline, no sign-up',
    ],
    colors: { light: '#136CAD', dark: '#5BB8F5', soft: '#FFE9D2', softDark: '#16344A' },
    highlights: ['Log from the notification', 'A plant that grows', 'Works offline'],
    features: [
      {
        title: 'Reminders that fit your day',
        points: [
          'Spaced between your wake-up and bed times',
          'Skipped when you have just had a drink',
          '"Add 250 ml" and "Snooze" right on the reminder',
        ],
      },
      {
        title: 'A goal made for you',
        points: [
          'A personal daily goal from your weight, activity and climate',
          'Set your own goal any time, in ml or fl oz',
          'A general wellness estimate, not medical advice',
        ],
      },
      {
        title: 'Watch your plant grow',
        points: ['Reach your goal to grow it from a seed to a bloom', 'Miss a day and it only droops a little. It never dies.'],
      },
      {
        title: 'Quick logging',
        points: ['Four cup sizes on the home screen', 'Water, sparkling water, tea, coffee, juice and milk', 'Undo within five seconds, or edit later'],
      },
      {
        title: 'Streaks without stress',
        points: ['Streak freezes protect a busy day', 'Unlock new plant skins and cups as you go'],
      },
      {
        title: 'History and charts',
        points: ['Weekly and monthly charts with your goal line', 'Dark mode, large text and TalkBack support'],
      },
    ],
    privacy: [
      'No account, no sign-in and no developer server.',
      'Your water log, goal and weight stay on your phone.',
      'Google AdMob shows ads and collects device data to do it. You can change your ad choices in Settings.',
    ],
    faq: [
      {
        q: 'My reminders stopped arriving. What can I do?',
        a: 'Some phones (often Xiaomi, Samsung and OnePlus) pause apps to save battery. In Android settings, open Apps, then Sipling, then Battery, and allow it to run in the background. Also check that notifications for Sipling are on.',
      },
      {
        q: 'Why did a reminder not come right after I drank?',
        a: 'That is on purpose. When you log a drink shortly before a reminder is due, Sipling skips that reminder and waits for the next one.',
      },
      {
        q: 'How do I move my data to a new phone?',
        a: 'Open Settings, then Backup and restore, and export a backup. Restore that file on the new phone from the same screen.',
      },
    ],
  },
  {
    slug: 'word-search',
    name: 'Word Search',
    title: 'Word Search: Large Print Easy',
    tagline: 'Easy word search for seniors: big letters, offline puzzles, no timer pressure.',
    intro:
      'A calm word search made for comfortable reading. Pick a letter size up to extra large, turn on high contrast if you like, and play at your own pace. There are no timers and no lives.',
    category: 'Word game',
    audience: 'Adults',
    playUrl: null,
    icon: wordSearchIcon,
    feature: wordSearchFeature,
    shots: shots('word-search'),
    shotAlts: [
      'Big letters, easy to read: a word search grid in large print',
      'Pick your letter size: four letter sizes',
      'No timers, no pressure: a puzzle in progress',
      'Play offline, anywhere',
      '12 themed word packs',
      'A new puzzle every day: the daily puzzle and streak',
      'High contrast and dark mode',
      'Easy to hard, you choose: difficulty levels',
    ],
    colors: { light: '#1F5FAF', dark: '#8EC0FF', soft: '#D6E8FA', softDark: '#1C3557' },
    highlights: ['Four letter sizes', 'No timers', 'Works offline'],
    features: [
      {
        title: 'Big, clear letters',
        points: [
          'Four letter sizes, up to extra large print',
          'High-contrast mode and a soft dark mode',
          'Thick highlights so found words are easy to see',
          'Works with TalkBack and your phone’s font size',
        ],
      },
      {
        title: 'Relaxing, no pressure',
        points: ['No timers, no lives, no penalties', 'Your puzzle is saved if you stop halfway', 'Hints when you get stuck'],
      },
      {
        title: 'Plays offline',
        points: ['Every puzzle is made on your phone', 'Unlimited puzzles, no Wi-Fi needed'],
      },
      {
        title: '12 word packs',
        points: ['Animals, Birds, Nature, Food, Baking, Travel', 'Cities, Holidays, Seasons, Music, Hobbies, Home & Family'],
      },
      {
        title: 'A daily puzzle',
        points: ['A fresh puzzle every morning', 'Keep a streak and collect stars', 'An optional reminder'],
      },
      {
        title: 'Your level',
        points: ['Easy: across and down', 'Medium: adds diagonal words', 'Hard: bigger grids and backwards words'],
      },
    ],
    privacy: [
      'No account, no sign-in and no developer server.',
      'Your progress, stars and settings stay on your phone.',
      'Google AdMob shows ads and collects device data to do it. You can change your ad choices in Settings.',
    ],
    faq: [
      {
        q: 'Can I play by tapping instead of sliding?',
        a: 'Yes. Tap the first letter of a word, then the last letter. In Settings you can also switch to "Tap only".',
      },
      {
        q: 'How do I make the letters bigger?',
        a: 'Choose a letter size when you start, or change it any time from the menu during a puzzle or in Settings. The app also follows your phone’s font size.',
      },
      {
        q: 'How do I start over?',
        a: 'Settings has "Reset progress". It asks twice before it erases your progress and keeps your settings. Uninstalling the app also removes everything.',
      },
    ],
  },
  {
    slug: 'quizora',
    name: 'Quizora',
    title: 'Quizora: Trivia Quiz Offline',
    tagline: 'Offline general knowledge quiz games: daily trivia challenge, IQ and movie trivia.',
    intro:
      'More than 3,000 trivia questions that live on your phone, a new Daily Challenge every day, and a short "Did you know?" after every answer. No account and no internet needed.',
    category: 'Trivia game',
    audience: 'Ages 13+',
    playUrl: null,
    icon: quizoraIcon,
    feature: quizoraFeature,
    shots: shots('quizora'),
    shotAlts: [
      '3,000+ trivia questions, offline: the home screen',
      'A new daily trivia challenge',
      'Learn why with every answer: the answer explanation',
      '12 categories to master',
      '30 levels in every category',
      'Beat the 60-second Blitz',
      'Use lifelines: 50/50, Skip, +Time',
      'Track your brain progress: statistics in dark mode',
    ],
    colors: { light: '#5B3FE0', dark: '#A796FF', soft: '#FFF1C7', softDark: '#2C2558' },
    highlights: ['3,000+ questions', 'Daily Challenge', 'Works offline'],
    features: [
      {
        title: 'Fully offline',
        points: ['Every question is stored on your phone', 'Play on a flight, on the subway or with no signal'],
      },
      {
        title: '12 categories',
        points: [
          'General knowledge, geography, history, science',
          'Nature and animals, movies, music, sports',
          'Food, literature, and logic & IQ puzzles',
          'From easy warm-ups to tough brain teasers',
        ],
      },
      {
        title: 'Daily Challenge',
        points: ['Ten questions a day, the same for every player', 'Keep your streak and earn streak freezes'],
      },
      {
        title: 'Game modes',
        points: ['30 levels per category with up to 3 stars each', 'Practice any category at your own pace', 'Blitz: as many as you can in 60 seconds'],
      },
      {
        title: 'Learn something every time',
        points: ['A short explanation after every answer, right or wrong'],
      },
      {
        title: 'Calm and readable',
        points: ['No ads while you answer', 'Adjustable text size, dark mode and a relaxed mode with no timer', 'Lifelines: 50/50, Skip and +Time'],
      },
    ],
    privacy: [
      'No account, no sign-in and no developer server.',
      'Your progress, stars and statistics stay on your phone.',
      'Google AdMob shows ads and collects device data to do it. You can change your ad choices in Settings.',
    ],
    faq: [
      {
        q: 'I think an answer is wrong. How do I tell you?',
        a: 'Tap "Report this question" on the answer screen. It opens your email app with the question number filled in, so I can find and fix it.',
      },
      {
        q: 'Do I need the internet to play?',
        a: 'No. All questions are on your phone. The internet is only used to load ads, and the game works the same without it.',
      },
      {
        q: 'How do I start over?',
        a: 'Settings has "Reset progress". Uninstalling the app also removes everything, because nothing is stored anywhere else.',
      },
    ],
  },
  {
    slug: 'contraction-timer',
    name: 'Contraction Timer',
    title: 'Contraction Timer & Kick Count',
    tagline: 'Time contractions and spot 5-1-1 patterns. Kick counter and due date calculator.',
    intro:
      'One big button to time contractions, a gentle note when your last hour matches the pattern your provider gave you, and a clear summary to send to your midwife. Everything stays on your phone.',
    category: 'Parenting',
    audience: 'Adults (18+)',
    playUrl: null,
    icon: contractionIcon,
    feature: contractionFeature,
    shots: shots('contraction-timer'),
    shotAlts: [
      'One big button, that’s it: the contraction timer',
      'Know when your 5-1-1 pattern is reached: the pattern banner',
      'Send a clear summary to your midwife: the share summary',
      'Night mode made for 3 a.m.: red on black',
      'Partner mode: big text, zero setup',
      'Count kicks to 10: the kick counter and its history',
      'Due date and week-by-week sizes',
      'Hospital bag and birth plan checklists',
    ],
    colors: { light: '#1F7A72', dark: '#5EC4BA', soft: '#E0F2EF', softDark: '#18332F' },
    highlights: ['One-tap timer', '5-1-1 pattern note', 'Night mode'],
    features: [
      {
        title: 'Contraction timer',
        points: [
          'Tap when a contraction starts, tap again when it ends',
          'Duration, interval and one-hour averages, live',
          'Keeps timing if you lock the phone or close the app',
          'The screen stays awake while you time',
        ],
      },
      {
        title: 'Pattern note (5-1-1, 4-1-1, 3-1-1)',
        points: [
          'Pick the rule your provider recommended, or set your own',
          'A calm message when your last hour matches it',
          'No diagnosis: the app shows numbers, your provider decides',
        ],
      },
      {
        title: 'Share with your midwife',
        points: ['A text summary or a PDF, made on your phone', 'Send it by message or email in a few taps'],
      },
      {
        title: 'Kick counter',
        points: ['Count to 10 movements and see how long it took', 'A history of every session', 'An optional daily reminder'],
      },
      {
        title: 'Due date and weeks',
        points: ['From your last period, conception or IVF transfer date', 'Week-by-week size cards'],
      },
      {
        title: 'For the big day',
        points: ['Night mode in red on black', 'Partner mode with extra-large text', 'Hospital bag and birth plan checklists'],
      },
    ],
    privacy: [
      'No account, no sign-in and no developer server.',
      'Your contractions, kicks and due date stay on your phone. Android backup is turned off for this app.',
      'Google AdMob shows ads and collects device data to do it, never your health entries. No ads on the Timer or Kicks screens.',
    ],
    faq: [
      {
        q: 'Will the timer keep going if I lock my phone?',
        a: 'Yes. The session is saved as you go. Lock the phone or close the app and the timer picks up where it left off when you come back.',
      },
      {
        q: 'Can my partner use it?',
        a: 'Yes. Turn on Partner mode for extra-large text and buttons, then hand them the phone. It uses the same data, so there is nothing to set up.',
      },
      {
        q: 'How do I delete everything?',
        a: 'Open More, then Delete all data. The app goes back to the first screen with nothing left. Uninstalling also removes everything.',
      },
    ],
    notice:
      'Contraction Timer & Kick Count is not a medical device and does not give medical advice. Always follow your midwife’s, doctor’s or hospital’s guidance, and contact them or emergency services if you are worried.',
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

/** Inline CSS custom properties that theme a section in an app's own colours. */
export const appStyle = (app: App) =>
  `--a:${app.colors.light};--a-d:${app.colors.dark};--s:${app.colors.soft};--s-d:${app.colors.softDark}`;
