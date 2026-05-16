/* positions.js
 *
 * Hand-laid coordinates for the celestial-map view of the Gītā concept KG.
 *
 * Layout philosophy: a ladder of being read top-down.
 *   - Paramārtha (Hari) at the apex — single column
 *   - Tattvas just below — the metaphysical scaffolding
 *   - Kṣetra-Kṣetrajña — where embodiment begins
 *   - Guṇa — the three modes
 *   - Yoga — the largest tier, spread wide
 *   - Sādhanā — practices, parallel to yogas
 *   - Antaḥkaraṇa & Dharma — inner faculties + ethical posture, side-by-side
 *   - Doṣa & Pratīka — defects (left) and symbols (right), as bookend tiers
 *   - Phala — the goals, at the bottom (the rest of the climb)
 *   - Yajña — clustered as a side panel on the right (sacrifice as a vertical column)
 *
 * Coordinate system: x in [0, 1000], y in [0, 1500], r is node radius.
 * Larger r = doctrinally larger weight (purushottama largest, peripheral nodes smaller).
 */

const KG_POSITIONS = {
  // ============ Paramārtha (y ≈ 60–180) — center column ============
  'purushottama':       [500,  80, 22],
  'brahman':            [340, 140, 17],
  'paramatman':         [500, 140, 17],
  'sarvottamatva':      [660, 140, 17],
  'akshara_purusha':    [340, 200, 13],
  'ksara_purusha':      [500, 200, 13],
  'svarupa_aikya':      [660, 200, 13],
  'avatara':            [580, 260, 13],
  'taratamya':          [200, 200, 13],
  'pancha_bheda':       [80,  200, 13],

  // ============ Tattva (y ≈ 280–360) ============
  'isvara':             [120, 290, 14],
  'jiva':               [240, 290, 14],
  'prakriti':           [380, 320, 14],
  'para_prakriti':      [500, 320, 12],
  'aksharam_param_brahma':[620, 320, 12],
  'kala':               [740, 290, 12],
  'karma_tattva':       [400, 390, 12],
  'svabhava':           [560, 390, 12],

  // ============ Kṣetra-Kṣetrajña (y ≈ 440–520) ============
  'kshetrajna':         [200, 460, 14],
  'kshetra_field':      [340, 460, 14],
  'mahabhutas':         [460, 460, 11],
  'avyakta':            [560, 460, 11],
  'indriyas':           [660, 460, 11],
  'icchā_dveṣa':        [760, 460, 11],
  'sanghata_cetana_dhrti':[860, 460, 11],
  'kshetra_jnana':      [500, 530, 13],

  // ============ Guṇa (y ≈ 580–650) ============
  'sattva':             [280, 600, 14],
  'rajas':              [420, 600, 14],
  'tamas':              [560, 600, 14],
  'gunatita':           [700, 600, 14],
  'sattvika_jnana':     [220, 670, 10],
  'sattvika_karma':     [340, 670, 10],
  'sattvika_karta':     [460, 670, 10],
  'triguna_atita':      [780, 670, 12],
  'sattvika_shraddha':  [220, 720, 10],
  'rajasa_shraddha':    [340, 720, 10],
  'tamasa_shraddha':    [460, 720, 10],
  'sattvika_ahara':     [580, 720, 10],

  // ============ Yoga (y ≈ 730–820) — wide spread, the largest tier ============
  'karma_yoga':         [120, 760, 14],
  'jnana_yoga':         [240, 760, 14],
  'bhakti_yoga':        [380, 760, 16],
  'dhyana_yoga':        [500, 760, 14],
  'sannyasa_yoga':      [620, 760, 14],
  'buddhi_yoga':        [740, 760, 13],
  'abhyasa_vairagya':   [860, 760, 13],
  'samatva':            [300, 830, 12],
  'sharanagati':        [500, 830, 16],   // BG 18.66 — visually emphasized

  // ============ Sādhanā (y ≈ 890–960) — practices, mid-page ============
  'shraddha':           [120, 910, 12],
  'vairagya':           [220, 910, 12],
  'abhyasa':            [320, 910, 12],
  'tapas':              [420, 910, 12],
  'dana':               [520, 910, 12],
  'tyaga':              [620, 910, 12],
  'indriya_nigraha':    [720, 910, 12],
  'samadhi':            [820, 910, 12],
  'svadhyaya':          [920, 910, 11],
  // jñāna-aṅgas — second row of sādhana
  'jnana_angas':        [120, 960, 12],
  'amanitva':           [220, 960,  9],
  'arjava':             [310, 960,  9],
  'shauca':             [400, 960,  9],
  'ksanti':             [490, 960,  9],
  'ananya_yoga':        [580, 960, 11],
  'vivikta_seva':       [690, 960,  9],
  'adhyatma_jnana_nityatvam':[800, 960,  9],
  'tattva_jnanartha_darshanam':[900, 960, 10],

  // ============ Antaḥkaraṇa (y ≈ 1000) — left cluster ============
  'manas':              [150, 1010, 12],
  'buddhi':             [260, 1010, 12],
  'ahankara':           [370, 1010, 12],
  'citta':              [150, 1080, 11],
  'antaryamin':         [260, 1080, 13],
  'jnanendriyas_karmendriyas':[370, 1080, 10],

  // ============ Dharma (y ≈ 1000) — right cluster, parallel ============
  'svadharma':          [560, 1010, 12],
  'varnashrama':        [670, 1010, 12],
  'nishkama_karma':     [780, 1010, 13],
  'sthitaprajna':       [560, 1080, 14],
  'daivi_sampad':       [670, 1080, 13],
  'ahimsa':             [780, 1080, 11],
  'satya':              [880, 1080, 11],
  'samatva_dharma':     [880, 1010, 11],
  'pravritti_nivritti': [880, 1130, 11],

  // ============ Doṣa (y ≈ 1170) — bottom-left, the descent ============
  'kama':               [120, 1180, 14],
  'krodha':             [220, 1180, 14],
  'lobha':              [320, 1180, 12],
  'moha':               [420, 1180, 13],
  'asatsanga':          [120, 1250, 11],
  'avidya':             [220, 1250, 12],
  'dvandva':            [320, 1250, 11],
  'asuri_sampad':       [420, 1250, 13],

  // ============ Pratīka (y ≈ 1170) — bottom-right, symbols ============
  'pranava_om':         [580, 1180, 13],
  'ashvattha':          [700, 1180, 13],
  'ratha_rupaka':       [820, 1180, 12],
  'akshara_a':          [580, 1250, 11],
  'jyotir_jyoti':       [700, 1250, 12],
  'vibhuti':            [820, 1250, 12],

  // ============ Phala (y ≈ 1350) — the goals, at the foot ============
  'moksha':             [500, 1350, 22],   // big — the goal
  'paramagati':         [340, 1350, 14],
  'brahmi_sthiti':      [180, 1350, 13],
  'jivanmukti':         [660, 1350, 14],
  'naishkarmya_siddhi': [820, 1350, 12],
  'archiradi_marga':    [340, 1420, 11],
  'dhumadi_marga':      [180, 1420, 11],
  'sarva_dharman_parityajya':[500, 1420, 16],  // carama-śloka emphasized
  // Madhva mukti-gradations clustered around moksha
  'salokya':            [360, 1290, 11],
  'samipya':            [440, 1290, 11],
  'sarupya':            [560, 1290, 11],
  'sayujya':            [640, 1290, 13],
  // Madhva mukti-gradations clustered around moksha
  'salokya':            [360, 1290, 11],
  'samipya':            [440, 1290, 11],
  'sarupya':            [560, 1290, 11],
  'sayujya':            [640, 1290, 13],

  // ============ Yajña (side column, y ≈ 600–950) — right edge ============
  'dravya_yajna':       [950, 600, 10],
  'tapo_yajna':         [950, 670, 10],
  'yoga_yajna':         [950, 740, 10],
  'svadhyaya_yajna':    [950, 810, 10],
  'jnana_yajna':        [950, 880, 12],
  'brahmarpana':        [950, 950, 12],
};

/* Tier bands for the map background (y-ranges) */
const KG_TIER_BANDS = [
  { tier:'paramartha',  yTop:30,   yBottom:265,  label:{x:14, y:50} },
  { tier:'tattva',      yTop:270,  yBottom:425,  label:{x:14, y:290} },
  { tier:'kshetra',     yTop:430,  yBottom:560,  label:{x:14, y:450} },
  { tier:'guna',        yTop:565,  yBottom:715,  label:{x:14, y:585} },
  { tier:'yoga',        yTop:720,  yBottom:870,  label:{x:14, y:740} },
  { tier:'sadhana',     yTop:875,  yBottom:990,  label:{x:14, y:895} },
  { tier:'antahkarana', yTop:995,  yBottom:1160, label:{x:14, y:1015}, half:'left' },
  { tier:'dharma',      yTop:995,  yBottom:1160, label:{x:520, y:1015}, half:'right' },
  { tier:'dosha',       yTop:1165, yBottom:1300, label:{x:14, y:1185}, half:'left' },
  { tier:'pratika',     yTop:1165, yBottom:1300, label:{x:520, y:1185}, half:'right' },
  { tier:'phala',       yTop:1305, yBottom:1480, label:{x:14, y:1325} },
  { tier:'yajna',       yTop:580,  yBottom:990,  label:{x:920, y:580}, side:true },
];

/* Edge types to render on the full map (others suppressed for visual clarity) */
const KG_SHOW_EDG