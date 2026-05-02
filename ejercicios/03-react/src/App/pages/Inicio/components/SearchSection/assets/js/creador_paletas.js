function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min)
    h = s = 0; // Gris
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
  }

  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function generarVariaciones(h, s, l) {
  return [
    `hsl(${h}, ${s}%, ${Math.max(0, l - 30)}%)`,
    `hsl(${h}, ${s}%, ${Math.max(0, l - 15)}%)`,
    `hsl(${h}, ${s}%, ${l}%)`,
    `hsl(${h}, ${s}%, ${Math.min(100, l + 15)}%)`,
    `hsl(${h}, ${s}%, ${Math.min(100, l + 30)}%)`,
  ];
}

function generarPaletaRGB(r, g, b) {
  const [h, s, l] = rgbToHsl(r, g, b);

  return {
    // 🎨 Tonos base
    monocromatica: generarVariaciones(h, s, l),
    complementaria: generarVariaciones((h + 180) % 360, s, l),
    analogas1: generarVariaciones((h + 30) % 360, s, l),
    analogas2: generarVariaciones((h - 30 + 360) % 360, s, l),
    complementariaDividida1: generarVariaciones((h + 150) % 360, s, l),
    complementariaDividida2: generarVariaciones((h - 150 + 360) % 360, s, l),
    triada1: generarVariaciones((h + 120) % 360, s, l),
    triada2: generarVariaciones((h - 120 + 360) % 360, s, l),
    tetra1: generarVariaciones((h + 90) % 360, s, l),
    tetra2: generarVariaciones((h - 90 + 360) % 360, s, l),
    tetra3: generarVariaciones((h + 180) % 360, s, l),

    // 🚦 Escala de colores de estado
    exito: generarVariaciones(120, 100, 40),
    alerta: generarVariaciones(40, 100, 50),
    error: generarVariaciones(0, 100, 50),
    informativo: generarVariaciones(210, 100, 50),
  };
}

// **Ejemplo de uso con un color RGB**
const paleta = generarPaletaRGB(26, 115, 232);
console.log(paleta);

/*
const unidades = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];
const valores = [];
for (let i = 0; i < unidades.length; i++) {
  for (let j = 0; j < unidades.length; j++) {
    valores.push(`${unidades[i]}${unidades[j]}`);
  }
}

const paleta_hecha = {
  1: valores[20] + valores[20] + valores[20],
  2: valores[44] + valores[44] + valores[44],
  3: valores[68] + valores[68] + valores[68],
  4: valores[92] + valores[92] + valores[92],
  5: valores[116] + valores[116] + valores[116],
  6: valores[140] + valores[140] + valores[140],
  7: valores[164] + valores[164] + valores[164],
  8: valores[188] + valores[188] + valores[188],
  9: valores[212] + valores[212] + valores[212],
  10: valores[236] + valores[236] + valores[236],
};

console.log(JSON.stringify(paleta_hecha));
*/
