// 1. Import obligatoire pour Jest + Angular
import 'jest-preset-angular/setup-jest';
// 2. Nécessaire pour la compilation des templates
import '@angular/compiler';

// 3. Polyfill pour les APIs navigateur (si tu utilises TestBed)
// import '@angular/localize/init';
//
// // Seulement si tu utilises effectivement $localize
// try {
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   require('@angular/localize/init');
// } catch (e) {
//   console.warn('@angular/localize not installed, skipping initialization');
// }
