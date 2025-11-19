# AHS Document Library

A modern, responsive web application for managing and accessing Anatomy & Health Sciences study materials.

## Features

- 📚 Clean, modern interface with card-based layout
- 🔍 Real-time search functionality
- 📱 Fully responsive design (works on mobile, tablet, and desktop)
- ⬇️ Easy document downloads
- 🎨 Beautiful gradient design with smooth animations

## Documents Included

1. **Bones and Joints** - Skeletal System
2. **Endocrine System** - Hormones and Glands
3. **Female Reproductive Organs** - Reproductive System
4. **Individual Muscle** - Muscular System
5. **Nervous and Sensory System** - Neural Pathways
6. **Respiratory System** - Breathing and Lungs
7. **Urinary System** - Kidneys and Excretion

## How to Use

### Opening the Website

1. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
2. You can double-click the file or right-click and select "Open with" your preferred browser

### Searching for Documents

- Click the search bar at the top
- Type any keyword (e.g., "muscle", "respiratory", "bones")
- The document grid will filter in real-time
- Press `/` or `Ctrl+F` to quickly focus the search bar

### Downloading Documents

- Click the **Download** button on any document card
- The PowerPoint file will download to your default downloads folder

### Viewing Document Information

- Click the **Info** button to see details about the document
- Displays the category and type of document

## File Structure

```
ahs pdf downloader/
├── index.html          # Main HTML file
├── styles.css          # Styling and layout
├── script.js           # JavaScript functionality
├── README.md           # This file
└── *.pptx             # PowerPoint presentations
```

## Browser Compatibility

- ✅ Google Chrome (Recommended)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Opera

## Customization

### Adding New Documents

1. Open `script.js`
2. Add a new object to the `documents` array:

```javascript
{
    name: "Your Document Name",
    filename: "your-file.pptx",
    type: "PPTX",
    icon: "📖",
    category: "Your Category"
}
```

### Changing Colors

Edit `styles.css` to customize:
- Background gradient: `body { background: linear-gradient(...) }`
- Card colors: `.document-card` styles
- Button colors: `.btn-primary` and `.btn-secondary` styles

## Keyboard Shortcuts

- `/` or `Ctrl+F` - Focus search bar
- `Esc` - Clear search (when search is focused)

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- No server needed - runs entirely in the browser
- Responsive grid layout using CSS Grid
- Mobile-first design approach

## Tips

- Keep all PowerPoint files in the same folder as `index.html`
- The website works offline - no internet connection required
- You can bookmark the page for quick access
- Share the entire folder to share the library with others

## Troubleshooting

**Documents won't download:**
- Ensure the PowerPoint files are in the same folder as `index.html`
- Check that filenames in `script.js` match your actual files exactly

**Search not working:**
- Make sure JavaScript is enabled in your browser
- Try refreshing the page

**Layout looks broken:**
- Update to a modern browser version
- Clear browser cache and reload

## License

Free to use for educational purposes.

---

**Created for AHS Study Materials**
*Last Updated: November 2025*
