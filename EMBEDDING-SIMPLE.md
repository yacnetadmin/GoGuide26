# Easy Squarespace Embedding - Single File Version

## ✅ Simplest Method - Use index.html

I've created **`index.html`** - a single, self-contained file with ALL CSS and JS inline.

### Benefits:
- ✅ **No external dependencies** - everything in one file
- ✅ **Easier to embed** - just one URL
- ✅ **Faster loading** - no separate file requests
- ✅ **Works everywhere** - Squarespace, WordPress, any platform

---

## 🚀 Squarespace Embed Code (Updated)

**Copy and paste this into a Code Block on your Squarespace page:**

```html
<div style="width:100%; max-width:1200px; margin:2rem auto; padding:0 1rem;">
  <iframe 
    src="https://yacnetadmin.github.io/GoGuide26/" 
    width="100%" 
    height="3500" 
    frameborder="0"
    style="border:none; display:block;"
    id="mission-trips-iframe"
    title="2026 Mission Trips Guide">
  </iframe>
</div>

<script>
// Auto-resize iframe
window.addEventListener('message', function(e) {
  if (e.data && e.data.height) {
    var iframe = document.getElementById('mission-trips-iframe');
    if (iframe) {
      iframe.style.height = (e.data.height + 50) + 'px';
    }
  }
});
</script>
```

**Notice**: The URL is now simpler - just `https://yacnetadmin.github.io/GoGuide26/` 
(no need to specify the filename!)

---

## 📎 Alternative: Direct Link

You can also just link directly to:
**https://yacnetadmin.github.io/GoGuide26/**

This is perfect for navigation menus or buttons!

---

## 📁 Files Available

1. **`index.html`** ⭐ **RECOMMENDED** - Everything inline, single file
2. `mission-trips.html` - Original with separate CSS/JS files
3. `mission-trips.css` - Separate stylesheet
4. `mission-trips.js` - Separate JavaScript

For embedding, always use **`index.html`** (option 1) - it's much simpler!
