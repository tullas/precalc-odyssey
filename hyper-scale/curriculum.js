/**
 * Curriculum navigation — levels and units
 */
window.CURRICULUM = {
  levels: [
    {
      id: 'standard',
      name: 'Standard',
      blurb: 'High-school precalculus core',
      available: true
    },
    {
      id: 'honors',
      name: 'Honors',
      blurb: 'Sequences, conics, vectors, advanced trig',
      available: true
    },
    {
      id: 'ap',
      name: 'AP',
      blurb: 'Polar, parametric, matrices, rates & limits',
      available: true
    }
  ],
  units: {
    standard: [
      { id: 'functions', name: 'Functions', blurb: 'Domain, transformations, composition, inverses, piecewise, modeling', targetCount: 25 },
      { id: 'poly-rational', name: 'Polynomial & Rational', blurb: 'Zeros, end behavior, asymptotes, equations & inequalities', targetCount: 25 },
      { id: 'exp-log', name: 'Exponential & Logarithmic', blurb: 'Growth & decay, log laws, solving equations, base e', targetCount: 25 },
      { id: 'trigonometry', name: 'Trigonometry', blurb: 'Angles, unit circle, graphs, identities, triangle laws', targetCount: 25 }
    ],
    honors: [
      { id: 'sequences', name: 'Sequences & Series', blurb: 'Arithmetic & geometric sequences, partial sums', targetCount: 25 },
      { id: 'conics', name: 'Conic Sections', blurb: 'Parabolas, circles, ellipses, hyperbolas', targetCount: 25 },
      { id: 'vectors', name: 'Vectors', blurb: 'Components, magnitude, direction, basic operations', targetCount: 25 },
      { id: 'adv-trig', name: 'Advanced Trig', blurb: 'Identities, equations, deeper applications', targetCount: 25 }
    ],
    ap: [
      { id: 'polar', name: 'Polar Coordinates', blurb: 'r and θ, converting, polar graphs and distance from origin', targetCount: 25 },
      { id: 'parametric', name: 'Parametric Equations', blurb: 'Motion with time parameter, paths in the plane', targetCount: 25 },
      { id: 'matrices', name: 'Matrices', blurb: 'Entries, multiplication idea, 2×2 determinants and area', targetCount: 25 },
      { id: 'rates-limits', name: 'Rates & Limits Intro', blurb: 'Average rate of change, approaching a value, calculus bridge', targetCount: 25 }
    ]
  }
};
