/**
 * Curriculum navigation — levels, units, and linked study guides
 */
window.CURRICULUM = {
  levels: [
    { id: 'standard', name: 'Standard', blurb: 'High-school precalculus core', available: true },
    { id: 'honors', name: 'Honors', blurb: 'Sequences, conics, vectors, advanced trig', available: true },
    { id: 'ap', name: 'AP', blurb: 'Polar, parametric, matrices, rates & limits', available: true }
  ],
  guides: [
    { href: '/guides/what-is-precalculus.html', title: 'What is precalculus?', blurb: 'The big picture' },
    { href: '/guides/functions-and-transformations.html', title: 'Functions & transformations', blurb: 'Parents, shifts, stretches' },
    { href: '/guides/polynomial-and-rational-functions.html', title: 'Polynomial & rational', blurb: 'Zeros, ends, asymptotes' },
    { href: '/guides/exponential-and-logarithmic-functions.html', title: 'Exp & log functions', blurb: 'Growth and decay' },
    { href: '/guides/trigonometry-basics.html', title: 'Trigonometry basics', blurb: 'Unit circle and waves' },
    { href: '/guides/sequences-and-series.html', title: 'Sequences & series', blurb: 'Arithmetic and geometric' },
    { href: '/guides/conic-sections.html', title: 'Conic sections', blurb: 'Parabola to hyperbola' },
    { href: '/guides/vectors-intro.html', title: 'Vectors', blurb: 'Magnitude and components' },
    { href: '/guides/advanced-trigonometry.html', title: 'Advanced trigonometry', blurb: 'Identities and waves' },
    { href: '/guides/polar-coordinates.html', title: 'Polar coordinates', blurb: 'Distance and direction' },
    { href: '/guides/parametric-equations.html', title: 'Parametric equations', blurb: 'Motion with time' },
    { href: '/guides/matrices-intro.html', title: 'Matrices', blurb: 'Tables that transform' },
    { href: '/guides/rates-and-limits.html', title: 'Rates & limits', blurb: 'Bridge to calculus' }
  ],
  units: {
    standard: [
      { id: 'functions', name: 'Functions', blurb: 'Domain, transformations, modeling', targetCount: 25, guide: '/guides/functions-and-transformations.html' },
      { id: 'poly-rational', name: 'Polynomial & Rational', blurb: 'Zeros, asymptotes, end behavior', targetCount: 25, guide: '/guides/polynomial-and-rational-functions.html' },
      { id: 'exp-log', name: 'Exponential & Logarithmic', blurb: 'Growth, decay, log laws', targetCount: 25, guide: '/guides/exponential-and-logarithmic-functions.html' },
      { id: 'trigonometry', name: 'Trigonometry', blurb: 'Unit circle, graphs, applications', targetCount: 25, guide: '/guides/trigonometry-basics.html' }
    ],
    honors: [
      { id: 'sequences', name: 'Sequences & Series', blurb: 'Arithmetic & geometric', targetCount: 25, guide: '/guides/sequences-and-series.html' },
      { id: 'conics', name: 'Conic Sections', blurb: 'Parabolas, circles, ellipses, hyperbolas', targetCount: 25, guide: '/guides/conic-sections.html' },
      { id: 'vectors', name: 'Vectors', blurb: 'Components, magnitude, operations', targetCount: 25, guide: '/guides/vectors-intro.html' },
      { id: 'adv-trig', name: 'Advanced Trig', blurb: 'Identities and applications', targetCount: 25, guide: '/guides/advanced-trigonometry.html' }
    ],
    ap: [
      { id: 'polar', name: 'Polar Coordinates', blurb: 'r, θ, and conversion', targetCount: 25, guide: '/guides/polar-coordinates.html' },
      { id: 'parametric', name: 'Parametric Equations', blurb: 'Motion with time parameter', targetCount: 25, guide: '/guides/parametric-equations.html' },
      { id: 'matrices', name: 'Matrices', blurb: 'Entries, determinants, scaling', targetCount: 25, guide: '/guides/matrices-intro.html' },
      { id: 'rates-limits', name: 'Rates & Limits Intro', blurb: 'Average rate and approaching a value', targetCount: 25, guide: '/guides/rates-and-limits.html' }
    ]
  }
};
