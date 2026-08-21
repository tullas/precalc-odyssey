/**
 * Hyper-Scale — 25 Real-Life Function Scenarios
 * Randomly selected when a player starts a mission.
 * Each scenario teaches how one function family behaves in daily life.
 */

window.SCENARIOS = [
  // ===== EXPONENTIAL (growth / decay) =====
  {
    id: 'virus',
    family: 'exponential',
    title: 'Outbreak Protocol',
    brief: 'A digital virus is doubling every hour. Build an exponential function that matches the infection growth and generate enough damage to contain it.',
    recommend: 'Use Exponential Spike + Stretch / Amplify',
    target: 1800,
    hints: [
      'Play Exponential Spike (doubles each turn)',
      'Add ×2 or ×3 stretch for more power',
      'Avoid Rational or Log — they do not double'
    ],
    storyDuring: t => t < 3 ? 'Infection spreading slowly…' : t < 7 ? 'Virus doubling rapidly!' : 'Critical window!'
  },
  {
    id: 'savings',
    family: 'exponential',
    title: 'Compound Interest',
    brief: 'You invest money that grows by a fixed percentage each year. Model the balance with an exponential function to reach your savings goal.',
    recommend: 'Use Exponential Spike + Stretch',
    target: 1600,
    hints: [
      'Compound growth is exponential',
      'Exponential Spike is the right parent',
      'Stretch increases the growth rate'
    ],
    storyDuring: t => t < 4 ? 'Money growing steadily…' : 'Interest compounding!'
  },
  {
    id: 'bacteria',
    family: 'exponential',
    title: 'Kitchen Bacteria',
    brief: 'Bacteria on a forgotten dish double every turn. Build the growth curve so you know when the colony becomes dangerous.',
    recommend: 'Exponential Spike + Amplify',
    target: 1700,
    hints: ['Doubling population → Exponential', 'Add stretch for faster growth', 'Linear will underestimate the danger'],
    storyDuring: t => t < 5 ? 'Colony still small…' : 'Exploding growth!'
  },
  {
    id: 'views',
    family: 'exponential',
    title: 'Viral Video',
    brief: 'Your video shares are roughly doubling each wave of viewers. Model the view count with an exponential to predict when it hits trending.',
    recommend: 'Exponential Spike + ×2 Stretch',
    target: 1750,
    hints: ['Viral sharing ≈ exponential', 'Use Exponential Spike', 'Stretch = more aggressive sharing'],
    storyDuring: t => t < 4 ? 'Early shares…' : 'Going viral!'
  },
  {
    id: 'cooling',
    family: 'exponential',
    title: 'Coffee Cooling',
    brief: 'Hot coffee cools toward room temperature. The temperature drop follows an exponential decay. Model it to know when it is drinkable.',
    recommend: 'Exponential (decay style) + careful stretch',
    target: 900,
    hints: ['Cooling is exponential decay', 'Exponential parent still applies', 'You may need smaller stretch'],
    storyDuring: t => t < 5 ? 'Still hot…' : 'Approaching room temp'
  },

  // ===== QUADRATIC =====
  {
    id: 'hoop',
    family: 'quadratic',
    title: 'Hoop Shot',
    brief: 'Championship final. The basketball follows a curved (parabolic) path. Build a quadratic so the arc goes through the hoop.',
    recommend: 'Quadratic Surge + Shift + Stretch',
    target: 950,
    hints: ['Projectile motion → Quadratic', 'Shift moves the peak', 'Stretch controls height'],
    storyDuring: t => t < 4 ? 'Ball leaving your hands…' : t < 7 ? 'Climbing toward the rim…' : 'At the hoop!'
  },
  {
    id: 'fountain',
    family: 'quadratic',
    title: 'Water Fountain',
    brief: 'Water from a park fountain follows a parabolic arc. Model the path so the stream lands in the basin, not on the path.',
    recommend: 'Quadratic Surge + Shift',
    target: 900,
    hints: ['Arcing water → Quadratic', 'Use shift to aim the landing', 'Stretch changes how high it goes'],
    storyDuring: t => t < 5 ? 'Stream rising…' : 'Falling toward basin'
  },
  {
    id: 'bridge',
    family: 'quadratic',
    title: 'Cable Bridge',
    brief: 'The main cable of a suspension bridge hangs in a parabola. Model the cable shape to check clearance for trucks.',
    recommend: 'Quadratic Surge + Stretch',
    target: 1000,
    hints: ['Hanging cable ≈ parabola', 'Quadratic is the parent', 'Stretch sets how deep the curve is'],
    storyDuring: t => 'Tracing the cable curve…'
  },
  {
    id: 'phone',
    family: 'quadratic',
    title: 'Dropped Phone',
    brief: 'You drop your phone. Its height vs time is roughly quadratic (free fall). Model the fall to estimate when it hits the ground.',
    recommend: 'Quadratic Surge',
    target: 850,
    hints: ['Free fall height → Quadratic in time', 'Quadratic Surge is ideal', 'Shift can represent release point'],
    storyDuring: t => t < 5 ? 'Phone in free fall…' : 'About to hit!'
  },
  {
    id: 'profit',
    family: 'quadratic',
    title: 'Lemonade Stand',
    brief: 'Profit vs price often rises then falls (a downward parabola). Find a quadratic model that peaks at a good selling price.',
    recommend: 'Quadratic + Stretch + Shift',
    target: 920,
    hints: ['Profit curves are often quadratic', 'Shift moves the best price', 'Stretch changes how sharp the peak is'],
    storyDuring: t => 'Scanning price vs profit…'
  },

  // ===== LINEAR =====
  {
    id: 'taxi',
    family: 'linear',
    title: 'Taxi Fare',
    brief: 'A taxi charges a fixed start fee plus a constant rate per kilometre. Model the total cost with a linear function.',
    recommend: 'Linear Core + Stretch (rate) + Shift (base fee)',
    target: 700,
    hints: ['Constant rate → Linear', 'Linear Core is the parent', 'Shift can act like the flag-fall fee'],
    storyDuring: t => 'Meter running…'
  },
  {
    id: 'data',
    family: 'linear',
    title: 'Phone Data Plan',
    brief: 'You use roughly the same amount of data every day. Model remaining data with a linear decrease.',
    recommend: 'Linear Core + negative stretch feel via compress',
    target: 650,
    hints: ['Steady daily use → Linear', 'Linear Core', 'Compress / stretch adjusts the slope'],
    storyDuring: t => 'Data draining steadily…'
  },
  {
    id: 'walk',
    family: 'linear',
    title: 'Walking to School',
    brief: 'You walk at a nearly constant speed. Distance from home is linear in time. Model it to know when you arrive.',
    recommend: 'Linear Core + Stretch',
    target: 680,
    hints: ['Constant speed → Linear', 'Stretch = walking speed', 'Shift = head-start or delay'],
    storyDuring: t => 'Steps adding up…'
  },
  {
    id: 'savings_linear',
    family: 'linear',
    title: 'Weekly Allowance',
    brief: 'You save a fixed amount every week (no interest). The total is linear in the number of weeks.',
    recommend: 'Linear Core + Stretch',
    target: 720,
    hints: ['Fixed amount each week → Linear', 'Not exponential (no compounding)', 'Linear Core + stretch'],
    storyDuring: t => 'Savings growing by the same amount…'
  },

  // ===== LOGARITHMIC =====
  {
    id: 'richter',
    family: 'logarithmic',
    title: 'Earthquake Scale',
    brief: 'Earthquake magnitude is logarithmic. A jump of 1 on the Richter scale means 10× more energy. Model the perceived intensity.',
    recommend: 'Log Dampen + Stretch',
    target: 600,
    hints: ['Richter scale → Logarithmic', 'Log Dampen is the parent', 'Stretch adjusts sensitivity'],
    storyDuring: t => 'Measuring seismic intensity…'
  },
  {
    id: 'volume',
    family: 'logarithmic',
    title: 'Speaker Volume',
    brief: 'Loudness in decibels is logarithmic in power. Model how turning the dial feels to the ear.',
    recommend: 'Log Dampen + Stretch',
    target: 580,
    hints: ['Decibels are logarithmic', 'Log parent', 'Human hearing compresses large changes'],
    storyDuring: t => 'Volume dial turning…'
  },
  {
    id: 'pH',
    family: 'logarithmic',
    title: 'Pool pH',
    brief: 'pH is a logarithmic measure of acidity. Model how small chemical changes affect the reading.',
    recommend: 'Log Dampen',
    target: 550,
    hints: ['pH → Logarithmic', 'Log Dampen', 'Small input changes, big perceived effect at extremes'],
    storyDuring: t => 'Testing water chemistry…'
  },
  {
    id: 'search',
    family: 'logarithmic',
    title: 'Binary Search',
    brief: 'Looking up a word in a sorted dictionary by halving the range each time is logarithmic in the number of entries.',
    recommend: 'Log Dampen + Stretch',
    target: 620,
    hints: ['Halving search space → Logarithmic', 'Log parent', 'Grows slowly even for huge lists'],
    storyDuring: t => 'Halving the search range…'
  },

  // ===== RATIONAL =====
  {
    id: 'speed',
    family: 'rational',
    title: 'Traffic Density',
    brief: 'At high car density, average speed drops roughly like 1/density. Model the slowdown with a rational function.',
    recommend: 'Rational Singularity + Stretch + Shift',
    target: 800,
    hints: ['Speed vs density often ~ 1/x', 'Rational Singularity', 'Shift moves the “jam” point'],
    storyDuring: t => t < 5 ? 'Traffic building…' : 'Near gridlock'
  },
  {
    id: 'sharing',
    family: 'rational',
    title: 'Pizza Sharing',
    brief: 'You split one pizza among more and more friends. Size per person is 1/n — a rational relationship.',
    recommend: 'Rational Singularity + Stretch',
    target: 750,
    hints: ['Amount per person = total / n → Rational', 'Rational Singularity', 'More people → less each'],
    storyDuring: t => 'More friends arriving…'
  },
  {
    id: 'work',
    family: 'rational',
    title: 'Work Rate',
    brief: 'If a job takes a fixed number of person-hours, time to finish is roughly 1/(number of workers).',
    recommend: 'Rational Singularity + Shift',
    target: 780,
    hints: ['Time = work / rate → Rational', 'Rational parent', 'More workers → less time'],
    storyDuring: t => 'Team size changing…'
  },
  {
    id: 'lens',
    family: 'rational',
    title: 'Camera Lens',
    brief: 'In simple optics, some image relationships behave like reciprocal (rational) functions of distance.',
    recommend: 'Rational Singularity + Stretch',
    target: 700,
    hints: ['Optical formulas often involve 1/x', 'Rational Singularity', 'Stretch scales the effect'],
    storyDuring: t => 'Focusing the lens…'
  },

  // ===== MIXED / COMPARISON =====
  {
    id: 'streaming',
    family: 'exponential',
    title: 'Streaming Subscribers',
    brief: 'A new streaming app is growing by a steady percentage each month. That is exponential, not linear.',
    recommend: 'Exponential Spike + Stretch',
    target: 1650,
    hints: ['Percentage growth → Exponential', 'Not Linear (that would be +fixed users)', 'Exponential Spike'],
    storyDuring: t => 'Subscriber base growing…'
  },
  {
    id: 'battery',
    family: 'exponential',
    title: 'Phone Battery Drain',
    brief: 'Under steady use, battery charge often falls in a way closer to exponential decay than a perfect straight line.',
    recommend: 'Exponential + Compress / Stretch',
    target: 880,
    hints: ['Drain can look exponential', 'Exponential parent', 'Adjust stretch to match speed of drain'],
    storyDuring: t => 'Battery percentage falling…'
  },
  {
    id: 'medicine',
    family: 'exponential',
    title: 'Medicine in Blood',
    brief: 'Many medicines leave the bloodstream at a rate proportional to the current amount — classic exponential decay.',
    recommend: 'Exponential Spike (as decay model) + Stretch',
    target: 820,
    hints: ['Half-life style decay → Exponential', 'Exponential parent', 'Stretch related to how fast it clears'],
    storyDuring: t => 'Concentration dropping…'
  },
  {
    id: 'stairs',
    family: 'linear',
    title: 'Climbing Stairs',
    brief: 'You climb stairs at a steady pace. Height gained is linear in the number of steps.',
    recommend: 'Linear Core + Stretch',
    target: 640,
    hints: ['Steady pace → Linear', 'Linear Core', 'Stretch = step height effect'],
    storyDuring: t => 'Step after step…'
  },
  {
    id: 'rainbow',
    family: 'quadratic',
    title: 'Garden Hose',
    brief: 'Water from a hose aimed upward follows a parabola. Model the stream so it lands on the far flowers.',
    recommend: 'Quadratic Surge + Shift + Stretch',
    target: 910,
    hints: ['Hose stream → Quadratic', 'Shift aims left/right', 'Stretch changes max height'],
    storyDuring: t => t < 5 ? 'Stream rising…' : 'Arcing down to the flowers'
  }
];

/** Pick a random scenario, optionally filtered by family */
window.pickScenario = function (familyFilter) {
  let pool = window.SCENARIOS;
  if (familyFilter) {
    pool = pool.filter(s => s.family === familyFilter);
  }
  if (!pool.length) pool = window.SCENARIOS;
  return pool[Math.floor(Math.random() * pool.length)];
};
