# Colors Quick Reference

Quick reference for color usage in the portfolio. For detailed documentation, see [COLOR_GUIDE.md](./COLOR_GUIDE.md).

## CSS Variables

### Base Colors
```css
var(--background)  /* #ffffff / #0a0a0a (dark) */
var(--foreground)  /* #171717 / #ededed (dark) */
```

### Color Palettes

#### Blue (Professional)
```css
var(--color-blue-50)   /* #eff6ff */
var(--color-blue-100)  /* #dbeafe */
var(--color-blue-500)  /* #3b82f6 */
var(--color-blue-600)  /* #2563eb */
var(--color-blue-700)  /* #1d4ed8 */
var(--color-blue-800)  /* #1e40af */
```

#### Purple (Budgeting)
```css
var(--color-purple-50)   /* #faf5ff */
var(--color-purple-100)  /* #f3e8ff */
var(--color-purple-500)  /* #a855f7 */
var(--color-purple-600)  /* #9333ea */
var(--color-purple-700)  /* #7e22ce */
var(--color-purple-800)  /* #6b21a8 */
```

#### Green (Notes)
```css
var(--color-green-50)   /* #f0fdf4 */
var(--color-green-100)  /* #dcfce7 */
var(--color-green-500)  /* #22c55e */
var(--color-green-600)  /* #16a34a */
var(--color-green-700)  /* #15803d */
var(--color-green-800)  /* #166534 */
```

#### Orange (Energy) 🆕
```css
var(--color-orange-50)   /* #fff7ed */
var(--color-orange-100)  /* #ffedd5 */
var(--color-orange-500)  /* #f97316 */
var(--color-orange-600)  /* #ea580c */
var(--color-orange-700)  /* #c2410c */
var(--color-orange-800)  /* #9a3412 */
```

#### Teal (Innovation) 🆕
```css
var(--color-teal-50)   /* #f0fdfa */
var(--color-teal-100)  /* #ccfbf1 */
var(--color-teal-500)  /* #14b8a6 */
var(--color-teal-600)  /* #0d9488 */
var(--color-teal-700)  /* #0f766e */
var(--color-teal-800)  /* #115e59 */
```

#### Pink (Design) 🆕
```css
var(--color-pink-50)   /* #fdf2f8 */
var(--color-pink-100)  /* #fce7f3 */
var(--color-pink-500)  /* #ec4899 */
var(--color-pink-600)  /* #db2777 */
var(--color-pink-700)  /* #be185d */
var(--color-pink-800)  /* #9f1239 */
```

#### Indigo (Trust) 🆕
```css
var(--color-indigo-50)   /* #eef2ff */
var(--color-indigo-100)  /* #e0e7ff */
var(--color-indigo-500)  /* #6366f1 */
var(--color-indigo-600)  /* #4f46e5 */
var(--color-indigo-700)  /* #4338ca */
var(--color-indigo-800)  /* #3730a3 */
```

#### Gray (Neutrals)
```css
var(--color-gray-50)   /* #f9fafb */
var(--color-gray-100)  /* #f3f4f6 */
var(--color-gray-200)  /* #e5e7eb */
var(--color-gray-300)  /* #d1d5db */
var(--color-gray-400)  /* #9ca3af */
var(--color-gray-500)  /* #6b7280 */
var(--color-gray-600)  /* #4b5563 */
var(--color-gray-700)  /* #374151 */
var(--color-gray-800)  /* #1f2937 */
var(--color-gray-900)  /* #111827 */
```

---

## Tailwind Classes

### Background Colors
```tsx
bg-blue-{50,100,500,600,700,800}
bg-purple-{50,100,500,600,700,800}
bg-green-{50,100,500,600,700,800}
bg-orange-{50,100,500,600,700,800}    // NEW
bg-teal-{50,100,500,600,700,800}      // NEW
bg-pink-{50,100,500,600,700,800}      // NEW
bg-indigo-{50,100,500,600,700,800}    // NEW
bg-gray-{50,100,200,300,400,500,600,700,800,900}
```

### Text Colors
```tsx
text-blue-{50,100,500,600,700,800}
text-purple-{50,100,500,600,700,800}
text-green-{50,100,500,600,700,800}
text-orange-{50,100,500,600,700,800}    // NEW
text-teal-{50,100,500,600,700,800}      // NEW
text-pink-{50,100,500,600,700,800}      // NEW
text-indigo-{50,100,500,600,700,800}    // NEW
text-gray-{50,100,200,300,400,500,600,700,800,900}
```

### Common Gradients
```tsx
// Blue
bg-gradient-to-br from-blue-500 to-blue-700
bg-gradient-to-br from-blue-600 to-blue-800  // hover

// Purple
bg-gradient-to-br from-purple-500 to-purple-700
bg-gradient-to-br from-purple-600 to-purple-800  // hover

// Green
bg-gradient-to-br from-green-500 to-green-700
bg-gradient-to-br from-green-600 to-green-800  // hover

// Orange (NEW)
bg-gradient-to-br from-orange-500 to-orange-700
bg-gradient-to-br from-orange-600 to-orange-800  // hover

// Teal (NEW)
bg-gradient-to-br from-teal-500 to-teal-700
bg-gradient-to-br from-teal-600 to-teal-800  // hover

// Pink (NEW)
bg-gradient-to-br from-pink-500 to-pink-700
bg-gradient-to-br from-pink-600 to-pink-800  // hover

// Indigo (NEW)
bg-gradient-to-br from-indigo-500 to-indigo-700
bg-gradient-to-br from-indigo-600 to-indigo-800  // hover

// Page Background
bg-gradient-to-br from-gray-50 to-blue-50
```

---

## Common Patterns

### Gradient Button
```tsx
<button className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all">
  Button Text
</button>
```

### Gradient Card with Hover
```tsx
<div className="group relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-8">
  <div className="relative z-10">
    {/* Content */}
  </div>
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
```

### Icon Background
```tsx
<div className="p-3 bg-green-100 rounded-lg inline-block">
  <Icon className="w-10 h-10 text-green-600" />
</div>
```

### Page Background
```tsx
<main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
  {/* Page content */}
</main>
```

---

## Text Color Guidelines

### Light Backgrounds
- **Headings:** `text-gray-900`, `text-gray-800`, `text-gray-700`
- **Body:** `text-gray-600`
- **Muted:** `text-gray-500`
- **Links:** `text-blue-600`, `text-purple-600`, etc.

### Dark Backgrounds
- **Primary:** `text-white`
- **Light variants:** `text-blue-100`, `text-purple-100`, `text-green-100`, etc.

---

## Accessibility Checklist

✅ White text on 500+ shades (passes AA)  
✅ Gray-900 text on white (passes AAA)  
✅ Gray-600 text on white (passes AA)  
❌ White text on 100- shades (use dark text)

---

## Usage by Context

- **Resume/Professional:** Blue
- **Budgeting/Finance:** Purple
- **Notes/Organization:** Green
- **Call-to-Action/Energy:** Orange
- **Tech/Innovation:** Teal
- **Creative/Design:** Pink
- **Authority/Trust:** Indigo
- **Neutral/Background:** Gray

---

For complete documentation with examples and best practices, see [COLOR_GUIDE.md](./COLOR_GUIDE.md)

View the interactive color palette at `/colors` route in the application.

