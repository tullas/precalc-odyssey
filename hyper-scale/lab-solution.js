/** Shared solution text builder for the lab modal */
window.buildLabSolutionHTML = function (scenario, idealParams, modelY) {
  const a = scenario.answer;
  let steps = '';

  if (scenario.workedSolution) {
    steps += '<p class="text-slate-200 leading-relaxed"><strong class="text-white">How we get there:</strong> ' +
      scenario.workedSolution + '</p>';
  }

  steps += '<p class="mt-3"><strong class="text-white">Target:</strong> about <span class="mono text-sky-300">' +
    a.target + '</span>';
  if (a.atX != null) steps += ' (related to <span class="mono">x = ' + a.atX + '</span>)';
  steps += '.</p>';

  steps += '<p><strong class="text-white">Model:</strong> <span class="mono text-sky-300">' +
    scenario.form + '</span></p>';

  if (scenario.symbolGlossary && scenario.symbolGlossary.length) {
    steps += '<div class="text-xs text-slate-400 space-y-1 my-2">';
    scenario.symbolGlossary.forEach(g => {
      steps += '<div><span class="mono text-sky-400">' + g.sym + '</span> — ' + g.mean + '</div>';
    });
    steps += '</div>';
  }

  if (scenario.params && scenario.params.length) {
    steps += '<p><strong class="text-white">Parameters used:</strong></p><ul class="list-disc list-inside text-slate-400">';
    scenario.params.forEach(p => {
      const v = idealParams[p.key];
      steps += '<li>' + p.label + ': <span class="mono text-sky-300">' + v + '</span></li>';
    });
    steps += '</ul>';
  }

  if (modelY != null && Number.isFinite(modelY)) {
    steps += '<p class="mt-2">Model value at the check point: <span class="mono text-emerald-400">y ≈ ' +
      modelY.toFixed(2) + '</span>.</p>';
  }

  if (!scenario.workedSolution && scenario.hints && scenario.hints.length) {
    steps += '<p class="mt-2 text-slate-400"><strong class="text-white">Hints recap:</strong> ' +
      scenario.hints.join(' ') + '</p>';
  }

  return steps;
};
