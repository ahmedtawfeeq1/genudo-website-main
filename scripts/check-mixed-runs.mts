// Self-check for wrapMixedRuns (LegacyBody). Run: npx tsx scripts/check-mixed-runs.mts
import { wrapMixedRuns as w } from '../src/components/LegacyBody.tsx';
const cases: [string, string][] = [
  ['<summary>لازم أغيّر الـ <bdi>CRM</bdi> بتاعي؟<span class="pl"></span></summary>', '<summary><span class="mixrun">لازم أغيّر الـ <bdi>CRM</bdi> بتاعي؟</span><span class="pl"></span></summary>'],
  ['<span class="pchip"><svg><path d="x"/></svg><bdi>CRM</bdi> متحدّث</span>', '<span class="pchip"><svg><path d="x"/></svg><span class="mixrun"><bdi>CRM</bdi> متحدّث</span></span>'],
  ['<p>plain text</p>', '<p>plain text</p>'],
  ['<b>only</b>', '<b>only</b>'],
  ['<style>a<b>c</b></style>', '<style>a<b>c</b></style>'],
  ['<p>x <b>y <i>z</i></b></p>', '<p>x <b>y <i>z</i></b></p>'],
];
let ok = true;
for (const [i, o] of cases) { const r = w(i); if (r !== o) { ok = false; console.log('FAIL\n in ', i, '\n got', r, '\n exp', o); } }
console.log(ok ? 'wrap ok' : 'wrap FAILED');
