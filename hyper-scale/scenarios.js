/**
 * Hyper-Scale — Practical Real-Life Scenarios
 * Clearer wording, stronger teaching focus.
 */

window.SCENARIOS = [
  // ===== EXPONENTIAL =====
  {
    id: 'savings',
    family: 'exponential',
    title: 'Compound Interest',
    brief: 'You put money in a savings account that earns a fixed percentage each year. The balance grows by multiplying — not by adding the same amount. Build an exponential model to see how the money grows over 10 years.',
    recommend: 'Exponential Spike + Stretch (higher rate)',
    target: 1600,
    hints: [
      'Percentage growth multiplies → Exponential',
      'Linear would only add a fixed amount each year',
      'Stretch represents a higher interest rate'
    ],
    storyDuring: t => t < 4 ? 'Balance growing slowly at first…' : 'Compounding speeds up',
    visual: 'bars' // growing height bars
  },
  {
    id: 'views',
    family: 'exponential',
    title: 'Viral Video',
    brief: 'Each person who likes your video shares it with about two friends. Views roughly double with every wave of sharing. Model this doubling to predict when the video will hit a high view count.',
    recommend: 'Exponential Spike + Stretch',
    target: 1750,
    hints: [
      'Each wave doubles viewers → Exponential',
      'Linear would mean a fixed number of new views each turn',
      'Use Exponential Spike'
    ],
    storyDuring: t => t < 4 ? 'Early shares…' : 'Going viral!',
    visual: 'dots' // multiplying dots
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Kitchen Bacteria',
    brief: 'Bacteria on a dish roughly double every few hours in the right conditions. After several doublings the colony is huge. Build the exponential growth curve so you can see why “just a few hours” matters.',
    recommend: 'Exponential Spike + Amplify',
    target: 1700,
    hints: [
      'Doubling each interval → Exponential',
      'A straight line would badly underestimate later growth',
      'Stretch / Amplify = faster doubling'
    ],
    storyDuring: t => t < 4 ? 'Colony still small…' : 'Colony exploding!',
    visual: 'colonies'
  },
  {
    id: 'medicine',
    family: 'exponential',
    title: 'Medicine Level',
    brief: 'Many medicines leave the blood at a rate proportional to how much is still there (a constant fraction each hour). That is exponential decay. Model the falling level over time.',
    recommend: 'Exponential Spike + Compress or Stretch',
    target: 820,
    hints: [
      'Constant fraction remaining → Exponential decay',
      'Not a straight drop (linear)',
      'Exponential parent still models this'
    ],
    storyDuring: t => 'Concentration falling…',
    visual: 'fade'
  },
  {
    id: 'streaming',
    family: 'exponential',
    title: 'App Subscribers',
    brief: 'A new app gains a steady percentage of new users each month (word of mouth). That is exponential growth, not “+1000 users every month.” Model the subscriber curve.',
    recommend: 'Exponential Spike + Stretch',
    target: 1650,
    hints: [
      'Percentage growth → Exponential',
      'Linear would be a fixed number of new users each month',
      'Use Exponential Spike'
    ],
    storyDuring: t => 'Subscriber base growing…',
    visual: 'bars'
  },

  // ===== QUADRATIC =====
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Basketball Shot',
    brief: 'A basketball follows a curved path (a parabola) under gravity. Build a quadratic function so the height of the ball matches an arc that can go through the hoop.',
    recommend: 'Quadratic Surge + Shift + Stretch',
    target: 950,
    hints: [
      'Projectile under gravity → Quadratic',
      'Shift moves where the peak of the arc is',
      'Stretch changes how high the ball goes'
    ],
    storyDuring: t => t < 4 ? 'Ball in the air…' : t < 7 ? 'Near the rim…' : 'At the hoop',
    visual: 'ball'
  },
  {
    id: 'hose',
    family: 'quadratic',
    title: 'Garden Hose',
    brief: 'Water from a hose aimed upward follows a parabola and falls back down. Model the stream so it lands on the far flower bed instead of the path.',
    recommend: 'Quadratic Surge + Shift + Stretch',
    target: 910,
    hints: [
      'Arcing water → Quadratic',
      'Shift aims the landing point',
      'Stretch sets maximum height'
    ],
    storyDuring: t => t < 5 ? 'Stream rising…' : 'Falling toward the flowers',
    visual: 'ball'
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    brief: 'When you drop a phone, its height above the ground falls faster and faster (accelerated by gravity). Height vs time is roughly quadratic. Model the fall.',
    recommend: 'Quadratic Surge',
    target: 850,
    hints: [
      'Free fall height vs time → Quadratic',
      'Not linear (that would be constant speed)',
      'Quadratic Surge is the right parent'
    ],
    storyDuring: t => t < 5 ? 'Phone falling…' : 'About to hit the ground',
    visual: 'ball'
  },
  {
    id: 'profit',
    family: 'quadratic',
    title: 'Lemonade Pricing',
    brief: 'If you set the price too low you sell a lot but earn little per cup; too high and few people buy. Profit often rises then falls — a downward-opening parabola. Find a quadratic that peaks at a sensible price.',
    recommend: 'Quadratic + Stretch + Shift',
    target: 920,
    hints: [
      'Profit vs price often peaks then falls → Quadratic',
      'Shift moves the best price',
      'Stretch changes how sharp the peak is'
    ],
    storyDuring: t => 'Scanning price vs profit…',
    visual: 'bars'
  },

  // ===== LINEAR =====
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Fare',
    brief: 'A taxi charges a starting fee plus a fixed amount per kilometre. Total cost rises at a constant rate. Model the fare with a linear function.',
    recommend: 'Linear Core + Stretch (rate) + Shift (base fee)',
    target: 700,
    hints: [
      'Constant rate per km → Linear',
      'Shift can represent the flag-fall fee',
      'Stretch is the per-km rate'
    ],
    storyDuring: t => 'Meter running…',
    visual: 'line'
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walk to School',
    brief: 'You walk at a nearly constant speed. Distance from home increases steadily with time. Model this with a linear function to see when you arrive.',
    recommend: 'Linear Core + Stretch',
    target: 680,
    hints: [
      'Constant speed → Linear',
      'Stretch = walking speed',
      'Not exponential (you are not accelerating)'
    ],
    storyDuring: t => 'Steps adding up at a steady pace…',
    visual: 'line'
  },
  {
    id: 'allowance',
    family: 'linear',
    title: 'Weekly Allowance',
    brief: 'You save a fixed amount every week and earn no interest. The total saved is just “amount × weeks” — a straight line. Model it.',
    recommend: 'Linear Core + Stretch',
    target: 720,
    hints: [
      'Same amount each week → Linear',
      'If it earned interest it would be exponential',
      'Linear Core is correct here'
    ],
    storyDuring: t => 'Savings growing by the same amount each week…',
    visual: 'bars'
  },

  // ===== LOGARITHMIC =====
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Magnitude',
    brief: 'On the Richter scale, each step up of 1 means about 10 times more energy. That is a logarithmic scale: large energy changes become smaller steps on the scale. Model the relationship with a log function.',
    recommend: 'Log Dampen + Stretch',
    target: 600,
    hints: [
      'Richter scale is logarithmic',
      'Log turns multiplication into addition on the scale',
      'Use Log Dampen'
    ],
    storyDuring: t => 'Measuring seismic intensity…',
    visual: 'scale'
  },
  {
    id: 'volume',
    family: 'logarithmic',
    title: 'Speaker Loudness',
    brief: 'Loudness in decibels is logarithmic in sound power. Doubling the power does not double the perceived loudness. Model this with a log function.',
    recommend: 'Log Dampen + Stretch',
    target: 580,
    hints: [
      'Decibels are a log scale',
      'Human hearing compresses large power changes',
      'Log parent'
    ],
    storyDuring: t => 'Volume dial turning…',
    visual: 'scale'
  },
  {
    id: 'search',
    family: 'logarithmic',
    title: 'Dictionary Lookup',
    brief: 'In a sorted dictionary you can find a word by repeatedly jumping to the middle of the remaining section. The number of steps grows very slowly (logarithmically) even for a huge book. Model that with a log function.',
    recommend: 'Log Dampen + Stretch',
    target: 620,
    hints: [
      'Halving the search range each time → Logarithmic',
      'Steps stay small even for millions of entries',
      'Log Dampen is the parent'
    ],
    storyDuring: t => 'Halving the remaining pages…',
    visual: 'scale'
  },

  // ===== RATIONAL =====
  {
    id: 'pizza',
    family: 'rational',
    title: 'Sharing a Pizza',
    brief: 'One pizza shared equally among more friends means each person gets less. Amount per person = total ÷ number of people (a 1/n relationship). Model this with a rational function.',
    recommend: 'Rational Singularity + Stretch',
    target: 750,
    hints: [
      'Amount per person = 1 / n → Rational',
      'More people → less each',
      'Rational Singularity is the parent'
    ],
    storyDuring: t => 'More friends arriving…',
    visual: 'slices'
  },
  {
    id: 'traffic',
    family: 'rational',
    title: 'Traffic Speed',
    brief: 'When a road gets crowded, average speed drops. A simple model is “speed ≈ constant / density.” That is a rational (1/x) relationship. Build it.',
    recommend: 'Rational Singularity + Stretch + Shift',
    target: 800,
    hints: [
      'Speed falls as density rises ≈ 1/x',
      'Rational parent',
      'Shift can move where the jam becomes severe'
    ],
    storyDuring: t => t < 5 ? 'Traffic building…' : 'Near gridlock',
    visual: 'cars'
  },
  {
    id: 'workers',
    family: 'rational',
    title: 'Team Work Rate',
    brief: 'A job takes a fixed amount of work. More workers finish it faster: time ≈ work ÷ number of workers. Model time vs workers with a rational function.',
    recommend: 'Rational Singularity + Shift',
    target: 780,
    hints: [
      'Time = work / workers → Rational',
      'More workers → less time',
      'Rational Singularity'
    ],
    storyDuring: t => 'Team size changing…',
    visual: 'bars'
  }
];

window.pickScenario = function (familyFilter) {
  let pool = window.SCENARIOS;
  if (familyFilter) pool = pool.filter(s => s.family === familyFilter);
  if (!pool.length) pool = window.SCENARIOS;
  return pool[Math.floor(Math.random() * pool.length)];
};
