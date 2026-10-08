/**
 * MAHADEV & OM SACRED DIVINE 3D CV PORTFOLIO + CUTE ANIMAL CURSOR
 * Author: Mahipal Singh Rathore | Website Specialist & AI Web Developer
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CUTE ANIMAL SVG AVATARS & CURSOR ENGINE
     ========================================================================== */
  const cuteAnimals = {
    kitten: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 26L20 8L30 18" fill="#F87171" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M50 26L44 8L34 18" fill="#F87171" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
        <ellipse cx="32" cy="36" rx="24" ry="20" fill="#FFFBEB" stroke="#1E293B" stroke-width="2.5"/>
        <path d="M19 12L25 20" stroke="#FECDD3" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M45 12L39 20" stroke="#FECDD3" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="23" cy="33" r="4.5" fill="#1E293B"/>
        <circle cx="41" cy="33" r="4.5" fill="#1E293B"/>
        <circle cx="24.5" cy="31.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="42.5" cy="31.5" r="1.5" fill="#FFFFFF"/>
        <polygon points="32,38 29,42 35,42" fill="#FB7185"/>
        <path d="M29 43Q32 46 35 43" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="17" cy="39" rx="3.5" ry="2" fill="#FECDD3"/>
        <ellipse cx="47" cy="39" rx="3.5" ry="2" fill="#FECDD3"/>
        <line x1="8" y1="34" x2="18" y2="36" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="8" y1="40" x2="18" y2="39" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="56" y1="34" x2="46" y2="36" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="56" y1="40" x2="46" y2="39" stroke="#1E293B" stroke-width="1.8" stroke-linecap="round"/>
      </svg>`,
    panda: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="18" r="9" fill="#1E293B"/>
        <circle cx="48" cy="18" r="9" fill="#1E293B"/>
        <circle cx="16" cy="18" r="5" fill="#475569"/>
        <circle cx="48" cy="18" r="5" fill="#475569"/>
        <ellipse cx="32" cy="36" rx="23" ry="20" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
        <ellipse cx="22" cy="33" rx="6" ry="7.5" transform="rotate(-15 22 33)" fill="#1E293B"/>
        <ellipse cx="42" cy="33" rx="6" ry="7.5" transform="rotate(15 42 33)" fill="#1E293B"/>
        <circle cx="23.5" cy="32" r="2" fill="#FFFFFF"/>
        <circle cx="40.5" cy="32" r="2" fill="#FFFFFF"/>
        <ellipse cx="32" cy="40" rx="3" ry="2" fill="#1E293B"/>
        <path d="M29 43Q32 46 35 43" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="14" cy="41" rx="3.5" ry="2" fill="#FDA4AF"/>
        <ellipse cx="50" cy="41" rx="3.5" ry="2" fill="#FDA4AF"/>
      </svg>`,
    fox: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,28 16,8 30,22" fill="#EA580C" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="52,28 48,8 34,22" fill="#EA580C" stroke="#1E293B" stroke-width="2.5" stroke-linejoin="round"/>
        <polygon points="16,14 18,10 26,20" fill="#FEF08A"/>
        <polygon points="48,14 46,10 38,20" fill="#FEF08A"/>
        <ellipse cx="32" cy="36" rx="23" ry="20" fill="#F97316" stroke="#1E293B" stroke-width="2.5"/>
        <path d="M12 36C12 45 22 54 32 54C42 54 52 45 52 36C45 42 38 43 32 37C26 43 19 42 12 36Z" fill="#FFFBEB"/>
        <circle cx="22" cy="32" r="4" fill="#1E293B"/>
        <circle cx="42" cy="32" r="4" fill="#1E293B"/>
        <circle cx="23.5" cy="30.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="43.5" cy="30.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="32" cy="44" r="3" fill="#1E293B"/>
        <path d="M30 48Q32 50 34 48" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="16" cy="41" rx="3" ry="1.8" fill="#FDBA74"/>
        <ellipse cx="48" cy="41" rx="3" ry="1.8" fill="#FDBA74"/>
      </svg>`,
    lion: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="34" r="26" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <circle cx="16" cy="18" r="6" fill="#D97706"/>
        <circle cx="48" cy="18" r="6" fill="#D97706"/>
        <ellipse cx="32" cy="36" rx="20" ry="17" fill="#FEF08A" stroke="#1E293B" stroke-width="2.5"/>
        <circle cx="23" cy="33" r="4" fill="#1E293B"/>
        <circle cx="41" cy="33" r="4" fill="#1E293B"/>
        <circle cx="24.5" cy="31.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="42.5" cy="31.5" r="1.5" fill="#FFFFFF"/>
        <polygon points="32,38 29,42 35,42" fill="#EA580C"/>
        <path d="M29 43Q32 46 35 43" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="18" cy="40" rx="3" ry="2" fill="#FCA5A5"/>
        <ellipse cx="46" cy="40" rx="3" ry="2" fill="#FCA5A5"/>
        <circle cx="32" cy="24" r="2" fill="#F59E0B"/>
      </svg>`,
    bunny: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="20" cy="15" rx="6" ry="15" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
        <ellipse cx="44" cy="15" rx="6" ry="15" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
        <ellipse cx="20" cy="16" rx="3.5" ry="11" fill="#FDA4AF"/>
        <ellipse cx="44" cy="16" rx="3.5" ry="11" fill="#FDA4AF"/>
        <ellipse cx="32" cy="39" rx="22" ry="19" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5"/>
        <circle cx="22" cy="36" r="4.2" fill="#1E293B"/>
        <circle cx="42" cy="36" r="4.2" fill="#1E293B"/>
        <circle cx="23.5" cy="34.5" r="1.5" fill="#FFFFFF"/>
        <circle cx="43.5" cy="34.5" r="1.5" fill="#FFFFFF"/>
        <polygon points="32,41 30,44 34,44" fill="#FB7185"/>
        <path d="M29 46Q32 48 35 46" stroke="#1E293B" stroke-width="2" stroke-linecap="round" fill="none"/>
        <ellipse cx="16" cy="42" rx="3.5" ry="2.2" fill="#FECDD3"/>
        <ellipse cx="48" cy="42" rx="3.5" ry="2.2" fill="#FECDD3"/>
      </svg>`,
    elephant: `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="14" cy="32" rx="10" ry="14" fill="#93C5FD" stroke="#1E293B" stroke-width="2"/>
        <ellipse cx="50" cy="32" rx="10" ry="14" fill="#93C5FD" stroke="#1E293B" stroke-width="2"/>
        <ellipse cx="14" cy="32" rx="6" ry="9" fill="#BFDBFE"/>
        <ellipse cx="50" cy="32" rx="6" ry="9" fill="#BFDBFE"/>
        <ellipse cx="32" cy="35" rx="19" ry="18" fill="#BAE6FD" stroke="#1E293B" stroke-width="2.5"/>
        <circle cx="23" cy="31" r="3.8" fill="#1E293B"/>
        <circle cx="41" cy="31" r="3.8" fill="#1E293B"/>
        <circle cx="24.5" cy="29.5" r="1.4" fill="#FFFFFF"/>
        <circle cx="42.5" cy="29.5" r="1.4" fill="#FFFFFF"/>
        <path d="M29 37C29 46 36 48 37 45C38 42 35 40 33 40" stroke="#1E293B" stroke-width="3" stroke-linecap="round" fill="none"/>
        <ellipse cx="18" cy="38" rx="2.5" ry="1.5" fill="#FECDD3"/>
        <ellipse cx="46" cy="38" rx="2.5" ry="1.5" fill="#FECDD3"/>
        <circle cx="32" cy="23" r="2" fill="#F59E0B"/>
      </svg>`
  };

  let currentAnimal = 'kitten';
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isPointerActive = false;
  let soundEnabled = true;

  // Initialize Custom Cute Cursor
  function initCuteCursor() {
    // Only initialize on devices with mouse/pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return; // Touch device, retain native touch behavior
    }

    const container = document.getElementById('cute-cursor-container');
    const avatar = document.getElementById('cute-cursor-avatar');
    if (!container || !avatar) return;

    function updateAvatarContent() {
      avatar.innerHTML = `
        <div class="cursor-pointer-dot"></div>
        <div class="cursor-animal-body">${cuteAnimals[currentAnimal]}</div>
      `;
    }
    updateAvatarContent();

    let lastPawTime = 0;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isPointerActive = true;

      // Drop cute paw prints trail every 80ms
      const now = performance.now();
      if (now - lastPawTime > 80) {
        lastPawTime = now;
        spawnPawPrint(targetX, targetY);
      }
    });

    window.addEventListener('mousedown', () => {
      if (avatar) avatar.classList.add('is-clicking');
      playCuteSound(660, 0.08);
    });

    window.addEventListener('mouseup', () => {
      if (avatar) avatar.classList.remove('is-clicking');
    });

    // Hover detection over clickable elements
    document.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.closest('a, button, [role="button"], input, select, textarea, .c-animal-btn, .story-tab')) {
        avatar.classList.add('is-hovering');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target;
      if (target.closest('a, button, [role="button"], input, select, textarea, .c-animal-btn, .story-tab')) {
        avatar.classList.remove('is-hovering');
      }
    });

    // Silky Smooth Physics Loop
    function renderCursor() {
      if (isPointerActive) {
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        currentX += dx * 0.22;
        currentY += dy * 0.22;

        const tilt = Math.max(-15, Math.min(15, dx * 0.6));
        avatar.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${tilt}deg)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);
  }

  function spawnPawPrint(x, y) {
    const container = document.getElementById('cute-cursor-container');
    if (!container) return;

    const paw = document.createElement('div');
    paw.className = 'cute-paw-trail';
    paw.style.left = `${x}px`;
    paw.style.top = `${y}px`;

    // Colors matching Om & Mahadev aesthetic
    const colors = ['#38bdf8', '#f59e0b', '#ec4899', '#10b981', '#818cf8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    paw.innerHTML = `
      <svg viewBox="0 0 20 20" fill="${randomColor}" width="14" height="14" opacity="0.8">
        <circle cx="10" cy="14" r="4"/>
        <circle cx="5" cy="8" r="2"/>
        <circle cx="8" cy="5" r="2"/>
        <circle cx="12" cy="5" r="2"/>
        <circle cx="15" cy="8" r="2"/>
      </svg>
    `;
    container.appendChild(paw);

    setTimeout(() => {
      if (paw.parentNode) paw.parentNode.removeChild(paw);
    }, 1100);
  }

  // Switch cute animal avatar
  window.setCuteAnimal = function (animalKey) {
    if (!cuteAnimals[animalKey]) return;
    currentAnimal = animalKey;
    const avatar = document.getElementById('cute-cursor-avatar');
    if (avatar) {
      avatar.innerHTML = `
        <div class="cursor-pointer-dot"></div>
        <div class="cursor-animal-body">${cuteAnimals[animalKey]}</div>
      `;
      avatar.classList.add('is-clicking');
      setTimeout(() => avatar.classList.remove('is-clicking'), 250);
    }
    // Update active button state
    document.querySelectorAll('.c-animal-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-animal') === animalKey);
    });
    playCuteSound(880, 0.12);
  };

  /* ==========================================================================
     2. SACRED WEB AUDIO API CHIME & SOUND ENGINE (ZERO EXTERNAL FILES)
     ========================================================================== */
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playCuteSound(freq = 587.33, duration = 0.1) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function playSacredHarmonicChime(preset = 'om') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const baseFreq = preset === 'om' ? 216 : 432; // 432 Hz Sacred Tuning
      const chord = [baseFreq, baseFreq * 1.5, baseFreq * 2]; // Fundamental, Fifth, Octave

      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const startTime = ctx.currentTime + idx * 0.04;
        const dur = 1.4;

        gain.gain.setValueAtTime(0.04, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + dur);
      });
    } catch (e) {}
  }

  window.toggleSoundFX = function () {
    soundEnabled = !soundEnabled;
    const sfxBtn = document.getElementById('switcher-sfx-toggle');
    if (sfxBtn) {
      sfxBtn.textContent = soundEnabled ? '🔔 Sound ON' : '🔕 Muted';
      sfxBtn.title = soundEnabled ? 'Click to Mute' : 'Click to Enable Sound';
    }
    if (soundEnabled) playSacredHarmonicChime('om');
  };

  /* ==========================================================================
     3. THREE.JS 3D SACRED MAHADEV & OM WORLD
     ========================================================================== */
  let scene, camera, renderer, animationFrameId;
  let sacredCoreGroup, starField, techNodesGroup;
  let canvasEl;
  let isUserInteracting = false;
  let mouseDragX = 0, mouseDragY = 0;
  let currentChapter = 1;
  let isAutoTourRunning = false;
  let autoTourTimer = null;

  // Chapter camera configurations
  const chapterWaypoints = {
    1: { pos: { x: 0, y: 1.5, z: 9.5 }, rot: { x: -0.1, y: 0, z: 0 }, target: { x: 0, y: 0, z: 0 } },
    2: { pos: { x: 5.2, y: 2.8, z: 8.0 }, rot: { x: -0.2, y: 0.5, z: 0 }, target: { x: 0, y: 0, z: 0 } },
    3: { pos: { x: 0.5, y: 0.8, z: 5.8 }, rot: { x: 0, y: 0, z: 0 }, target: { x: 0, y: 0, z: 0 } },
    4: { pos: { x: -4.8, y: 3.5, z: 7.5 }, rot: { x: -0.25, y: -0.45, z: 0 }, target: { x: 0, y: 0, z: 0 } },
    5: { pos: { x: 0, y: 5.5, z: 12.5 }, rot: { x: -0.35, y: 0, z: 0 }, target: { x: 0, y: 0, z: 0 } }
  };

  function init3DWorld() {
    canvasEl = document.getElementById('cv-3d-canvas');
    if (!canvasEl || typeof THREE === 'undefined') return;

    const width = canvasEl.clientWidth || 1280;
    const height = canvasEl.clientHeight || 640;

    // 1. Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060810, 0.035);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const startPt = chapterWaypoints[1];
    camera.position.set(startPt.pos.x, startPt.pos.y, startPt.pos.z);
    camera.lookAt(startPt.target.x, startPt.target.y, startPt.target.z);

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 4. Lights (Neelkantha Blue + Sacred Rudra Gold)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 2.5, 30);
    blueLight.position.set(-8, 6, 4);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 2.8, 30);
    goldLight.position.set(8, -4, 4);
    scene.add(goldLight);

    const centerGlow = new THREE.PointLight(0x60a5fa, 1.8, 15);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);

    // 5. Build Central Sacred Geometry Core (Om & Trinetra concentric orbits)
    buildSacredCore();

    // 6. Build Starry Cosmic Dust Field
    buildCosmicDust();

    // 7. Build Orbiting Tech Nodes
    buildOrbitingTechNodes();

    // 8. Event Listeners for Resize and Interactive Drag
    window.addEventListener('resize', onWindowResize);
    setupInteractionControls();

    // 9. Start Rendering Loop
    animate3D();
  }

  function buildSacredCore() {
    sacredCoreGroup = new THREE.Group();

    // A. Outer Sacred Torus Ring (Kailash Silver / Bhasma wireframe)
    const torusGeo1 = new THREE.TorusGeometry(3.2, 0.04, 16, 100);
    const torusMat1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(torusGeo1, torusMat1);
    ring1.rotation.x = Math.PI / 3;
    sacredCoreGroup.add(ring1);

    // B. Inner Golden Orbit (Chandan Gold)
    const torusGeo2 = new THREE.TorusGeometry(2.6, 0.05, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: false, transparent: true, opacity: 0.85 });
    const ring2 = new THREE.Mesh(torusGeo2, torusMat2);
    ring2.rotation.y = Math.PI / 4;
    sacredCoreGroup.add(ring2);

    // C. Third Celestial Ring
    const torusGeo3 = new THREE.TorusGeometry(2.1, 0.03, 16, 80);
    const torusMat3 = new THREE.MeshBasicMaterial({ color: 0x818cf8, wireframe: true, transparent: true, opacity: 0.7 });
    const ring3 = new THREE.Mesh(torusGeo3, torusMat3);
    ring3.rotation.z = Math.PI / 6;
    sacredCoreGroup.add(ring3);

    // D. Sacred Polyhedral Lattice (Icosahedron Wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    sacredCoreGroup.add(icoMesh);

    // E. Central Radiant Disc with Sacred Om (ॐ) Texture
    const omCanvas = document.createElement('canvas');
    omCanvas.width = 512;
    omCanvas.height = 512;
    const ctx = omCanvas.getContext('2d');

    // Draw glowing sacred Om medallion
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 240);
    grad.addColorStop(0, 'rgba(251, 191, 36, 0.95)');
    grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.65)');
    grad.addColorStop(0.8, 'rgba(56, 189, 248, 0.3)');
    grad.addColorStop(1, 'rgba(6, 8, 16, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    ctx.font = 'bold 240px Inter, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = '#F59E0B';
    ctx.shadowBlur = 30;
    ctx.fillText('ॐ', 256, 260);

    const omTexture = new THREE.CanvasTexture(omCanvas);
    const omPlaneGeo = new THREE.PlaneGeometry(1.8, 1.8);
    const omPlaneMat = new THREE.MeshBasicMaterial({
      map: omTexture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const omDisc = new THREE.Mesh(omPlaneGeo, omPlaneMat);
    sacredCoreGroup.add(omDisc);

    scene.add(sacredCoreGroup);
  }

  function buildCosmicDust() {
    const particleCount = 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // Neelkantha Blue
    const color2 = new THREE.Color(0xf59e0b); // Rudra Gold
    const color3 = new THREE.Color(0xffffff); // Kailash Bhasma White

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const mixedColor = Math.random() > 0.6 ? color1 : (Math.random() > 0.5 ? color2 : color3);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    starField = new THREE.Points(geometry, material);
    scene.add(starField);
  }

  function buildOrbitingTechNodes() {
    techNodesGroup = new THREE.Group();

    // 8 Orbiting nodes representing core pillars (Python, JS, React, AI, Three.js, C++, Unity, WebGL)
    const nodeCount = 8;
    const radius = 4.2;

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 1.2;

      const nodeGeo = new THREE.OctahedronGeometry(0.26, 0);
      const isGold = i % 2 === 0;
      const nodeMat = new THREE.MeshStandardMaterial({
        color: isGold ? 0xf59e0b : 0x38bdf8,
        emissive: isGold ? 0xd97706 : 0x0284c7,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.9
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeMesh.userData = { initialAngle: angle, radius: radius, speed: 0.008 + (i % 3) * 0.004 };
      techNodesGroup.add(nodeMesh);
    }

    scene.add(techNodesGroup);
  }

  function onWindowResize() {
    if (!canvasEl || !camera || !renderer) return;
    const width = canvasEl.clientWidth;
    const height = canvasEl.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function setupInteractionControls() {
    let isMouseDown = false;
    let prevMouseX = 0, prevMouseY = 0;

    canvasEl.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      isUserInteracting = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      isMouseDown = false;
      setTimeout(() => { isUserInteracting = false; }, 800);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isMouseDown || !sacredCoreGroup) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      sacredCoreGroup.rotation.y += deltaX * 0.006;
      sacredCoreGroup.rotation.x += deltaY * 0.006;
      if (techNodesGroup) techNodesGroup.rotation.y += deltaX * 0.004;
    });

    // Touch support for drag
    canvasEl.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isMouseDown = true;
        isUserInteracting = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isMouseDown = false;
      setTimeout(() => { isUserInteracting = false; }, 800);
    });

    window.addEventListener('touchmove', (e) => {
      if (!isMouseDown || e.touches.length !== 1 || !sacredCoreGroup) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;

      sacredCoreGroup.rotation.y += deltaX * 0.007;
      sacredCoreGroup.rotation.x += deltaY * 0.007;
    }, { passive: true });
  }

  function animate3D() {
    animationFrameId = requestAnimationFrame(animate3D);

    const time = performance.now() * 0.001;

    // Subtle gentle cosmic rotation
    if (sacredCoreGroup && !isUserInteracting) {
      sacredCoreGroup.rotation.y += 0.004;
      sacredCoreGroup.rotation.x = Math.sin(time * 0.5) * 0.15;
    }

    if (starField) {
      starField.rotation.y += 0.0006;
      starField.rotation.x = Math.sin(time * 0.2) * 0.05;
    }

    if (techNodesGroup) {
      techNodesGroup.children.forEach((node) => {
        const u = node.userData;
        u.initialAngle += u.speed;
        node.position.x = Math.cos(u.initialAngle) * u.radius;
        node.position.z = Math.sin(u.initialAngle) * u.radius;
        node.position.y = Math.sin(u.initialAngle * 2 + time) * 1.4;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });
    }

    renderer.render(scene, camera);
  }

  /* ==========================================================================
     4. STORY CHAPTER CONTROLLER & CAMERA NAVIGATION
     ========================================================================== */
  window.goToStoryChapter = function (chapterNum) {
    if (chapterNum < 1) chapterNum = 1;
    if (chapterNum > 5) chapterNum = 5;
    currentChapter = chapterNum;

    // Update Tab UI
    document.querySelectorAll('.story-tab').forEach((tab) => {
      tab.classList.toggle('is-active', parseInt(tab.getAttribute('data-chapter'), 10) === currentChapter);
    });

    // Update Overlay Panels
    document.querySelectorAll('.story-card-panel').forEach((panel) => {
      panel.classList.toggle('is-active', parseInt(panel.getAttribute('data-card-chapter'), 10) === currentChapter);
    });

    // Play sacred chime on chapter progression
    playSacredHarmonicChime(currentChapter === 1 ? 'om' : 'high');

    // Smooth Camera Transition using GSAP
    const targetConfig = chapterWaypoints[currentChapter];
    if (targetConfig && typeof gsap !== 'undefined') {
      gsap.to(camera.position, {
        x: targetConfig.pos.x,
        y: targetConfig.pos.y,
        z: targetConfig.pos.z,
        duration: 1.6,
        ease: 'power2.inOut',
        onUpdate: () => {
          camera.lookAt(targetConfig.target.x, targetConfig.target.y, targetConfig.target.z);
        }
      });
    } else if (targetConfig && camera) {
      camera.position.set(targetConfig.pos.x, targetConfig.pos.y, targetConfig.pos.z);
      camera.lookAt(targetConfig.target.x, targetConfig.target.y, targetConfig.target.z);
    }
  };

  window.toggleAutoTour = function () {
    isAutoTourRunning = !isAutoTourRunning;
    const tourBtn = document.getElementById('btn-auto-tour');

    if (isAutoTourRunning) {
      if (tourBtn) {
        tourBtn.innerHTML = '⏸ Pause Story';
        tourBtn.classList.add('is-active');
      }
      playCuteSound(520, 0.1);
      runNextAutoTourStep();
    } else {
      if (tourBtn) {
        tourBtn.innerHTML = '▶ Play Story';
        tourBtn.classList.remove('is-active');
      }
      if (autoTourTimer) clearTimeout(autoTourTimer);
    }
  };

  function runNextAutoTourStep() {
    if (!isAutoTourRunning) return;
    autoTourTimer = setTimeout(() => {
      if (!isAutoTourRunning) return;
      let next = currentChapter + 1;
      if (next > 5) next = 1;
      window.goToStoryChapter(next);
      runNextAutoTourStep();
    }, 6500); // 6.5s per scene
  }

  /* ==========================================================================
     5. DOMAIN TABS (GYAN KOSHA) & CV MODAL
     ========================================================================== */
  function initDomainTabs() {
    const tabBtns = document.querySelectorAll('.domain-tab-btn');
    const panes = document.querySelectorAll('.domain-pane');

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const domain = btn.getAttribute('data-domain');
        tabBtns.forEach((b) => b.classList.remove('is-active'));
        panes.forEach((p) => p.classList.remove('is-active'));

        btn.classList.add('is-active');
        const activePane = document.getElementById(`domain-${domain}`);
        if (activePane) activePane.classList.add('is-active');

        playCuteSound(440, 0.06);
      });
    });
  }

  window.openCVModal = function () {
    const modal = document.getElementById('cv-printable-modal');
    if (modal) {
      modal.classList.add('is-open');
      playCuteSound(700, 0.1);
    }
  };

  window.closeCVModal = function () {
    const modal = document.getElementById('cv-printable-modal');
    if (modal) {
      modal.classList.remove('is-open');
    }
  };

  // Close modal when clicking outside box
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('cv-printable-modal');
    if (e.target === modal) {
      window.closeCVModal();
    }
  });

  /* ==========================================================================
     6. ADVANCED MULTI-SOUND SYNTHESIZER (AI, GAMING, QUEST, TERMINAL, SACRED)
     ========================================================================== */
  window.playSiteSound = function (type = 'pop') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const t = ctx.currentTime;

      switch (type) {
        case 'om': {
          // 432 Hz Sacred Om Meditative Resonance
          const chord = [216, 432, 648];
          chord.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, t);
            gain.gain.setValueAtTime(0.04, t + idx * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t + idx * 0.05);
            osc.stop(t + 1.8);
          });
          break;
        }

        case 'engine': {
          // 3D Game Engine Mechanical Turbine Rumble & Ignition Sweep
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();
          osc1.type = 'sawtooth';
          osc2.type = 'sine';
          osc1.frequency.setValueAtTime(65, t);
          osc1.frequency.exponentialRampToValueAtTime(140, t + 0.35);
          osc2.frequency.setValueAtTime(130, t);
          osc2.frequency.exponentialRampToValueAtTime(280, t + 0.35);
          gain.gain.setValueAtTime(0.05, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);
          osc1.start(t);
          osc2.start(t);
          osc1.stop(t + 0.4);
          osc2.stop(t + 0.4);
          break;
        }

        case 'quest': {
          // CORE-FLOW Quest Completion XP Level-Up Chime (C - E - G - C)
          const notes = [523.25, 659.25, 783.99, 1046.50];
          notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t + i * 0.06);
            gain.gain.setValueAtTime(0.04, t + i * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.06 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t + i * 0.06);
            osc.stop(t + i * 0.06 + 0.35);
          });
          break;
        }

        case 'neural': {
          // AI Neural Network Synapse Pulse Sweep
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(740, t);
          osc.frequency.exponentialRampToValueAtTime(1280, t + 0.18);
          gain.gain.setValueAtTime(0.05, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.22);
          break;
        }

        case 'compiler': {
          // MRL 3.2 Cyber Compiler Binary Click
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(1050, t);
          osc.frequency.setValueAtTime(1400, t + 0.04);
          gain.gain.setValueAtTime(0.03, t);
          gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.1);
          break;
        }

        case 'download': {
          // Heavy Bass Drop + Success Chime for Downloads
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();
          osc1.type = 'triangle';
          osc1.frequency.setValueAtTime(120, t);
          osc1.frequency.exponentialRampToValueAtTime(45, t + 0.3);
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(880, t + 0.1);
          osc2.frequency.exponentialRampToValueAtTime(1760, t + 0.35);
          gain.gain.setValueAtTime(0.06, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);
          osc1.start(t);
          osc2.start(t + 0.1);
          osc1.stop(t + 0.4);
          osc2.stop(t + 0.4);
          break;
        }

        case 'pop':
        default: {
          // Silky Soft Bubble Pop
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(600, t);
          osc.frequency.exponentialRampToValueAtTime(900, t + 0.05);
          gain.gain.setValueAtTime(0.02, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.05);
          break;
        }
      }
    } catch (e) {}
  };

  /* ==========================================================================
     7. UNIVERSAL 3D CARD PERSPECTIVE TILT & SPECULAR GLARE
     ========================================================================== */
  function init3DCardTiltEngine() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // Touch devices fallback

    const tiltCards = document.querySelectorAll(
      '.product-card, .gallery-card, .c-card, .signal-board, .dl-card, .cv-identity-card, .cv-core-card, .project-hologram-card'
    );

    tiltCards.forEach((card) => {
      // Add specular glare element if not present
      if (!card.querySelector('.card-3d-glare')) {
        const glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        card.appendChild(glare);
      }

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -7;
        const rotateY = ((x - centerX) / centerX) * 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
        card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  /* ==========================================================================
     8. INTERACTIVE 3D NEURAL CONSTELLATION CANVAS IN AI SECTION
     ========================================================================== */
  function initAINeuralCanvas() {
    const aiSection = document.getElementById('ai');
    if (!aiSection) return;

    // Inject 3D Neural Stage Box into AI section if not already present
    if (!document.getElementById('neural-3d-canvas')) {
      const stageBox = document.createElement('div');
      stageBox.className = 'ai-neural-stage-box';
      stageBox.innerHTML = `
        <canvas id="neural-3d-canvas" aria-label="3D Neural Synapse Engine"></canvas>
        <div class="neural-stage-hud">
          <span class="neural-hud-badge">⚡ 3D NEURAL SYNAPSE MATRIX · AUTONOMOUS AI</span>
          <span class="neural-hud-badge" style="color: #10b981; border-color: rgba(16,185,129,0.3);">ACTIVE SIMULATION</span>
        </div>
        <div class="neural-stage-hint">🖱️ Move mouse to bend neural light waves in real-time</div>
      `;

      const head = aiSection.querySelector('.section-head') || aiSection.firstElementChild;
      if (head && head.nextSibling) {
        aiSection.insertBefore(stageBox, head.nextSibling);
      } else {
        aiSection.appendChild(stageBox);
      }
    }

    const canvas = document.getElementById('neural-3d-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.clientWidth || 800;
    let height = canvas.height = canvas.clientHeight || 380;

    const nodeCount = 55;
    const nodes = [];
    let mouse = { x: width / 2, y: height / 2, active: false };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 50,
        vx: (Math.random() - 0.5) * 0.9,
        vy: (Math.random() - 0.5) * 0.9,
        radius: Math.random() * 2.5 + 1.2,
        color: i % 3 === 0 ? '#38bdf8' : (i % 3 === 1 ? '#f59e0b' : '#a855f7')
      });
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.active = false;
    });

    function renderNeuralFrame() {
      ctx.clearRect(0, 0, width, height);

      // Draw Neural Connections
      for (let i = 0; i < nodeCount; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 110) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connection to mouse
        if (mouse.active) {
          const mDist = Math.hypot(n1.x - mouse.x, n1.y - mouse.y);
          if (mDist < 140) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${(1 - mDist / 140) * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw Nodes
      for (let n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      requestAnimationFrame(renderNeuralFrame);
    }

    renderNeuralFrame();

    window.addEventListener('resize', () => {
      if (canvas && canvas.clientWidth) {
        width = canvas.width = canvas.clientWidth;
        height = canvas.height = canvas.clientHeight;
      }
    });
  }

  /* ==========================================================================
     9. GLOBAL AUDIO BINDER ACROSS ALL SECTIONS
     ========================================================================== */
  function initGlobalAudioFeedback() {
    let lastHoverTime = 0;

    // Subtle soft pop on hover over interactive elements (throttled)
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, .c-mode-btn, .filter-btn, .product-card, .gallery-card');
      if (target) {
        const now = performance.now();
        if (now - lastHoverTime > 90) {
          lastHoverTime = now;
          window.playSiteSound('pop');
        }
      }
    });

    // Contextual click sounds
    document.addEventListener('click', (e) => {
      const el = e.target;

      // Ekarshinga 3D section
      if (el.closest('#ekarshinga-spotlight, .cinematic-stage, .c-mode-btn')) {
        window.playSiteSound('engine');
        return;
      }

      // CORE-FLOW section
      if (el.closest('#core-flow, [href*="core-flow"]')) {
        window.playSiteSound('quest');
        return;
      }

      // AI System section
      if (el.closest('#ai, .ai-neural-stage-box, [href*="#ai"]')) {
        window.playSiteSound('neural');
        return;
      }

      // MRL 3.2 Runtime section
      if (el.closest('#mrl-update, [href*="mrl"]')) {
        window.playSiteSound('compiler');
        return;
      }

      // Downloads section
      if (el.closest('#downloads, [href*="download"], [href$=".exe"], [href$=".zip"]')) {
        window.playSiteSound('download');
        return;
      }

      // CV section
      if (el.closest('#mahadev-cv-top, .story-tab, .sacred-btn')) {
        window.playSiteSound('om');
        return;
      }
    });
  }

  /* ==========================================================================
     10. INITIALIZATION ON DOM CONTENT LOADED
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initCuteCursor();
    init3DWorld();
    initDomainTabs();
    init3DCardTiltEngine();
    initAINeuralCanvas();
    initGlobalAudioFeedback();

    // Story tab click handlers
    document.querySelectorAll('.story-tab').forEach((tab) => {
      tab.addEventListener('click', () => {
        const ch = parseInt(tab.getAttribute('data-chapter'), 10);
        window.goToStoryChapter(ch);
      });
    });

    // Cute animal switcher button handlers
    document.querySelectorAll('.c-animal-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const animal = btn.getAttribute('data-animal');
        window.setCuteAnimal(animal);
      });
    });
  });
})();

