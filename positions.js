/* positions.js — hand-laid coordinates for the Tatva Jalam concept map.
 *
 * Layout: ladder of being, top-down.
 *   Parabrahma (Bhagavanta/Krishna) at apex
 *   Shritattva (Lakshmi / aksharaprakriti) just below
 *   Jivatattva (individual souls) below that
 *   Prakriti (nature / gunas) in the middle
 *   Yoga (paths) spread wide across the centre
 *   Antahkarana (inner instruments) below yogas
 *   Sadhana (practices) broad row
 *   Dharma (ethics) below sadhana
 *   Dosha (defects) near the bottom
 *   Phala (liberation) at the base
 *
 * Coordinate system: x in [0, 1000], y in [0, 1500], r = node radius.
 * Larger r = greater doctrinal weight.
 */

const KG_POSITIONS = {

  // ── Tier 1: Parabrahma  (y 60–220) ──────────────────────────────────
  'bhagavanta':       [500,  70, 22],   // Supreme Lord — centre apex
  'paramatma':        [330, 140, 17],   // Antaryami
  'purushottama':     [500, 140, 17],   // Uttama Purusha
  'sarvottamatva':    [670, 140, 17],   // Supremacy / tāratamya apex
  'taratamya':        [750, 210, 13],   // Hierarchy principle
  'avatara':          [390, 210, 13],   // Divine descent
  'vibhuti':          [610, 210, 13],   // Divine manifestations

  // ── Tier 2: Shritattva  (y 300–360) ─────────────────────────────────
  'shritattva':       [500, 310, 16],   // Lakshmi as aksharaprakriti
  'maya':             [330, 360, 13],   // Prakriti / mūlamāyā
  'lakshmi_srishti':  [670, 360, 13],   // Lakshmi's creative role

  // ── Tier 3: Jivatattva  (y 430–500) ─────────────────────────────────
  'jiva':             [500, 440, 16],   // Individual soul
  'atma':             [320, 490, 14],   // Ātman / self
  'jiva_svabhava':    [440, 500, 12],   // Soul's nature
  'jiva_bandha':      [580, 500, 12],   // Bondage
  'ksara_akshara':    [700, 490, 13],   // Perishable / imperishable

  // ── Tier 4: Prakriti  (y 570–620) ───────────────────────────────────
  'jada_prakriti':    [280, 580, 14],   // Inert eightfold nature
  'triguna':          [450, 580, 15],   // Sattva / Rajas / Tamas
  'panchabhoota':     [300, 640, 11],   // Five elements
  'prakriti_purusha': [620, 590, 13],   // Prakriti–Purusha pairing

  // ── Tier 5: Yoga  (y 700–750) — spread wide ─────────────────────────
  'karmayoga':        [140, 720, 15],   // Path of action
  'jnanayoga':        [310, 720, 14],   // Path of knowledge
  'bhaktiyoga':       [500, 720, 16],   // Path of devotion — centre
  'dhyana':           [690, 720, 14],   // Meditation
  'sannyasa_tyaga':   [860, 720, 13],   // Renunciation

  // ── Tier 6: Antahkarana  (y 820–860) ────────────────────────────────
  'buddhi':           [310, 840, 14],   // Intellect / discernment
  'manas':            [450, 840, 13],   // Mind
  'ahankara':         [590, 840, 13],   // Ego-sense
  'indriya':          [730, 840, 12],   // Sense organs

  // ── Tier 7: Sadhana  (y 940–990) ────────────────────────────────────
  'shraddha':         [120, 960, 14],   // Faith
  'sharanagati':      [270, 960, 15],   // Surrender
  'upasane':          [420, 960, 13],   // Upāsanā / worship
  'yajna':            [560, 960, 14],   // Sacrifice
  'tapas':            [700, 960, 13],   // Austerity
  'dana':             [840, 960, 12],   // Charity

  // ── Tier 8: Dharma  (y 1060–1100) ───────────────────────────────────
  'svadharma':        [220, 1080, 14],  // One's own duty
  'nishkama_karma':   [400, 1080, 15],  // Desireless action
  'satya':            [590, 1080, 13],  // Truth
  'daivi_sampat':     [770, 1080, 13],  // Divine qualities

  // ── Tier 9: Dosha  (y 1180–1220) ────────────────────────────────────
  'kama':             [170, 1200, 14],  // Desire / lust
  'krodha':           [340, 1200, 13],  // Anger
  'lobha':            [500, 1200, 13],  // Greed
  'moha':             [660, 1200, 14],  // Delusion
  'avidya':           [830, 1200, 13],  // Ignorance

  // ── Tier 10: Phala  (y 1320–1360) ───────────────────────────────────
  'moksha':           [300, 1340, 16],  // Liberation
  'ananda':           [460, 1340, 14],  // Bliss
  'shanti':           [610, 1340, 14],  // Peace
  'sthitaprajna':     [770, 1340, 13],  // Steady wisdom

};
