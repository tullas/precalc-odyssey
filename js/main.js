console.log('Precalc Odyssey initialized');

document.addEventListener('DOMContentLoaded', () => {
    const unitsSection = document.getElementById('units');
    const units = [
        {id: 1, title: 'Functions as Machines & Morphing Graphs', desc: 'Master transformations like a video game joystick.'},
        {id: 2, title: 'Polynomial and Rational Functions', desc: 'Engineer rollercoaster rides with polynomials.'},
        {id: 3, title: 'Exponential and Logarithmic Functions', desc: 'Track cosmic growth and pandemics.'},
        {id: 4, title: 'Trigonometry: Cycles and Waves', desc: 'Ride the unit circle waves.'},
        {id: 5, title: 'Vectors and Matrices', desc: 'Build 2D CGI engines.'},
        {id: 6, title: 'Introduction to Limits', desc: 'Gateway to Calculus adventures.'}
    ];
    
    units.forEach(unit => {
        const card = document.createElement('div');
        card.className = 'unit-card';
        card.innerHTML = `
            <h3>Unit ${unit.id}: ${unit.title}</h3>
            <p>${unit.desc}</p>
            <a href="units/unit${unit.id}.html">Enter Realm</a>
        `;
        unitsSection.appendChild(card);
    });
});